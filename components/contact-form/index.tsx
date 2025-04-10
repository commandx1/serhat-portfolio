'use client';

import emailjs from '@emailjs/browser';
import MailIcon from '@mui/icons-material/MailOutline';
import MapIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import { Alert, Snackbar } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useState } from 'react';

import AnimatedDiv from '@/utils/animations/AnimatedDiv';
import { emailjsCredentials } from '@/utils/credentials';

import PersonalLinks from '../personal-links';
import styles from './contact-form.module.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const t = useTranslations('ContactMe');

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

    return (
        <AnimatedDiv>
            <Snackbar
                open={sent}
                style={{ zIndex: 99999 }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                autoHideDuration={6000}
                onClose={() => setSent(false)}>
                <Alert onClose={() => setSent(false)} severity='success' variant='filled' sx={{ width: '100%' }}>
                    {t('SuccessMessage')}
                </Alert>
            </Snackbar>
            <section className={styles.contact}>
                <div className={styles.content}>
                    <h2>{t('Title')}</h2>
                    <p>{t('Desc')}</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.contactInfo}>
                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <MapIcon />
                            </div>
                            <div className={styles.text}>
                                <h3>{t('AddressTitle')}</h3>
                                <p>Portakal Mah., 33090 Toroslar/Mersin, Türkiye</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <MailIcon />
                            </div>
                            <div className={styles.text}>
                                <h3>{t('EmailTitle')}</h3>
                                <p>serhatbelen7@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <PhoneIcon />
                            </div>
                            <div className={styles.text}>
                                <h3>{t('PhoneTitle')}</h3>
                                <p>+90-534-420-0038</p>
                            </div>
                        </div>
                        <PersonalLinks />
                    </div>
                    <div className={styles.contactForm}>
                        <form onSubmit={handleSubmit}>
                            <h2>{t('FormTitle')}</h2>
                            <div className={styles.inputBox}>
                                <input type='text' name='name' value={formData.name} onChange={handleChange} required />
                                <span>{t('NameLabel')}</span>
                            </div>
                            <div className={styles.inputBox}>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <span>{t('EmailLabel')}</span>
                            </div>{' '}
                            <div className={styles.inputBox}>
                                <textarea name='message' value={formData.message} onChange={handleChange} required />
                                <span>{t('TextareaLabel')}</span>
                            </div>
                            <button type='submit' disabled={loading}>
                                {loading ? t('ButtonTextSending') : t('ButtonText')}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </AnimatedDiv>
    );
};

export default ContactForm;
