const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.alura.com.br/formacao-front-end");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
