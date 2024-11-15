FROM node:latest
EXPOSE 4200

RUN npm config set registry https://registry.npmjs.org/
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
COPY . /usr/src/app


CMD ["npm", "run", "serve"]