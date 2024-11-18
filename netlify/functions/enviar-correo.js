require('dotenv').config();

const sgMail = require('@sendgrid/mail');

exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Método no permitido' }),
        };
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { nombre, email, mensaje } = JSON.parse(event.body);

    const msg = {
        to: process.env.SENDGRID_TO_EMAIL,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject: `Mensaje de ${nombre}`,
        text: mensaje,
        replyTo: email,
    };

    try {
        await sgMail.send(msg);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Correo enviado correctamente' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Error al enviar el correo: ${error.message}` }),
        };
    }
};
