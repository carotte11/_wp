export async function list(articles) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Articles</title>
    </head>
    <body>
      <h1>All Articles</h1>
      <ul>
        ${articles.map(a => `<li><a href="/article/${a.id}">${a.title}</a> - ${a.created_at.toLocaleString()}</li>`).join("")}
      </ul>
      <p><a href="/article/new">Write a new article</a></p>
    </body>
    </html>
  `;
}

export async function newArticle() {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>New Article</title>
    </head>
    <body>
      <h1>New Article</h1> <!-- 使用 POST 方法將表單送到 /article -->
      <form action="/article" method="POST">
        <p>Title: <input type="text" name="title" required></p>  <!-- 輸入標題 -->
        <p>Body:<br><textarea name="body" rows="10" cols="50" required></textarea></p>
        <p><button type="submit">Submit</button></p>
      </form>
      <p><a href="/">Back to list</a></p>
    </body>
    </html>
  `;
}

export async function detail(article) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${article.title}</title> <!-- 網頁標題使用文章標題 -->
    </head>
    <body>
      <h1>${article.title}</h1> <!-- 顯示文章標題 -->
      <p>${article.body}</p> <!-- 顯示文章內容 -->
      <small>Posted on: ${new Date(article.created_at).toLocaleString()}</small>
      <p><a href="/">Back to list</a></p> <!-- 返回文章列表 -->
    </body>
    </html>
  `;
}
