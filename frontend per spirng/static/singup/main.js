$(document).ready(function () {
    render(primaParte);

    $('#formRegistrazione').on('click','.btn-primo', function() {
        primoCheck(); 
    })

    $('#formRegistrazione').on('click','.btn-secondo', function() {
        secondoCheck();
    })

    $('#formRegistrazione').on('click','.btn-terzo', function() {
        terzoCheck();
    })

    $('#formRegistrazione').on('click','.btn-finale', function() {
        quartoCheck();
    })

})