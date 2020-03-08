const calculadora = ()=>{
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value
    var operacao = document.getElementById("operacao").value
   
    var calculando = eval(num1 + operacao + num2)
   
    resultado.innerHTML = calculando;
   }
   var calcular = document.getElementById('calcular');
   var resultado = document.getElementById('resultado');
   calcular.addEventListener('click', calculadora )