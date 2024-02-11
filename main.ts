import { Hono } from "https://deno.land/x/hono@v4.0.0/mod.ts";
import { html, css, Style } from "https://deno.land/x/hono/helper.ts";

export const app = new Hono();

app.get("/", (c) => {
  return c.text("Gamma Tech & Life");
});

app.get("/dashboard", (c) => {
  return c.text("Dashboard");
});

app.get("/frutakids", (c) => {
  return c.text("Frutakids");
});

app.get("/horoscopo", (c) => {
  return c.text("Horoscopo");
});



Deno.serve(app.fetch);
