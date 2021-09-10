export const port = process.env.PORT || 3000;

/**
 * Databases
 */
export const mongoConnectionString = process.env.MONGO_CONNECTION_STRING || '';

export const allowedIp = process.env.ALLOW_RECHARGE_IP || '127.0.0.1';

export const mailConfig: any = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECCURE === 'true' ? true : false,
    auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS,
    },
}

export const mailjetConfig = {
    api_key: process.env.MAILJET_API_KEY,
    secret: process.env.MAILJET_SECRET,
    sender: process.env.SENDER_EMAIL,
    receiver: process.env.RECEIVER_EMAIL,
}


export const rabbitMqUrl = process.env.RABBIT_MQ_URL
export const rabbitMqQueue = process.env.RABBIT_MQ_QUEUE