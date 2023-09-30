// docker
// # Use the official Node.js image as our base
// FROM node:18

// # Set the working directory inside the container
// WORKDIR /usr/src/app

// # Copy package.json and package-lock.json first to leverage Docker cache
// COPY package*.json ./

// # Install app dependencies
// RUN npm install

// # Copy the rest of our app's source code into the container
// COPY . .

// # Expose the port the app will run on
// EXPOSE 5501

// # The command to run our app
// CMD ["npm", "run", "dev"]

// docker build -t auth-service:dev -f docker/development/Dockerfile .
// docker run --rm -it -v $(pwd):/usr/src/app -v /usr/src/app/node_modules --env-file $(pwd)/.env -p 5501:5501 -e NODE_ENV=development auth-services:dev