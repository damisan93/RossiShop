var prodotti;
function renderMagazzino() {
  $.get('http://localhost:8080/prodotti', function (res) {
    $('#body').html('');
    var righeNuove = "";
    prodotti=res;
    renderBarraRicerca(res);
    for (let i = 0; i < res.length; i++) {
      righeNuove += `<tr id='tabellaMod' clickable>
                  <td>${res[i].nome}</td>
                  <td>${res[i].categoria.nome}</td>
                  <td>${res[i].prezzo}</td>
                  <td>${res[i].descrizione}</td>      
                  <td>
                    <div class="d-flex justify-content-center">
                      <div class="mr-3">
                        <button class='btn btn-primary btn-mostra-modelli' data-bs-toggle="modal" data-bs-target="#myModal" value='${res[i].id}'>Modelli</button>
                      </div>
                      <div class="mx-2">
                        <button class='btn btn-secondary btn-modifica' data-bs-toggle="modal" data-bs-target="#myModal" value='${res[i].id}'>Modifica</button>
                      </div>
                      <div class="">
                        <button style='width :87.46px;' class='btn btn-danger btn-elimina' value='${res[i].id}'>Elimina</button>
                      </div>
                    </div>
                    
                  </td>
                </tr>`
    }

    $('#body').html(tabella.replace('[ROW]', righeNuove));
  })

}

function renderModificaModale(id) {
  $.get(`http://localhost:8080/prodotti/prodotto/${id}`, function (res) {
    $('#header-modal').html("MODIFICA PRODOTTO")
    $('#body-modal').html(templateModifica.replace('[NOME]', res.nome)
      .replace('[PREZZO]', res.prezzo)
      .replace('[ID]', res.id)
      .replace('[DESCRIZIONE]', res.descrizione)
      .replace('[CATEGORIE]', categorie(res.categoria.id)));
    $('.footer-modal').html(bottoniModifica)
  })
}

function renderAggiungiProdotto() {
  $('#header-modal').html("AGGIUNGI PRODOTTO")
  $('#body-modal').html(templateAggiungi.replace('[CATEGORIE]', categorie(0)));
  $('.footer-modal').html(bottoniAggiungi)
}

function modificaProdotto() {
  const prod = JSON.stringify({
    "id": $('#idProdotto').val(),
    "nome": $('#nome').val(),
    "categoria": {
      "id": $('#categoria').val()
    },
    "prezzo": $('#prezzo').val(),
    "descrizione": $('#descrizione').val()
  })

  $.ajax({
    type: 'PUT',
    url: 'http://localhost:8080/prodotti/',
    headers: {
      "Content-Type": "application/json"
    },
    data: prod,
    success: function (res) {
      renderMagazzino();
    }
  })


}

function aggiungiProdotto() {
  const prod = JSON.stringify({
    "nome": $('#nome').val(),
    "categoria": {
      "id": $('#categoria').val()
    },
    "prezzo": $('#prezzo').val(),
    "descrizione": $('#descrizione').val()
  })

  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/prodotti/',
    headers: {
      "Content-Type": "application/json"
    },
    data: prod,
    success: function (res) {
      renderAggiungiModello(res);
    }
  })
}

function deleteProdotto(id) {
  $.get('http://localhost:8080/modelli/prodotto/' + id, function (res) {
    for (var m of res) {
      deleteImmagine(m.link1);
      deleteImmagine(m.link2);
      deleteImmagine(m.link3);
    }
  })
  $.ajax({
    url: `http://localhost:8080/prodotti/${id}`,
    type: 'DELETE',
    success: function (res) {

      $('#body').html('');
      renderMagazzino();
    }
  })
}

function renderAggiungiModello(idProdotto) {
  $('#header-modal').html("AGGIUNGI MODELLO")
  $('#body-modal').html(templateAggiungiModello.replace('[ID]', idProdotto));
  $('.footer-modal').html(bottoniAggiungiModello.replace('[ID]', idProdotto))
}

function aggiungiModello(continua) {
  const idProdotto = $('#idProdotto').val();
  const modello = {
    "colore": $('#colore').val(),
    "taglia": $('#taglia').val(),
    "quantita": $('#quantita').val(),
    "link1": $('#link1').val(),
    "link2": $('#link2').val(),
    "link3": $('#link3').val(),
    "idProdotto": idProdotto
    
  }

  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/modelli/',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(modello),
    success: function (res) {
      if(continua) {
        renderAggiungiModello(idProdotto);
      }
      else {
        //inserire logica chiusura modale 
        renderModelliProdotto(idProdotto);
        
        renderMagazzino();
      }
    }
  })
}

function aggiungiModello2(continua,idProdotto) {
  const modello = {
    "colore": $('#colore').val(),
    "taglia": $('#taglia').val(),
    "quantita": $('#quantita').val(),
    "link1": $('#link1').val(),
    "link2": $('#link2').val(),
    "link3": $('#link3').val(),
    "idProdotto": idProdotto
    
  }

  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/modelli/',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(modello),
    success: function (res) {
      if(continua) {
        renderAggiungiModelloModal2(idProdotto);
      }
      else {
        //inserire logica chiusura modale 
        document.getElementById('id01').style.display='none'
        
        renderMagazzino();
      }
    }
  })
}


