function calcular(){
    // vamos criar 2 variáveis
    // JS as variáveis não possuem tipo (ex.: inteiro, real, cadeira etc)
    let mascote, homenagem, leite, kit, suplemento, pacoteArroz5kg, pacoteArroz1kg, pacoteFeijao2kg, pacoteFeijao1kg, pacoteMacarrao, oleo, sangue, soma, equipe, registroa, registrob, acao, torcida, chuva, frescominton, memoria, embaixadinha, jogoi, jump, pegaa 
    // recupera o VALOR do mascote digitado pelo usuário
    mascote =   
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
    registroa = Number(document.getElementById("registroa").value)
    registrob = Number(document.getElementById("registrob").value)
    acao = Number(document.getElementById("acao").value)
    torcida = Number(document.getElementById("torcida").value)
    chuva = Number(document.getElementById("chuva").value)
    frescominton= Number(document.getElementById("frescominton").value)
    memoria = Number(document.getElementById("memoria").value)
    embaixadinha = Number(document.getElementById("embaixadinha").value)
    jogoi = Number(document.getElementById("jogoi").value)
    jump = Number(document.getElementById("jump").value)
    pegaa = Number(document.getElementById("pegaa").value)

    // calcular a soma, o valor chega como texto, então tem que converter o conteúdo da variável em número 
    // calcular soma parcial 
    soma = mascote + homenagem + (2 * leite) + (5 * pacoteArroz5kg) + pacoteArroz1kg + ( 2 * pacoteFeijao2kg) + pacoteFeijao1kg + (0.5 * pacoteMacarrao) + oleo + registroa + registrob + acao + torcida + chuva + frescominton + memoria + embaixadinha + jogoi + jump + pegaa
    
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
        else if (kit >= 49){
            soma = soma + 2500 + ((kit-49)*30) + ((suplemento - 25) * 15)
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
        if (kit >= 103 && suplemento >= 52){
            soma = soma + 5000 + ((kit-103)*30) + ((suplemento - 52) * 15) 
        }
        else if (kit >= 82 && suplemento >= 42){
            soma = soma + 4000 + ((kit-82)*30) + ((suplemento - 42) * 15)
        } 
        else if (kit >= 52){
            soma = soma + 2500 + ((kit-52)*30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21){
            soma = soma + 1000 + ((kit-21)*30) + ((suplemento - 10) * 15)
        }
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
        if (kit >= 102 && suplemento >= 51){
            soma = soma + 5000 + ((kit-102)*30) + ((suplemento - 51) * 15) 
        }
        else if (kit >= 82 && suplemento >= 41){
            soma = soma + 4000 + ((kit-82)*30) + ((suplemento - 41) * 15)
        } 
        else if (kit >= 51){
            soma = soma + 2500 + ((kit-51)*30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 20){
            soma = soma + 1000 + ((kit-20)*30) + ((suplemento - 10) * 15)
        }
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
        if (kit >= 88 && suplemento >= 44){
            soma = soma + 5000 + ((kit-88)*30) + ((suplemento - 44) * 15) 
        }
        else if (kit >= 70 && suplemento >= 35){
            soma = soma + 4000 + ((kit-70)*30) + ((suplemento - 35) * 15)
        } 
        else if (kit >= 44){
            soma = soma + 2500 + ((kit-44)*30) + ((suplemento - 22) * 15)
        }
        else if (kit >= 18){
            soma = soma + 1000 + ((kit-18)*30) + ((suplemento - 9) * 15)
        }
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
        if (kit >= 93 && suplemento >= 47){
            soma = soma + 5000 + ((kit-93)*30) + ((suplemento - 47) * 15) 
        }
        else if (kit >= 74  && suplemento >= 38){
            soma = soma + 4000 + ((kit-74)*30) + ((suplemento - 38) * 15)
        } 
        else if (kit >= 47){
            soma = soma + 2500 + ((kit-47)*30) + ((suplemento - 24) * 15)
        }
        else if (kit >= 19){
            soma = soma + 1000 + ((kit-19)*30) + ((suplemento - 9) * 15)
        }
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
/* trocar cor no select */

function trocarCor() {
    var equipe = document.getElementById("equipe").value;
    var cor = "";

    switch(equipe) {
        case "Laranja":
            cor = "orange";
            break;
        case "Preta":
            cor = "black";
            break;
        case "Roxa":
            cor = "purple";
            break;
        case "Verde":
            cor = "green";
            break;
        case "Vermelha":
            cor = "red";
            break;
        default:
            cor = "#f4f4f4"; // Cor padrão de fundo
    }

    document.body.style.backgroundColor = cor;
}


