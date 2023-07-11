let timer: any;
let progress = 0;
let max = 0;

function start() {
  stop();
  if (progress >= max) {
    return;
  }
  progress++;
  console.log("worker", progress);
  self.postMessage({ progress });
  timer = setTimeout(start, 1000);
}

function stop() {
  !!timer && clearTimeout(timer);
  timer = null;
}

self.addEventListener("message", (e) => {
  const data = e.data;
  switch (data.cmd) {
    case "start":
      max = data.max;
      start();
      break;
    case "stop":
      stop();
      break;
    default:
      break;
  }
});
