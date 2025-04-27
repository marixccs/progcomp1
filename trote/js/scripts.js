function calcular(){
    // JS AS VARIAVEIS POSSUEM TIPO, MAS NÃO É NECESSÁRIO DECLARAR
    let mascote, homenagem, leite, kit, suplemento, pacoteArroz5kg, pacoteArroz1kg, pacoteFeijao2kg, pacoteFeijao1kg, pacoteMacarrao, oleo, sangue, soma, equipe
    // recupera o VALOR do mascote digitado pelo usuário
    mascote = Number(document.getElementById("mascote").value)
    // recupera o VALOR da homenagem digitado pelo usuário
    homenagem = Number(document.getElementById("homenagem").value) //number pega o que o usuário está digitando e já convertendo em número
    //recupera a qtde de litros de leite
    leite = Number(document.getElementById("leite").value)
    //recupera a qtde de kit avulso
    kit =  Number(document.getElementById("kit").value)
    //recupera a qtde de suplementos avulso
    suplemento = Number(document.getElementById("suplemento").value)  
    pacoteArroz5kg = Number(document.getElementById("pacoteArroz5kg").value)
    pacoteArroz1kg = Number(document.getElementById("pacoteArroz1kg").value)
    pacoteFeijao2kg = Number(document.getElementById("pacoteFeijao2kg").value)
    pacoteFeijao1kg = Number(document.getElementById("pacoteFeijao1kg").value)
    pacoteMacarrao = Number(document.getElementById("pacoteMacarrao").value)
    oleo = Number(document.getElementById("oleo").value)
    sangue = Number(document.getElementById("sangue").value)
    // calcular a soma, o valor chega como texto, então tem que converter o conteúdo da variável em número 
    // calcular soma parcial 
    soma = mascote + homenagem + (2 * leite) 
    // vamos calcular a pontuacao considerando metas de kit e suplementos
    equipe = document.getElementById("equipe").value
    if(equipe == "Laranja"){
        // verifica kit e suplemento
        if (kit >= 97 && suplemento >= 49){
            soma = soma + 5000 + ((kit-97)*30) + ((suplemento - 49) * 15) 
        }
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit-78)*30) + ((suplemento - 39) * 15)
        } 
        else if (kit >= 40){
            soma = soma + 2500 + ((kit-40)*30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19){
            soma = soma + 1000 + ((kit-19)*30) + ((suplemento - 10) * 15)
        }
        // verifica sangue 
        if (sangue >= 49){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    }
    else if (equipe == "Preta"){
        // verifica kit + suplemento 

        // verifica sangue
        if (sangue >= 52) {
            soma = soma + 2500 + ((soma - 52) * 20)
        }
        else{
            soma = (soma * 20)
        }
    }
    else if (equipe == "Roxa"){
        // verifica kit + suplemento 

        // verifica sangue
        if (sangue >= 51) {
            soma = soma + 2500 + ((soma - 51) * 20)
        }
        else{
            soma = (soma * 20)
        }
    }
    else if (equipe == "Verde"){
        // verifica kit + suplemento 

        // verifica sangue
        if (sangue >= 44) {
            soma = soma + 2500 + ((soma - 44) * 20)
        }
        else{
            soma = (soma * 20)
        }

    }
    else {  //equipe vermelha
        // verifica kit + suplemento 

        // verifica sangue
        if (sangue >= 47) {
            soma = soma + 2500 + ((soma - 47) * 20)
        }
        else{
            soma = (soma * 20)
        }
    }


    // retorna o valor ao HTML pega a soma e joga para o html  
    // template string - se usa CRASE (virada para a direita)
    document.getElementById("soma").innerHTML = `A soma é ${soma}`  
}