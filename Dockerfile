# Step 1: Use the official Node.js image as a base
FROM node:18-alpine AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Export the static site (This will create the out/ folder)
RUN npm run export

# Step 8: Install serve locally to serve static files
RUN npm install serve

# Step 9: Use a smaller image for production
FROM node:18-alpine AS production

WORKDIR /app

# Step 10: Copy the static export from the build stage
COPY --from=build /app/out /app/out

# Step 11: Expose port 3000
EXPOSE 3000

# Step 12: Serve the static files from the out directory using serve
CMD ["npx", "serve", "-s", "out", "-l", "3000"]
