FROM node:16-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
COPY ./ ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
