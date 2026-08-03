function calcular(){
    let parcelas = Number(document.getElementById("parcelas").value);
    let valor = Number(document.getElementById("valor").value);
    
    if(parcelas <= 0 || parcelas >= 20){    
        document.getElementById("valorParcela").style.fontSize = "1.3rem";


        document.getElementById("valorParcela").innerHTML = "Insira um número válido de parcelas.";
        

        document.getElementById("valorTotal").innerText = "R$ 0.00";

        return;
    }

        let valorParcela = valor / parcelas;

        let juros = 0;
        document.getElementById("juros").style.color = "lime";

        if(parcelas >= 15){
            juros = 0.25;
        } else if(parcelas >= 10){
            juros = 0.15;
        } else if(parcelas >= 5){
            juros = 0.05;
        }


        if(juros > 0){
            document.getElementById("juros").style.color = "red";

            valor += (valor * juros);
            valorParcela += (valorParcela * juros);
        }


        document.getElementById("juros").innerHTML = `${juros*100}%`;
        document.getElementById("valorParcela").innerText = `R$ ${valorParcela.toFixed(2)}`;
        document.getElementById("valorTotal").innerText = `R$ ${valor.toFixed(2)}`;

}