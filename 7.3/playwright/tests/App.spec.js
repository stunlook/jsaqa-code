const { test, expect } = require('@playwright/test');
const { email, password } = require('./user.js');

test.describe('Positive Test Suite', () => {
  test('Successful authorization', async ({ page }) => {
    await page.goto('https://netology.ru/?modal=sign_in');
    await page.screenshot({ path: 'screenshots/login-page.png'/*, fullPage: true*/ });
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(email);
    await page.getByPlaceholder('Пароль').click();
    await page.getByPlaceholder('Пароль').fill(password);
    await page.getByTestId('login-submit-btn').click();
    const titleText = await page.textContent('h2');
    // await expect(page).toHaveURL('https://netology.ru/profile');
    await expect(page.getByRole('heading', { name: 'Мои курсы и профессии' })).toHaveText(titleText);
    await page.screenshot({ path: 'screenshots/my-courses-page2.png'/*, fullPage: true*/ });
  });
});

test.describe('Negative Test Suite', () => {
  test('Invalid email', async ({ page }) => {
    await page.goto('https://netology.ru/?modal=sign_in');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill("test@test.ru");
    await page.getByPlaceholder('Пароль').click();
    await page.getByPlaceholder('Пароль').fill(password);
    await page.getByTestId('login-submit-btn').click();
    await page.screenshot({ path: 'screenshots/invalid-email.png'/*, fullPage: true*/ });
    await expect(page.getByTestId('login-error-hint')).toHaveText('Вы ввели неправильно логин или пароль');
  });

  test('Invalid password', async ({ page }) => {
    await page.goto('https://netology.ru/?modal=sign_in');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(email);
    await page.getByPlaceholder('Пароль').click();
    await page.getByPlaceholder('Пароль').fill("123");
    await page.getByTestId('login-submit-btn').click();
    await page.screenshot({ path: 'screenshots/invalid-password.png'/*, fullPage: true*/ });
    await expect(page.getByTestId('login-error-hint')).toHaveText('Вы ввели неправильно логин или пароль');
  });

  test('Sending an empty form', async ({ page }) => {
    await page.goto('https://netology.ru/?modal=sign_in');
    await page.getByTestId('login-submit-btn').click();
    await page.screenshot({ path: 'screenshots/empty-form.png'/*, fullPage: true*/ });
    await expect(page.getByText('Обязательное поле').first()).toHaveText('Обязательное поле');
    await expect(page.getByText('Обязательное поле').nth(1)).toHaveText('Обязательное поле');
  });
});