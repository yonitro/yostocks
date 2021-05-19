import React, { useContext, useRef, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import CanvasJS from "../../utils/chart/canvasjs.stock.min.js";

interface ChoiceSelected {
  x: Date;
  Date: Date;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
}

const Chart = () => {
  const mapContainerRef = useRef<HTMLDivElement | any | HTMLElement>(undefined);

  const { singleScrip } = useContext(GlobalContext);
  const [scrip] = singleScrip;

  const setDataPoints1: any = [];
  const setDataPoints2: any = [];
  const setDataPoints3: any = [];
  let ScripName: String = "";

  const initCanvas = () => {
    ScripName = scrip.scripname;
    scrip.candlestickpattern.map((el: ChoiceSelected, i) => {
      const item = {
        x: new Date(el.Date),
        y: [el.Open, el.High, el.Low, el.Close],
      };

      const item2 = { x: new Date(el.Date), y: el.Volume };
      const item3 = { x: new Date(el.Date), y: el.Close };
      setDataPoints1.push(item);
      setDataPoints2.push(item2);
      setDataPoints3.push(item3);
    });
  };
  initCanvas();

  useEffect(() => {
    var stockChart = new CanvasJS.StockChart(mapContainerRef.current, {
      theme: "light2",
      exportEnabled: true,
      title: {
        text: ScripName,
      },
      charts: [
        {
          axisY: {
            prefix: "$",
          },
          data: [
            {
              type: "candlestick",
              yValueFormatString: "$#,###.00",
              dataPoints: setDataPoints1,
            },
          ],
        },
      ],
      navigator: {
        data: [
          {
            color: "#6D78AD",
            dataPoints: setDataPoints2,
          },
        ],
        slider: {
          minimum: new Date("2018-04-01"),
          maximum: new Date("2018-06-01"),
        },
      },
    });
    stockChart.render();
  });
  return (
    <>
      <div>
        <div id="chartContainer" ref={mapContainerRef}></div>
      </div>
    </>
  );
};

export default Chart;
