# 谷歌浏览器插件
[![Build Status](https://travis-ci.org/loatheb/shanbay-chrome-extension.svg?branch=master)](https://travis-ci.org/loatheb/shanbay-chrome-extension)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
>目前仅能在[https://www.theguardian.com/](https://www.theguardian.com/)下使用，支持任何一篇文章

### 功能特点
 1. 自动剔除网页中除文章外的其它元素（广告，评论等）
 2. 自动适应屏幕，将文章分页
 3. 通过调用扇贝网的单词查询API,双击即可对选中的单词进行中文释义

### 使用方法
1. 点击 [这里](https://github.com/loatheb/chrome-extension/archive/master.zip) 下载本项目到本地，并解压。
2. 在谷歌浏览器中输入：__chrome://extensions__ 进入扩展程序界面，并勾选 __开发者模式__ 。
3. 选择打包扩展程序，在 __扩展程序根目录__ 中选择解压后的源文件，选择 __shanbay__ 文件夹并确定。
4. 在代码根目录下出现 __shanbay.crx__ 文件，之后选择 __加载已解压到扩展程序...__ ，找到对应的 __shanbay.crx__ 文件确认即可。
5. 进入 [https://www.theguardian.com/](https://www.theguardian.com/) 选择任意一篇文章，等待之后便可以查看插件效果。
6. 双击即可选中单词，之后进行中文释义。

### 自定义构建
1. 解压代码之后，`npm i` 安装所有依赖。
2. 在做适当更改和构建之后，`npm run lint` 进行代码静态检查。
3. `npm run build` 进行构建，生成 __dist__ 目录，之后即可重复上面的使用方法进行重新打包测试。

### 预览
**使用前:**

![未使用插件前网页样式](https://github.com/zhangzhao77/chrome-extension/blob/master/imgs/before.png)

**使用后:**

![使用插件后的样式1](https://github.com/zhangzhao77/chrome-extension/blob/master/imgs/after1.png)

![使用插件后的样式2](https://github.com/zhangzhao77/chrome-extension/blob/master/imgs/after2.png)

![使用插件后的样式3](https://github.com/zhangzhao77/chrome-extension/blob/master/imgs/after3.png)

### TODO
* [ ] 增加 AMD 或者 ES6 import 的模块化引入，目前只是简单使用 `gulp-concat` 进行连接
* [ ] 美化 UE
