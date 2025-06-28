# Use Node base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose port 3000 for React dev server
EXPOSE 3000

# Start React app in dev mode
CMD ["npm", "start"]
