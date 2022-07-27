const NewsItemOverlay = ({ news }) => {
  return (
    <div className="post post-over-content col-md-6">
      <div className="details clearfix">
        <a href="category.html" className="category-badge">
          Inspiration
        </a>
        <h4 className="post-title">
          <a href={news.url} target="blank">
            {news.title}
          </a>
        </h4>
        <ul className="meta list-inline mb-0">
          <li className="list-inline-item">
            <a href={news.url} target="blank">
              {" "}
              {news.author}
            </a>
          </li>
          <li className="list-inline-item">{new Date(news.publishedAt).toGMTString()}</li>
        </ul>
      </div>
      <a href={news.url} target="blank">
        <div className="thumb rounded">
          <div className="inner">
            <img src={news.urlToImage} alt="thumb" />
          </div>
        </div>
      </a>
    </div>
  )
};

export default NewsItemOverlay;