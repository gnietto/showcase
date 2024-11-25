import {Hono} from "hono";
import {expect} from "jsr:@std/expect";
import {app} from "./app.tsx";


Deno.test("El servidor funciona correctamente", async (t) => {
  await t.step("responde con status 200", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
  });
});

Deno.test("<Presentacion /> despliega contenido", async (t) => {
  await t.step("<Presentacion /> despliega palabras clave", async (t) => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Spaceger");
    expect(contieneTexto).toContain("Agile");
    expect(contieneTexto).toContain("DevOps");
    expect(contieneTexto).not.toContain("Germ");
  })
 });

Deno.test("<Footer /> despliega contenido", async (t) => {
  await t.step("<Footer/> despliega palabras clave", async (t) => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Diseñado");
    expect(contieneTexto).toContain("Spaceger");
  });
 });
