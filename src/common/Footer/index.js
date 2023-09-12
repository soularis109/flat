import React from 'react';
import styles from "./Footer.module.scss";
import {FormattedMessage} from "react-intl";
import {AppDownload, Socials} from "@/shared/utils/follow";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={'container'}>
                <div className={styles.footer__link__block}>
                    <div>
                        <div className={styles.footer__text__follow}>
                            <FormattedMessage id={'follow.text'} />
                        </div>
                        <div className={styles.footer__socialBlock}>
                            {Socials.map((item,index) => {
                                return (
                                    <div className={styles.footer__socialBlock__item} key={index}>
                                        <Link href={item.link} target={item.target}>
                                            <div className={styles.footer__socialBlock__icon}>
                                                <img src={item.icon} alt={item.name}/>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={styles.footer__AppBlock}>
                        {AppDownload.map((item,index) => {
                            return (
                                <div key={index} className={styles.footer__AppBlock__item}>
                                    <Link href={item.link} target={item.target}>
                                        <img src={item.icon} alt={item.name} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Footer;