# 🚀 Deployment Guide for Open Lovable

This guide will help you deploy your Open Lovable application to a production environment where you can actually view and use it.

## 📋 Prerequisites

Before deploying, you need to obtain the following API keys:

### Required API Keys:
1. **E2B API Key** (REQUIRED)
   - Sign up at: https://e2b.dev
   - Used for: Code execution sandboxes
   - Free tier available

2. **Firecrawl API Key** (REQUIRED)
   - Sign up at: https://firecrawl.dev
   - Used for: Web scraping and cloning websites
   - Free tier available

### AI Provider Keys (need at least ONE):
3. **Anthropic API Key**
   - Sign up at: https://console.anthropic.com
   - Best for: Claude AI models

4. **OpenAI API Key**
   - Sign up at: https://platform.openai.com
   - Best for: GPT models

5. **Gemini API Key**
   - Sign up at: https://aistudio.google.com/app/apikey
   - Best for: Google's AI models
   - Free tier available

6. **Groq API Key**
   - Sign up at: https://console.groq.com
   - Best for: Fast inference
   - Free tier available

## 🎯 Option 1: Deploy to Vercel (RECOMMENDED - Easiest)

Vercel is the best platform for Next.js apps (they created Next.js!). It's free for personal use.

### Step-by-Step Instructions:

1. **Visit Vercel**
   - Go to: https://vercel.com
   - Click "Sign Up" or "Log In"
   - Use your GitHub account (mzen77)

2. **Import Your Project**
   - Click "New Project" or "Add New..."
   - Select "Import Git Repository"
   - Choose `mzen77/open-lovable` from your repositories
   - Click "Import"

3. **Configure Environment Variables**
   - Vercel will detect it's a Next.js project
   - Before deploying, click on "Environment Variables"
   - Add each of these (replace with your actual keys):
   
   ```
   E2B_API_KEY=your_actual_e2b_key_here
   FIRECRAWL_API_KEY=your_actual_firecrawl_key_here
   ANTHROPIC_API_KEY=your_actual_anthropic_key_here
   OPENAI_API_KEY=your_actual_openai_key_here
   GEMINI_API_KEY=your_actual_gemini_key_here
   GROQ_API_KEY=your_actual_groq_key_here
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - You'll get a URL like: `https://open-lovable.vercel.app`

5. **Your App is Live!** 🎉
   - Visit your deployment URL
   - The app will be fully functional with your API keys
   - Share the URL with others to use your app

### Automatic Updates
- Every time you push to GitHub, Vercel will automatically redeploy
- No manual intervention needed!

## 🚢 Option 2: Deploy to Netlify (Alternative)

If you prefer Netlify:

1. **Visit Netlify**
   - Go to: https://www.netlify.com
   - Sign up/login with GitHub

2. **Import Project**
   - Click "New site from Git"
   - Choose GitHub → Select `mzen77/open-lovable`

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add the same API keys as above

5. **Deploy**
   - Click "Deploy site"

## 🐳 Option 3: Deploy to Railway (With Database Support)

Railway is great if you need a database later:

1. **Visit Railway**
   - Go to: https://railway.app
   - Login with GitHub

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `mzen77/open-lovable`

3. **Add Variables**
   - Click on the service
   - Go to Variables tab
   - Add all API keys

4. **Deploy**
   - Railway will auto-deploy
   - You get a `*.railway.app` URL

## 💻 Option 4: Run Locally on Your Computer

If you want to run it on your own computer:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mzen77/open-lovable.git
   cd open-lovable
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create Environment File**
   - Copy `.env.example` to `.env.local`
   - Add your actual API keys

4. **Run the App**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   - Go to: http://localhost:3000

## 🔧 Post-Deployment Setup

### Test Your Deployment:
1. Visit your deployment URL
2. Try chatting with the AI
3. Test code generation features
4. Verify web scraping works

### Monitor Usage:
- Check your API key usage on each provider's dashboard
- Most have free tiers with limits
- Upgrade if needed

### Custom Domain (Optional):
- In Vercel/Netlify, go to Domain settings
- Add your custom domain (e.g., `lovable.yourdomain.com`)
- Follow DNS configuration instructions

## 🆘 Troubleshooting

### "API Key Invalid" Errors:
- Double-check you copied the entire key
- Ensure no extra spaces before/after
- Verify the key is active on the provider's dashboard

### Build Failures:
- Make sure all dependencies are in package.json
- Check build logs for specific errors
- Try building locally first: `npm run build`

### App Not Loading:
- Check browser console for errors (F12)
- Verify all required environment variables are set
- Check deployment logs in Vercel/Netlify

## 📊 Free Tier Limits

### Vercel Free Tier:
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Automatic deployments from Git

### API Free Tiers:
- **E2B**: 100 sandbox hours/month
- **Firecrawl**: 500 pages/month
- **Anthropic**: $5 free credits
- **OpenAI**: $5-18 free credits (varies)
- **Gemini**: Free tier available
- **Groq**: Generous free tier

## 🎯 Quick Deploy Links

For the fastest deployment:

1. **[Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/mzen77/open-lovable)**
   - Click this link
   - It will automatically import your repo
   - Just add environment variables and deploy!

2. **[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/mzen77/open-lovable)**
   - One-click deploy
   - Configure environment variables
   - Done!

## ✅ Success Checklist

- [ ] Obtained E2B API key
- [ ] Obtained Firecrawl API key
- [ ] Obtained at least one AI provider key
- [ ] Chose deployment platform (Vercel recommended)
- [ ] Added environment variables
- [ ] Deployed successfully
- [ ] Tested the live app
- [ ] Shared with friends! 🎉

## 📝 Notes

- The app won't work without valid API keys
- Start with free tiers to test everything
- Upgrade to paid plans based on usage
- Vercel is the easiest and most reliable option
- Your app will be accessible worldwide once deployed

---

**Need Help?** 
- Check the [main README](README.md) for app features
- Visit [GitHub Issues](https://github.com/mzen77/open-lovable/issues) for support
- The original project: [mendableai/open-lovable](https://github.com/mendableai/open-lovable)

Good luck with your deployment! 🚀