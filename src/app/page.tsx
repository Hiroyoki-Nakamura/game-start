import HomeContainer from "../components/organism/HomeContainer";

import { HistoryProvider } from "../context/HistoryProvider";

export default function Home() {
  return (
    <HistoryProvider>
      <HomeContainer />
    </HistoryProvider>
  );
}
