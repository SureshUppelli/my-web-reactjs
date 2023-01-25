# base image
FROM node:12.2.0-alpine

RUN apk --update add git

WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY ./build /app/
RUN npm install -g serve
EXPOSE 5000
# To start app
ENTRYPOINT ["serve", "-s", "build"]
