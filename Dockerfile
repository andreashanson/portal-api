FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV X_TOKEN="TRALALALALA"
ENV MONGO_URI="mongodb://localhost:27017/portals"

CMD ["npm", "start"]
