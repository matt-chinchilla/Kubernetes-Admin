FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm ci --no-audit --no-fund || npm install --no-audit --no-fund
COPY . .

CMD [ "npm", "start" ]