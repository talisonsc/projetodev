function toggleMode() {
  //dentro da função 'html.classList.toggle ('light'), já faz todo processo abaixo de troca de modo, uma função que já exite dentro do js.
  const html = document.documentElement
  if (html.classList.contains("light")) {
    //verificado no html se possui 'light' ou não, retorno de verdadeiro ou falso, caso verdadeiro, irá remover, caso falso irá adicionar a classe "light".
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  }
  // se tiver sem light mode, manter a imagem normal
  else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
