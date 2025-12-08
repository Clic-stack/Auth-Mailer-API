import { sendEmail } from "../mails/mailer.js";
import { catchError } from "../middlewares/catchError.js";

//Para personalizar el correo:
export const sayHi = catchError(async (req, res) => {
    const { name, email, phone, message } = req.body

    await sendEmail({
        to: email,
        subject: 'Hi there!',
        html: `
        <h1>Hello ${name}!</h1>
        <p>This is a test email message:</p>
        <blockquote>${message}</blockquote>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
        </ul>
        <p>sent from the email API.</p> 
        `
    })
    res.status(200).json({ message: 'Email sent successfully!' })
})