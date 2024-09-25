# Graasp App: collaborative ideation


[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
![GitHub release (with filter)](https://img.shields.io/github/v/release/graasp/graasp-app-collaborative-ideation)

[![Deploy to development environment](https://github.com/graasp/graasp-app-collaborative-ideation/actions/workflows/deploy-dev.yml/badge.svg)](https://github.com/graasp/graasp-app-collaborative-ideation/actions/workflows/deploy-dev.yml)
[![Deploy to staging environment](https://github.com/graasp/graasp-app-collaborative-ideation/actions/workflows/deploy-stage.yml/badge.svg)](https://github.com/graasp/graasp-app-collaborative-ideation/actions/workflows/deploy-stage.yml)
[![Deploy to production environment](https://github.com/graasp/graasp-app-collaborative-ideation/actions/workflows/deploy-prod.yml/badge.svg)](https://github.com/graasp/graasp-app-collaborative-ideation/actions/workflows/deploy-prod.yml)


[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=graasp_graasp-app-collaborative-ideation&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=graasp_graasp-app-collaborative-ideation)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=graasp_graasp-app-collaborative-ideation&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=graasp_graasp-app-collaborative-ideation)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=graasp_graasp-app-collaborative-ideation&metric=bugs)](https://sonarcloud.io/summary/new_code?id=graasp_graasp-app-collaborative-ideation)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=graasp_graasp-app-collaborative-ideation&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=graasp_graasp-app-collaborative-ideation)

![typescript version](https://img.shields.io/github/package-json/dependency-version/graasp/graasp-app-collaborative-ideation/typescript)

# About

The **Collaborative Ideation** app in Graasp was made to organise blended and online activities where participants can share their inputs and react on them in real-time. This app was designed and implemented inside the [Graasp](https://graasp.org) platform and is not independant from it.

## Related publications

This app is related to the following publication:

- (_preprint_) La Scala, J. A., Bartłomiejczyk, N., Gillet, D., & Holzer, A. C. (2025). Fostering Innovation with Generative AI: A Study on Human-AI Collaborative Ideation and User Anonymity. 58th Hawaii International Conference on System Sciences. https://infoscience.epfl.ch/handle/20.500.14299/241341

# Development

This app being currently part of the general Graasp platform, you will find the most up-to-date general informations on the development of Graasp apps in [the official Graasp technical documentation](https://graasp.github.io/docs/developer/apps/).

## Installation

Clone this repository. To use and test the collaboration mechanism, we recommend to also install [the full Graasp stack](https://github.com/graasp/graasp/blob/main/README.md).

## Running the app

Create a `.env.development` file with the following content:

```bash
VITE_PORT=3333
VITE_API_HOST=http://localhost:3000
VITE_ENABLE_MOCK_API=false
VITE_GRAASP_APP_KEY=02052cf4-cc45-45c6-b0b8-61102244ed11
VITE_VERSION=latest
VITE_WS_HOST=ws://localhost:3000/ws
```

## Running the tests

Create a `.env.test` file with the following content:

```bash
VITE_PORT=3333
VITE_API_HOST=http://localhost:3636
VITE_ENABLE_MOCK_API=true
VITE_GRAASP_APP_KEY=45678-677889
VITE_VERSION=latest

# dont open browser
BROWSER=none
```
