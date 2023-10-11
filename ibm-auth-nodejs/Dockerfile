# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files to the working directory
COPY . .

# Expose the port your application will run on
EXPOSE 3000
# EXPOSE 1433 


# Command to start your application
CMD ["node", "index.js"]