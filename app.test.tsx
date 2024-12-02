import { Hono } from "hono";
import { expect } from "jsr:@std/expect";
import { app } from "./app.tsx";

Deno.test("El servidor funciona correctamente", async (t) => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
});

Deno.test("La página html está en modo estándar en vez de modo quirks", async (t) => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("<!doctype html>");
});

Deno.test("<Presentacion /> despliega contenido", async (t) => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Spaceger");
    expect(contieneTexto).toContain("Agile");
    expect(contieneTexto).toContain("DevOps");
    expect(contieneTexto).not.toContain("Germ");
});

Deno.test("<Footer /> despliega contenido", async (t) => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Diseñado");
    expect(contieneTexto).toContain("Spaceger");
});
