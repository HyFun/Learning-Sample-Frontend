import "@styles/App.css";
import style from "@styles/test.module.css";
import less from "@styles/less.module.less";
import sass from "@styles/sass.module.scss";
import stylus from "@styles/stylus.module.styl";

const App = () => {
  return (
    <>
      <h1 className="title">
        Hello React <span>!!!</span>
      </h1>
      <h2 className={style.title}>css module test</h2>
      <h2 className={less.title}>
        less test <span>!!!</span>
      </h2>
      <h2 className={sass.title}>
        sass test <span>!!!</span>
      </h2>
      <h2 className={stylus.title}>
        stylus test <span>!!!</span>
      </h2>
    </>
  );
};

export default App;
