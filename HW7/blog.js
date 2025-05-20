import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as view from './render.js';

const articles = 
[
  { id: 0, title: "A Peaceful Mind", body: "Living mindfully every day.", created_at: new Date() },
  { id: 1, title: "On Growth", body: "Improving a bit every day leads to big results.", created_at: new Date() }
];

const router = new Router();

router
  .get("/", showList)
  .get("/article/new", showForm)
  .get("/article/:id", viewArticle)
  .post("/article", saveArticle);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function showList(ctx) {
  ctx.response.body = await view.list(articles);
}

async function showForm(ctx) {
  ctx.response.body = await view.newArticle();
}

async function viewArticle(ctx) {
  const id = ctx.params.id;
  const article = articles[id];
  if (!article) ctx.throw(404, "Article not found.");
  ctx.response.body = await view.detail(article);
}

async function saveArticle(ctx) {
  const body = ctx.request.body({ type: "form" });
  const data = await body.value;
  const newArticle = {};

  for (const [key, value] of data.entries()) {
    newArticle[key] = value;
  }

  const id = articles.push(newArticle) - 1;
  newArticle.id = id;
  newArticle.created_at = new Date();

  ctx.response.redirect("/");
}

console.log("Server is running on http://127.0.0.1:8000");
await app.listen({ port: 8000 });