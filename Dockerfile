FROM node:8.11.1-wheezy

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV APP_ENV $app_env

RUN apt-get update -qq && apt-get install -y build-essential curl libpq-dev
RUN mkdir /app
WORKDIR /nba-frontend

COPY . /nba-frontend

ADD . /nba-frontend

RUN npm install
