/*

  - TODO 1: Criar um servidor que recebe requisições HTTP na porta 8000 e responde com o conteúdo de um arquivo HTML.
  - TODO 2: Se for acessada a URL http://localhost:8000/about deve mostrar o conteúdo da pagina `pages/about.html`
  - TODO 3: Se for acessada a URL http://localhost:8000/ ou http://localhost:8000/home deve mostrar o conteúdo da pagina `pages/index.html`
  - TODO 4: Se for acessada qualquer outro caminho deve mostrar o conteúdo da pagina `pages/404.html`
 

  OBS: Deve ser utilizado apenas os módulos nativos do NODE (http, path, fs, etc), nada de instalar outras libs ( ˘︹˘ )
*/

const http = require("http")
const fs = require("fs").promises


const host = 'localhost'
const port = 8000

const requestListener = function (request , response){
  response.setHeader("Content-Type", "text/html")
  response.writeHead(200)
  console.log(request.url)
  if (request.url == "/home" ||request.url == "/" ) {
    
    fs.readFile("./pages/index.html").then(data => {response.end(data)})

  }if (request.url == "/about") {
    fs.readFile("./pages/about.html").then(data => {response.end(data)})
    
  }else{
    fs.readFile("./pages/404.html").then(data => {response.end(data)})
  }
}

const server = http.createServer(requestListener)
server.listen(port, host, ()=>{
  console.log(`server is running on: http://${host}:${port}`)
})