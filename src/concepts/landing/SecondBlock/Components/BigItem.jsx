import Image from "next/image";
import styles from "./style.module.scss";
const BigItem = ({ item }) => {
  return (
    <div className={styles.big_item}>
      <Image
        alt="item"
        className={styles.image_sm}
        src={item.image}
        width={345}
        height={256}
      />
      <Image
        alt="item"
        className={styles.image_md}
        src={item.md_image}
        width={230}
        height={230}
      />
      <div className={styles.item_info}>
        <p className={styles.item_title}>
          <span>{item.titleColorStart}</span>

          {item.title}

          <span>{item.titleColorEnd}</span>
        </p>

        <p className={styles.item_description}>{item.description}</p>
      </div>
    </div>
  );
};

export default BigItem;
