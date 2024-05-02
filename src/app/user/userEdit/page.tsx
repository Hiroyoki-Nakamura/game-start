import { HistoryProvider } from "@/context/HistoryProvider";
import UserEditContainer from "../../../components/organism/UserEditContainer";

export default function UserEdit() {
  return( 
    <HistoryProvider>
  <UserEditContainer />
  </HistoryProvider>
  )
}
