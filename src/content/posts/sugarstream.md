---
title: Sugarstream - Concert Streaming App (Passion Project)
tileImage: /posts/sugarstream/sugarmegs-cropped-depixelated.png
featuredImage: /posts/sugarstream/sugarmegs.gif
featuredImageCaption: Love this banner from SugarMegs.org
imgClass: object-bottom-right
order: 12
---

As a jam band fan, I’ve always used apps like [Relisten](https://relisten.net/) to listen to concerts. When I was learning to code and needed something to build, I made something similar—several iterations, over the years, depending on the tech or concepts I was curious about at the time.

One day, a friend told me about [SugarMegs](https://sugarmegs.org/), an enormous archive of classic concerts, some dating back to the 1920s. But it’s different from Relisten in that it wasn’t designed for streaming, and the only way to discover content is by searching directly or scrolling through massive lists. Once you find a show you want to listen to, you have to download it, and often convert it from FLAC.

I wrote a few scripts to scrape SugarMegs, build the file URLs, extract and clean the metadata (as much as I could), and store everything in a MongoDB database. Then I recycled the last iteration of the music player I’d built and made [Sugarstream](https://sugarstream.live/).

But now I realize, for discoverability, I should just help upload SugarMegs to YouTube and Internet Archive some day 🙃.
