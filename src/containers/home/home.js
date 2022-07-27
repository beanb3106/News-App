import React, { useEffect } from "react";
import logo from "../../logo.svg";
import { NewsContext } from "../../contexts/news.context";
import { useContext } from "react";
import Loader from "../../components/Loader";
import NewsItem from "../../components/NewsItem/NewsItem";
import { ITEM_TYPE } from "../../utils/constants";

const Home = () => {
  const { data, getData } = useContext(NewsContext);
  const a = Math.floor(Math.random() * 99);

  useEffect(() => {
    getData({ q: 'apple', from: '2022-07-01', to: '2022-07-31' })
  }, [getData]);

  return (
    <section className="main-content">
      <div className="container-xl">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="section-header">
              <h3 className="section-title">Latest Business News</h3>
            </div>
            <div className="padding-30 rounded bordered">
              <div className="row gy-5">
                <div className="col-sm-6">
                  {data
                    ? data.articles.slice(13, 14).map((news) => (
                      <NewsItem news={news} layout={ITEM_TYPE.MEDIUM} />
                    ))
                    : <Loader />
                  }
                </div>
                <div className="col-sm-6">
                  {data
                    ? data.articles.slice(2, 6).map((news) => (
                      <NewsItem news={news} layout={ITEM_TYPE.SMALL} />
                    ))
                    : <Loader />
                  }
                </div>
              </div>
            </div>

            <div className="spacer" data-height="50"></div>

            <div className="spacer" data-height="50"></div>

            <div className="section-header">
              <h3 className="section-title">Trending</h3>

            </div>

            <div className="padding-30 rounded bordered">
              <div className="row gy-5">
                <div className="col-sm-6">
                  <div className="post">
                    {data
                      ? data.articles.slice(a + 3, a + 4).map((news) => (
                        <NewsItem news={news} layout={ITEM_TYPE.MEDIUM} />
                      ))
                      : <Loader />
                    }
                  </div>

                  <div className="post post-list-sm square before-seperator">
                    {data
                      ? data.articles.slice(18, 20).map((news) => (
                        <NewsItem news={news} layout={ITEM_TYPE.SMALL} />
                      ))
                      : <Loader />
                    }
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="post">
                    {" "}
                    {data
                      ? data.articles.slice(a + 5, a + 6).map((news) => (
                        <NewsItem news={news} layout={ITEM_TYPE.MEDIUM} />
                      ))
                      : <Loader />}
                  </div>

                  <div className="post post-list-sm square before-seperator">
                    {data
                      ? data.articles.slice(20, 22).map((data) => (
                        <div className="post post-list-sm circle">
                          <div className="thumb circle">
                            <a href={data.url} target="blank">
                              <div className="inner">
                                <img
                                  src={data.urlToImage}
                                  alt="post-title"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="details clearfix">
                            <h6 className="post-title my-0">
                              <a href={data.url} target="blank">
                                {data.title}
                              </a>
                            </h6>
                            <ul className="meta list-inline mt-1 mb-0">
                              <li className="list-inline-item">
                                {new Date(data.publishedAt).toGMTString()}
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))
                      : "Loading"}
                  </div>
                </div>
              </div>
            </div>

            <div className="spacer" data-height="50"></div>

            <div className="section-header">
              <h3 className="section-title">Inspiration</h3>
            </div>

            <div className="row post-carousel-twoCol post-carousel">
              {data
                ? data.articles.slice(1, 5).map((news) => (
                  <NewsItem news={news} layout={ITEM_TYPE.OVERLAY} />
                ))
                : "Loading"}
            </div>

            <div className="spacer" data-height="50"></div>

            <div className="section-header">
              <h3 className="section-title">Latest Posts</h3>

            </div>

            <div className="padding-30 rounded bordered">
              <div className="row">
                {data
                  ? data.articles.slice(0, 5).map((news) => (
                    <NewsItem news={news} layout={ITEM_TYPE.LARGE} />
                  ))
                  : <Loader />}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget rounded">
                <div
                  className="widget-about data-bg-image text-center"
                  data-bg-image="images/map-bg.png"
                >
                  <img src={logo} alt="logo" className="mb-4 App-logo" />
                  <p className="mb-4">
                    Hello, This is a React News Website. We provide latest
                    News Updates related to Business & Tech.
                  </p>
                </div>
              </div>

              <div className="widget rounded">
                <div className="widget-header text-center">
                  <h3 className="widget-title">Popular Posts</h3>

                </div>
                <div className="widget-content">
                  {data
                    ? data.articles.slice(0, 28).map((news) => (
                      <NewsItem news={news} layout={ITEM_TYPE.SMALL} />
                    ))
                    : <Loader />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
