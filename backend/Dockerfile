# Use Node base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

# Copy the rest
COPY . .

# Make uploads dir accessible
RUN mkdir -p uploads

# Expose the port
EXPOSE 9001

# Start the server
CMD ["npm", "run", "dev"]
