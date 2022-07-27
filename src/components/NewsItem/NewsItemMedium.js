const NewsItemMedium = ({ news }) => {
  return (
    <div className="post" key={news.id}>
      <div className="thumb rounded">
        <a
          href="category.html"
          className="category-badge position-absolute"
        >
          Tech
        </a>
        <span className="post-format">
          <i className="icon-picture"></i>
        </span>
        <a href={news.url} target="blank">
          <div className="inner">
            <img src={news.urlToImage} alt="post-title" />
          </div>
        </a>
      </div>
      <ul className="meta list-inline mt-4 mb-0">
        <li className="list-inline-item">
          <a href={news.url} target="blank">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              className="author"
              alt="author"
            />
            {news.author}
          </a>
        </li>
        <li className="list-inline-item">{new Date(news.publishedAt).toGMTString()}</li>
      </ul>
      <h5 className="post-title mb-3 mt-3">
        <a href={news.url} target="blank">
          {news.title}
        </a>
      </h5>
      <p className="excerpt mb-0">{news.description}</p>
    </div>
  )
}

export default NewsItemMedium;
