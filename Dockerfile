FROM node:21-alpine
WORKDIR /workspace
COPY package*.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]