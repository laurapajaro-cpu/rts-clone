// src/Pages/OilGasIndustryPage.jsx
import { IndustriesTemplatePage } from "../Components";
import { industriesContent } from "../content/industries-content";

export default function OilGasIndustryPage() {
  return <IndustriesTemplatePage content={industriesContent.oilgas} />;
}