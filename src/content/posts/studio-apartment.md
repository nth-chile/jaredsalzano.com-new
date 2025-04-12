---
title: Studio Apartment - Design Studio Website
featuredImage: /posts/studio-apartment/hero6.png
imgClass: object-left-top
order: 4
---

My brother asked me to help build the site for his design studio. We’d previously built his personal portfolio using Jekyll, so we recycled that codebase to create [studioapt.co](https://studioapt.co). The site has a lot of case studies, so we used Markdown files to generate the pages because they’re easy to version, quick to edit, and kept the workflow simple. There’s also a lot of imagery, which needed to be as crisp as possible without hindering performance, so I implemented responsive image loading to serve sharp photos without overloading mobile devices. For his previous portfolio, we had used Masonry.js for the grid layout, but with modern browser support for CSS Grid, I was able to replace it for better performance, cleaner code, and a smoother visual effect on resize.

<img alt="Studio Apartment website screenshot" src="/posts/studio-apartment/33.png" />
