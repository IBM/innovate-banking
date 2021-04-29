# Prepare and build app on non-alpine linux
FROM node:14.16.1
RUN mkdir /app
ADD ./src /app
WORKDIR /app
RUN npm install -g npm-run-all
RUN yarn cache clean
RUN yarn install --frozen-lockfile --production
RUN yarn build

EXPOSE 3000
CMD ["yarn", "run", "start"]
