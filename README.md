## OpenSumi Web 集成示例

本项目为基于 OpenSumi 框架的 Web 版 IDE 集成示例

### 项目结构
```bash
.
└── workspace                   # 工作目录
├── extensions                  # 插件目录
├── src
│   ├── browser
│   └── node
├── tsconfig.json
├── webpack.browser.config.js
├── webpack.node.config.js
├── package.json
└── README.md
```

### 启动

```bash
$ git clone git@github.com:opensumi/ide-startup.git
$ cd startup
$ yarn install				  # 安装依赖
$ yarn run prepare			# 运行 prepare，编译 Node.js 和 WebWorker 两个插件环境, 下载默认插件
$ yarn run start			  # 启动前端、后端服务器及 Webview Host
```

浏览器打开 http://127.0.0.1:8080

![OpenSumi](./snapshots/sumi-startup.png)
