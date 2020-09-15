FROM node:latest

# install node
RUN mkdir /opt/src/app
WORKDIR /opt/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
