require('dotenv').config(); // Carga las variables de entorno
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Método no permitido',
        };
    }

    try {
        const { nombre, email, mensaje } = JSON.parse(event.body);

        // Configura el contenido del correo
        const msg = {
            to: process.env.SENDGRID_TO_EMAIL, // Destinatario desde el .env
            from: process.env.SENDGRID_FROM_EMAIL, // Remitente desde el .env
            subject: 'Nuevo mensaje de contacto de ${nombre}',
            text: 'Correo electrónico: ${email}\nMensaje:\n${mensaje}',
        };

        // Envía el correo usando SendGrid
        await sgMail.send(msg);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Correo enviado exitosamente' }),
        };
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al enviar el correo' }),
        };
    }
};