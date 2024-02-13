FROM node:18

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

COPY . .
#COPY /src/index.js ./

#RUN npm i

EXPOSE 3000

CMD ["node", "index.js"]