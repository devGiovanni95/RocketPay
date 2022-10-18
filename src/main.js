/*Utilizamos o vite para criar o projeto empacotado */
import "./css/index.css"

//atribuindo ao ccBgColor01 = o valor da classe no html cc-bg dentro do svg sendo o primeiro g
const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")

//2 cor
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")

//Trocando a logo
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

console.log(ccBgColor01)

function setCardType(type) {
  //criando uma lista  de cores para as bandeiras dos cartoes
  const colors = {
    visa: ["#436d99", "#2d57f2"],
    mastercard: ["#df6f29", "#c69347"],
    default: ["black", "gray"],
    bitcoin: ["#FF3C21", "#FFA724"],
    nubank: ["#8439FF", "#4F0BDF", "red"],
  }

  //mudando a cor do atributo fill para verde
  //ccBgColor01.setAttribute("fill", "green")

  //Maneira de pegar as corias atraves de variaveis do tipo do cartao
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  //Setando o logo
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

//mudando manualmente o tipo de cartao
setCardType("nubank")

//Colocando como uma variavel global para ser acessada de qualquer local
globalThis.setCardType = setCardType
