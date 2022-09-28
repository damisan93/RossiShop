var userData = {};

function render(template) {
    $('#formRegistrazione').html(template);
}

function primoCheck(){

    var nome = $('#nome').val()
    var cognome = $('#cognome').val()
    var ddn = $('#ddn').val()

    if(ddn != '' && nome != '' && cognome != ''){
        userData.nome = nome;
        userData.cognome = cognome;
        userData.ddn = ddn;
        render(secondaParte);
    } else {
        $('#controllaDati').show();
    }
}

function secondoCheck(){

    var email = $('#email').val()
    var indirizzo = $('#indirizzo').val()
    var citta = $('#citta').val()
    var indirizzoFatt = $('#indirizzoFatt').val()
    var cittaFatt = $('#cittaFatt').val()

    if(email != '' && indirizzo != '' && citta != '' && indirizzoFatt != '' && cittaFatt != ''){
        userData.email = email;
        userData.citta = citta;
        userData.indirizzo = indirizzo;
        userData.cittaFat = cittaFatt;
        userData.indirizzoFat = indirizzoFatt;
        render(terzaParte);
    } else {
        $('#controllaDati').show();
    }
}

function terzoCheck(){

    var tipoCarta = $('#tipoCarta').val()
    var numeroCarta = $('#numerocarta').val()
    var cvv = $('#cvv').val()

    if(tipoCarta != '' && numeroCarta != '' && cvv != ''){
        userData.tipoCarta = tipoCarta;
        userData.numeroCarta = numeroCarta;
        userData.cvv = cvv;
        render(quartaParte);
    } else {
        $('#controllaDati').show();
    }
}

function quartoCheck(){

    var nTel = $('#ntel').val()
    var username = $('#username').val()
    var password = $('#password').val()

    if(nTel != '' && username != '' && password != ''){
        userData.nTel = nTel;
        userData.username = username;
        userData.password = password;
        invioRegistrazione();
    } else {
        $('#controllaDati').show();
    }
}

function invioRegistrazione(){
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/doSingup",
        datatype: "application/json",
        data: JSON.stringify(userData),
        success: function(res){
            if(res){
                window.location.href = "/login";
            }
        }
      });
}

