This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Test
## Demo
## Test
You can check [demo](https://ikan-id-demo.vercel.app/)

## Features

- Create product as Admin -> switch admin mode on right header with icon user check
- Read (product/area/size)
- Filter product
- Sort product
- Search product
- Update product as Admin -> switch admin mode on right header with icon user check
- Delete product as Admin -> switch admin mode on right header with icon user check
- Responsive web
- SEO
- PWA
- SSR

## Tech

- [React.js 17](https://reactjs.org/blog/2020/10/20/react-v17.html) - Blog introduce react v17.0.
- [Next.js 10](https://nextjs.org/blog/next-10) - Blog introduce next.js 10.
- [Sass](https://sass-lang.com/guide) - Documentaion of sass for manage css.
- [Bootsrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/) - Documentaion of bootstrap 4.
- [Typescript 4](https://www.typescriptlang.org/) - Documentation of typescript.
- [React Query 3](https://react-query.tanstack.com/guides/ssr) - Documentation of react query ssr.
- [React Context](https://reactjs.org/docs/context.html) - Documentation of react context.
- [Eslint 7](https://eslint.org/docs/user-guide/getting-started) - Documentation of eslint.
- [Prettier 2](https://prettier.io/docs/en/index.html) - Documentation of prettier.
- [Husky 5](https://typicode.github.io/husky/#/) - Documentation of husky.
- [Lint Staged 10](https://github.com/okonet/lint-staged) - Documentation of lint staged.
- [Stein](https://docs.steinhq.com/) - Documentation of stein for tools API provides RESTful.
- [Next SEO 4](https://github.com/shadowwalker/next-pwa) - Documentation of next seo.
- [Next PWA 5](https://github.com/shadowwalker/next-pwa) - Documentation of next pwa.
- [Date FNS 2](https://date-fns.org/docs/Getting-Started) - Documentation of date-fns.
- [Lodash 4](https://lodash.com/docs/4.17.15) - Documentation of lodash.

## Usage

### Installation

This project using node >=12.13.0 & yarn

```bash
git clone https://github.com/danangekal/ikan-id.git
yarn install
```

#### Development

```bash
copy .env.example to .env.local
yarn dev
```

#### Production

```bash
copy .env.example to .env.production
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/product](http://localhost:3000/api/product). This endpoint can be edited in `pages/api/product.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

#### Docker Build

```bash
docker build -t ikan-id .
```

#### Docker Run

```bash
docker run --rm -it -p 3000:3000 ikan-id
```

#### Docker Compose

```bash
docker-compose up
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

Copyright © 2021 by Danang Eko Alfianto
