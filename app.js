const express = require('express');
const app = express();
const dns = require('dns');
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
]);

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

// routes
const userRoutes = require('./Routes/userRoutes.js');
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});