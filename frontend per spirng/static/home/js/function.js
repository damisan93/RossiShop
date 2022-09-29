const PROVIDER_IMMAGINI = "https://andreafonte.s3.eu-central-1.amazonaws.com/";

var tagliePresenti;
var coloriPresenti;
var prodotti;

function renderHeader(template) {
  $("#header").html(template);
}

function getProdotti(input) {
  $('#dettaglio').html('')
  $.get("http://localhost:8080/prodotti/" + input, (res) => {
    $("#contenitoreSchede").html("");
    $("#header").html(renderBarraRicerca(res));
    prodotti = res;
    for (let i = 0; i < res.length && i <= 8; i++) {
      $("#contenitoreSchede").append(
        schedaProdotto
        .replace("[IMGPATH]", PROVIDER_IMMAGINI + res[i].modelli[0].link1)
        .replace("[PREZZO]", res[i].prezzo)
        .replace("[NOME]", res[i].nome)
        .replace("[ID]", res[i].id)
      );
    }
  });
}

function renderBarraRicerca(res) {
  var colori = [];
  var taglie = [];

  var htmlColori = ""
  var htmlTaglie = ""
  for (var p of res) {
    for (var m of p.modelli) {
      if (!colori.includes(m.colore)) {
        colori.push(m.colore)
        htmlColori += `<option class="dropdown-item" colore="${m.colore}">${m.colore}</option>`
      }
      if (!taglie.includes(m.taglia)) {
        taglie.push(m.taglia)
        htmlTaglie += `<option class="dropdown-item" taglia="${m.taglia}">${m.taglia}</option>`
      }
    }
  }
  return barraRicerca.replace('[TAGLIE]', selectRicerche.replace('[OPZIONI]', htmlTaglie).replace('[FILTRO]', 'Taglie'))
    .replace('[COLORI]', selectRicerche.replace('[OPZIONI]', htmlColori).replace('[FILTRO]', 'Colori'));
}

function renderProdottiRes(res) {
  $("#contenitoreSchede").html('')
  for (let i = 0; i < res.length; i++) {
    $("#contenitoreSchede").append(
      schedaProdotto
      .replace("[IMGPATH]", PROVIDER_IMMAGINI + res[i].modelli[0].link1)
      .replace("[PREZZO]", res[i].prezzo)
      .replace("[NOME]", res[i].nome)
      .replace("[ID]", res[i].id)
    );
  }
}

function ordinaProdotti(start) {
  var prodottiOrdinati = [...prodotti];

  if (start == 'min') {
    return prodottiOrdinati.sort((a, b) => a.prezzo - b.prezzo);
  } else {
    return prodottiOrdinati.sort((a, b) => b.prezzo - a.prezzo);
  }

}

function filtraColori(colore) {
  var prodottiFiltrati = [...prodotti];

  for (var i = 0; i < prodottiFiltrati.length; i++) {
    var contiene = false;
    for (m of prodottiFiltrati[i].modelli) {
      if (m.colore == colore) {
        contiene = true;
        break;
      }
    }

    if (!contiene) {
      prodottiFiltrati.splice(i, 1)
    }
  }

  return prodottiFiltrati;
}

function filtraTaglia(taglia) {
  var prodottiFiltrati = [...prodotti];

  for (var i = 0; i < prodottiFiltrati.length; i++) {
    var contiene = false;
    for (m of prodottiFiltrati[i].modelli) {
      if (m.taglia == taglia) {
        contiene = true;
        break;
      }
    }

    if (!contiene) {
      prodottiFiltrati.splice(i, 1)
    }
  }

  return prodottiFiltrati;
}

