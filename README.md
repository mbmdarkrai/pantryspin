# 🍽️ PantrySpin - Food & Recipe Blog

A modern food blog featuring delicious recipes with Amazon affiliate links for ingredients and kitchen equipment.

## 🚀 Monetization Setup

This project is integrated with the **Amazon Associates** program.

### Storefront Integration
The site features a direct link to your Amazon Influencer Storefront in the header and recipe pages.
- **Storefront URL**: [amazon.co.uk/shop/mbm1212](https://amazon.co.uk/shop/mbm1212)

### Affiliate Links
All ingredient and equipment links are tagged with your Associate ID to earn commissions on qualifying purchases.
- **Associate Tag**: `mbm1212-21`

To update the tag globally:
1. Open `index.html`.
2. Update the `ASSOCIATE_TAG` constant in the `<script>` section.

### Legal Disclosure
The required Amazon affiliate disclosure is included in the footer and at the top of recipes to ensure compliance with Amazon's Operating Agreement.

## ✨ Features
- 📖 Beautiful recipe cards with ingredients, instructions, and timing
- 🛒 **Integrated Amazon Affiliate Links** for ingredients and tools
- 🔗 **Influencer Storefront** button for curated collections
- 📱 Fully responsive mobile-first design
- ⚡ Fast performance with static site generation
- 🎨 Clean, modern UI

## 🛠️ Tech Stack
- **Frontend**: Next.js 14 + React
- **Styling**: Tailwind CSS
- **Content**: Markdown-based recipe files
- **Hosting**: Vercel/GitHub Pages
- **Monetization**: Amazon Associates affiliate program

## 📁 Project Structure
```
pantryspin/
├── pages/           # Next.js pages
├── components/      # React components
├── recipes/         # Recipe markdown files (Aglio e Olio sample included)
├── public/          # Static assets
└── index.html       # Main site entry point with affiliate logic
```

## 🏁 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/mbmdarkrai/pantryspin.git
cd pantryspin

# Install dependencies
npm install

# Run development server
npm run dev
```

## 📝 Adding Recipes
1. Create a new markdown file in `recipes/` folder.
2. Add your Amazon affiliate links using the format: `[Product Name](https://www.amazon.co.uk/s?k=product+name&tag=mbm1212-21)`.
3. Update the `recipes` array in `index.html` to include your new recipe metadata for the search feature.

---
Made with ❤️ for PantrySpin
