FROM node:18-alpine
WORKDIR /urs/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4017
CMD ["node", "server.js"]