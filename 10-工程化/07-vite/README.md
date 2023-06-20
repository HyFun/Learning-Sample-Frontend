# Vite

## 环境变量

> vite 中默认集成了[dotenv](https://www.npmjs.com/package/dotenv)设置环境变量。如果还不熟悉使用 dotenv，可查看 https://juejin.cn/post/6844904198929121288

**加载规则**

1. `.env`文件会作为各个环境的公共文件，除非里面的环境变量被覆盖
2. 执行`vite`指令，默认使用的 mode 是 `development`，它会去找 env 目录下加载`.env`文件，然后加载`.env.development`文件来与之前内容进行合并
3. 执行`vite build`则使用的 mode 是 `production`，它会去找 env 目录下加载`.env`文件，然后加载`.env.production`文件来与之前内容进行合并
4. 可以通过修改 mode 的方式，来改变加载的文件。如：`vite --mode test`就表示 mode 为 test，它会去加载 `.env.test`文件

### envDir

可通过这个属性指定 env 文件的目录

### envPrefix

默认值为`VITE_`

> 如果不以`envPrefix`开头，环境变量不会被注入到 process.env 中

## CSS 配置

与 webpack 不同，
vite 是支持加载 less、sass、stylus 的，只需要安装对应的安装包即可

### less

> yarn add -D less

就能开启 less 功能了

配置如下：

**两种方法添加 less 的全局变量**

- 使用`globalVars`

  ```js
  css: {
    // options
    preprocessorOptions: {
      less: {
        globalVars: {
          mainColor: "blue",
        },
      },
    },
    devSourcemap: true,
  },
  ```

- 使用`additionalData`

  ```js
  less: {
    javascriptEnabled: true,
    additionalData:  `@import "${resolve(__dirname, 'src/assets/styles/base.less')}";`
  }
  ```

### post css

```js
import postcssPresetEnv from "postcss-preset-env";
css: {
  postcss: {
    plugins: [postcssPresetEnv()],
  },
},
```

## 静态资源

vite 内部声明了一些资源文件如下

```js
const KNOWN_ASSET_TYPES = [
  // images
  "png",
  "jpe?g",
  "jfif",
  "pjpeg",
  "pjp",
  "gif",
  "svg",
  "ico",
  "webp",
  "avif",
  // media
  "mp4",
  "webm",
  "ogg",
  "mp3",
  "wav",
  "flac",
  "aac",
  "opus",
  // fonts
  "woff2?",
  "eot",
  "ttf",
  "otf",
  // other
  "webmanifest",
  "pdf",
  "txt",
];
```

以上的文件会被当做静态文件来解析，默认使用 url 地址来显示

```js
import imageUrl from "./assets/liukanshan.jpeg";
<img src={imageUrl} />;
```

如果静态资源文件不在上述列表中，那么可以手动使其用 url 方式加载，只需要在文件后边添加标识即可

```js
import imageUrl from "./assets/liukanshan.jpeg?url";
```

或者更新配置扩充上述的列表：

```js
export default defineConfig({
  assetsInclude: ["**/*.gltf"],
});
```

### public 目录

如果你有下列这些资源：

不会被源码引用（例如 robots.txt）

必须保持原有文件名（没有经过 hash）

...或者你压根不想引入该资源，只是想得到其 URL。
那么你可以将该资源放在指定的 public 目录中，它应位于你的项目根目录。该目录中的资源在开发时能直接通过 / 根路径访问到，并且打包时会被完整复制到目标目录的根目录下。

目录默认是 <root>/public，但可以通过 publicDir 选项 来配置。

**注意：public 文件夹中的资源引入不需要添加`public`，比如 public 文件夹下有 test.png，在代码中引入`<img src="/test.png"/>`即可**

