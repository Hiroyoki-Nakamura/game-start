import { HistoryProvider } from "@/context/HistoryProvider";
import HomeContainer from "../components/organism/HomeContainer";

export default function Home() {
  return (
    <HistoryProvider>
      <HomeContainer />
    </HistoryProvider>
  );
}
