import express from "express";
// @types/express
const app = express();

/**
 * Get    => Buscar uma informação
 * Post   => Inserir (Criar) uma informação
 * Put    => Alterar uma informação
 * Delete => Remover um dado
 * Patch  => Alterar uma informação específica
 */

app.get("/test", (request, response) => {
  //Request   => Entrando
  //Response  => Response
  return response.send("Olá NLW")
})

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW")
})

//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));