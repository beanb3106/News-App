const NewsItemLarge = ({ news }) => {
  return (
    <div className="news">
      <div className="post post-list clearfix">
        <div className="thumb rounded">
          <span className="post-format-sm">
            <i className="icon-picture"></i>
          </span>
          <a href="blog-single.html">
            <div className="inner">
              <img src={news.urlToImage} alt="post-title" />
            </div>
          </a>
        </div>
        <div className="details">
          <ul className="meta list-inline mb-3">
            <li className="list-inline-item"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" className="author" alt="author" />{news.author}</li>
            <li className="list-inline-item">Trending</li>
            <li className="list-inline-item">{new Date(news.publishedAt).toGMTString()}</li>
          </ul>
          <h5 className="post-title"><a href="blog-single.html">{news.title}</a></h5>
          <p className="excerpt mb-0">{news.description}</p>
          <div className="post-bottom clearfix d-flex align-items-center">
            <div className="social-share me-auto">
              <button className="toggle-button icon-share"></button>
            </div>
            <div className="more-button float-end">
              <a href="blog-single.html"><span className="icon-options"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItemLarge;
