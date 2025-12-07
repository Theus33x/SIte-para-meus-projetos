function ativar_nav(){
    document.getElementById("nav").classList.add("ativa")
    document.getElementById("ativarbtn").classList.add("ativa")
    document.getElementById("desativarbtn").classList.add("ativa")

    document.getElementById("bugHome").classList.add("ativa")

    document.getElementById("disciplinas").classList.add("ativa")
}

function voltar_nav(){
    document.getElementById("nav").classList.remove("ativa")
    document.getElementById("ativarbtn").classList.remove("ativa")
    document.getElementById("desativarbtn").classList.remove("ativa")

    document.getElementById("disciplinas").classList.remove("ativa")

    document.getElementById("bugHome").classList.remove("ativa")

}


let passo_atual = 0;

function moverRight(){
    const pegardivR = document.querySelector("#mover")



        if (passo_atual > -2)
            passo_atual --;
    
    pegardivR.style.transform  = `translateX(${passo_atual * 110}%)`;
}

function moverLeft(){
 
    const pegardivR = document.querySelector("#mover") 

        if(passo_atual < 0  )
            passo_atual ++

    
    pegardivR.style.transform = `translateX(${passo_atual * 110}%)`;
    
}





