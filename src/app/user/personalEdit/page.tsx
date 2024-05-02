import { HistoryProvider } from "@/context/HistoryProvider";
import PersonalEditContainer from "../../../components/organism/PersonalEditContainer";

export default function PersonalEdit() {
  return (
    <HistoryProvider>
      <PersonalEditContainer />;
    </HistoryProvider>
  );
}
