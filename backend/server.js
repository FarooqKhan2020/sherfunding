require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());                 
app.use(express.json());        


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,   
    port: Number(process.env.SMTP_PORT), 
    secure: true,                   
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});


app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, message } = req.body;

    if (!fullName || !email || !message) {
        return res.status(400).json({ error: 'Please fill all required fields.' });
    }

    const mailOptions = {
        from: `"${fullName}" <${process.env.SMTP_USER}>`,
        to: 'info@bbcapitalsolutions.com',   
        // to: 'farooqkhan2042@gmail.com',   
        subject: `New Contact from ${fullName}`,
        text: `
            Name: ${fullName}
            Email: ${email}
            Phone: ${phone || 'Not provided'}
            Message:
            ${message}
                    `,
        html: `
            <h3>New contact form submission</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('SMTP Error:', error);
        res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend running on port ${PORT}`);
});