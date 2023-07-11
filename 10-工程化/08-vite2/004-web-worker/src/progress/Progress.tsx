import { useRef, useState, useEffect } from "react";
import ProgressWorker from "./worker.ts?worker";

const Progress = () => {
  const { current: worker } = useRef(new ProgressWorker());
  const [progress, setProgress] = useState(0);

  function start() {
    worker.postMessage({ cmd: "start", max: 50 });
  }

  useEffect(() => {
    worker.addEventListener("message", (e) => {
      const data = e.data;
      if (data?.progress) {
        setProgress(data?.progress);
      }
    });

    return () => {
      worker.postMessage({ cmd: "stop" });
    };
  }, []);

  return (
    <div>
      <h1>Progress: {progress}</h1>
      <button onClick={start}>start</button>
    </div>
  );
};

export default Progress;
