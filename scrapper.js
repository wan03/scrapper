const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.alibaba.com/industry/product.html?spm=a2700.8293689.categoryInfoIndustry-1.2.9c8214be5MBhAp&contentId=1031144&contentType=trend&throughOfferIds=60818391150,60817335906,60797921720",
    { waitUntil: "domcontentloaded" }
  );
  const result = await page.evaluate(() => {
    let data = [];
    let elements = document
      .querySelectorAll(".icbu-buyer-list-bbc-newarrival-offer")
      .forEach(e => {
        let title = e.querySelector(
          ".icbu-buyer-list-bbc-newarrival-offer-title"
        ).innerHTML;
        let price = e.querySelector(
          ".icbu-buyer-list-bbc-newarrival-offer-price"
        ).textContent;
        let url = e.querySelector("a").getAttribute("href");
        let image = e
          .querySelector(".icbu-buyer-list-bbc-newarrival-offer-image-box")
          .getAttribute("src");
        data.push({ title, price, url, image });
      });
    return data;
  });
  await browser.close();
  return result;
})().then(value => {
  console.log(value);
});
