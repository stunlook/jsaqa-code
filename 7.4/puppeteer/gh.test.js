let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page team tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header team content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 10000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  }, 20000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 15000);
});

describe("Github page marketplace tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/marketplace");
  });

  test("The h1 header marketplace content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub Marketplace · to improve your workflow · GitHub');
  }, 15000);
});

describe("Github page sponsors tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/sponsors");
  });

  test("The h1 header sponsors content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub Sponsors · GitHub');
  }, 5000);
});

describe("Github page enterprise tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/enterprise");
  });

  test("The h1 header enterprise page content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('Enterprise · A smarter way to work together · GitHub');
  }, 70000);
});