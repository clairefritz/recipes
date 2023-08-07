This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Notes

This project was initialized with Create Next app. It uses Next.js, React, Typescript and Tailwind. I kept the dependencies to a minimun and took a few shortcuts.

What’s next:

- Store the Contentful variables in .env
- For the recipe paths: create recipe slug instead of using ID for URL. The slug would be a slugified version of the title followed by the ID of the article.
- Complete the Contentful types with contentful-typescript-codegen. To not lose too much time I used a few `any` types. This would be easily solved with the aforementioned codegen.
- Implement next/head for better SEO and accessibility.
- Correctly render the markdown in the recipe description with Remark.
- Create 404 and error pages.
- Make the tags links that bring the user to a page with a list of recipes that have the same tag. Extend the tag styling to show interaction.
- Make the chef name a link that brings the user to a page with a list of recipes by that same chef.
- Handle the loading state, especially the initial uncached load which is quite long due to the images.
- Styling: I would prefer using a design system.
