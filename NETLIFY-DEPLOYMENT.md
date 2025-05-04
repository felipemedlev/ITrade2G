# Deploying to Netlify

This guide explains how to deploy this Next.js project to Netlify.

## Prerequisites

1. A [Netlify](https://www.netlify.com/) account
2. Git repository with your project (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Netlify UI

1. Log in to your Netlify account
2. Click "New site from Git"
3. Connect to your Git provider and select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize your site:
   ```bash
   netlify init
   ```

4. Follow the prompts to connect to your Git repository
5. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

## Environment Variables

You'll need to set up environment variables in your Netlify dashboard:

1. Go to Site settings > Build & deploy > Environment
2. Add the variables defined in `.env.local`

## Custom Domain

To set up a custom domain:

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure DNS

## Continuous Deployment

Netlify automatically deploys your site when you push changes to your Git repository.

## Troubleshooting

If you encounter issues during deployment:

1. Check Netlify build logs
2. Ensure your Next.js configuration is compatible with Netlify
3. Verify that the `@netlify/plugin-nextjs` plugin is installed