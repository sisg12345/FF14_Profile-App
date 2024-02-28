FROM node:20.6.1-alpine

WORKDIR /usr/src/app

EXPOSE 8080

RUN apk update
