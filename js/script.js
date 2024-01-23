const visor = document.querySelector(".visor")
const botoes = [...document.querySelectorAll(".btn")]
const btn_limpar = document.querySelector(".btn_limpar")
const btn_resultado = document.querySelector(".btn_resultado")
const resultado = document.querySelector(".resultado")

let array_conteudo = []

let array_data = []

botoes.map((btn)=>{
    btn.addEventListener("click",(elemento)=>{
        visor.innerHTML += elemento.target.innerHTML
        array_conteudo.push(elemento.target.innerHTML)

        array_data.push(elemento.target.dataset.content)

        // console.log(array_conteudo)
        // console.log(array_data)
    })
})


btn_limpar.addEventListener("click",()=>{
    visor.innerHTML = ""

    array_conteudo.pop()
    array_data.pop()
    
    array_conteudo.map((ele)=>{
        visor.innerHTML += ele
    })

    // console.log(array_conteudo)
    // console.log(array_data)
})

btn_resultado.addEventListener("click",()=>{

    if(visor.innerHTML.length == 0){
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

    // console.log(visor.innerHTML)
    // console.log(array_data)
})