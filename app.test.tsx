import {DOMParser} from "@b-fuze/deno-dom"
import {expect} from "@std/expect";
import {app} from "./app.tsx";


Deno.test("El servidor sirve el documento con status 200 (ok)", async () => {
    const res = await app.request("/");
    expect(res.status).toBe(200);
});

Deno.test("El documento html es servido en modo estándar html5", async () => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("<!doctype html>");
});

Deno.test("El componente Presentacion despliega contenido", async () => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Spaceger es el espacio digital");
});

Deno.test("El componente Frutakids despliega contenido", async () => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("static/cliente1.js");
});

Deno.test("El componente Calculadora despliega contenido", async () => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Calculadora básica");
});
