import React, { useState, useEffect } from "react";
import ServicesApi from "../../api/services";

const MarketSummary = () => {
  const [summary, serSummary] = useState<any>([]);

  useEffect(() => {
    const getSingleScrip = () => {
      const fetchNews = async () => {
        const { data } = await ServicesApi.get<[]>("scriplists");
        return data;
      };
      fetchNews()
        .catch((e) => {})
        .then((data) => {
          serSummary(data);
        })
        .finally(() => {});
    };
    getSingleScrip();
  }, []);
  return (
    <>
      <div className="market-summry">
        <ul className="ul-block">
          {summary.map((el: any, i: number) => {
            return (
              <li className="li-block" key={i}>
                <div className="li-left">
                  <a
                    href="#"
                    className="summary-scrip-name"
                    // // onClick={getSingleScrip}
                  >
                    {el.scripcode}
                  </a>
                  <span className="summary-scrip-price">{el.currentprice}</span>
                  <span className="summary-scrip-price-indi-prof">
                    <span style={{ color: el.color }} className="">
                      {el.updown}
                    </span>
                  </span>
                </div>
                <div className="li-right">
                  <a
                    href="#"
                    className="msummary-chart"
                    style={{ color: el.color }}
                  >
                    {el.color === "green" && (
                      <i className="fas fa-sort-amount-up-alt"></i>
                    )}
                    {el.color === "red" && (
                      <i className="fas fa-sort-amount-down-alt"></i>
                    )}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MarketSummary;
