import styled from "styled-components";

import urlImage from "./assets/test.jpeg";
import txtRaw from "./assets/test.txt?raw";

const urlImage2 = new URL("./assets/test.jpeg", import.meta.url).href;

const Image = styled.img`
  width: 320px;
`;

const App = () => {
  return (
    <>
      <h1>Hello React!</h1>
      <div>
        <hr />
        <h2>public Dir下的资源文件</h2>
        <Image src="/images/test.jpeg" alt="" />
      </div>

      <div>
        <hr />
        <h2>public Dir下的资源文件(不在默认定义中)</h2>
        <a href="/assets/test.pptx">点我下载</a>
      </div>

      <div>
        <hr />
        <h2>assets下的资源文件(默认为url)</h2>
        <Image src={urlImage} alt="" />
      </div>

      <div>
        <hr />
        <h2>assets下的资源文件(raw)</h2>
        <div>{txtRaw}</div>
      </div>

      <div>
        <hr />
        <h2>assets下的资源文件(new URL)</h2>
        <Image src={urlImage2} alt="" />
      </div>
    </>
  );
};

export default App;
