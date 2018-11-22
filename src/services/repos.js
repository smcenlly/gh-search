import parse from "parse-link-header";
import axios from "./axios.local";
import ContributorsService from "./contributors";

const fetchPage = async function(userName, page) {
    const { data, headers } = await axios(
        `/users/${userName}/repos${page ? `?page=${page}` : ""}`
    );

    return {
        links: parse(headers.link),
        data
    };
};

const enrichReposWithContributors = (repos, userName) => {
    const enrichReposWithContributionsRequests = repos.map(async (repo) => {
        repo.contributors = await ContributorsService.fetchByName(
            userName,
            repo.name
        );
        return repo;
    });

    return Promise.all(enrichReposWithContributionsRequests);
};

const getPage = async function(userName, page) {
    const repos = await this.fetchPage(userName, page);

    await this.enrichReposWithContributors(repos.data, userName);

    return repos;
};

const ReposService = {
    getPage,
    fetchPage,
    enrichReposWithContributors
};

export default ReposService;
