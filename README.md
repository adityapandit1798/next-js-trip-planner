# Next.js App: Dockerizing, Deploying to GitHub Pages, and Using a Custom Domain with Cloudflare

This guide covers how to:
1. Dockerize a Next.js application.
2. Deploy the app to GitHub Pages.
3. Configure a custom domain using Cloudflare DNS records.

---

## Prerequisites

- **Node.js**: Make sure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **Docker**: Ensure Docker is installed. [Install Docker](https://www.docker.com/get-started)
- **GitHub Account**: You need a GitHub account to push the code and deploy it to GitHub Pages.
- **Cloudflare Account**: Create an account at [Cloudflare](https://www.cloudflare.com/) to manage your DNS settings for the custom domain.

---

## Table of Contents

1. [Dockerizing a Next.js App](#dockerizing-a-nextjs-app)
2. [Deploying to GitHub Pages](#deploying-to-github-pages)
3. [Using a Custom Domain and Setting Up DNS Records in Cloudflare](#using-a-custom-domain-and-setting-up-dns-records-in-cloudflare)

---

## Dockerizing a Next.js App

Follow these steps to Dockerize your Next.js application.

1. **Create a Dockerfile**: In the root directory of your Next.js project, create a `Dockerfile`.

   ```Dockerfile
   # Use the official Node.js image as the base image
   FROM node:16-alpine

   # Set the working directory inside the container
   WORKDIR /app

   # Copy package.json and package-lock.json to the container
   COPY package*.json ./

   # Install dependencies
   RUN npm install --frozen-lockfile

   # Copy the rest of the application files
   COPY . .

   # Expose the application port (default Next.js port is 3000)
   EXPOSE 3000

   # Build the Next.js app
   RUN npm run build

   # Start the Next.js app
   CMD ["npm", "start"]
   ```

2. **Create `.dockerignore`**: Create a `.dockerignore` file to avoid copying unnecessary files into the Docker image.

   ```plaintext
   node_modules
   npm-debug.log
   .git
   .next
   out
   ```

3. **Build the Docker Image**: Run the following command to build the Docker image.

   ```bash
   docker build -t nextjs-app .
   ```

4. **Run the Docker Container**: After building the Docker image, run it using the following command.

   ```bash
   docker run -p 3000:3000 nextjs-app
   ```

   Your app should now be accessible at `http://localhost:3000`.

---

## Deploying to GitHub Pages

Next, let's deploy the Next.js app to GitHub Pages.

1. **Install Dependencies**: Install `gh-pages` to automate deployment to GitHub Pages.

   ```bash
   npm install --save gh-pages
   ```

2. **Update `next.config.js`**: Modify `next.config.js` to handle the correct asset paths for GitHub Pages.

   ```js
   module.exports = {
     output: 'export', // Static export
     basePath: '/next-js-trip-planner', // Base path for GitHub Pages
     assetPrefix: '/next-js-trip-planner', // Path for static assets on GitHub Pages
     eslint: {
       ignoreDuringBuilds: true,
     },
     images: {
       unoptimized: true, // Disable image optimization for static export
     },
   };
   ```

3. **Update `package.json`**: Add deployment scripts to the `package.json`.

   ```json
   "scripts": {
     "build": "next build",
     "export": "next export",
     "deploy": "gh-pages -d out"
   }
   ```

4. **Build and Export**: Run the following commands to build and export the app.

   ```bash
   npm run build
   npm run export
   ```

5. **Deploy to GitHub Pages**: After exporting, deploy the static files to GitHub Pages.

   ```bash
   npm run deploy
   ```

   This will push the contents of the `out` directory to the `gh-pages` branch of your GitHub repository.

6. **Verify Deployment**: Once the deployment is complete, check your app on GitHub Pages at:

   ```
   https://<your-username>.github.io/next-js-trip-planner/
   ```

---

## Using a Custom Domain and Setting Up DNS Records in Cloudflare

To use a custom domain with your GitHub Pages site, you need to configure DNS settings in Cloudflare.

### 1. Set Up a Custom Domain in GitHub

1. Go to your GitHub repository where the Next.js app is deployed.
2. Navigate to the **Settings** tab of the repository.
3. Under **GitHub Pages**, you'll see an option to configure the custom domain. Enter your custom domain (e.g., `www.yourdomain.com`).

### 2. Set Up DNS Records in Cloudflare

1. **Log in to Cloudflare**: Log in to your Cloudflare account.
2. **Add Your Domain to Cloudflare**: If your domain is not already added, go to **Add a Site** and follow the instructions.
3. **Configure DNS Records**: After adding your domain, go to the **DNS** tab.
   - **CNAME Record**: Add a CNAME record to point `www.yourdomain.com` to your GitHub Pages domain:
     - Name: `www`
     - Type: `CNAME`
     - Value: `your-username.github.io`
     - TTL: Auto

4. **Configure the Root Domain (Optional)**: To point the root domain (`yourdomain.com`) to GitHub Pages, add an `A` record:
   - Name: `@`
   - Type: `A`
   - Value: `185.199.108.153` (GitHub Pages IP address)
   - TTL: Auto

5. **Verify DNS Configuration**: Allow up to 24 hours for DNS propagation. After that, your custom domain should point to your GitHub Pages site.

---

## Summary

1. **Dockerizing Next.js**: We created a Dockerfile to containerize the Next.js app, enabling easy deployment and consistency across environments.
2. **Deploying to GitHub Pages**: The Next.js app was deployed to GitHub Pages using the `gh-pages` package, ensuring the app runs correctly with GitHub's static hosting.
3. **Custom Domain Setup**: The custom domain was configured in Cloudflare, including DNS records (CNAME for subdomains and A records for the root domain).

---

### License

This project is licensed under the MIT License.
