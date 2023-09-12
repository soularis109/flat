import BigItem from "./Components/BigItem";
import Item from "./Components/Item";
import styles from "./style.module.scss";
import useSecondBlock from "./useSecondBlock";

const SecondBlock = () => {
  const { bigItemList, itemList } = useSecondBlock();
  return (
    <div className={styles.second_block_wrapper}>
      <h5 className={styles.title}>
        More than self-made routes, better than classic tours
      </h5>

      <div className={styles.bigItem_wrapper}>
        {bigItemList.map((item) => (
          <BigItem item={item} key={item.title} />
        ))}
      </div>

      <div className={styles.item_wrapper}>
        {itemList.map((item) => (
          <Item item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default SecondBlock;
