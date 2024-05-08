import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Mission from "./components/Mission";
import Viden from "./components/Viden";
import Begivenheder from "./components/Begivenheder";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Home />
      <Mission />
      <Viden />
      <Begivenheder />
    </div>
  );
}

export default App;