function getProdottiCategoria(categoria) {
  $("#dettaglio").html("");
  $("#contenitoreSchede").html("");
  $.get("http://localhost:8080/prodotti/categoria/" + categoria, (res) => {
    $("#header").html(renderBarraRicerca(res));
    prodotti = res;
    $("#contenitoreSchede").html("");
    for (let i = 0; i < res.length && i <= 8; i++) {
      $("#contenitoreSchede").append(
        schedaProdotto
        .replace("[IMGPATH]", PROVIDER_IMMAGINI + res[i].modelli[0].link1)
        .replace("[PREZZO]", res[i].prezzo)
        .replace("[NOME]", res[i].nome)
        .replace("[ID]", res[i].id)
      );
    }
  });
}

function getAllProdotti() {
  $("#dettaglio").html();
  $("#header").html("");
  $("#contenitoreSchede").html("");
  $.get("http://localhost:8080/prodotti/", (res) => {
    $("#header").html(renderBarraRicerca(res));
    prodotti = res;
    for (let i = 0; i < res.length; i++) {
      $("#contenitoreSchede").append(
        schedaProdotto
        .replace("[IMGPATH]", PROVIDER_IMMAGINI + res[i].modelli[0].link1)
        .replace("[PREZZO]", res[i].prezzo)
        .replace("[NOME]", res[i].nome)
        .replace("[ID]", res[i].id)
      );
    }
  });
}

function getProdottiHome() {
  $.get("http://localhost:8080/prodotti/", (res) => {
    for (let i = 0; i < res.length && i <= 8; i++) {
      $("#contenitoreSchede").append(
        schedaProdotto
        .replace("[IMGPATH]", PROVIDER_IMMAGINI + res[i].modelli[0].link1)
        .replace("[PREZZO]", res[i].prezzo)
        .replace("[NOME]", res[i].nome)
        .replace("[ID]", res[i].id)
      );
    }
  });
}

//dettaglio prodotto
function getProdotto(id) {
  $.get("http://localhost:8080/prodotti/prodotto/" + id, (res) => {
    var taglie = "";
    coloriPresenti = new Map();
    tagliePresenti = new Map();
    for (let i = 0; i < res.modelli.length; i++) {
      if (tagliePresenti.get(res.modelli[i].taglia) == undefined) {
        tagliePresenti.set(res.modelli[i].taglia, optionTaglia.replace('[TAGLIA]', res.modelli[i].colore))
        taglie += bottoniTaglie
          .replace("[TAGLIA]", res.modelli[i].taglia)
          .replace("[TAGLIA]", res.modelli[i].taglia);
      } else {
        tagliePresenti.set(res.modelli[i].taglia, tagliePresenti.get(res.modelli[i].taglia) + optionTaglia.replace('[TAGLIA]', res.modelli[i].colore))
      }

      if (coloriPresenti.get(res.modelli[i].colore) == undefined) {
        coloriPresenti.set(res.modelli[i].colore, {
          link1: PROVIDER_IMMAGINI + res.modelli[i].link1,
          link2: PROVIDER_IMMAGINI + res.modelli[i].link2,
          link3: PROVIDER_IMMAGINI + res.modelli[i].link3
        })
      }
      
    }

    $("#dettaglio").html(
      dettaglioProdotto
      .replace("[ID]", id)
      .replace("[IMGPATH1]", PROVIDER_IMMAGINI + res.modelli[res.modelli.length - 1].link1)
      .replace("[IMGPATH1]", PROVIDER_IMMAGINI + res.modelli[res.modelli.length - 1].link1)
      .replace("[IMGPATH2]", PROVIDER_IMMAGINI + res.modelli[res.modelli.length - 1].link2)
      .replace("[IMGPATH3]", PROVIDER_IMMAGINI + res.modelli[res.modelli.length - 1].link3)
      .replace("[NOME]", res.nome)
      .replace("[PREZZO]", res.prezzo)
      .replace("[DESCRIZIONE]", res.descrizione)
      .replace("[BOTTONITAGLIA]", taglie)
      .replace("[COLORI]", tagliePresenti.get(res.modelli[res.modelli.length - 1].taglia))
    );

    $("#contenitoreSchede").html("");
    $("#header").html("");
  });
}

