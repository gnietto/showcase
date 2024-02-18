import { Hono } from "https://deno.land/x/hono@v4.0.0/mod.ts";
import { assertEquals } from "https://deno.land/std@0.215.0/assert/mod.ts";

Deno.test("El servidor sirve el recurso", async () => {
  const app = new Hono();
  app.get("/", (c) => c.text("Gamma Tech and Life"))
  const res = await app.request("http://localhost/");
  assertEquals(res.status, 200);
});

// Deno.test("El usuario puede ver el título principal ", async () => {
//   const app = new Hono();
//   app.get("/", (c) => c.text("Gamma Tech and Life"))
//   const res = await app.request("http://localhost/");
//   assertEquals(res.text(), "Gamma Tech and Life");
// });
