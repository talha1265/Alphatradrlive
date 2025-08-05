const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const VALID_PASSCODE = 'ACE2025';

app.post('/api/generate-certificate', (req, res) => {
    const { studentName, fatherName, course, passcode } = req.body;

    if (passcode !== VALID_PASSCODE) {
        return res.status(403).json({ message: 'Invalid passcode' });
    }

    // TODO: Generate certificate image (e.g., with Node Canvas, Puppeteer, or ImageMagick)
    // For now, just send back confirmation
    res.json({ message: 'Certificate authorized', studentName, fatherName, course });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
