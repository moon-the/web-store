FROM node:16.15.0

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
RUN npm install
RUN npm install --save-dev
RUN npm uninstall bcrypt
RUN npm install bcrypt
