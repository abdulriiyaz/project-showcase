This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```




Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



Ways to center a div or an Node element in html using css.

Centering a div in CSS can be achieved using various methods, and the choice of method depends on the specific layout requirements and design constraints. Here are several ways to center a div:

Using Flexbox:

css
Copy code
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
Using Grid:

css
Copy code
.container {
  display: grid;
  place-items: center;
}
Using Absolute Positioning:

css
Copy code
.container {
  position: relative;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
Using Margin Auto (Horizontal Centering):

css
Copy code
.container {
  margin-left: auto;
  margin-right: auto;
}
Using Text-Align (Inline Elements):

css
Copy code
.container {
  text-align: center;
}
Using Table-Cell and Vertical Align:

css
Copy code
.container {
  display: table;
}
.centered {
  display: table-cell;
  vertical-align: middle;
}
Using Flexbox with Column Direction for Vertical Centering:

css
Copy code
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
Using Grid with Place-Content for Both Axes:

css
Copy code
.container {
  display: grid;
  place-content: center;
  height: 100vh;
}