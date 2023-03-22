$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00.000-000');

    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true
            },
            telefone: {
                required:true
            },
            cpf: {
                required:true
            },
            cep: {
                required:true
            },
            rua: {
                required:true
            },
            numero: {
                required:true
            },
            cidade: {
                required:true
            },
            estado: {
                required:true
            }
        }
    })

})