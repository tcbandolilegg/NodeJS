const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.end("<h1> Olá você acessou a Raiz</h1>")

})


app.get("/users", (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.json({
    users: [{
      participante: "Iris Rocha Campos",
      nomeNegocio: "B.Girl",
      mentoriaPerformance: "OK",
      checkPonit_1: "OK",
      Mentora: "Gabriela Serpa",
      estagio: "Oficialmente lançado",
      eMail: "iriscampos@me.com",
      celular: "11971272027",
      cidadeEstado: "São Paulo -SP",
      linkedin: "https://www.linkedin.com/in/iris-rocha-45a986125/",
      instagramPessoal: "https://www.instagram.com/iris.rocha.campos/",
      siteDaEmpresa: "https://www.instagram.com/b.girl_brasil/",
      redesSociaisEmpresa: "https://bgirlbrasil.com.br/",
      segmentoDaEmpresa: "Tecnologia",
      tipoNegocio: "Serviços",
      descricaoNegocio: "Uma adtech especializada em comunicação com as adolescentes das novas gerações, que cria desafios online para promover mídia espontânea nas redes sociais para marcas ao mesmo tempo que as auxilia na sua fixação como agente transformador, gerando impacto nessa comunidade, através do desenvolvimento de soft skills e da auto estima positiva"
    },
    {
      Participante: "Natália Titos",
      nomeNegocio: "B.Girl",
      mentoriaPerformance: "OK",
      checkPonit_1: "OK",
      Mentora: "Gabriela Serpa",
      estagio: "Oficialmente lançado",
      eMail: "nataliattitos@gmail.com",
      celular: "11976275135",
      cidadeEstado: "São Paulo - SP",
      linkedin: "https://www.linkedin.com/in/natalia-titos-21064b2b/",
      instagramPessoal: "https://www.instagram.com/nataliatitos/",
      siteDaEmpresa: "https://bgirlbrasil.com.br/",
      redesSociaisEmpresa: "Não localizado",
      segmentoDaEmpresa: "Moda",
      descricaoNegocio: "Uma adtech especializada em comunicação com as adolescentes das novas gerações, que cria desafios online para promover mídia espontânea nas redes sociais para marcas ao mesmo tempo que as auxilia na sua fixação como agente transformador, gerando impacto nessa comunidade, através do desenvolvimento de soft skills e da auto estima positiva"
    }]
  })
})


app.listen(3000, "127.0.0.1", () => {
  console.log("server rodando")
})

