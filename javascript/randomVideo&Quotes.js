const videosArr = 
[
  `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/HMV3qB1qFkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/eO7DMt94k1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/-6uc_6fkMH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/F6xyI9TOLws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/0hUtb0H3ldc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/ug0J3yiHkeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/HMV3qB1qFkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/D-LD2Kxmye4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/xaLDuCp77Y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/SXI-6-tAAvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
]

const btnRandomv = document.querySelector(".btnRandomv");
const parentIframe = document.querySelector(".parentIframe");
let y = 0
btnRandomv.addEventListener("click",eo=>{
  // parentIframe.innerHTML = videosArr[Math.floor( Math.random() * videosArr.length )]; //Random
  parentIframe.innerHTML = videosArr[y];
  y++
  y == videosArr.length? y = 0: true;
})

// Quotes
const quotesArr = [
`<div class="parentQuotes component"> <blockquote lang="ar" dir="rtl" class="callout quote DE"> مسطول شاف هندية على جبينها نقطة حمرا قام قالها يا مدام يا مدام انتبهي عم تسجلي فيديو😂 <br/><cite> - مسطول </cite></blockquote></div>`,
`<div class="parentQuotes component"> <blockquote lang="ar" dir="rtl" class="callout quote DE"> واحـد بخيل مات أبوه راح يكتبله نعي في الجريدة فقالهم بدي أقل اشي عندكم، قالوله خمس كلمات، كتب (رزق ينعى والده) قالوله ضايلك كلمتين، قالهم اكتبوا (وبيصلح راديوهات).😂<br/><cite> - مسطول </cite></blockquote></div>`,
`<div class="parentQuotes component"> <blockquote lang="ar" dir="rtl" class="callout quote DE"> وحدة بتشكي للدكتور بتقله يا دكتور زوجي بيحكي وهوي نايم شو الحل؟ قالها بسيطة أعطيه فرصة يحكي وهو صاحي.<br/><cite> - مسطول </cite></blockquote></div>`,
`<div class="parentQuotes component"> <blockquote lang="ar" dir="rtl" class="callout quote DE"> واحد غبي اشترى تاكسي، كلما الناس تأشرله تاكسي تاكسي يصير يضحك ويقلهم بعرف بعرف.😂<br/><cite> - مسطول </cite></blockquote></div>`,
`<div class="parentQuotes component"> <blockquote lang="ar" dir="rtl" class="callout quote DE"> أستاذ عربي بيسأل مرته شو بتعرفي عن النحو والصرف؟ قالتله أن أصرف راتبك على النحو الذي يرضيني🤣<br/><cite> - مسطول </cite></blockquote></div>`,
`<div class="parentQuotes component"> <blockquote lang="ar" dir="rtl" class="callout quote DE"> حرامي راح بيت عجوز عشان يسرقها، ضلّت تمشط شعرها تلت ساعات وهو متخبي جوة الخزانة مستني تنام، وبس نامت دوّر عإشي يسرقه ما لقى! قام نكشلها شعرها وهرب.🤣🤣<br/><cite> - مسطول </cite></blockquote></div>`,

]
const btnRandomq = document.querySelector(".btnRandomq");
const parentQuotes = document.querySelector(".parentQuotes");

btnRandomq.addEventListener("click",eo=>{
  // parentIframe.innerHTML = videosArr[Math.floor( Math.random() * videosArr.length )]; //Random
  parentQuotes.innerHTML = quotesArr[y];
  y++
  y == quotesArr.length? y = 0: true;
  
})