import React, { useContext, useEffect } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, {
  dateFilter,
  Comparator,
} from "react-bootstrap-table2-filter";
import { GlobalContext } from "../../context/GlobalContext";
let inStockDateFilter;
interface ChoiceSelected {
  x: Date;
  Date: Date;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
}

const HistoricalScripData = () => {
  const { singleScrip } = useContext(GlobalContext);
  const [scrip] = singleScrip;

  const setDataPoints1: any = [];
  const setDataPoints2: any = [];
  const setDataPoints3: any = [];
  let ScripName: String = "";

  const columns = [
    {
      dataField: "Date",
      text: "Date",
      sort: true,
      filter: dateFilter({
        getFilter: (filter) => {
          inStockDateFilter = filter;
        },
      }),
    },
    {
      dataField: "Open",
      text: "Open",
      sort: true,
    },
    {
      dataField: "High",
      text: "High",
      sort: true,
    },
    {
      dataField: "Low",
      text: "Low",
      sort: true,
    },
    {
      dataField: "Close",
      text: "Close",
      sort: true,
    },

    {
      dataField: "Volume",
      text: "Volume",
      sort: true,
    },
  ];

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
  const handleClick = () => {
    inStockDateFilter({
      date: new Date("2018-12-24"),
      comparator: Comparator.GT,
    });
  };
  useEffect(() => {});
  return (
    <>
      <div>
        {/* <button className="btn btn-primary" onClick={handleClick}>
          {" "}
          1M{" "}
        </button> */}
        <BootstrapTable
          keyField="id"
          data={scrip.candlestickpattern}
          columns={columns}
          pagination={paginationFactory()}
          filter={filterFactory()}
        />
      </div>
    </>
  );
};

export default HistoricalScripData;
