    var output = document.getElementById("mensagem-saida2");
    output.value = "Nenhum texto digitado por enquanto.";

    function criptografa() {
    if (verificaTextoMinusculas()) {
        return;
    }
    var input = document.getElementById("mensagem");
    if (input.value == "") {
        nenhumTexto();
        return;
    } else {
        let resposta = input.value.replace(/e/g, "enter");
        resposta = resposta.replace(/i/g, "imes");
        resposta = resposta.replace(/a/g, "ai");
        resposta = resposta.replace(/o/g, "ober");
        resposta = resposta.replace(/u/g, "ufat");

        input.value = "";
        input.focus();

        var output = document.getElementById("mensagem-saida");
        output.value = resposta;
        var output = document.getElementById("mensagem-saida2");
        output.value = "";

        return;
    }
    }

    function descriptografa() {
    var input = document.getElementById("mensagem");
    if (input.value == "") {
        nenhumTexto();
        return;
    } else {
        let resposta = input.value.replace(/enter/g, "e");
        resposta = resposta.replace(/imes/g, "i");
        resposta = resposta.replace(/ai/g, "a");
        resposta = resposta.replace(/ober/g, "o");
        resposta = resposta.replace(/ufat/g, "u");
        input.value = "";

        var output = document.getElementById("mensagem-saida");
        output.value = resposta;
        var output = document.getElementById("mensagem-saida2");
        output.value = "";

        return;
    }
    }

    function copiar() {
    var input = document.getElementById("mensagem-saida");
    if (input.value == "") {
        nenhumTexto();
        return;
    } else {
        let textoCopiado = document.getElementById("mensagem-saida");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999);
        document.execCommand("copy");

        var textoColado = document.getElementById("mensagem");
        textoColado.value = textoCopiado.value;
        var output = document.getElementById("mensagem-saida2");
        output.value = "";
        var output = document.getElementById("mensagem-saida");
        output.value = "";
        document.getElementById("mensagem").focus();
    }
    return;
    }

    function nenhumTexto() {
    var output = document.getElementById("mensagem-saida2");
    output.value = "Nenhum texto foi digitado!!";
    var output = document.getElementById("mensagem-saida");
    output.value = "";
    document.getElementById("mensagem").focus();
    return;
    }

    function verificaTextoMinusculas() {
    var input = document.getElementById("mensagem");
    var inputText = input.value.toLowerCase();
    if (input.value != inputText) {
        var output = document.getElementById("mensagem-saida");
        output.value = "";
        var output = document.getElementById("mensagem-saida2");
        output.value = "digite texto apenas com letras minúsculas!";
        document.getElementById("mensagem").focus();
        //alert("digite texto apenas com letras minúsculas!");
        //nenhumTexto()
        return true;
    } else {
        return false;
    }
    }
