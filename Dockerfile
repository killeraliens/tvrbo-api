# Stage 1: Build
FROM node:22 AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project
COPY . .

# Generate TypeScript files from proto files
RUN npm run proto:gen

# Build the TypeScript code
RUN npm run build

# Stage 2: Production
FROM node:22

# Set the working directory
WORKDIR /app

# Copy the built files from the build stage
COPY --from=build /app .

# Expose the gRPC server port
EXPOSE 50051

# Run the gRPC server
CMD ["node", "dist/index.js"]
