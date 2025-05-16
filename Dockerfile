FROM node:alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

RUN npm install pm2 -g

CMD ["pm2-runtime", "/app/build/index.js", "--name", "website", "--watch"]
