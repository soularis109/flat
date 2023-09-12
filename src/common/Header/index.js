import React from 'react';
import styles from "./Header.module.scss";
import DownloadTheAppButtons from "@/shared/components/general/buttons/DownloadTheAppButtons";
import {FormattedMessage} from "react-intl";
import Link from "next/link";
import {AppDownload} from "@/shared/utils/follow";
const Header = () => {
    return (
        <div className={'container'}>
        <div className={styles.header}>
        <div className={styles.header__block}>
            <Link href={'/'}>
            <div className={styles.header__logo}>
                    <div className={styles.header__logo__icon}>
                        <img src={'/images/svg/ElephantLogo.svg'}/>
                    </div>
                    <div className={styles.header__logo__icon}>
                            <img src={'/images/svg/FlatPlanetLogo.svg'} className={styles.header__logo__icon__Mob}/>
                            <img src={'/images/svg/FlatPlanetBig.svg'} className={styles.header__logo__icon__Desktop}/>
                    </div>
            </div>
            </Link>
            <div>
                <div className={styles.download__block}>
                    <DownloadTheAppButtons>
                        <div className={styles.text__link}>
                            <FormattedMessage id={'download.button'} />
                        </div>
                    </DownloadTheAppButtons>
                </div>

                    <div className={styles.header__AppBlock}>
                        {AppDownload.map((item,index) => {
                            return (

                                <div key={index} className={styles.header__AppBlock__item}>
                                    <Link href={item.link} target={item.target}>
                                        <img src={item.icon} alt={item.name} className={styles.header__AppBlock__icon}/>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </div>
    </div>
        </div>
            );
};

export default Header;