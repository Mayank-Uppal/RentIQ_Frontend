import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",       
    port: 587,                      
    secure: false,  
    service: "gmail",
    auth: {
        user: process.env.gmail_user,
        pass: process.env.gmail_pass
    }
})

const sendMail = async (email, token) => {
    try {
        console.log("helllo")
        const invite = `http://localhost:5173/invite?token=${token}`;
        const message = `<p>Dear Tenant,</p>

<p>You have been invited to join a rental property on RentIQ.</p>

<p>Please click the link below to accept the invitation:</p>

<p> <a href=${invite}>Accept Invite</a></p>

<p>If you were not expecting this invitation, you may ignore this email.</p>

<p>Best regards,</p>
<p>Team RentIQ</p>`
        const mail = await transporter.sendMail({
            from: "RentIQ <rentiqapp@gmail.com>",
            to: email,
            subject: "Invite to join Rental Property",
            html: message
        })
        console.log(`mail sent to ${email}`);
    } catch (error) {
        console.log(error);
    }
}


export default sendMail;