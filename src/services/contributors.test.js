import mockAxios from "./axios.local";
import ContributorsService from "./contributors";

describe("ContributorsService", () => {
    describe("fetchByName()", () => {
        it("fetches data from contributors endpoint", async () => {
            const expectedContributions = [];
            mockAxios.mockImplementationOnce(() =>
                Promise.resolve({
                    data: expectedContributions
                })
            );

            const results = await ContributorsService.fetchByName(
                "userName",
                "repoName"
            );

            expect(results).toEqual(expectedContributions);
            expect(mockAxios).toHaveBeenCalledTimes(1);
            expect(mockAxios).toHaveBeenCalledWith(
                "/repos/userName/repoName/contributors"
            );
        });
    });
});
