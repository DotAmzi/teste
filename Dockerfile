FROM alpine:3.11.2

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN apk add nodejs npm
RUN apk add yarn

RUN yarn install

EXPOSE 3000
