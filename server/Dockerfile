FROM node:lts-slim

WORKDIR /server

COPY package*.json /server
RUN npm install

# COPY ./src /server/src
ADD ./src /server/src
EXPOSE 80
CMD [ "npm" , "start" ]