function categorie(id) {
  var categorie = "";

  $.ajax({
    url: 'http://localhost:8080/categorie',
    success: function (res) {
      var righe = "";

      for (let i = 0; i < res.length; i++) {
        if (res[i].id == id) {
          righe += `<option value='` + res[i].id + `' selected="selected">  ${res[i].nome}  </option>`
        } else {
          righe += `<option value='` + res[i].id + `'>  ${res[i].nome}  </option>`
        }


      }
      categorie = righe;
    },
    async: false
  });

  return menu.replace('[ROW]', categorie);
}


function renderModelliProdotto(idProdotto) {
  $.get('http://localhost:8080/modelli/prodotto/'+idProdotto, function (res) {
    var righeNuove = "";
    for (let i = 0; i < res.length; i++) {
      righeNuove += `<tr id='tabellaMod' clickable>
                  <td>${res[i].taglia}</td>
                  <td>${res[i].quantita}</td>     
                  <td>
                    <div class="d-flex flex-row">
                      <div class="mx-2">
                        <button class='btn btn-secondary btn-modifica-modello' data-bs-toggle="modal" data-bs-target="#myModal" idProdotto='${idProdotto}' value='${res[i].id}'>Modifica</button>
                      </div>
                      <div class="">
                        <button style='width :87.46px;' class='btn btn-danger btn-elimina-modello' idProdotto='${idProdotto}' value='${res[i].id}'>Elimina</button>
                      </div>
                    </div>
                    
                  </td>
                </tr>`
    }
  
    $('#header-modal').html(headerAggiungiModello)
    $('#body-modal').html(tabellaModelli.replace('[ROW]', righeNuove).replace('[ID]',idProdotto));
    $('.footer-modal').html(bottoniGestioneModelli)
  })
}
function deleteModello(id,idProdotto) {
   $.ajax({
     type: 'DELETE',
     url: `http://localhost:8080/modelli/${id}`,

    
     success : function(res) {
     renderModelliProdotto(idProdotto)



     }

   })
}
function renderModificaModaleModello(id,idProdotto) {
  
  $.get(`http://localhost:8080/modelli/${id}`, function (res) {
    $('#header-modal').html("MODIFICA MODELLO")
    $('#body-modal').html(templateModificaModello.replace('[TAGLIA]', res.taglia)
                                                 .replace('[QUANTITA]', res.quantita)
                                                 .replace('[COLORE]',res.colore)
                                                 .replace('[LINK1]',res.link1)
                                                 .replace('[LINK2]',res.link2)
                                                 .replace('[LINK3]',res.link3))
      
    $('.footer-modal').html(bottoniModificaModello.replace('[IDPRODOTTO]',idProdotto)
                                                  .replace('[ID]',id));
 })                                              
 
}

 



function modificaModello (id,idProdotto) {
  
  $('#header-modal').html("MODIFICA MODELLO")
  const modModello=JSON.stringify({
    "id": id,
    "colore": $('#colore').val(),
    "taglia": $('#taglia').val(),
    "quantita": $('#quantita').val(),
    "link1" : $('#link1').val(),
    "link2" : $('#link2').val(),
    "link3" : $('#link3').val(),
    "idProdotto" :idProdotto
    
     
  })
  
  

  $.ajax({
    type: 'PUT',
    url: 'http://localhost:8080/modelli/',
    headers: {
      "Content-Type": "application/json"
    },
    data: modModello,
    success: function (res) {
      renderModelliProdotto(idProdotto)
    }
  })

 
}
function renderAggiungiModelloModal(idProdotto) {
  
  $('#header-modal').html("AGGIUNGI MODELLO")
  $('#body-modal').html(templateAggiungiModello.replace('[ID]', idProdotto));
  $('.footer-modal').html(bottoniAggiungiModello.replace('[ID]', idProdotto).replace('[ID]', idProdotto));
}

function renderAggiungiModelloModal2(idProdotto) {
  
  $('#header-modal2').html("AGGIUNGI MODELLO")
  $('#body-modal2').html(templateAggiungiModello.replace('[ID]', idProdotto));
  $('#footer-modal2').html(bottoniAggiungiModello2.replace('[ID]', idProdotto).replace('[ID]', idProdotto).replace('[ID]', idProdotto));
  
}


function caricaImmagine(numero) {
  $(document).ready(function () {
    var file = $('#file' + numero)[0].files[0];
    var formData = new FormData();
    formData.append("file", file);

    $.ajax({
      type: 'POST',
      url: 'http://localhost:8083/file/upload',
      data: formData,
      processData: false,
      contentType: false,
      success: function (res) {
        $('#link' + numero).val(res)
        $('#svg' + numero).show();
      },
      error: function (res) {
       
      }
    })
  })
}

