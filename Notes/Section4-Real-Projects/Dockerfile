# 1) Specify OS / base-image
FROM node:14-alpine

# 2) Install Dependencies
# Copy everything from .../Kubernetes-Admin/Notes/Sectopn4-Real-Projects/ into the inside of the container
COPY ./ ./ 
RUN npm install

# Default command
CMD ["npm", "start"]