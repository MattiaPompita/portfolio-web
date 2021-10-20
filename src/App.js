import ChiSono from "./components/ChiSono";

import Homepage from "./components/Homepage";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <Homepage />
      <ChiSono />
    </SmoothScroll>
  );
}

export default App;