function deleteImmagine(link) {
  $.ajax({
    type: 'DELETE',
    url: 'http://localhost:8083/file/delete/' + link,
    headers: {
      "Content-Type": "application/json"
    }
  })
}

function renderBarraRicerca(res) {
  
  var categoria="";
  $.ajax({
    url: 'http://localhost:8080/categorie',
    async : false,
    success: function (res) {
      for(let c of res) {
        categoria+=`<option value='${c.id}'>${c.nome}</option>`
      }

      
    }
  })

  $('#renderFiltro').html( barraRicerca.replace('[OPZIONI]', categoria));
}

function renderMagazzinoFiltrato(res) {
   
    $('#body').html('');
    var righeNuove = "";
    
   
    for (let i = 0; i < res.length; i++) {
      righeNuove += `<tr id='tabellaMod' clickable>
                  <td>${res[i].nome}</td>
                  <td>${res[i].categoria.nome}</td>
                  <td>${res[i].prezzo}</td>
                  <td>${res[i].descrizione}</td>      
                  <td>
                    <div class="d-flex flex-row">
                      <div class="mr-3">
                        <button class='btn btn-primary btn-mostra-modelli' data-bs-toggle="modal" data-bs-target="#myModal" value='${res[i].id}'>Modelli</button>
                      </div>
                      <div class="mx-2">
                        <button class='btn btn-secondary btn-modifica' data-bs-toggle="modal" data-bs-target="#myModal" value='${res[i].id}'>Modifica</button>
                      </div>
                      <div class="">
                        <button style='width :87.46px;' class='btn btn-danger btn-elimina' value='${res[i].id}'>Elimina</button>
                      </div>
                    </div>
                    
                  </td>
                </tr>`
    }

    $('#body').html(tabella.replace('[ROW]', righeNuove));
  

}
function ordinaProdotti(start) {
  var prodottiOrdinati = [...prodotti];

  if (start == 'min') {
    return prodottiOrdinati.sort((a, b) => a.prezzo - b.prezzo);
  } else {
    return prodottiOrdinati.sort((a, b) => b.prezzo - a.prezzo);
  }

}

function filtroCategoria (idCategoria){
  var prodottiOrdinati = [...prodotti];
  return prodottiOrdinati.filter(e => e.categoria.id== idCategoria)


}
function renderCategorie() {
  $.ajax({
    url: 'http://localhost:8080/categorie',
    async : false,
    success: function (res) {
      var righeNuove="";
      for(let c of res) {
        righeNuove += `<tr id='tabellaCategoria' >
        <td>${c.nome}</td>
            
        <td>
          <div class="d-flex flex-row">
            <div class="mx-2">
              <button class='btn btn-secondary btn-modifica-categoria' data-bs-dismiss="modal" nomeCategoria='${c.nome}' value='${c.id}'>Modifica</button>
            </div>
            <div class="">
              <button style='width :87.46px;' class='btn btn-danger btn-elimina-categoria'  value='${c.id}'>Elimina</button>
            </div>
          </div>
          
        </td>
      </tr>`
      }
      $('#header-modal').html("CATEGORIE")
  $('#body-modal').html(tabellaCategoria.replace('[CATEGORIE]',righeNuove))
  $('.footer-modal').html(bottoniGestioneModelli);

      

      
    }
  })

}

function deleteCategoria(id) {
  $.ajax({
    type: 'DELETE',
    url: `http://localhost:8080/categorie/${id}`,

   
    success : function(res) {
    renderCategorie();



    }

  })
}
function renderModificaCategorie(id,nome) {
  $('.w3-modal-content').width('240px')
  document.getElementById('id01').style.display='block'

  $('#header-modal2').html("MODIFICA CATEGORIE")
  $('#body-modal2').html(modificaCategoria.replace('[NOME]',nome))
  $('#footer-modal2').html(bottoniModificaCategoria.replace('[NOME]',nome).replace('[ID]',id));

}

function eseguiModificaCategoria(id) {
  const json={id:id,nome : $('#nomeCategoria').val()}
  $.ajax({
    type: 'PUT',
    url: 'http://localhost:8080/categorie/',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(json),
    success: function (res) {
      renderMagazzino()
      renderCategorie()
      document.getElementById('id01').style.display='none'
    }
  })
}

function renderAggiungiCategorie() {
  $('.w3-modal-content').width('240px')
  document.getElementById('id01').style.display='block'
  
  $('#header-modal2').html("AGGIUNGI CATEGORIE")
  $('#body-modal2').html(aggiungiCategoria)
  $('#footer-modal2').html(bottoniAggiungiCategoria);

}

function eseguiAddCategoria() {
  const json={nome : $('#nomeCategoria').val()}

  $.ajax({
    type: 'POST',
    url: 'http://localhost:8080/categorie/',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(json),
    success: function (res) {
      renderMagazzino()
      renderCategorie()
      document.getElementById('id01').style.display='none'
    }
  })
}

