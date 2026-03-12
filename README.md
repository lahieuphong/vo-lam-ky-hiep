# Võ Lâm Kỳ Hiệp — Landing Page (Next.js)

Pixel-perfect landing page implementation of the Figma design for **Võ Lâm Kỳ Hiệp**.

Built with:

* Next.js
* Tailwind CSS / CSS Modules
* Static assets in `public/` (images, fonts)

## Quick start

```bash
# cài đặt
npm install

# chạy dev
npm run dev

# build
npm run build
npm run start
```

## Mục lục dự án

Sơ đồ cây dự án

```
src/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx                <-- Root layout: background layer + overlay clouds + render children
│  ├─ page.tsx                  <-- optional fallback page
│  ├─ (public)/                 <-- route group cho trang công khai (homepage, news, community...)
│  │  ├─ layout.tsx             <-- layout cho group public: header + page background + footer
│  │  └─ page.tsx               <-- homepage (chỉ trang chủ)
│  ├─ (auth)/                   <-- route group cho pages auth (login, register) - khác layout
│  │  ├─ layout.tsx
│  │  └─ login/page.tsx
│  └─ api/...                   <-- API routes (app/api/...)
├─ components/
│  ├─ layout/
│  │  ├─ BackgroundLayer/
│  │  │   └─ BackgroundLayer.tsx
│  │  └─ OverlayClouds/
│  │      └─ OverlayClouds.tsx
│  ├─ sections/
│  │  ├─ Header/
│  │  │   └─ Header.tsx
│  │  ├─ Footer/
│  │  │   └─ Footer.tsx
│  │  ├─ HeroCharacters/
│  │  │   └─ HeroCharacters.tsx
│  │  ├─ TitleBanner/
│  │  │   └─ TitleBanner.tsx
│  │  ├─ NewsBoard/
│  │  │   └─ NewsBoard.tsx
│  │  └─ ... (Leaderboard, Trailer, etc.)
│  └─ ui/
│      └─ PageBackground/
│          └─ PageBackground.tsx
├─ public/
│  ├─ assets/                   <-- images, fonts, svg...
│  └─ fonts/
└─ styles/                      <-- optional: variables, resets, tailwind entry
    └─ variables.css
```