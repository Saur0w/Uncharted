"use client";

import styles from './style.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.heading}>
                <h1>Let’s Build Your Financial Future Together</h1>
                <svg fill="none" stroke="#ffffff" width="50" height="50" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg" strokeWidth="2">
                    <path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z" />
                </svg>
            </div>

            <div className={styles.footerDetails}>
                <div className={styles.column}>
                    <h4>Socials</h4>
                    <a href="https://www.linkedin.com/in/payal-joshi-62a537221" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className={styles.column}>
                    <h4>Address</h4>
                    <p>Gurgaon, Haryana</p>
                    <p>India</p>
                </div>
                <div className={styles.column}>
                    <h4>E-mail</h4>
                    <a href="mailto:accounts@joshipayalandassociats.com">accounts@joshipayalandassociats.com</a>
                    <h4>Phone</h4>
                    <p>+91 1247964478</p>
                </div>
            </div>

            <div className={styles.copyright}>
                © {new Date().getFullYear()} Joshi Payal & Associates. All rights reserved.
            </div>
        </footer>
    );
}
