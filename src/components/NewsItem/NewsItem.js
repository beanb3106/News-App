import { ITEM_TYPE } from "../../utils/constants"
import NewsItemSmall from "./NewsItemSmall";
import NewsItemMedium from "./NewsItemMedium";
import NewsItemLarge from "./NewsItemLarge";
import NewsItemOverlay from "./NewsItemOverlay";

const NewsItem = ({ news, layout = ITEM_TYPE.SMALL }) => {

  const renderNewsItem = () => {
    switch (layout) {
      case ITEM_TYPE.SMALL:
        return <NewsItemSmall news={news} />;
      case ITEM_TYPE.LARGE:
        return <NewsItemLarge news={news} />;
      case ITEM_TYPE.OVERLAY:
        return <NewsItemOverlay news={news} />;
      case ITEM_TYPE.MEDIUM:
      default:
        return <NewsItemMedium news={news} />;
    }
  }
  return (
    renderNewsItem()
  )
};

export default NewsItem;
