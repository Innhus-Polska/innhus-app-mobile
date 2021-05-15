import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import styles from '../../styles/styles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import imageOne from '../../assets/images/pexels-andrea-piacquadio-919436.jpg';

const useStyles = makeStyles({
    submit: {
        background: '#709799',
        border: 0,
        borderRadius: 12,
        color: 'white',
        width: '100%',
        height: 48,
        marginTop: 10,
        textTransform: 'unset',
    },
});

export default function RegisterByMail() {
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    });

    const onSubmit = (data) => {
        console.log({ data });
    };

    const classes = useStyles();

    const inputRequired = <div className={styles.loginMailLabel}>Podaj adres email</div>;
    const inputValidate = <div className={styles.loginMailLabel}>Twój adres musi zawierać '@'</div>;

    return (
        <div className="w-100 px-5 my-5">
            <div className="my-5 text-center w-100">
                <h2 className={styles.h2}>Zarejestruj się</h2>
                <div className="flex flex-row justify-center my-5">
                    <img src={imageOne} className={styles.loginAvatarImg} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <label className={styles.loginMailLabel}>Twoje imię</label>
                    <input
                        type="text"
                        className={styles.loginMail}
                        {...register('text', {
                            required: inputRequired,
                            validate: (value) => value.includes('@') || inputValidate,
                        })}
                    />
                    {errors.email && errors.email.message}
                    <label className={styles.loginMailLabel}>Adres email</label>
                    <input
                        type="email"
                        className={styles.loginMail}
                        {...register('email', {
                            required: inputRequired,
                            validate: (value) => value.includes('@') || inputValidate,
                        })}
                    />
                    {errors.email && errors.email.message}
                    <label className={styles.loginMailLabel}>Hasło</label>
                    <input
                        type="password"
                        className={styles.loginMail}
                        {...register('password', {
                            required: inputRequired,
                            validate: (value) => value.includes('@') || inputValidate,
                        })}
                    />
                    {errors.email && errors.email.message}
                    <div class="w-100 my-2">
                        <a href="/login" className={styles.loginOptions}>
                            Masz już konto? Zaloguj się
                        </a>
                    </div>
                    <Button type="submit" className={classes.submit}>
                        Utwórz konto
                    </Button>
                </form>
            </div>
        </div>
    );
}
