import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/mtm6407-static-site-bao00022/.vitepress/dist/",
  cleanUrls: false,
  title: "Quiet Shots",
  description:
    "This project presents a series of quiet photographs, each capturing a moment that conveys deeper meaning beyond what is immediately visible. Together, they explore how still images can express emotion, narrative, and reflection.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Urban", link: "/urban" },
      { text: "Nature", link: "/nature" },
      { text: "People", link: "/people" },
    ],

    sidebar: {
      "/about": [
        {
          text: "About",
          items: [
            { text: "Who I Am", link: "/about#who-i-am" },
            { text: "My Gear", link: "/about#my-gear" },
            { text: "My Style", link: "/about#my-style" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "linkedin", link: "https://www.linkedin.com/in/adabao/" }],
  },
});
