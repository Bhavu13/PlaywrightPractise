# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: statusCodes\400Status.spec.js >> Verify 400 Bad Request for invalid login
- Location: tests\statusCodes\400Status.spec.js:11:1

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Password is required"
Received string:    "Bad Request"
```

# Test source

```ts
  1  | const { test, expect, request } = require('@playwright/test');
  2  | const loginPayload = {
  3  |     username: "superadmin@assaycr.com",
  4  |    // password: "Admin@123",
  5  |     deviceId: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
  6  |     deviceName: "Unknown",
  7  |     deviceType: "DESKTOP",
  8  |     ipAddress: "2406:7400:51:b6bd:df5:4940:3797:aab5"
  9  | }
  10 | 
  11 | test('Verify 400 Bad Request for invalid login', async ({ request }) => {
  12 | 
  13 |     const response = await request.post('https://apiemrv2.assaycr.in/api/v1/auth/loginwithpassword', {
  14 |         data: loginPayload
  15 |     });
  16 | 
  17 |     // Assertion for status code
  18 |     expect(response.status()).toBe(400);
  19 | 
  20 |     const responseBody = await response.json();
  21 | 
  22 |     // Assertion for error message
> 23 |     expect(responseBody.error).toContain("Password is required");
     |                                ^ Error: expect(received).toContain(expected) // indexOf
  24 | 
  25 | });
```