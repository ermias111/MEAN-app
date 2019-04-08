# FROM node:8-alpine
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app
# RUN npm install
# RUN npm cache clean --force
# COPY . /usr/src/app
# EXPOSE 4200
# CMD ["npm", "start"]
FROM node:9.6.1
# - this app listens on port 3000, but the container should launch on port 80
  #  so it will respond to http://localhost:80 on your computer
# EXPOSE 4200
# - then it should use alpine package manager to install tini: 'apk add --update tini'
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
# - then it should create directory /usr/src/app for app files with 'mkdir -p /usr/src/app'
# - Node uses a "package manager", so it needs to copy in package.json file
RUN npm install -g @angular/cli@1.7.1
# - then it needs to run 'npm install' to install dependencies from that file
# - to keep it clean and small, run 'npm cache clean --force' after above
COPY . /usr/src/app
# - then it needs to copy in all files from current directory
CMD ng serve --host 0.0.0.0 --port 4200
