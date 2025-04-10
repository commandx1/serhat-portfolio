import emailjs from '@emailjs/browser';
import { ChangeEvent, FormEvent, useState } from 'react';

import { emailjsCredentials } from '@/utils/credentials';

const useForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSent(false);

        try {
            await emailjs.send(
                emailjsCredentials.serviceId,
                emailjsCredentials.templateId,
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    user_message: formData.message,
                },
                emailjsCredentials.publicKey
            );

            setSent(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Email error:', err);
        } finally {
            setLoading(false);
        }
    };

    return {
        handleChange,
        handleSubmit,
        formData,
        sent,
        setSent,
        loading,
    };
};

export default useForm;
