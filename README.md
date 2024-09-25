# Bugs：

1. 由于对 react-pdf 的 api 不熟悉，渲染的 pdf 页面下边同时出现了 pdf 的文字内容，但是旋转过后下载的 pdf 没问题。

2. next.js 也是第一次写，一直报 `TypeError: Promise.withResolvers is not a function` 的错误，暂时没有解决，vercel 也因为这个错误部署失败。

## 安装依赖

```bash
npm install
```

## 运行

```bash
npm run dev
```

在浏览器访问 http://localhost:3000 查看效果。
