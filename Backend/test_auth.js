const axios = require('axios');
const assert = require('assert');

const API_URL = 'http://localhost:5000/api/auth';
const randomNum = Math.floor(Math.random() * 10000);
const email = `testuser${randomNum}@example.com`;
const password = 'password123';

async function testAuthFlow() {
    try {
        console.log('--- Starting Auth Flow Integration Test ---');

        let token = '';
        let cookie = '';

        // 1. Register User
        console.log(`\n1. Registering new user: ${email}...`);
        const regRes = await axios.post(`${API_URL}/register`, {
            name: 'Integration Test',
            email,
            password,
            role: 'student'
        });

        assert.strictEqual(regRes.data.success, true, 'Registration should be successful');
        token = regRes.data.token;
        cookie = regRes.headers['set-cookie'][0];
        console.log('✓ Registration successful');

        // 2. Login User
        console.log(`\n2. Logging in as ${email}...`);
        const loginRes = await axios.post(`${API_URL}/login`, {
            email,
            password
        });

        assert.strictEqual(loginRes.data.success, true, 'Login should be successful');
        assert.strictEqual(loginRes.data.user.email, email, 'Logged in user email should match');
        cookie = loginRes.headers['set-cookie'][0]; // Update cookie from login response
        console.log('✓ Login successful');

        // 3. Get /me Profile (Requires token)
        console.log('\n3. Fetching user profile (Requires Auth)...');
        const meRes = await axios.get(`${API_URL}/me`, {
            headers: {
                Cookie: cookie // Pass the HTTP-only cookie
            }
        });

        assert.strictEqual(meRes.data.success, true, 'Fetching profile should be successful');
        assert.strictEqual(meRes.data.user.email, email, 'Profile email should match');
        console.log('✓ /me profile successfully retrieved');

        // 4. Logout User
        console.log('\n4. Logging out...');
        const logoutRes = await axios.get(`${API_URL}/logout`);

        assert.strictEqual(logoutRes.data.success, true, 'Logout should be successful');
        // Verify cookie expires is in the past or its value is "none"
        const logoutCookie = logoutRes.headers['set-cookie'][0];
        assert.ok(logoutCookie.includes('token=none'), 'Token cookie should be set to none');
        console.log('✓ Logout successful');

        console.log('\n--- All Auth Flow Tests Passed! 🚀 ---');
    } catch (error) {
        console.error('\n❌ Test Failed:', error.response?.data?.message || error.message);
        process.exit(1);
    }
}

testAuthFlow();
