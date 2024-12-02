import { Hono } from "hono";
import { expect } from "jsr:@std/expect";
import { app } from "./app.tsx";

Deno.test("El servidor funciona correctamente", async (t) => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
});

Deno.test("El documento html es servido en modo estándar html5", async (t) => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("<!doctype html>");
});

Deno.test("El componente Presentacion despliega contenido", async (t) => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Spaceger");
    expect(contieneTexto).toContain("Agile");
    expect(contieneTexto).toContain("DevOps");
    expect(contieneTexto).not.toContain("Germ");
});

Deno.test("El componente Footer despliega contenido", async (t) => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Diseñado");
    expect(contieneTexto).toContain("Spaceger");
});
