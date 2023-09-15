FROM node:18-alpine

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install --production && yarn cache clean

COPY . /app

#ENV NODE_ENV production
ENTRYPOINT ["node", "./src/cli.mjs"]
