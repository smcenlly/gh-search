# Github Profiles Example

![Demo](https://user-images.githubusercontent.com/1625373/46836616-8ab83180-cdb2-11e8-8246-d96afdc867ad.gif)

## Installation

1. Clone this project 

    ```
    git clone https://github.com/kapral18/gh_profiles.git
    ```

2. Install latest [Node LTS](https://nodejs.org/en/download/)
3. Install [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
4. Change directory to your newly cloned project
    ```
    cd gh_profiles
    ```
5. Run yarn
    ```
    yarn
    ```

## Token setup

1. Create a `.env.local` file in the project root, for example:

    ```
    touch .env.local
    ``` 
2. Put your Github Authorization Token from your github profile settings page 
into `.env.local` file in the following format:

    ```
    REACT_APP_GITHUB_OAUTH_TOKEN=123123abcabc
    ```

## Dev Server

For development version run:

```
yarn start
```

it will automatically open web browser at [http://localhost:3000](http://localhost:3000)

## Production version

For production version run:

```
yarn build
npx serve -s build
```

and open web browser at [http://localhost:5000](http://localhost:5000)

## Tests

To execute all the tests run:

```
yarn jest
```

For coverage report: 

```
yarn jest --coverage
```

