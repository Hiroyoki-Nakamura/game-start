import React from "react";
import PersonalEditContainer from "../../../components/organism/PersonalEditContainer";
import { HistoryProvider } from "../../../context/HistoryProvider";

export default function PersonalEdit() {
  return (
    <HistoryProvider>
      <PersonalEditContainer />
    </HistoryProvider>
  );
}
