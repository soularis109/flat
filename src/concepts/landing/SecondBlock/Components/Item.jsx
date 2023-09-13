import Image from "next/image";
import styles from "./style.module.scss";
const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <Image
        alt="item"
        src="/images/svg/bg_item.svg"
        width={220}
        height={160}
        className={styles.item_bg_image}
      />
      <Image
        src={item.image}
        width={180}
        height={210}
        alt="item"
        className={styles.item_image}
      />

      <div className={styles.item_image_mobile}>
        <Image src={item.mobileImage} width={210} height={220} alt="item" />
      </div>

      <div className={styles.item_info}>
        <h6 className={styles.item_title}>{item.title}</h6>
        <p className={styles.item_description}>{item.description}</p>
      </div>
    </div>
  );
};

export default Item;
