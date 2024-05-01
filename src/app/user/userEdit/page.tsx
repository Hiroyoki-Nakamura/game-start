import React from "react";
import UserEditContainer from "../../../components/organism/UserEditContainer";
import { HistoryProvider } from "../../../context/HistoryProvider";

export default function UserEdit() {
  return (
    <HistoryProvider>
  <UserEditContainer />
  </HistoryProvider>
  )
}
