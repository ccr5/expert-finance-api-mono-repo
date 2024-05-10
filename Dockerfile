FROM node:19.6 as builder

WORKDIR /app

COPY "./" "/app/"

RUN yarn

RUN yarn build

CMD ["yarn", "prod"]