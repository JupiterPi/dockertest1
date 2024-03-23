FROM node:18

WORKDIR /app

COPY package*.json ./

COPY ./src ./src

RUN npm install && rm -fr node_modules

EXPOSE 80

CMD ["npm", "start"]