FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && apt-get install -y wget

RUN [ -e "node_modules" ] || npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]