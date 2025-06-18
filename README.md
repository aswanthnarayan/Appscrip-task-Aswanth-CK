# Next.js E-Commerce Storefront

This is a modern, high-performance e-commerce storefront built with Next.js, focusing on Server-Side Rendering (SSR), Search Engine Optimization (SEO), and Web Accessibility (a11y).

## Project Overview

The primary goal of this project is to provide a fast, SEO-friendly, and accessible user experience for an e-commerce website. By leveraging Next.js's App Router and Server Components, the application renders product listings on the server, leading to faster initial page loads and better indexing by search engines.

## Key Features

-   **Server-Side Rendering (SSR):** The homepage and product listings are rendered on the server, providing a fully-formed HTML page to the client. This improves performance and SEO.
-   **SEO Optimized:**
    -   Dynamic metadata for titles and descriptions.
    -   Open Graph metadata for rich social media sharing.
    -   JSON-LD structured data for product schema, enabling rich search results.
    -   Semantic HTML structure with proper heading hierarchy.
-   **Fully Accessible (a11y):**
    -   All interactive elements are built with semantic HTML (`<button>`, `<a>`, etc.).
    -   Keyboard navigation is fully supported.
    -   All images include descriptive `alt` text.
    -   ARIA attributes are used where necessary to enhance screen reader compatibility.
-   **Responsive Design:** The UI is fully responsive and adapts to all screen sizes, from mobile to desktop.
-   **Client-Side Interactivity:** While the initial render is from the server, client-side React (via "use client") powers interactive features like filtering and sorting without a full page reload.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) 14+ (App Router)
-   **Language:** JavaScript (ES6+)
-   **UI Library:** [React](https://react.dev/) 18
-   **Styling:** [CSS Modules](https://github.com/css-modules/css-modules)
-   **API:** Product data is fetched from the [Fake Store API](https://fakestoreapi.com/).

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.

-   [Node.js](https://nodejs.org/) (v18.17.0 or later recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/aswanthnarayan/Appscrip-task-Aswanth-CK.git
    ```
2.  Navigate into the project directory:
    ```bash
    cd appscrip-task-aswanth-ck
    ```
3.  Install the project dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the application in development mode, run the following command:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the code.

## Project Structure

The project uses the Next.js App Router directory structure:

-   `app/`: Contains all the routes, components, and logic for the application.
    -   `layout.js`: The root layout for the application.
    -   `page.js`: The homepage, responsible for server-side data fetching.
    -   `components/`: Contains all the reusable React components used throughout the application (e.g., Header, Footer, ProductCard).
-   `public/`: Contains all static assets like images and fonts.

## Deployment
