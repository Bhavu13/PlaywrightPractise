// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  //retries : 2,
 
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
      use: { //...devices['Desktop Chrome'],
            browserName : 'chromium',
            headless : false,
             screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'
           // ignoreHTTPSErrors: true,
       },
    },
    // {
    //   name : 'firefox',
    //   use : {
    //     browserName : 'firefox',
    //         headless : true,
    //         screenshot : 'only-on-failure',
    //         trace : 'on',
    //         video : 'retain-on-failure',

    //   },
    // },
  ]
  
});

