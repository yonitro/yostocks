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
  const handleClick = (getdate) => {    
    inStockDateFilter({
      date: new Date(getdate),
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
        <div className="app-row">
        <div className="col-md-5">
      <ul className="dayslisting">
        <li><a href="#" data-val="1D" onClick={(d)=>{handleClick('2021-05-11')}}>1D</a></li>
        <li><a href="#" data-val="1W" onClick={(d)=>{handleClick('2021-05-06')}}>1W</a></li>
        <li><a href="#" data-val="1M" onClick={(d)=>{handleClick('2021-05-04')}}>1M</a></li>
        <li><a href="#" data-val="3M" onClick={(d)=>{handleClick('2021-02-13')}}>3M</a></li>
        <li><a href="#" data-val="6M" onClick={(d)=>{handleClick('2020-12-13')}}>6M</a></li>
        <li><a href="#" data-val="1Y" onClick={(d)=>{handleClick('2020-05-13')}}>1Y</a></li>
      </ul>
    </div>
        </div>
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
