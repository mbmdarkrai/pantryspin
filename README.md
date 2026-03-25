# 🍽️ PantrySpin - Food & Recipe Blog

A modern food blog featuring delicious recipes with Amazon affiliate links for ingredients and kitchen equipment.

## Features
- 📖 Beautiful recipe cards with ingredients, instructions, and timing
- 🔗 Amazon affiliate links integrated for recommended products
- 🍽️ Organized by cuisine, difficulty level, and dietary preferences
- 📱 Fully responsive mobile-first design
- ⚡ Fast performance with static site generation
- 🎨 Clean, modern UI

## Tech Stack
- **Frontend**: Next.js 14 + React
- **Styling**: Tailwind CSS
- **Content**: Markdown-based recipe files
- **Hosting**: Vercel/GitHub Pages
- **Monetization**: Amazon Associates affiliate program

## Project Structure
```
pantryspin/
├── pages/           # Next.js pages
├── components/      # React components
├── recipes/         # Recipe markdown files
├── public/          # Static assets
├── styles/          # Global styles
└── lib/             # Utility functions
```

## Getting Started

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

Visit `http://localhost:3000` to see the blog.

## Adding Recipes

1. Create a new markdown file in `recipes/` folder
2. Include frontmatter with metadata:
```yaml
---
title: "Recipe Name"
description: "Brief description"
cuisine: "Cuisine type"
difficulty: "Easy/Medium/Hard"
servings: 4
prepTime: 15
cookTime: 30
img: "/images/recipe.jpg"
---
```

3. Add Amazon affiliate links for ingredients and tools

## Affiliate Links

All Amazon product links are affiliate links. Whenever readers make a purchase through these links, we earn a small commission at no extra cost to them.

**Important**: Ensure transparent disclosure of affiliate relationships per Amazon Associates policies.

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Deploy to GitHub Pages
See `gh-pages` branch for static site generation setup.

## License
MIT License - feel free to use this template for your own blog!

## Contact
For questions or recipe suggestions, open an issue or contact the maintainer.

---

Made with ❤️ and a passion for cooking
