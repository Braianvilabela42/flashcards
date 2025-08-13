function criacartao(categoria, pergunta, resposta){
 const container= document.getElementById('container')
 const cartao = document.createElement('article')
cartao.className = 'cartao'
}

cartao.innerHTML = `
        <div class="cartao_conteudo">
            <h3>${categoria}</h3>
            <div class="pergunta">
                ${pergunta}
            </div>
            <div class="resposta">
                ${resposta}
            </div>
        </div>
    `
            let respotavisivel = false
            function viraCartao(){
                resposivel = respotavisivel
                cartao.classlist.toggle("active", respotavisivel)
            }
            cartao.addvertListner()
    cartao.innerHTML =
    <div class="cartao_conteudo"

        }