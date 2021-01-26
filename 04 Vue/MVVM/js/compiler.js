/*
 * @Author       : HyFun
 * @Date         : 2021-01-25 13:47:10
 * @Description  : Compiler
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-01-26 19:57:22
 */
const REG_EXPR = /\{\{([^}]+)\}\}/g;

class Compiler {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    // 首先将el中的dom全部取出来放到fragment中
    if (this.el) {
      const fragment = this.node2fragment(this.el);
      this.compile(fragment);
      this.el.appendChild(fragment);
    }
  }
  // -----------
  // dom -> AST
  node2fragment(node) {
    const fragment = document.createDocumentFragment();
    const childNodes = node.childNodes;
    Array.from(childNodes).forEach((item) => {
      fragment.appendChild(item);
    });
    return fragment;
  }

  // AST -> VNode
  compile(fragment) {
    const children = fragment.childNodes;
    Array.from(children).forEach((node) => {
      if (this.isElementNode(node)) {
        // 编译element
        this.compileElement(node);
        // 继续compile
        this.compile(node);
      } else {
        // 编译文字
        this.compileText(node);
      }
    });
  }

  compileElement(node) {
    const attrs = node.attributes;
    Array.from(attrs).forEach((attr) => {
      const name = attr.name;
      const expr = attr.value;
      if (/^(v-)/g.test(name)) {
        const [, methodName] = name.split("-");
        typeof CompileUtil[methodName] === "function" &&
          CompileUtil[methodName](node, this.vm, expr);
      }
    });
  }

  compileText(node) {
    const value = node.textContent;
    // 判断如果是
    if (this.getExprReg().test(value)) {
      typeof CompileUtil["text"] && CompileUtil["text"](node, this.vm, value);
    }
  }
  // -----------
  isElementNode(node) {
    return node.nodeType === 1;
  }

  getExprReg() {
    return REG_EXPR;
  }
}

CompileUtil = {
  model(node, vm, expr) {
    const value = this.getValue(expr, vm._data);
    new Watcher(vm._data, expr, (newVal) => {
      CompileUpdator.updateModel(node, newVal);
    });
    node.addEventListener("input", (e) => {
      this.setValue(expr, vm._data, e.target.value);
    });
    CompileUpdator.updateModel(node, value);
  },
  text(node, vm, expr) {
    expr.replace(REG_EXPR, (...args) => {
      new Watcher(vm._data, args[1], (newVal) => {
        const val = this.getTextValue(expr, vm._data)
        console.log(val);
        CompileUpdator.updateText(node, this.getTextValue(expr, vm._data));
      });
    });

    CompileUpdator.updateText(node, this.getTextValue(expr, vm._data));
  },
  // -------辅助方法------
  /**
   * 通过expr得到data中的数据
   */
  getValue(expr, data) {
    return expr.split(".").reduce((res, item) => res[item], data);
  },
  setValue(expr, data, value) {
    const exprs = expr.split(".");
    exprs.reduce((res, item, index) => {
      if (index === exprs.length - 1) {
        res[item] = value;
      }
      return res[item];
    }, data);
  },
  getTextValue(expr, data) {
    return expr.replace(REG_EXPR, (...args) => {
      return this.getValue(args[1], data);
    });
  },
};

CompileUpdator = {
  updateModel(node, value) {
    node.value = value;
  },
  updateText(node, value) {
    node.textContent = value;
  },
};
