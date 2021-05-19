import { prependOnceListener } from "process";
import React, { createContext, useState } from "react";
import {ScripLists, MarketNews, SearchScrip} from "../types/GlobalTypes"

export const GlobalContext = createContext<any | null>(null);

export const GlobalProvider = (props: any) => {
  const [search, setsearch] = useState<SearchScrip>();
  const [scrip, setScrip] = useState<ScripLists>();
  const [currentPage, setCurrentPage] = useState<string>("news");
  const [news, setNews] = useState<MarketNews>();
  
  return (
    <GlobalContext.Provider
      value={{
        searchScrip: [search, setsearch],
        singleScrip: [scrip, setScrip],
        pages: [currentPage, setCurrentPage],
        allNews: [news, setNews]
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
