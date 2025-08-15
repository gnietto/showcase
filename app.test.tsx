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

Deno.test("El componente Footer despliega contenido", async () => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Diseñado y codificado por Spaceger");
});

Deno.test("El componente Formulario despliega contenido", async () => {
    const res = await app.request("/");
    const contieneTexto = await res.text();
    expect(contieneTexto).toContain("Formulario");
});

Deno.test("La evaluación -mayor que- debe retornar docu2", () => {
  const docu2 = new DOMParser().parseFromString("<p>Felicitaciones! Tu respuesta es correcta</p>", "text/html");
  const docu3 = new DOMParser().parseFromString("<p>Error! Presiona el botón para conocer la respuesta correcta</p>", "text/html");
  console.log(docu2.textContent);
  const uno = 1;
  const dos = 2;

  const evaluacion = (dos > uno) ? docu2.textContent : docu3.textContent;
  expect(evaluacion).toContain("Felicitaciones!");
});

Deno.test("Las imágenes de frutas no deben ser iguales", () => {
  const canastaFrutas = [
    { nombre: "Manzana", precio: 1295, imagen: "🍎" },
    { nombre: "Pera", precio: 975, imagen: "🍐" },
    { nombre: "Cereza", precio: 2990, imagen: "🍒" },
    { nombre: "Naranja", precio: 995, imagen: "🍊" },
    { nombre: "Plátano", precio: 725, imagen: "🍌" },
    { nombre: "Piña", precio: 2590, imagen: "🍍" },
    { nombre: "Mango", precio: 3990, imagen: "🥭" },
    { nombre: "Frutilla", precio: 3790, imagen: "🍓" },
    { nombre: "Durazno", precio: 1490, imagen: "🍑" },
    { nombre: "Kiwi", precio: 3850, imagen: "🥝" },
    { nombre: "Limón", precio: 925, imagen: "🍋" },
  ];
  const seleccionFrutas = canastaFrutas.sort(() => 0.5 - Math.random()).slice(0, 3);
  console.log(seleccionFrutas[0]);
  console.log(seleccionFrutas[1]);
  console.log(seleccionFrutas[2]);
  expect(seleccionFrutas).not.toEqual(canastaFrutas);
});
