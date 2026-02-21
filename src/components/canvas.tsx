import { useRef } from "react";
import { Button } from "./ui/button";

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = canvasRef.current!;

  return (
    <div>
      <div>
        <canvas
          style={{ backgroundColor: "white", borderRadius: 10 }}
          width={600}
          height={400}
          ref={canvasRef}
        />
      </div>
    </div>
  );
}

export default function CanvasContainer() {
  return (
    <div>
      <div>
        <Canvas />
      </div>
      <div className="flex flex-row items-center justify-center z-10 mt-10 gap-4 ">
        <Button>Screen Shot</Button>
        <Button>Generate New</Button>
      </div>
    </div>
  );
}