function change_image(image) {
  var container = document.getElementById("main-image");
  container.src = image.src;
}

//fine dettaglio prodotto

function renderProfilo() {
  const infoUser = JSON.parse($.cookie("user").substring(2));
  addSiteMapLink("Profilo", "");
  $("#header").html("");
  $("#contenitoreSchede").html("");
  $("#dettaglio").html(
    profiloUtente
    .replace("[ID]", infoUser.id)
    .replace("[NOME]", infoUser.nome)
    .replace("[COGNOME]", infoUser.cognome)
    .replace("[EMAIL]", infoUser.email)
    .replace("[NTEL]", infoUser.nTel == "none" ? "" : infoUser.nTel)
    .replace("[INDIRIZZO]", infoUser.indirizzo)
    .replace("[CITTA]", infoUser.citta)
    .replace("[DDN]", infoUser.ddn)
    .replace("[INDIRIZZOFATT]", infoUser.indirizzoFat)
    .replace("[CITTAFATT]", infoUser.cittaFat)
    .replace("[PWD]", infoUser.password)
  );
}

async function modificaProfilo() {
  if (document.getElementById("attivo").disabled) {
    document.getElementById("attivo").disabled = false;
    document.getElementById("attivoFatt").disabled = false;
  } else {
    putModificaProfilo();
  }
}

function putModificaProfilo() {
  const newUserData = {
    id: $("#userId").val(),
    nome: $("#nome").val(),
    cognome: $("#cognome").val(),
    ddn: $("#ddn").val(),
    indirizzo: $("#indirizzo").val(),
    citta: $("#citta").val(),
    indirizzoFat: $("#indirizzoFatt").val(),
    cittaFat: $("#cittaFatt").val(),
    nTel: $("#ntel").val(),
    email: $("#email").val(),
    password: $("#pwd").val()
  };

  $.ajax({
    type: "POST",
    url: "http://localhost:3000/updateUser",
    datatype: "application/json",
    data: JSON.stringify(newUserData),
    success: function (res) {
      updateUserCookie(res)
      renderProfilo();
    },
  });
}

function updateUserCookie(userData) {
  var cookie = JSON.parse($.cookie('user').substring(2));
  cookie.citta = userData.citta;
  cookie.cittaFat = userData.cittaFat;
  cookie.cognome = userData.cognome;
  cookie.ddn = userData.ddn;
  cookie.email = userData.email;
  cookie.indirizzo = userData.indirizzo;
  cookie.indirizzoFat = userData.indirizzoFat;
  cookie.nTel = userData.nTel;
  cookie.nome = userData.nome;
  cookie.password = userData.password;

  var stringedCookie = "j:" + JSON.stringify(cookie)

  $.cookie('user', stringedCookie);
}

function addSiteMapLink(nome, valore) {
  $("#siteMap").append(
    navigator.replace("[NOME]", nome).replace("[VALORE]", valore)
  );
}

async function setNavbarButton() {
  $("#tastiNavbar").html((await isAuth()) ? tastoCarrello : tastoLogin);
}

async function isAuth() {
  const token = $.cookie("jwt");
  var response = false;

  const header = {
    Authorization: "Bearer " + token,
  };

  if (token != undefined) {
    try {
      response = await $.ajax({
        type: "GET",
        url: "http://localhost:8081/authenticationctr",
        datatype: "application/json",
        headers: header,
        success: function (res) {
          return true;
        },
      });
    } catch (err) {}
  }

  return response;
}

var idProdottoCarrello = [];
let mappaCarrello = new Map();

