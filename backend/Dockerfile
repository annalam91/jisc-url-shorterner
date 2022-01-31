FROM node:12-alpine

WORKDIR /home/node/app

COPY package.json ./

RUN npm i

COPY . .

ENV NODE_PATH=./build

RUN npm run build

CMD ["node", "build/app.js"]