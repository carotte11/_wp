import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body = `<html>
    <!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>自我介紹</title>
  <style>
    body {
      font-family: "Helvetica", "Arial", sans-serif;
      background-color: #f0f8ff;
      color: #333;
      padding: 40px;
      text-align: center;
    }
    h1 {
      color: #0066cc;
    }
    ol {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin: 10px 0;
    }
    a {
      text-decoration: none;
      color: #0066cc;
      font-size: 20px;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #ff6600;
    }
  </style>
</head>
<body>
    <h1>我的自我介紹</h1>
    <ol>
    <li><a href="/name">姓名</a></li>
    <li><a href="/age">年齡</a></li>
    <li><a href="/gender">性別</a></li>
    <li><a href="/studentnumber">學號</a></li>
    </ol>
</body>
</html>
`
  } else if (pathname == '/name') {
    ctx.response.body = '李禹臻'
  } else if (pathname == '/age') {
    ctx.response.body = '19'
  }else if (pathname == '/gender') {
    ctx.response.body = '女'
  }else if (pathname == '/studentnumber') {
    ctx.response.body = '111310557'
  }
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })