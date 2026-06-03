// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries : 2,
 
  use: {
   headless : false,
    trace: 'on-first-retry',
  },
  reporter: [
   ['html'],
   ['allure-playwright']
]
,
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
            browserName : 'chromium',
            headless : false,
            screenshot : 'on',
            trace : 'off',
            ignoreHTTPSErrors: true,
       },
    },
    {
      name : 'firefox',
      use : {
        browserName : 'firefox',
            headless : true,
            screenshot : 'off',
            trace : 'on',

      },
    },
  ]
  
});

