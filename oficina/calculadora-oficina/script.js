document.getElementById('serviceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obter os valores de entrada
    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const preco = parseFloat(document.getElementById('preco').value);
    
    // Calcular a área
    const area = largura * altura;

    // Calcular o preço total
    const precoTotal = area * preco;

    // Exibir o resultado
    const resultadoCalculo = `A área do serviço é ${area.toFixed(2)} m² e o preço total é R$ ${precoTotal.toFixed(2)}`;
    document.getElementById('resultadoCalculo').innerText = resultadoCalculo;
});
