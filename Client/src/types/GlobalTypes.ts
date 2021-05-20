//ScripLists
export interface ScripLists {
    _id: Id;
    scripname: string;
    scripcode: string;
    scripmarket: string;
    currentprice: string;
    updown: string;
    color: string;
    candlestickpattern?: (CandlestickpatternEntity)[] | null;
    __v: number;
  }
  export interface Id {
    $oid: string;
  }
  export interface CandlestickpatternEntity {
    Date: string;
    Open: number;
    High: number;
    Low: number;
    Close: number;
    Adj?: number;
    Volume: number;
  }

  //News
  export interface MarketNews {
    _id: NewsId;
    stream?: (StreamEntity)[] | null;
    status: string;
  }
  export interface NewsId {
    $oid: string;
  }
  export interface StreamEntity {
    id: string;
    content: Content;
  }
  export interface Content {
    id: string;
    contentType: string;
    title: string;
    pubDate: string;
    thumbnail: Thumbnail;
    clickThroughUrl?: ClickThroughUrl | null;
    provider: Provider;
    finance: Finance;
  }
  export interface Thumbnail {
    resolutions?: (ResolutionsEntity)[] | null;
  }
  export interface ResolutionsEntity {
    url: string;
    width: number;
    height: number;
    tag: string;
  }
  export interface ClickThroughUrl {
    url: string;
  }
  export interface Provider {
    displayName: string;
  }
  export interface Finance {
    stockTickers?: (StockTickersEntity)[] | null;
  }
  export interface StockTickersEntity {
    symbol: string;
  }
  

  //search bar search

  export interface SearchScrip {
    _id: string;
    scripname: string;
    scripcode: string;
    currentprice: string;
    updown: string;
    color: string;
  }
  