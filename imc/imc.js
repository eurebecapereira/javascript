const calcular = document.getElementById('calcular'); //recebe/efetua a ação de calcular

function imc () { //informando o que o código deve fazer
    const nome = document.getElementById('nome').value; //buscar o VALOR da variável nome
    const altura = +document.getElementById('altura').value; //buscar o VALOR da variável altura
    const peso = +document.getElementById('peso').value; //buscar o VALOR da variável peso
    const resultado = document.getElementById('resultado'); //função de mostrar o resultado

    if (nome !== '' && altura !== '' && peso !== '') { // Condições: A variável nome diferente de vazio, ou seja deve estar preenchida 

        const valorIMC = (peso / (altura * altura)).toFixed(1); //cálculo: peso x a altura ao quadrado(altura x altura)
        //.toFixed(1): Faz com q haja apenas uma casa decimal após a vírgula
        let classificacao = ''; //let: porque ela vai ser alterada (**let pode ser usada dentro do bloco)

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!'; //aqui fica subentendido que é o imc q não se encaixar nas outras opções
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Por favor, preencha todos os campos!!!'; //usado para q apareça a mensagem caso o usuário não preencha todos os campos, esse else(se não) tem início no if(se), no começo do código.
    }

}

calcular.addEventListener('click', imc); // ao acioná-lo executa toda a função

//Obs: Utilizar variável com a "palavra" var: a variável so pode ser usada dentro da função