function criarCartao(categoria, pergunta, resposta) {
    let container = document.getElementById("container")
    let cartao = document.createElement('article')
    let respostaEstaVisivel = false
    function viraCartao(){
        respostaEstaVisivel =!respostaEstaVisivel
    }
    let respostaEstaVisivel = true
    cartao.className = 'cartao'
    cartao.innerHTML = `
    <div class="cartao_conteudo">
                    <h3>country life</h3>
                    <div class="cartao_conteudo_pergunta">
                        <p>como funciona a agricultura?</p>
                    </div>
                    <div class="cartao_conteudo_resposta">
                        <p>A plantação de milho e soja envolve o preparo do solo,
                            a escolha da semente adequada para as condições locais, o plantio com máquinas específicas
                            (plantadeiras) e o cuidado constante (tratos culturais) para proteger as plantas de pragas e
                            doenças. Por fim, a colheita é realizada quando os grãos atingem o ponto ideal, garantindo a
                            produtividade da lavoura.</p>
                    </div>
                </div>
                `
                 container.appendChild(cartao)


    respostaEstaVisivel = !respostaEstaVisivel
}
