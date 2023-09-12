import Image from "next/image";
import styles from "./style.module.scss";
const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <Image alt="item" src={item.image} width={220} height={220} />
      <h6 className={styles.item_title}>{item.title}</h6>

      <p className={styles.item_description}>{item.description}</p>
    </div>
  );
};

export default Item;
