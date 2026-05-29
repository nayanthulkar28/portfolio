FROM node:21-alpine
WORKDIR /workspace
COPY yarn.lock .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]