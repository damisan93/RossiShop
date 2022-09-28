$(document).ready(function () {
  renderMenuCategorie();
  renderCookieCarrello();
  //inizializzo la pagina
  renderHeader(headerHome);
  setNavbarButton();
  getProdottiHome();

  //ascolto evento per lanciare ricerca
  $("#header").on("click", ".search_icon", function () {
    const input = $(".search_input").val();

    renderHeader("RISULTATI RICERCA");
    addSiteMapLink('Ricerca', input);
    getProdotti(input);

    $(".search_input").val("");
  });

  //evento per mostrare carrello
  $('#tastiNavbar').on('click', '.btn-carrello', () => {
    $('#cartModal').modal('show');
  });

  //evento per mostrare profilo utente
  $('#tastiNavbar').on('click', '.btn-profilo', () => {
    renderProfilo();
  });

  //evento per sbloccare modifica profilo
  $('#dettaglio').on('click', '.btn-modifica-profilo', () => {
    modificaProfilo();

  });

  //evento per chiudere carrello
  $('.modal').on('click', '.btn-chiusura-carello', () => {
    $('#cartModal').modal('hide');
  });

  //evento per andare al checkout
  $('.modal').on('click', '.btn-checkOut', () => {
    $('#cartModal').modal('hide');
    renderCheckout();
  });

  //evento per mostrare dettaglio del prodotto
  $('#contenitoreSchede').on('click', '.btn-dettaglio-prodotto', function () {
    const id = $(this).val()
    getProdotto(id);
  });

  //ascolto evento per cambiare taglie prodotti nel dettaglio
  $("#dettaglio").on('click', 'span', function () {
    $('#coloriProdotto').html(tagliePresenti.get($(this).html()))
  })

  //ascolto evento per cambiare immagini in base al colore selezionato
  $("#dettaglio").on('click', 'select', function () {
    const colore = $(this).val();
    $('#main-image').attr('src', coloriPresenti.get(colore).link1)
    $('#img-1').attr('src', coloriPresenti.get(colore).link1)
    $('#img-2').attr('src', coloriPresenti.get(colore).link2)
    $('#img-3').attr('src', coloriPresenti.get(colore).link3)
  })

  //ascolto evento per aggiungere prodotto al carrello 
  $("#dettaglio").on('click', '.btn-add-cart', function () {
    addCarrello();
  })

  //ascolto evento per rimuovere prodotto dal carrello
  $('#tabellaCarrello').on('click', '.btn-elimina-carrello', function () {
    const id = $(this).val();
    rimuoviDaCarrello(id);
  })

  //ascolto evento click dropdown categorie per mostrare proxotti di una data categoria
  $('#dropCategorie').on('click', 'li', function () {
    const id = $(this).attr('idCategoria');
    if (id == -1) {
      getAllProdotti();
    } else {
      getProdottiCategoria(id)
    }

  })

  //ascolto evento per ordinare per prezzo
  $('#header').on('click', '#filtroPrezzo', function (ev) {
    if (ev.offsetY < 0) {
      renderProdottiRes(ordinaProdotti($(this).val()));
    } else {}
  })

  //ascolto evento per mostrare solo determianti colori
  $('#header').on('click', '#filtroColori', function (ev) {
    if (ev.offsetY < 0) {
      renderProdottiRes(filtraColori($(this).val()))
    } else {}
  })

  //ascolto evento per mostrare solo determiante taglie
  $('#header').on('click', '#filtroTaglie', function (ev) {
    if (ev.offsetY < 0) {
      renderProdottiRes(filtraTaglia($(this).val()))
    } else {}
  })

  //ascolto evento per annullare filtri
  $('#header').on('click', '#annullaFiltri', function (ev) {
    renderProdottiRes(prodotti)
  })

});