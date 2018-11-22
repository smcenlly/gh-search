import axios from "./axios.local";

const fetchByName = async (userName, repoName) => {
    const { data } = await axios(`/repos/${userName}/${repoName}/contributors`);
    return data;
};

const ContributorsService = {
    fetchByName
};

export default ContributorsService;
