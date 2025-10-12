'use client';
import { useState } from 'react';
import styles from '../styles/createaccount.module.css';

export default function CreateAccount() {
    const [passwordFlag, setPasswordFlag] = useState(false);
    const [charCount, setCharCount] = useState(0);

    const togglePassword = () => setPasswordFlag(!passwordFlag);

    const userPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharCount(e.target.value.length);
    };

    const userSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            alert('Please fill out all fields.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email.');
            return;
        }

        alert('Account created!');
    };

    return (
        <>
            <main className={styles.container}>
                <section className={styles.formSection}>
                    <div className={styles.formContainer}>
                        <div className={styles.upperContent}>
                            <h1 className={styles.heading}>Create Account</h1>
                            <div className={styles.bagContent}>
                                <div className={styles.brandWrapper}>
                                    <img src="/images/bagagge.png" alt="Baggage cover with cup" />
                                </div>
                            </div>
                            <p className={styles.signinlink}>Already have an account? <a href="/">Sign in</a></p>
                        </div>
                        <form onSubmit={userSubmit} noValidate>

                            <label htmlFor="username" className={styles.labelcls}>Name</label>
                            <input
                                className={styles.inputField}
                                type="text"
                                id="username"
                                name="username"
                                required
                                autoComplete="name"
                            />

                            <label htmlFor="email" className={styles.labelcls}>Email</label>
                            <input
                                className={styles.inputField}
                                type="email"
                                id="email"
                                name="email"
                                required
                                autoComplete="email"
                            />



                            <label htmlFor="password" className={styles.labelcls}>Password</label>
                            <div className={styles.passwordWrapper}>
                                <input
                                    className={styles.inputField}
                                    type={passwordFlag ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    maxLength={24}
                                    required
                                    onChange={userPasswordChange}
                                    autoComplete="new-password"
                                    aria-describedby="passCharCount"
                                />
                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    aria-label="Toggle password visibility"
                                >
                                    <img src="/images/EyeOn.svg" alt="eyeIcon" />
                                </button>
                                <span id="passCharCount" className={styles.charCount}>{charCount}/24</span>
                            </div>

                            <div className={styles.buttonWrapper}>
                                <button type="submit" className={styles.submitButton}>
                                    Create Account
                                </button>
                            </div>
                            <div>
                                <p className={styles.termTxtFont}>By creating an account you agree to our <a href='/'>Terms and conditions</a> and to our <a href='/'>Points Collection Terms and Conditions.</a> Please read our <a href='/'>Privacy Statement and Cookie Policy.</a></p>
                            </div>
                        </form>
                    </div>
                </section>

                <section className={styles.visualSection}>
                    <img
                        src="/images/food.png"
                        alt="Salad and bread on orange background"
                        className={styles.visualImage}
                    />
                </section>
            </main >
        </>
    );
}