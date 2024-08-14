const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory storage for users (not for production use)
const users = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Registration route
app.post('/register', (req, res) => {
    const { email, password, 'confirm-password': confirmPassword } = req.body;
    
    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match.');
    }

    if (users.find(user => user.email === email)) {
        return res.status(400).send('User already exists.');
    }

    users.push({ email, password });
    res.send('Registration successful!');
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
        return res.status(400).send('Invalid email or password.');
    }

    res.send('Login successful!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
