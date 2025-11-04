# 1) Specify OS / base-image
FROM node:14-alpine

# 3) Add workdir so that it won't over-write the root-directory
WORKDIR /usr/app

# 2) Install Dependencies
# 4) Copy the package.json first because index.js gets a lot more mods than package.json do
COPY ./package.json ./ 
RUN npm install
COPY ./ ./
# Default command
CMD ["npm", "start"]