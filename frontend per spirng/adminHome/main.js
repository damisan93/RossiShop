$(document).ready(function () {

  renderMagazzino()

  //ascolto evento click modifica prodotto
  $('#body').on('click', '.btn-modifica', function () {
    renderModificaModale($(this).val());
  })

  //ascolto evento click elimna prodotto
  $('#body').on('click', '.btn-elimina', function () {
    deleteProdotto($(this).val());
  })

  //ascolto evento per concretizzare modifica
  $('.modal').on('click', '.btn-esegui-modifica', function () {
    modificaProdotto();
  })

  //ascolto evento click aggiungi prodotto 
  $('#demo').on('click', '.btn-add-prodotto', function() {
    renderAggiungiProdotto();
  })

  //ascolto evento per eseguire addprodotto
  $('.modal').on('click', '.btn-esegui-add', function () {
    aggiungiProdotto();
  })

  //ascolto evento per concretizzare aggiunta modello e terminare
  $('.modal').on('click', '.btn-esegui-add-modello-termina', function () {
    aggiungiModello(false)
    
  })

  //ascolto evento per concretizzare aggiunta modello e CONTINUARE
  $('.modal').on('click', '.btn-esegui-add-modello-continua', function () {
    aggiungiModello(true)
  })

  //ascolto evento per mostrare modelli di un determinato prodotto
  $('#body').on('click', '.btn-mostra-modelli', function () {
    renderModelliProdotto($(this).val());
  })

  //ascolto evento per eliminare modello
  $('.modal').on('click','.btn-elimina-modello',function() {
    deleteModello($(this).val(),$(this).attr('idProdotto'));
  })
   
 //ascolto evento per modifica modello
 $('.modal').on('click','.btn-modifica-modello',function() {
     renderModificaModaleModello($(this).val(),$(this).attr('idProdotto'));
   })

   //ascolto evento per modificare modello
 $('.modal').on('click','.btn-esegui-modifica-modello',function() {
     console.log('button')
     modificaModello($(this).val(),$(this).attr('idProdotto'));
   })

   //evento per caricare immagini
   $('.modal').on('click','#upload',function() {
    caricaImmagine($(this).val());
   })

   
   $('.modal').on('click', '.btn-aggiungi-nuovi-modelli', function () {

    console.log($(this).val())
    renderAggiungiModelloModal2($(this).val());
    
  })

  $('#id01').on('click','.btn-chiudiModal2', function() {
    renderModelliProdotto($(this).val())
  })

  $('#id01').on('click','#upload',function(){
    caricaImmagine($(this).val());

  })
  $('#id01').on('click', '.btn-esegui-add', function () {
    aggiungiProdotto();
  })

  //ascolto evento per concretizzare aggiunta modello e terminare
  $('#id01').on('click', '.btn-esegui-add-modello-termina', function () {
    var idProdotto=$(this).val()
    aggiungiModello2(false,idProdotto)
    renderModelliProdotto(idProdotto);
    
  })

   //ascolto evento per concretizzare aggiunta modello e CONTINUARE
   $('#id01').on('click', '.btn-esegui-add-modello-continua', function () {
    aggiungiModello2(true,$(this).val())
    
  })
});



