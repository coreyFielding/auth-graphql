FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . /usr/src/app

EXPOSE ${APP_SERVER_PORT}

CMD ["npm", "start"]