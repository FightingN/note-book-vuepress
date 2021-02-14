## 项目 debugger 调试

[egg 官网教程](https://eggjs.org/zh-cn/core/development.html#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA)

[vscode 的另外一种模式](https://segmentfault.com/a/1190000021259583)

- 最近做 egg 和 vue 的项目,发现在 egg 代码中写无法进行 debugger 调试，很不方便。

### 方案 1

- 在 egg 项目的 package.json 文件中

  ```js
      "debug": "egg-bin debug",
  ```

- 命令行运行 npm run debug
  <img :src="$withBase('/image/egg/egg1.png')" alt="">

- 在谷歌浏览器访问 `chrome://inspect`配置端口号
  <img :src="$withBase('/image/egg/egg2.png')" alt="">

- 点击 Open dedicated DevTools for Node

- 会打开控制台跟 html5 调试的控制台是一样的

- 在 egg 代码中需要断电的地方写 debugger,此时就可以正常使用 debugger 了

### 方案 2

- 直接在 vscode 中进行调试

- 点击调试按钮配置 launch.json 文件

```js
{
  "version": "0.2.0",
  "configurations": [{
    "name": "Launch Egg",
    "type": "node",
    "request": "launch",
    "cwd": "${workspaceRoot}",
    "runtimeExecutable": "npm",
    "windows": {
      "runtimeExecutable": "npm.cmd"
    },
    "runtimeArgs": [
      "run",
      "debug"
    ],
    "console": "integratedTerminal",
    "protocol": "auto",
    "restart": true,
    "port": 9999,
    "autoAttachChildProcesses": true
  }]
}
```

- 这里有个坑，官方给的端口号是 9229，但是运行调试不成功，不知道原因，这里改成 9999 端口号就可以调试成功了
- 可以在代码中写 debugger 或者是打小红点，然后访问下使用到的接口，vscode 就可以正常进入到 debugger 中
<img :src="$withBase('/image/egg/egg3.png')" alt="">
