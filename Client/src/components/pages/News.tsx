import React, { useState, useEffect } from "react";
import ServicesApi from "../../api/services";
import Add from "../../styles/images/add2.jpg";
const News = () => {
  const [news, setNews] = useState([]);
  let dataHolder: any = [];

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await ServicesApi.get<[]>("news");

      return data;
    };
    fetchNews()
      .catch((e) => {})
      .then((data) => {
        if (data !== undefined) {
          data.map((el: any, i) => {
            setNews(el.stream);
            dataHolder.push(el.stream);
          });
        } else {
          console.log("error--------");
        }
      })
      .finally(() => {});
  }, []);
  return (
    <>
      <div className="app-row">
        <div className="newsHolder-left">
          <div className="news-is-left">
            {news.map((newsItem: any, i) => {
              return (
                <>
                  {i === 0 && (
                    <div className="news-first" key={`big_${i}`}>
                      <img alt="news"
                        src={newsItem.content.thumbnail.resolutions[3].url}
                      />
                      <a
                        href={newsItem.content.clickThroughUrl.url}
                        className="title"
                      >
                        {newsItem.content.title}
                      </a>
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <div className="news-is-right">
            {news.map((newsItemx: any, j) => {
              return (
                <>
                  {j > 0 && j < 4 && (
                    <div className="news-x" key={`small_${j}`}>
                      <div className="news-second">
                        <img alt={"News"}
                          src={newsItemx.content.thumbnail.resolutions[1].url}
                        />
                        <a href="#" className="title">
                          {newsItemx.content.title}
                          <span className="">
                            {newsItemx.content.provider.displayName}
                          </span>
                        </a>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <div className="newsHolder-right">
          <img src={Add}/>
          <div className="spacer"></div>
        </div>
        <div className="spacer"></div>
      </div>
    </>
  );
};

export default News;
