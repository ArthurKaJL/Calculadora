function calcular(n1, n2) {
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch (selector) {
        case '+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O Resultado da soma de ${n1} + ${n2} é = ${calculo} `
            break

        case '-':
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O Resultado da Subtração de ${n1} - ${n2} é = ${calculo} `
            break

        case '*':
            calculo = (n1 * n2)
            document.getElementById("resultado").innerHTML = `O Resultado da Multiplicação de ${n1} x ${n2} é = ${calculo} `
            break

        case '/':
            calculo = (n1 / n2)
            if (Number.isNaN(calculo)) {
                document.getElementById("resultado").innerHTML = `Insira um divisível válido.`
            } else {
                document.getElementById("resultado").innerHTML = `O Resultado da Divisão de ${n1} / ${n2} é = ${calculo} `
            }
            break
    }

}
