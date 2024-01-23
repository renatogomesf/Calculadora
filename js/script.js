const visor = document.querySelector(".visor")
const botoes = [...document.querySelectorAll(".btn")]

const btn_limpar = document.querySelector(".btn_limpar")
const btn_operador = [...document.querySelectorAll(".btn_operador")]
const btn_resultado = document.querySelector(".btn_resultado")

const resultado = document.querySelector(".resultado")

let array_conteudo = []

let array_data = []

let sinal = false

botoes.map((btn)=>{
    btn.addEventListener("click",(elemento)=>{

        sinal = false

        visor.innerHTML += elemento.target.innerHTML
        array_conteudo.push(elemento.target.innerHTML)

        array_data.push(elemento.target.dataset.content)
    })
})

btn_operador.map((btn_op)=>{
    btn_op.addEventListener("click",(elemento)=>{
        if(!sinal){

            sinal = true

            visor.innerHTML += elemento.target.innerHTML
            array_conteudo.push(elemento.target.innerHTML)
    
            array_data.push(elemento.target.dataset.content)
        }
    })
})

btn_limpar.addEventListener("click",()=>{

    sinal = false

    visor.innerHTML = ""

    array_conteudo.pop()
    array_data.pop()
    
    array_conteudo.map((ele)=>{
        visor.innerHTML += ele
    })
    
    resultado.innerHTML = ""
})

btn_resultado.addEventListener("click",()=>{

    if(array_data.length == 0){
        alert("Sem valor para calcular.")
    }else{
        array_conteudo = []
    
        array_data.map((el)=>{
            resultado.innerHTML += el
        })
        
        visor.innerHTML = eval(resultado.innerHTML)
    
        array_data = []
        array_data.push(visor.innerHTML)
    
        resultado.innerHTML = ""
    }
})