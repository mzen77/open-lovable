# Open Lovable - Setup Documentation

## Project Overview
- **Name**: Open Lovable
- **Description**: Chat with AI to build React apps instantly
- **Repository**: https://github.com/mzen77/open-lovable
- **Technology Stack**: Next.js 15.4.3, React 19, TypeScript, TailwindCSS
- **AI Providers**: Supports Anthropic, OpenAI, Gemini, and Groq

## Current Setup Status

### ✅ Completed
1. **GitHub Integration**
   - Repository successfully connected: `mzen77/open-lovable`
   - Code cloned to `/home/user/webapp`
   - Git remote configured properly

2. **Environment Configuration**
   - Created `.env.local` with placeholder API keys
   - Configured for development environment
   - All required environment variables defined

3. **Dependencies**
   - All npm packages installed successfully
   - Using Next.js 15.4.3 with React 19
   - Includes AI SDK integrations for multiple providers

4. **PM2 Configuration**
   - Created `ecosystem.config.cjs` for process management
   - Configured with increased memory limits
   - Set up for development mode on port 3000

### ⚠️ Issues Encountered
- **Memory constraints**: The Next.js development server requires significant memory
- **Build process**: Production build exceeded memory limits in sandbox environment
- **Performance**: Development server compilation is resource-intensive

## Public Access URL
- **Sandbox URL**: https://3000-i4fohpl6ddzyvoo6m1ire-6532622b.e2b.dev
- **Local Development**: http://localhost:3000

## Required API Keys
To make the application fully functional, you need to add real API keys in `.env.local`:

1. **E2B_API_KEY** (Required)
   - Get from: https://e2b.dev
   - Used for: Code execution sandboxes

2. **FIRECRAWL_API_KEY** (Required)
   - Get from: https://firecrawl.dev
   - Used for: Web scraping and cloning websites

3. **AI Provider Keys** (At least one required):
   - **ANTHROPIC_API_KEY**: https://console.anthropic.com
   - **OPENAI_API_KEY**: https://platform.openai.com
   - **GEMINI_API_KEY**: https://aistudio.google.com/app/apikey
   - **GROQ_API_KEY**: https://console.groq.com

## How to Run Locally

### Development Mode
```bash
# Navigate to project directory
cd /home/user/webapp

# Install dependencies (if not already installed)
npm install

# Start development server with PM2
pm2 start ecosystem.config.cjs

# Check logs
pm2 logs open-lovable --nostream

# Access the application
# Local: http://localhost:3000
# Public: Use GetServiceUrl tool
```

### Production Build (Not recommended in sandbox due to memory constraints)
```bash
npm run build
npm start
```

## Project Structure
```
webapp/
├── app/                 # Next.js app directory
├── components/          # React components
├── config/             # Configuration files
├── lib/                # Utility libraries
├── public/             # Static assets
├── types/              # TypeScript type definitions
├── .env.local          # Environment variables (add your API keys here)
├── ecosystem.config.cjs # PM2 configuration
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Original project documentation
```

## Features
- **AI Chat Interface**: Chat with multiple AI providers to generate React code
- **Code Execution**: Run generated code in E2B sandboxes
- **Web Scraping**: Clone existing websites using Firecrawl
- **Multi-Provider Support**: Works with Anthropic, OpenAI, Gemini, and Groq
- **Real-time Code Generation**: Instant React app creation through conversation

## Next Steps
1. **Add Real API Keys**: Replace placeholder keys in `.env.local` with actual API keys
2. **Optimize for Production**: Consider deploying to a proper hosting environment with more resources
3. **Memory Optimization**: The application may need optimization for resource-constrained environments
4. **Testing**: Run the test suite with `npm run test:all` after adding API keys

## Deployment Recommendations
Due to the resource-intensive nature of Next.js 15 with React 19, consider deploying to:
- **Vercel**: Native Next.js hosting with automatic optimizations
- **Netlify**: Good alternative with edge functions support
- **AWS/GCP/Azure**: For full control and scalability
- **Local Development**: For testing with full system resources

## Support
- **Original Project**: https://github.com/mendableai/open-lovable
- **Issues**: Report at the GitHub repository
- **Documentation**: Check the original README.md for detailed information

---
*Note: This is a development setup in a sandbox environment. For production use, ensure all API keys are properly configured and consider deploying to a production-ready hosting environment.*