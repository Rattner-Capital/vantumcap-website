# Vantum Capital Website

This is a Next.js + Tailwind CSS landing-page project for `vantumcap.com`, built to match your institutional investment-fund mockup.

## 1) Local development

From this project folder:

```bash
npm install
npm run dev
```

Then open:

`http://localhost:3000`

Main page file to edit:

- `src/app/page.tsx` (layout/content)
- `src/app/globals.css` (global styles)

Hero image used:

- `public/hero-reference.png`

## 2) Build for production

```bash
npm run build
npm run start
```

## 3) Initialize git and push to GitHub

```bash
git init
git add .
git commit -m "Initial Vantum Capital landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 4) Deploy with Vercel

### Option A: Vercel Dashboard
1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository.
3. Keep defaults for a Next.js project and click **Deploy**.

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
```

For production deployment after first setup:

```bash
vercel --prod
```

## 5) Connect domain `vantumcap.com`

1. In Vercel: project **Settings -> Domains**.
2. Add:
   - `vantumcap.com`
   - `www.vantumcap.com`
3. Vercel will show required DNS records. At your domain registrar, add:
   - An **A record** for root (`@`) pointing to Vercel's IP (as shown in Vercel)
   - A **CNAME** for `www` pointing to `cname.vercel-dns.com`
4. Wait for DNS propagation (usually minutes to a few hours).
5. In Vercel Domains, verify both domains show as **Valid**.
6. Set your preferred primary domain (usually `www` or root) and enforce redirect.

## 6) Quick customization checklist

- Logo text/mark: edit the header block in `src/app/page.tsx`
- Navigation labels: update `navItems` in `src/app/page.tsx`
- Hero headline/subtext/buttons: update strings in `src/app/page.tsx`
- Feature bar content: update `features` array in `src/app/page.tsx`
- Colors: adjust `vantum` palette in `tailwind.config.ts`
