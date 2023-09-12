import React from 'react';
import styles from './DownloadTheAppButtons.module.scss'

const DownloadTheAppButtons = ({blank,href,children}) => {
    return (
        <div className={styles.button}>
            <a href={href} target={blank}>
                <div className={styles.button__content}>
                    {children}
                </div>
            </a>
        </div>
    );
};

export default DownloadTheAppButtons;