function addCarrello() {
  const id = $('#idProdotto').val();
  var row = "";
  if (!idProdottoCarrello.includes(id)) {
    idProdottoCarrello.push(id);
    const prodotto = prodottoCarrello.replace('[NOME]', $('#nomeProdotto').text())
      .replace('[IMG]', $('#main-image').attr('src'))
      .replace('[PREZZO]', $('#prezzoProdotto').text())
      .replace('[ID]', id)
      .replace('[ID]', id)
    $('#tabellaCarrello').append(prodotto);
    $('#tr' + id).find('#prezzoTotale').text($('#prezzoProdotto').text())
    $('#totaleCarrello').text(+$('#prezzoProdotto').text() + +$('#totaleCarrello').text());
    row = `<tr id="tr${id}">`
    row += $('#tr' + id).html();
    row += '</tr>'

    mappaCarrello.set(id, row);
  } else {
    var quantita = +$('#tr' + id).find('#quantitaProdotto').attr('quantita');
    quantita++;
    $('#tr' + id).find('#quantitaProdotto').attr('quantita', quantita);
    $('#tr' + id).find('#quantitaProdotto').val(quantita);
    var prezzo = +$('#prezzoProdotto').text();
    var prezzoTotale = prezzo * quantita;
    $('#tr' + id).find('#prezzoTotale').text(prezzoTotale)
    $('#totaleCarrello').text(prezzo + +$('#totaleCarrello').text());

    row = `<tr id="tr${id}">`
    row += $('#tr' + id).html();
    row += '</tr>'

    mappaCarrello.set(id, row);
  }

  setCookieCarrello();
}

function setCookieCarrello() {
  var obj = Object.fromEntries(mappaCarrello);
  var jsonString = JSON.stringify(obj);

  $.cookie('carrello', jsonString);
}

function renderCookieCarrello() {
  const json = $.cookie('carrello');

  if (json != undefined) {
    const map = new Map(Object.entries(JSON.parse(json)));
    mappaCarrello = map;

    for (let p of map) {
      var id = p[0];
      idProdottoCarrello.push(id);

      $('#tabellaCarrello').append(p[1]);
      var prezzoProdotto = +$('#tr' + id).find('#prezzoProdottoCarrello').text();
      var quantita = +$('#tr' + id).find('#quantitaProdotto').attr('quantita');
      $('#tr' + id).find('#quantitaProdotto').val(quantita);
      var prezzoTotale = prezzoProdotto * quantita;
      $('#tr' + id).find('#prezzoTotale').text(prezzoTotale)
      $('#totaleCarrello').text(prezzoTotale + +$('#totaleCarrello').text());
    }
  }

}

function renderMenuCategorie() {
  $.get("http://localhost:8080/categorie/", (res) => {
    for (let c of res) {
      $('#dropCategorie').append(`<li class="dropdown-item" idCategoria="${c.id}">${c.nome}</li>`)
    }

  });
}

function rimuoviDaCarrello(id) {
  var prezzo = $('#tr' + id).find('#prezzoTotale').text();
  $('#totaleCarrello').text(+$('#totaleCarrello').text() - prezzo);
  $('#tabellaCarrello').find('#tr' + id).remove();
  mappaCarrello.delete(id);
  idProdottoCarrello.splice(idProdottoCarrello.indexOf(id), 1);
  setCookieCarrello();
}

async function renderCheckout() {
  var prodotti = "";
  var prezzoFinale = 0;
  for(var id of idProdottoCarrello) {
    await $.get("http://localhost:8080/prodotti/prodotto/" + id, (res) => {
      prezzoFinale += res.prezzo;
      prodotti += dettaglioPRodottoCheckout.replace('[IMG]',PROVIDER_IMMAGINI + res.modelli[0].link1)
                                           .replace('[NOME]',res.nome)
                                           .replace('[CATEGORIA]',res.categoria.nome)
                                           .replace('[PREZZO]',res.prezzo);
    })
  }
  $("#dettaglio").html(templateCheckOut.replace('[PRODOTTI]',prodotti)
                                       .replace('[NUMERO]',idProdottoCarrello.length)
                                       .replace('[TOTALE]',prezzoFinale)
                                       .replace('[TOTALE2]',prezzoFinale + 5));
  $("#contenitoreSchede").html("");
  $("#header").html("");
}