# The Movie Database API using Next.js with Monorepo
Study project using Next.js with Monorepo


## Checklist
- [ ] Use The Movie Database API for data
- [x] Movies and actors different application using Next.js
- [ ] Try to extend a new application using CRA
- [ ] Use `material-ui` as interface library
- [ ] Create a package only for componentes for use from 2 different application
- [x] Deploy using AWS with CloudFormation or Serverless
- [ ] Multi language support (portuguese and english)
- [ ] Authentication using social, a different experience for user management
- [ ] Add CI/CD to this project for multiple environments


Getting Started
---------------

This project has 2 front-end application using Next.js and an API application using Express.

## Local development

1. Copy and rename the file `local.env` to `.env.local` in `/home` folder
2. Open your terminal and go to `/movies` folder and use the following commands:

```
yarn install
yarn dev
```

2. Open a new terminal and go to `/home` folder and use the following commands:

```
yarn install
yarn dev
```

3. Open the browser using `http://localhost:3000` you should be able to navigate to `http://localhost:3000/movies`


## AWS Deploy

The deployment process uses `npx serverless` command in the project root folder. 

1. Use `touch .env` in root folder and add the following credentials:

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```
2. Open a new terminal and type `npx serverless` and wait for deployment success

Create new Next.js App
---------------
If you need to extend the project with new applications, you must follow thhis guidelines:

1. In the project root folder, in the terminal use the following `yarn create next-app`
2. Set a unique a name for your new app, this name will be the path for the app
3. Get into your new app folder and change `package.json` adding `@tmdb/` preffix to `name` key and also add `yarn dev -- port 300X` where `X` must be a port number not used in the project
4. Go to `/home` folder and open `.env` file adding a new variable with the pattern `YOURAPPNAME_URL="http://localhost:300X"`
5. In the root project folder go to `serverless.yml` and add the new application, using the same strategy already applied to `movies` application

The Movie Database
---------------
This study project uses TMDB API version 3 to get and handle data. You must create you account and get the credentials to be able to use this application.

You can see the API documentation [here](https://developers.themoviedb.org/3/getting-started/introduction).


**References**
- [Serverless Next.js Component](https://github.com/serverless-nextjs/serverless-next.js)