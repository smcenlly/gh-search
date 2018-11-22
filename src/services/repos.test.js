import mockAxios from "./axios.local";
import ReposService from "./repos";

describe("ReposService", () => {
    afterEach(() => jest.clearAllMocks());

    describe("enrichReposWithContributors()", () => {
        it("enriches repos with contributors", async () => {
            const expectedResults = [
                { id: 1, contributors: [] },
                { id: 2, contributors: [] }
            ];

            mockAxios.mockImplementation(() =>
                Promise.resolve({
                    data: []
                })
            );

            const results = await ReposService.enrichReposWithContributors([
                { id: 1 },
                { id: 2 }
            ]);

            expect(results).toEqual(expectedResults);
        });
    });

    describe("getAll()", () => {
        it("fetches data from repos endpoint", async () => {
            let expectedResults = [];
            mockAxios.mockImplementation(() =>
                Promise.resolve({
                    data: expectedResults
                })
            );
            const results = await ReposService.getAll("userName");

            expect(results).toEqual(expectedResults);
            expect(mockAxios).toHaveBeenCalledTimes(1);
            expect(mockAxios).toHaveBeenCalledWith("/users/userName/repos");
        });

        it("enriches repos with contributors", async () => {
            const enrichSpy = jest.spyOn(
                ReposService,
                "enrichReposWithContributors"
            );
            await ReposService.getAll("userName");

            expect(enrichSpy).toHaveBeenCalled();
        });
    });
});
