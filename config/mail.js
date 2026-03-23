import dotenv from 'dotenv';
dotenv.config();

/* import { Resend } from 'resend';

const resend = new Resend(process.env.resend_api_key); */

/* resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'myank07official@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});  */

/* const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",       
    port: 587,                      
    secure:false,
    family:4,
    auth: {
        user: process.env.gmail_user,
        pass: process.env.gmail_pass
    }
}) */

const sendMail = async (email, token) => {
    try {
        console.log("helllo")
        const invite = `http://localhost:5173/invite?token=${token}`;
        const message = `<p>Dear Tenant,</p>

        <p>You have been invited to join a rental property on RentIQ.</p>

        <p>Please click the link below to accept the invitation:</p>

        <p> <a href="${invite}">Accept Invite</a></p>

        <p>If you were not expecting this invitation, you may ignore this email.</p>

        <p>Best regards,</p>
        <p>Team RentIQ</p>`
        /* const mail= await transporter.sendMail({
            from: "RentIQ <rentiqapp@gmail.com",
            to: email,
            subject: "Invite to join Rental Property",
            html: message
        })
        console.log(`mail sent to ${email}`); */

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'api-key': process.env.brevo_api_key,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                sender: {
                    name: 'RentIQ',
                    email: 'rentiqapp@gmail.com' // your verified sender email in Brevo
                },
                to: [{ email: email }],
                subject: "Invite to join Rental Property",
                htmlContent: message
            })
        });
        const data = await response.json();

        if (!response.ok) {
            console.error('Brevo error:', data);
            throw new Error(data.message || 'Email sending failed');
        }

        console.log(`mail sent to ${email}`);
    } catch (error) {
        console.log(error);
    }
}


export default sendMail;