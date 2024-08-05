$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })
});

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(11) 94002-8922'
});

$('#cpf').mask('000.000.000-00', {
    placeholder: 'xxx-xxx-xxx-xx'
});

$('#cep').mask('00000-000', {
    placeholder: '12345-678'
});

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    messages: {
        name: 'Por favor, insira um nome válido.',
        email: 'Por favor, insira um Email válido.',
        telefone: 'Por favor, insira um número de telefone válido.'
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        let camposIncorretos = validator.numberOfInvalids();
        if(camposIncorretos){
            alert(`Há ${camposIncorretos} campos incorretos, corrija por favor.`);
        }
    }
})