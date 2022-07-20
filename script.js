function somar() {
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let resultado = parseFloat(valorx) + parseFloat(valory);

    document.getElementById('resultado').value = resultado
    alert('Cálculo realizado com sucesso!')    
}

function subtrair() {
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let resultado = parseFloat(valorx) - parseFloat(valory)

    document.getElementById('resultado').value = resultado
    alert('Cálculo realizado com sucesso!') 
}

function multiplicar() {
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let resultado = parseFloat(valorx) * parseFloat(valory)

    document.getElementById('resultado').value = resultado
    alert('Cálculo realizado com sucesso!') 
}

function dividir() {
    let valorx = document.getElementById('valorx').value
    let valory = document.getElementById('valory').value

    let resultado = parseFloat(valorx) / parseFloat(valory)

    document.getElementById('resultado').value = resultado
    alert('Cálculo realizado com sucesso!') 
}