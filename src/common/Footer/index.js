import React from 'react';
import styles from "./Footer.module.scss";
import {FormattedMessage} from "react-intl";
import {AppDownload, Socials} from "@/shared/utils/follow";
import Link from "next/link";
import Image from "next/image";

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
                                                <Image width={20} height={20} src={item.icon} alt={item.name}/>
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
                                        <Image width={179}  height={53} src={item.icon} alt={item.name}
                                        className={styles.footer__AppBlock__img}
                                        />
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