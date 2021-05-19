import React, { useState } from "react";
import { Tabs } from "react-simple-tabs-component";
import ScripQuote from "../widgets/ScripQuote";
import ScripSummary from "../widgets/ScripSummary";
import Chart from "../widgets/Chart";
import HistoricalScripData from "../widgets/HistoricalScripData";

const tabs = [
  {
    label: "Summary",
    index: 1,
    Component: ScripSummary,
  },
  {
    label: "Chart",
    index: 2,
    Component: Chart,
  },
  {
    label: "Historical Data",
    index: 3,
    Component: HistoricalScripData,
  },
];

export default function ScripDetails() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].index);
  return (
    <div className="app-row">
      <ScripQuote />
      <Tabs tabs={tabs} onClick={setSelectedTab} selectedTab={selectedTab} />
    </div>
  );
}
