import { PluginOption } from "vite";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

function formatDate(value: string | number) {
  let fmt = "yyyy-MM-dd hh:mm:ss";
  let date = new Date(value);
  let o: { [name: string]: any } = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

function generateGitInfo() {
  try {
    execSync("git --version");
  } catch (error) {
    return {};
  }

  try {
    const branch = execSync("git branch")
      .toString()
      .split("\n")
      .filter((v) => v.startsWith("*"))[0]
      .slice(2);
    const commit = execSync("git show -s --format=%H").toString().trim(); // 当前提交的版本号
    const name = execSync("git show -s --format=%cn").toString().trim(); // 姓名
    const email = execSync("git show -s --format=%ce").toString().trim(); // 邮箱
    const date = formatDate(execSync("git show -s --format=%cd").toString()); // 日期
    const message = execSync("git show -s --format=%s").toString().trim(); // 提交说明

    return {
      branch,
      commit,
      message,
      name,
      email,
      date,
    };
  } catch (error) {
    return {};
  }
}

const ProjectInfo = (): PluginOption => {
  let outDir: string;
  return {
    name: "vite-plugin-project-info",
    configResolved(config) {
      outDir = config.build.outDir;
      console.log("outDir:", outDir);
    },
    closeBundle: () => {
      console.log("closeBundle");

      const content = JSON.stringify(generateGitInfo(), null, 4);
      fs.writeFileSync(
        path.join(process.cwd(), outDir, "project-info.json"),
        content
      );
    },
    enforce: "post",
    apply: "build",
  };
};

export default ProjectInfo;
