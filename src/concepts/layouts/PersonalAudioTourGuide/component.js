import React from 'react';
import styles from './PersonalAudioTourGuide.module.scss';
import {FormattedMessage} from "react-intl";
import {AppDownload} from "@/shared/utils/follow";
import Link from "next/link";
import Image from "next/image";

const PersonalAudioTourGuide = () => {
    return (
        <div className={styles.body}>
            <Image src={'/images/bgDesktop.png'} alt={'icon-desktop'} layout={'fill'} className={styles.iconDesktop}/>
            <Image src={'/images/blockTablet.png'} alt={'icon-tablet'} layout={'fill'} className={styles.iconTablet}/>
            <Image src={'/images/bgMobile.png'} alt={'icon-mob'} layout={'fill'} className={styles.iconMob}/>
            <div className={'container'}>
                    <div className={styles.body__title}>
                        <FormattedMessage id={'personal.text'} />
                    </div>
                    <div className={styles.body__sub__title}>
                        <FormattedMessage id={'discover.text'} />
                    </div>
                    <div className={styles.body__AppBlock}>
                        {AppDownload.map((item,index) => {
                            return (
                                <div key={index} className={styles.body__AppBlock__item}>
                                    <Link href={item.link} target={item.target}>
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            width={180}
                                            height={53}
                                            className={styles.body__AppBlock__img}
                                        />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
        </div>
    );
}


export default PersonalAudioTourGuide;
