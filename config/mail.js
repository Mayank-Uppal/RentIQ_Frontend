import dotenv from 'dotenv';
dotenv.config();

const sendMail = async (email, token) => {
    try {
        console.log("helllo")
        const invite = `https://rentiq-eight.vercel.app/home?token=${token}`;
        const message = `<p>Dear Tenant,</p>

        <p>You have been invited to join a rental property on RentIQ.</p>

        <p>Please click the link below to accept the invitation:</p>

        <p> <a href="${invite}">Accept Invite</a></p>

        <p>If you were not expecting this invitation, you may ignore this email.</p>

        <p>Best regards,</p>
        <p>Team RentIQ</p>`

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
                    email: 'myank07official@gmail.com' 
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
