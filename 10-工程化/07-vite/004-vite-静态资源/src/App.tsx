import styled from "styled-components";

import imageUrl from "@/assets/liukanshan.jpeg?url";
import { name } from "@/assets/test.json";
import pptUrl from "@/assets/test.pptx?url";

const Image = styled.img`
  display: flex;
  width: 200px;
  margin: auto;
`;

const App = () => {
  return (
    <>
      <h1>Hello React!</h1>
      <Image src={imageUrl} />
      <p>姓名：{name}</p>
      <a href={pptUrl}>下载ppt</a>
      &nbsp;
      <a href="/test.pptx">下载public里ppt</a>
    </>
  );
};

export default App;
