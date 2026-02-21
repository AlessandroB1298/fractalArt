import { LineSquiggle } from "lucide-react";
import "./App.css";
import CanvasContainer from "./components/canvas";
function App() {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen w-full">
      <div className="p-2 z-10 flex flex-row justify-center">
        <LineSquiggle size={55} />
        <h1 className="font-bold">Welcome to Fractal Art</h1>
      </div>
      <div className="flex items-center justify-center z-10">
        <CanvasContainer />
      </div>
    </div>
  );
}

export default App;
