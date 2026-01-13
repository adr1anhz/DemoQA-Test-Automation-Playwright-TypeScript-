# DemoQA Test Automation

E2E test automation framework for [DemoQA](https://demoqa.com) using Playwright and TypeScript.

## Test Coverage

This project tests the following DemoQA features:

**Elements:**
- Text Box - input validation and submission
- Check Box - checkbox selection and state verification
- Radio Button - radio button selection
- Web Tables - adding new records to table
- Buttons - double-click, right-click, and regular click actions
- Links - static/dynamic links and API response codes
- Upload and Download - file upload and download operations
- Dynamic Properties - elements that change over time

**Forms:**
- Practice Form - complete form with all fields, date picker, file upload

**Widgets:**
- Selectable - list item selection and active state

## Tech Stack

- **Playwright** - browser automation
- **TypeScript** - type safety
- **Faker.js** - test data generation
- **Page Object Model** - maintainable test structure
- **Builder Pattern** - flexible test data creation

## Quick Start

```bash
npm install
npx playwright install
npm test
```

Optional: Create `.env` file for custom configuration (see `.env.example`):
```bash
BASE_URL=https://demoqa.com
HEADLESS=true
TIMEOUT=30000
```

For Firefox/WebKit, install system dependencies:
```bash
sudo apt-get install -y libgstreamer-plugins-bad1.0-0 libavif16 libwebp7 libopus0 libvpx9 libx264-164 libx265-199 libvorbis0a libtheora0 libdav1d7 libmp3lame0 libxvidcore4 libvdpau1 libva2 libva-drm2 libva-x11-2 libvulkan1
```

## Running Tests

```bash
npm test                    # Run all tests
npm run test:headed         # Run with visible browser
npm run test:ui             # Run in UI mode
npm run test:chromium       # Run on Chromium only
npm run test:firefox        # Run on Firefox only
npm run test:webkit         # Run on WebKit only
npm run test:report         # View HTML report
```

## Project Structure

```
pages/          Page Object classes
tests/          Test specifications
builders/       Test data builders
models/         TypeScript interfaces
fixtures/       Custom Playwright fixtures
utils/          Helper utilities
config/         Environment configuration
```

## CI/CD

Tests run automatically on every push and pull request via GitHub Actions. The pipeline runs tests across all three browsers (Chromium, Firefox, WebKit) in parallel.

## Requirements

- Node.js 18+
- npm 9+
