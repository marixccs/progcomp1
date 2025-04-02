function calcular(){
    // vamos criar 2 variáveis
    // JS as variáveis não possuem tipo (ex.: inteiro, real, cadeira etc)
    let mascote, homenagem, leite, kit, suplemento, pacoteArroz5kg, pacoteArroz1kg, pacoteFeijao2kg, pacoteFeijao1kg, pacoteMacarrao, oleo, soma, equipe
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
    // calcular a soma, o valor chega como texto, então tem que converter o conteúdo da variável em número 
    // calcular soma parcial 
    soma = mascote + homenagem + (2 * leite) + (30 * kit) + (15 * suplemento) + (5 * pacoteArroz5kg) + pacoteArroz1kg + (2 * pacoteFeijao2kg) + pacoteFeijao1kg + (pacoteMacarrao/2) + oleo
    // vamos calcular a pontuacao considerando metas de kit e suplementos
    equipe = document.getElementById("equipe").value
    if(equipe == "Laranja"){
        if (kit >= 97){
            soma = soma + 5000 + ((kit-97)*30)
        }
        else if (kit >= 78){
            soma = soma + 4000 + ((kit-78)*30)
        }
        else if (kit >= 40){
            soma = soma + 2500 + ((kit-40)*30)
        }
        else if (kit >= 19){
            soma = soma + 1000 + ((kit-19)*30)
        }
    }
    // retorna o valor ao HTML pega a soma e joga para o html  
    // template string - se usa CRASE (virada para a direita)
    document.getElementById("soma").innerHTML = `A soma é ${soma}`   
}