export const config = {
  baseUrl: process.env.BASE_URL || 'https://demoqa.com',
  headless: process.env.HEADLESS !== 'false',
  slowMo: parseInt(process.env.SLOW_MO || '0'),
  timeout: parseInt(process.env.TIMEOUT || '30000'),
  retries: parseInt(process.env.RETRIES || '0'),
  workers: process.env.WORKERS ? parseInt(process.env.WORKERS) : undefined,
  debug: process.env.DEBUG === 'true',
};
