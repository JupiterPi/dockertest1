FROM node:18

WORKDIR /app

COPY package*.json ./

COPY ./src ./src

RUN npm --version

EXPOSE 80

CMD ["npm", "start"]