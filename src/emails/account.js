const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to: 'abhayiiitk@gmail.com',
    from: 'abhayiiitk@gmail.com',
    subject: 'Greetings',
    text: 'Thanks for joining us'
})

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abhayiiitk@gmail.com',
        subject: 'Thanks for joining in.',
        text: `Welcome to the app ${name}, we would like you to participate with us.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abhayiiitk@gmail.com',
        subject: 'Soory, to see you out',
        text: `Sorry, ${name}, is there something which you don't like about the app.?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

