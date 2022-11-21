FROM node

EXPOSE 3000

WORKDIR /react-vite-app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev"]