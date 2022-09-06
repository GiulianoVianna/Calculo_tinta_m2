function calculo() {

    var demao = document.getElementById("demao").value;
    var largura = document.getElementById("largura").value.replace(",", ".");
    var altura = document.getElementById("altura").value.replace(",", ".");
    var quatidade_m2;


    /* Valida preenchimento dos campos */

    if (demao == "Demãos de tinta"){
        alert("Favor informar a quantidade de demão!");
        document.getElementById("demao").focus();
    }
    else if( largura == ""){
        alert("Favor informar a largura!");
        document.getElementById("largura").focus();
    }
    else if( altura == ""){
        alert("Favor informar a altura!");
        document.getElementById("altura").focus();
    }
    else{

        quatidade_m2 = largura * altura;
        document.getElementById("valor").value = quatidade_m2.toFixed(2);

    /* Calcula a quantidade de tinta em litros por demão.
       Rendimento de 10m2 por litro por demão*/

        if (demao == "1 demão"){
            
            document.getElementById("resultado").value = ((largura * altura) / 10).toFixed(2);
        }
        else if (demao == "2 demãos"){
            
            document.getElementById("resultado").value = ((largura * altura / 10) * 2).toFixed(2);
        }
        else if (demao == "3 demãos"){
            
            document.getElementById("resultado").value = ((largura * altura / 10) * 3).toFixed(2);
        }
    }

}

function limpar(){
    document.getElementById("demao").value = "Demãos de tinta"
    document.getElementById("largura").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("resultado").value = ""
}