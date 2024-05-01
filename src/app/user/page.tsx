import React from "react";
import UserContainer from "../../components/organism/UserInfoContainer";
import { HistoryProvider } from "../../context/HistoryProvider";

export default function User() {
  return (
    <HistoryProvider>
      <UserContainer />
    </HistoryProvider>
  );
}
