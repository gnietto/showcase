import { app } from "./app.tsx";

Deno.serve(app.fetch);
