'use client';

import MailIcon from '@mui/icons-material/MailOutline';
import MapIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import { Alert, Button } from '@mui/material';
import { useTranslations } from 'next-intl';

import AnimatedDiv from '@/utils/animations/AnimatedDiv';

import PersonalLinks from '../personal-links';
import styles from './contact-form.module.scss';
import useForm from './useForm';

const ContactForm = () => {
    const t = useTranslations('ContactMe');

    const { handleChange, handleSubmit, sent, loading, setSent, formData } = useForm();

    return (
        <AnimatedDiv>
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
                            <Button variant='contained' color='success' loading={loading} type='submit'>
                                {t('ButtonText')}
                            </Button>
                        </form>
                        {sent && (
                            <Alert
                                sx={{ marginTop: 2 }}
                                onClose={() => setSent(false)}
                                severity='success'
                                variant='filled'>
                                {t('SuccessMessage')}
                            </Alert>
                        )}
                    </div>
                </div>
            </section>
        </AnimatedDiv>
    );
};

export default ContactForm;
