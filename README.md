[![Deploy and Release](https://github.com/ReAGEnT-WiSe2021-22/frontend-v2/actions/workflows/workflow.release.yml/badge.svg)](https://github.com/ReAGEnT-WiSe2021-22/frontend-v2/actions/workflows/workflow.release.yml)

# ReAGEnT-WiSe2021-22/frontend-v2

## Links / Environments
- **Staging**: https://reagent-wise2021-22.github.io/frontend-v2/#/
- **Production**: http://reagent1.f4.htw-berlin.de:8080/frontend-v2/#

> Newer updates won't really keep the staging environment (https://reagent-wise2021-22.github.io/frontend-v2/#/) in mind. If something's broken there, please visit the production environment (http://reagent1.f4.htw-berlin.de:8080/frontend-v2/#)

ReAGEnT WiSe2021/22 Frontend.
A front end application to display data from the backend (please take a look into other repositories within the organization). Please take a look into our [Wiki](https://github.com/ReAGEnT-WiSe2021-22/Wiki) for a detailed overview of our project.

## Installing
**Prerequisites:** 
- Node ver.16 or higher is installed
- Yarn is intalled

Install the project
`yarn install`

Build all of the micro frontends 
`yarn build:all`

Start the *Container* project
`yarn start:container`

## Technical Details
As we are using the micro front end architecture, this project / repository acts as the container project that "*contains*" and loads the individual micro frontends. This container app is built with [React](https://reactjs.org/), and it loads the micro front end with two different approaches:
- Loading the bundled JS file from the local folder (`src/wc`)
- Loading the bundled JS file from a remote source (in this case, from site hosted on Github Pages)

All the individual micro front ends are bundled into a single JS file and converted into a web component, so the project could be framework agnostic.

Please take a look into our [Proof of Concept](https://github.com/LouisAndrew/poc-microfrontend/edit/main/README.md) project for a more simplified example.
