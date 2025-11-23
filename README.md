# 📝 Blog Detail Component

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

A production-ready, accessible, and fully responsive **Blog Detail Component** built with modern web technologies. Designed to provide an exceptional reading experience with a focus on performance and SEO.

🔗 **Live Demo:** [https://blog-detail-component.vercel.app/](https://blog-detail-component.vercel.app/)

## ✨ Key Features

*   **🎨 Dark/Light Mode:** Seamless theme switching with system preference detection using `next-themes`.
*   **📑 Dynamic Table of Contents:** Automatically generates a sticky TOC from article headings.
*   **📱 Responsive Design:** Mobile-first approach with a slide-out TOC sheet for smaller screens.
*   **♿ Accessibility First:** Built with Radix UI primitives, ensuring full keyboard navigation, ARIA labels, and focus management.
*   **⚡ SEO Optimized:** Includes Open Graph tags, Twitter cards, and JSON-LD structured data for rich search results.
*   **🔧 Modern Stack:** Leveraging Next.js 15 App Router, React 19, and Tailwind CSS v4.

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18+ installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sachinmaurya96/blog_detail_component.git
    cd blog_detail_component
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)
*   **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
*   **Fonts:** [Geist](https://vercel.com/font)

## 📂 Project Structure

```
├── app/
│   ├── blog/          # Blog detail page
│   ├── layout.tsx     # Root layout with ThemeProvider
│   └── page.tsx       # Portfolio Homepage
├── components/
│   ├── ui/            # Reusable UI components (Button, Tooltip, etc.)
│   ├── blog-header.tsx
│   ├── blog-content.tsx
│   ├── mode-toggle.tsx
│   └── ...
├── lib/               # Utility functions
└── public/            # Static assets
```

## 🚢 Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Vercel will automatically detect Next.js and deploy.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sachin Maurya**

*   LinkedIn: [Sachin Maurya](https://www.linkedin.com/in/sachin-maurya-826111267/)
*   GitHub: [@sachinmaurya96](https://github.com/sachinmaurya96)
*   Medium: [@letscodefuture](https://medium.com/@letscodefuture)

---

*Made with ❤️ and Next.js*
