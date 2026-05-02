const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const url ="mongodb+srv://GECJ:gec123@gecj.o4nhqas.mongodb.net/?appName=GECj";
        // const url = "mongodb://localhost:27017/gecj";
        await mongoose.connect(url);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;