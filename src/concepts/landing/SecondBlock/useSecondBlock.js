import { FormattedMessage } from "react-intl";
const useSecondBlock = () => {
  const bigItemList = [
    {
      image: "/images/picture.png",
      md_image: "/images/picture1_md.png",
      title: <FormattedMessage id={"bigItem.title"} />,
      titleColorStart: <FormattedMessage id={"bigItem.title.start"} />,
      description: <FormattedMessage id={"bigItem.description"} />,
    },
    {
      image: "/images/picture2.png",
      md_image: "/images/picture2_md.png",
      title: <FormattedMessage id={"bigItem.title2"} />,
      titleColorEnd: <FormattedMessage id={"bigItem.title2.end"} />,
      description: <FormattedMessage id={"bigItem.description2"} />,
    },
  ];

  const itemList = [
    {
      image: "/images/item1.png",
      title: <FormattedMessage id={"item.title"} />,
      description: <FormattedMessage id={"item.description"} />,
    },
    {
      image: "/images/item2.png",
      title: <FormattedMessage id={"item.title2"} />,
      description: <FormattedMessage id={"item.description2"} />,
    },
    {
      image: "/images/item3.png",
      title: <FormattedMessage id={"item.title3"} />,
      description: <FormattedMessage id={"item.description3"} />,
    },
    {
      image: "/images/item4.png",
      title: <FormattedMessage id={"item.title4"} />,
      description: <FormattedMessage id={"item.description4"} />,
    },
  ];
  return { bigItemList, itemList };
};

export default useSecondBlock;
