const visor = document.querySelector(".visor")
const botoes = [...document.querySelectorAll(".btn")]

const btn_limpar = document.querySelector(".btn_limpar")
const btn_operador = [...document.querySelectorAll(".btn_operador")]
const btn_resultado = document.querySelector(".btn_resultado")

const resultado = document.querySelector(".resultado")

// ARRAY QUE ARMAZENA OS BOTÕES CLICADOS.
let array_conteudo = []

// ARRAY QUE ARMAZENA O "dataset" DE CADA BOTÃO CLICADO.
let array_data = []

// CONTROLADOR DOS BOTÕES DE OPERAÇÃO.
let sinal = false

// VERIFICA QUAL BOTÃO FOI CLICADO, INSERE SEU VALOR NO VISOR E FAZ UM PUSH DESTE VALOR E SEU DATASET EM SEUS RESPECTIVOS ARRAYS.
botoes.map((btn)=>{
    btn.addEventListener("click",(elemento)=>{

        // RETORNA O SINAL PRA FALSE PARA SER POSSÍVEL DIGITAR OPERADORES NOVAMENTE.
        sinal = false

        visor.innerHTML += elemento.target.innerHTML
        array_conteudo.push(elemento.target.innerHTML)

        array_data.push(elemento.target.dataset.content)
    })
})

// VERIFICA QUAL BOTÃO FOI CLICADO, INSERE SEU VALOR NO VISOR E FAZ UM PUSH DESTE VALOR E SEU DATASET EM SEUS RESPECTIVOS ARRAYS.
btn_operador.map((btn_op)=>{
    btn_op.addEventListener("click",(elemento)=>{

        // O IF FAZ UMA CHECAGEM NO CONTROLADOR E, SE ESTIVER FALSE, PERMITE DIGITAR UM OPERADOR.
        if(!sinal){

            // QUANDO O OPERADOR FOR DIGITADO, MUDA O CONTROLADOR PARA TRUE E BLOQUEIA A DIGITAÇÃO DE DOIS OPERADORES SEGUIDOS.
            sinal = true

            visor.innerHTML += elemento.target.innerHTML
            array_conteudo.push(elemento.target.innerHTML)
    
            array_data.push(elemento.target.dataset.content)
        }
    })
})

// LIMPA O CONTEÚDO DO VISOR E PASSA A USAR O ARRAY PARA MOSTRAR OS VALORES PARA SER POSSÍVEL APAGAR A INFORMAÇÃO DO VISOR DE UM POR UM COM O USO DO "pop()".
btn_limpar.addEventListener("click",()=>{

    sinal = false

    visor.innerHTML = ""

    array_conteudo.pop()

    // TAMBÉM LIMPA O CONTEÚDO DO ARRAY DATA PARA ESTAR DE ACORDO COM O QUE MOSTRA NO VISOR.
    array_data.pop()
    
    array_conteudo.map((ele)=>{
        visor.innerHTML += ele
    })
    
    // LIMPA A DIV USADA PELO ARRAY DATA E EVAL.
    resultado.innerHTML = ""
})

// BOTÃO "IGUAL".
btn_resultado.addEventListener("click",()=>{

    // VERIFICA SE HÁ ALGO DIGITADO NO VISOR.
    if(array_data.length == 0){
        alert("Sem valor para calcular.")

    }else{

        // SEMPRE QUE O BOTÃO FOZ CLICADO, LIMPA O ARRAY CONTEUDO PARA NÃO MOSTRAR NADA A MAIS NA TELA QUE NÃO SEJA O RESULTADO.
        array_conteudo = []
    
        // FAZ A INSERÇÃO DOS ELEMENTOS DO ARRAY DATA NA DIV RESULTADO.
        array_data.map((el)=>{
            resultado.innerHTML += el
        })
        
        // MOSTRA NO VISOR O RESULTADO DO EVAL QUE USOU A DIV RESULTADO PARA PODER EFETUAR O CÁLCULO.
        visor.innerHTML = eval(resultado.innerHTML)
    
        // LIMPA O ARRAY DATA.
        array_data = []

        // FAZ UM PUSH DO RESULTADO NO ARRAY DATA PARA SER POSSÍVEL EFETUAR CÁLCULOS COM O VALOR DO RESULTADO.
        array_data.push(visor.innerHTML)
    
        // LIMPA A DIV USADA PELO ARRAY DATA E EVAL.
        resultado.innerHTML = ""
    }
})