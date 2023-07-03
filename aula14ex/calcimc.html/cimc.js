
const calcular = document.getElementById('calcular');


function im () {
    const nome = document.getElementById('nome');
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso');
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao} `;

    }else {
        resultado.textContent = 'Preencha todos os campos!!'
    }
}

calcular.addEventListener('click', imc);