# Stage 1: Build the application
FROM node:24-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy your source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Export the compiled files
FROM scratch AS export-stage

# Copy ONLY the out folder from the build stage into the root of this empty stage
COPY --from=build /app/out /
