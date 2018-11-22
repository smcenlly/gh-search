module.exports = function(wallaby) {
    return {
        files: ["src/**/*.js", "!src/**/__mocks__/*.js", "!src/**/*.test.js"],

        tests: ["src/__mocks__/*.js", "src/**/*.test.js"],

        env: {
            type: "node",
            runner: "node"
        },

        testFramework: "jest",

        compilers: {
            "**/*.js": wallaby.compilers.babel({ presets: ["react-app"] })
        },

        setup: function(wallaby) {
            const jestConfig = require("./package.json").jest;

            Object.keys(jestConfig.transform || {}).forEach(
                (k) =>
                    ~k.indexOf("^.+\\.(js|jsx") &&
                    void delete jestConfig.transform[k]
            );
            delete jestConfig.testEnvironment;
            wallaby.testFramework.configure(jestConfig);
        }
    };
};
