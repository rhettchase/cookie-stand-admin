# LAB - Class 41

## Project: Cookie Stand Admin Deployed Front-End

### Project Description

Cookie stand admin app created using Next.js and styled using Tailwind CSS. The app features a React front-end and Django CRUD back-end. On the front-end, the user uses a login form. This connects to the API which authenticates the user using token authentication. Once logged in, the user can add new cookie stand location information. The user can also delete any cookie stands they added. Both the front-end and back-end are deployed.

### Author: Rhett Chase

### Links and Resources

<!-- - [back-end server url](https://capital-finder-rhett-chase.vercel.app/api) -->
<!-- - [front-end application](http://xyz.com/) (when applicable) -->
- chatGPT
- [Next.js](https://nextjs.org/docs)
- [TailwindCSS](https://v1.tailwindcss.com/components/forms)
- [Vercel](https://vercel.com/docs/frameworks/nextjs)

### Setup

- N/A

#### `.env` requirements (where applicable)

<!-- i.e.
- `PORT` - Port Number
- `DATABASE_URL` - URL to the running Postgres instance/db -->
- N/A

#### How to initialize/run your application (where applicable)

Front-End

- Visit [front-end deployed site](https://cookie-stand-admin-rhett-chase.vercel.app/)
- Login using username and password created below on the api back-end site
- Add cookie stand
- Note: you can only delete cookie stands that you created with your account

Back-end

- Visit [deployed back-end](https://cookie-stand-api-rhett-chase.vercel.app/) and click on `get started` and `create account` to set up account
- Visit [front-end deployed site](https://cookie-stand-admin-rhett-chase.vercel.app/) to login
- Note: must be authenticated view routes; staff account required for admin actions; restrictions apply to updating and deleting data that you did not create
- View API at route: [https://cookie-stand-api-rhett-chase.vercel.app/api/v1/cookie_stands/](https://cookie-stand-api-rhett-chase.vercel.app/api/v1/cookie_stands/)

#### How to use your library (where applicable)

N/A

#### Tests

N/A