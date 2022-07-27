const NewsItemSmall = ({ news }) => {
  return (
    <div
      className="post post-list-sm square"
      key={news.id}
    >
      <div className="thumb rounded">
        <a href={news.url} target="blank">
          <div className="inner">
            <img src={news.urlToImage} alt="post-title" />
          </div>
        </a>
      </div>
      <div className="details clearfix">
        <h6 className="post-title my-0">
          <a href={news.url} target="blank">
            {news.title}
          </a>
        </h6>
        <ul className="meta list-inline mt-1 mb-0">
          <li className="list-inline-item">
            {new Date(news.publishedAt).toGMTString()}
          </li>
        </ul>
      </div>
    </div>
  )
};

export default NewsItemSmall;
