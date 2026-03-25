# 📊 Google AdSense Setup Guide for PantrySpin

This guide will help you set up Google AdSense monetization on your PantrySpin blog.

## Prerequisites

- Active Google AdSense account (apply at [google.com/adsense](https://google.com/adsense))
- Your AdSense Client ID (format: `ca-pub-XXXXXXXXXX`)
- Ad Slot IDs for different ad placements (optional but recommended)

## Step 1: Get Your AdSense Credentials

1. Sign in to [Google AdSense](https://adsense.google.com)
2. Go to **Settings** → **Account**
3. Find your **Publisher ID** (Client ID) - it looks like: `ca-pub-XXXXXXXXXX`
4. Note down your ID (you'll need it in the next steps)

## Step 2: Create Ad Unit IDs

1. In Google AdSense, go to **Ads** → **By Code**
2. Click **Create new ad unit**
3. Create separate ad units for:
   - **Homepage Banner**: ~728x90 or 300x250
   - **Recipe Page**: ~300x250 or responsive
   - **Sidebar**: ~300x600 vertical
4. Copy the Ad Slot IDs for each unit

## Step 3: Configure Environment Variables

### Development Setup

1. Open `.env.local` in your project root
2. Replace the placeholder values:

```bash
# Your Google AdSense Client ID
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXX

# Your Ad Slot IDs (from Step 2)
NEXT_PUBLIC_AD_SLOT_HOMEPAGE=1234567890
NEXT_PUBLIC_AD_SLOT_RECIPE_PAGE=0987654321
NEXT_PUBLIC_AD_SLOT_SIDEBAR=1111111111
```

### Production Setup (Vercel/Netlify)

1. Go to your hosting dashboard (Vercel, Netlify, etc.)
2. Navigate to **Settings** → **Environment Variables**
3. Add the same variables:
   - `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
   - `NEXT_PUBLIC_AD_SLOT_HOMEPAGE`
   - `NEXT_PUBLIC_AD_SLOT_RECIPE_PAGE`
   - `NEXT_PUBLIC_AD_SLOT_SIDEBAR`

## Step 4: Add AdSense Script to Your App

### For Next.js 13+ (App Router)

Add the AdSense script in `app/_document.tsx` or `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout() {
  return (
    <html>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>{/* Your app content */}</body>
    </html>
  );
}
```

Or use the environment variable:

```tsx
<Script
  async
  src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

## Step 5: Use AdSense Components in Your Pages

### Basic Usage

```tsx
import { AdHomepage, AdRecipePage, AdSidebar } from '@/components/AdSense';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to PantrySpin</h1>
      {/* Your content */}
      <AdHomepage />
    </div>
  );
}
```

### In Recipe Pages

```tsx
import { AdRecipePage } from '@/components/AdSense';

export default function RecipePage() {
  return (
    <article>
      <h1>Recipe Title</h1>
      {/* Recipe content */}
      <AdRecipePage />
      {/* More content */}
    </article>
  );
}
```

### With Custom Ad Slot

```tsx
import AdSense from '@/components/AdSense';

export default function Page() {
  return (
    <AdSense
      dataAdSlot="1234567890"
      dataAdFormat="horizontal"
    />
  );
}
```

## Step 6: Test Your Ads

1. Run `npm run dev` to start development server
2. Open your site in browser
3. **Important**: Don't click on your own ads (violates AdSense policy)
4. Use **Google's Ad Preview Tool** to verify ads:
   - Go to AdSense → Ads → **Preview Ads**
   - Enter your site URL
   - Verify ads are showing correctly

## Step 7: Deploy to Production

1. Commit your changes: `git add . && git commit -m "Add Google AdSense integration"`
2. Push to GitHub: `git push origin main`
3. Deploy to Vercel/Netlify (automatically deploys from GitHub)
4. Verify environment variables are set in hosting dashboard
5. Check your site and confirm ads are displaying

## Important: Google AdSense Policy Requirements

✅ **DO:**
- Place ads naturally within content
- Ensure adequate white space around ads
- Use different ad sizes for different pages
- Monitor your AdSense reports regularly

❌ **DON'T:**
- Click on your own ads
- Encourage users to click ads
- Place ads in misleading locations
- Use prohibited content near ads
- Have more than 3 ad units per page (initially)

## Troubleshooting

### Ads Not Showing

1. **Check environment variables** - Ensure `NEXT_PUBLIC_ADSENSE_CLIENT_ID` is set
2. **Check browser console** - Look for AdSense errors
3. **Verify Ad Slot IDs** - Make sure they're correct
4. **Wait for approval** - New AdSense accounts may take 24-48 hours to show ads
5. **Check Ad Review status** - Go to AdSense → Ads → Review ads

### Low Ad Revenue

1. Ensure sufficient page traffic
2. Create more content to increase ad impressions
3. Use multiple ad sizes and placements
4. Ensure good site speed and user experience
5. Check that ads are eligible (no restricted content)

### AdSense Account Suspended

1. Review AdSense policies
2. Remove any violating content
3. Appeal through AdSense dashboard

## Monitoring Your Performance

1. Log into [AdSense Dashboard](https://adsense.google.com)
2. Check **Performance Reports**:
   - Page RPM (Revenue Per 1000 Impressions)
   - CTR (Click-Through Rate)
   - Impressions
   - Estimated Earnings
3. Analyze which ad placements perform best
4. Adjust strategy based on data

## Additional Resources

- [Google AdSense Help Center](https://support.google.com/adsense)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [AdSense Best Practices](https://support.google.com/adsense/answer/10173?hl=en)

## Security Notes

⚠️ **Never:**
- Share your Client ID publicly in code (use environment variables)
- Commit `.env.local` to GitHub (it's in `.gitignore`)
- Give others direct access to your AdSense account

Your Client ID is safe in environment variables because `NEXT_PUBLIC_*` variables are public-facing and required for AdSense to work.

---

For questions or issues, refer to the main [README.md](./README.md) or Google AdSense support.
