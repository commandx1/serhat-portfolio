interface IEmailjsCredentials {
    serviceId: string;
    templateId: string;
    publicKey: string;
}

const emailjsCredentials: IEmailjsCredentials = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
};

export { emailjsCredentials };
