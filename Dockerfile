# FROM node:18.12.1

# WORKDIR /visualeasy-controle

# COPY ["package.json", "package-lock.json*", "./"]

# RUN npm install

# COPY . .

# CMD [ "npm", "run", "dev" ]

# Dockerfile

# FROM: tells Docker what base image to use as a starting point.
FROM node:18.12.1

# RUN: executes commands inside the container.
RUN mkdir -p /opt/app

# WORKDIR: changes the active directory.
WORKDIR /opt/app

RUN adduser --system app
COPY . .
RUN npm install
RUN npm install --save pm2
RUN chown -R app /opt/app

# USER: changes the active user for the rest of the commands.
USER app

# EXPOSE: tells Docker which ports should be mapped outside the container.
EXPOSE 3000

# CMD: defines the command to run when the container starts.
CMD [ "npm", "run", "pm2" ]