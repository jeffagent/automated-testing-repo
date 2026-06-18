# Automated Testing Repository

This repository contains automated browser testing using Playwright, a modern end-to-end testing framework.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Generate test code using Codegen
```bash
npm run codegen https://example.com
```

## Project Structure

```
automated-testing-repo/
├── tests/                    # Test files
│   └── example.spec.js      # Example test cases
├── .github/
│   └── workflows/
│       └── tests.yml        # GitHub Actions CI/CD workflow
├── playwright.config.js      # Playwright configuration
├── package.json             # Project dependencies and scripts
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Features

- ✅ Cross-browser testing (Chromium, Firefox, WebKit)
- ✅ Parallel test execution
- ✅ HTML test reports
- ✅ Screenshot on failure
- ✅ Trace recording for debugging
- ✅ CI/CD integration with GitHub Actions
- ✅ Automatic test artifact uploads

## GitHub Actions

Tests automatically run on:
- Push to main branch
- Pull requests to main branch

Test reports are uploaded as artifacts and available for review for 30 days.

## Writing Tests

Create new test files in the `tests/` directory with the `.spec.js` extension.

### Example Test

```javascript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
  
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
});
```

### Common Test Patterns

```javascript
// Navigation
await page.goto('https://example.com');

// Finding elements
const button = page.getByRole('button', { name: 'Submit' });
const input = page.getByPlaceholder('Enter text');
const link = page.getByText('Click here');

// Interactions
await button.click();
await input.fill('text');
await input.press('Enter');

// Assertions
await expect(page).toHaveTitle(/Title/);
await expect(element).toBeVisible();
await expect(element).toHaveText('text');
await expect(element).toBeEnabled();

// Waiting
await page.waitForLoadState('networkidle');
await page.waitForSelector('.loaded');
```

## Configuration

The `playwright.config.js` file contains:
- Test directory: `./tests`
- Parallel execution enabled
- Multiple browser projects (Chrome, Firefox, Safari)
- HTML reporter
- Screenshot capture on failure
- Trace recording on first retry

## Resources

- [Playwright Documentation](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Tests](https://playwright.dev/docs/debug)

## License

MIT
