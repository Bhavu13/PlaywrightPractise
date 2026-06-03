const { test, expect, request } = require('@playwright/test');
const loginPayload = {
    username: "superadmin@assaycr.com",
   // password: "Admin@123",
    deviceId: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
    deviceName: "Unknown",
    deviceType: "DESKTOP",
    ipAddress: "2406:7400:51:b6bd:df5:4940:3797:aab5"
}

test('Verify 400 Bad Request for invalid login', async ({ request }) => {

    const response = await request.post('https://apiemrv2.assaycr.in/api/v1/auth/loginwithpassword', {
        data: loginPayload
    });

    // Assertion for status code
    expect(response.status()).toBe(400);

    const responseBody = await response.json();

    // Assertion for error message
    expect(responseBody.error).toContain("Password is required");

});