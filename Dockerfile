# Stage 1: Build the Angular app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the project files
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Run the app with Node.js
FROM node:18-alpine

WORKDIR /app

# Copy only the necessary files for production
COPY --from=build /app/dist /app/dist
COPY --from=build /app/server.js /app/server.js
COPY --from=build /app/package.json /app/package.json

# Install only production dependencies
RUN npm install --omit=dev

# Expose port 8080
EXPOSE 8080

# Start the Express server
CMD ["node", "server.js"]







