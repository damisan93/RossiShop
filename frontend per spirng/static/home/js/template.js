const schedaProdotto = `<div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="[IMGPATH]" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">[NOME]</h5>
                                <!-- Product price-->
                                [PREZZO]€
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><button class="btn btn-outline-dark mt-auto btn-dettaglio-prodotto" type="button" value="[ID]">Dettaglio</button></div>
                        </div>
                    </div>
                    </div>`;

const headerHome = `<header class="bg-dark py-5">
<div class="container px-4 px-lg-5 my-5">
    <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">Rossi Clothing</h1>
        <p class="lead fw-normal text-white-50 mb-0">Style and quality</p>
    </div>
    <br>
    <!--searchBar-->
    <div class="input_with_icon">
        <div class="d-flex justify-content-center h-800">
          <div class="search">
            <input class="search_input" type="text" name="input" placeholder="Cerca qui...">
            <a href="#" class="search_icon" ><i class="fa fa-search"></i></a>
          </div>
        </div>
      </div>
      <!--fine searchbar-->
</div>
</header>`;

const tastoCarrello = `<div class="d-flex flex-row">
                        <div class="container">
                            <button type="button" class="btn btn-success btn-carrello" data-toggle="modal" data-target="#cartModal">
                                Carrello
                            </button>  
                        </div>
                        <div class="dropdown">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                Profilo
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item btn-profilo" href="#">Profilo</a>
                                <a class="dropdown-item" href="#">Ordini</a>
                                <a class="dropdown-item" href="/logout">Logout</a>
                            </div>
                            </div>
                        </div>`;

const tastoLogin = `<div class="d-flex">
                    <div class="container">
                        <a href="/login">
                            <button class="btn btn-outline-dark" type="button">
                            Login
                            </button>
                        </a>
                    </div>
                    <div>
                        <a href="/singup">
                            <button class="btn btn-outline-dark" type="button">
                            Singup
                            </button>
                        </a>
                    </div>
                    </div>`;

const navigator = `<li class="breadcrumb-item"><a href="#" class="navlink" valore="[VALORE]">[NOME]</a></li>`;

const dettaglioProdotto = `<div class="container mt-5 mb-5">
<div class="row d-flex justify-content-center">
    <div class="col-md-10">
        <div class="card">
            <div class="row">
                <div class="col-md-6">
                    <div class="images p-3">
                        <div class="text-center p-4"> <img id="main-image" src="[IMGPATH1]" width="250" /> </div>
                        <div class="thumbnail text-center"> <img id="img-1" onclick="change_image(this)" src="[IMGPATH1]" width="70"> <img id="img-2" onclick="change_image(this)" src="[IMGPATH2]" width="70"> <img id="img-3" onclick="change_image(this)" src="[IMGPATH3]" width="70"> </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="product p-4">
                        <div class="d-flex justify-content-center">
                            <div id="nomeProdotto" class="d-flex align-items-end"> <h4 class="text-uppercase">[NOME]</h4>  </div>
                        </div>
                        <div class="mt-1 mb-1">
                            <span>Prezzo</span>
                            <div class="d-flex flex-row align-items-center"> 
                                <span id="prezzoProdotto" class="act-price">[PREZZO]</span>
                                <div class="ml-2"> <span> €</span> </div>
                            </div>
                        </div>
                        <input type="hidden" id="idProdotto" value="[ID]">
                        <div>
                            <span>Descrizione</span> 
                        </div>
                        
                        <p class="about">[DESCRIZIONE]</p>
                        <div id="taglia" class="sizes mt-">
                            <h6 class="text-uppercase">Colori</h6>
                            <select id="coloriProdotto">
                            [COLORI]
                            </select>
                            <h6 class="text-uppercase">Taglia</h6> 
                            [BOTTONITAGLIA]
                        </div>
                        <div class="cart mt-4 align-items-center"> <button class="btn btn-danger btn-add-cart text-uppercase mr-2 px-4">Aggiungi</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;

const optionTaglia = `<option>[TAGLIA]</option>`

const bottoniTaglie = `<label class="radio taglia"> <input type="radio" name="size" value="[TAGLIA]" checked> <span>[TAGLIA]</span> </label>`;

const profiloUtente = `<div class="container rounded bg-white">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-5 border-right mb-2">
                                <div class="p-3 py-3 ">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h4 class="text-right">Profilo Utente</h4>
                                    </div>
                                    <fieldset id="attivo" disabled>
                                    <div class="row mt-2">
                                        <input type="hidden" id="userId" value="[ID]">
                                        <div class="col-md-6"><label class="labels">Nome</label><input id="nome" type="text" class="form-control" placeholder="first name" value="[NOME]"></div>
                                        <div class="col-md-6"><label class="labels">Cognome</label><input id="cognome" type="text" class="form-control" value="[COGNOME]" placeholder="surname"></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12"><label class="labels">Telefono</label><input id="ntel" type="text" class="form-control" placeholder="Numero di telefono..." value="[NTEL]"></div>
                                        <div class="col-md-12"><label class="labels">Mail</label><input id="email" type="text" class="form-control" placeholder="Numero di telefono..." value="[EMAIL]"></div>
                                        <div class="col-md-12"><label class="labels">Indirizzo</label><input id="indirizzo" type="text" class="form-control" placeholder="enter address line 1" value="[INDIRIZZO]"></div>
                                        <div class="col-md-12"><label class="labels">Città</label><input id="citta" type="text" class="form-control" placeholder="" value="[CITTA]"></div>
                                        <div class="col-md-12"><label class="labels">Data di Nascita</label><input id="ddn" type="date" class="form-control" value="[DDN]"></div>
                                        <div class="col-md-12"><label class="labels">Password</label><input id="pwd" type="password" class="form-control" value="[PWD]"></div>
                                    </fieldset>    
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="p-3 py-3 ">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h4 class="text-right">Informazioni Fatturazione</h4>
                                    </div>
                                    <fieldset id="attivoFatt" disabled>
                                    <div class="row mt-3">
                                        <div class="col-md-12"><label class="labels">Indirizzo</label><input id="indirizzoFatt" type="text" class="form-control" placeholder="enter address line 1" value="[INDIRIZZOFATT]"></div>
                                        <div class="col-md-12"><label class="labels">Città</label><input id="cittaFatt" type="text" class="form-control" placeholder="" value="[CITTAFATT]"></div>
                                    </fieldset>    
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="mb-3 text-center"><button class="btn btn-primary profile-button btn-modifica-profilo" type="button">Modifica Profilo</button></div>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>`;


const prodottoCarrello = `<tr id="tr[ID]">
                            <td class="w-25">
                            <img src="[IMG]"
                                class="img-fluid img-thumbnail" alt="Sheep">
                            </td>
                            <td>[NOME]</td>
                            <td id="prezzoProdottoCarrello">[PREZZO]</td><span>€</span>
                            <td class="qty"><input id="quantitaProdotto" quantita="1" type="text" class="form-control" value="1"></td>
                            <td><span id="prezzoTotale"></span>€</td>
                            <td>
                            <button type="button" class="btn btn-danger btn-elimina-carrello btn-sm" value="[ID]">X</button>
                            </td>
                            </tr>`

const barraRicerca = `<div class="container my-5 border text-center">
                        <div class="row">
                        <div class="col mt-2">
                            <p>Taglia</p>
                        </div>
                        <div class="col mt-2">
                            <span>Prezzo</span>
                        </div>
                        <div class="col mt-2">
                            <p>Colore</p>
                        </div>
                        <div class="col mt-2">
                            <p>Opzioni</p>
                        </div>
                        </div>
                        <div class="row mb-2">
                        <div class="col d-flex justify-content-center">
                            [TAGLIE]
                        </div>
                        <div class="col d-flex justify-content-center">
                        <select class="form-select" id="filtroPrezzo" style="width: auto;">
                            <option value="max">Dal più Caro</option>
                            <option value="min">Dal più Economico</option>
                        </select>
                        </div>
                        <div class="col d-flex justify-content-center">
                            [COLORI]
                        </div>
                        <div class="col d-flex justify-content-center">
                            <button type="button" id="annullaFiltri" class="btn btn-light">Annulla Filtri</button> 
                        </div>
                        </div>
                        </div>`

const selectRicerche = `<select id="filtro[FILTRO]" class="form-select" style="width: auto;">[OPZIONI]</select>`

const templateCheckOut = `<style>
.title{
    margin-bottom: 5vh;
}
.card{
    margin: auto;
    max-width: 950px;
    width: 90%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
}
@media(max-width:767px){
    .card{
        margin: 3vh auto;
    }
}
.cart{
    background-color: #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
}
@media(max-width:767px){
    .cart{
        padding: 4vh;
        border-bottom-left-radius: unset;
        border-top-right-radius: 1rem;
    }
}
.summary{
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65);
}
@media(max-width:767px){
    .summary{
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
    }
}
.summary .col-2{
    padding: 0;
}
.summary .col-10
{
    padding: 0;
}.row{
    margin: 0;
}
.title b{
    font-size: 1.5rem;
}
.main{
    margin: 0;
    padding: 2vh 0;
    width: 100%;
}
.col-2, .col{
    padding: 0 1vh;
}
a{
    padding: 0 1vh;
}
.close{
    margin-left: auto;
    font-size: 0.7rem;
}
img{
    width: 3.5rem;
}
.back-to-shop{
    margin-top: 4.5rem;
}
h5{
    margin-top: 4vh;
}
hr{
    margin-top: 1.25rem;
}
form{
    padding: 2vh 0;
}
select{
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}
input{
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder
{
      color:transparent;
}

a{
    color: black; 
}
a:hover{
    color: black;
    text-decoration: none;
}
 #code{
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253) , rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
}
</style>
<div class="card mt-5">
<div class="row">
    <div class="col-md-8 cart">
        <div class="title">
            <div class="row">
                <div class="col"><h4><b>Carrello</b></h4></div>
                <div class="col align-self-center text-right text-muted"></div>
            </div>
        </div>
        [PRODOTTI]  
        <div class="back-to-shop"><a href="/">&leftarrow;<span class="text-muted">Continua lo shopping</span></a></div>
    </div>
    <div class="col-md-4 summary">
        <div><h5><b>Riepilogo</b></h5></div>
        <hr>
        <div class="row">
            <div class="col" style="padding-left:0;">Prodotti [NUMERO]</div>
            <div class="col text-right">&euro; [TOTALE]</div>
        </div>
        <form>
            <p>SPEDIZIONE</p>
            <select><option class="text-muted">Spedizione standard- &euro;5.00</option></select>
            <p>Coupon sconto</p>
            <input id="code" placeholder="Inserisci il coupon">
        </form>
        <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
            <div class="col">PREZZO TOTALE</div>
            <div class="col text-right">&euro; [TOTALE2]</div>
        </div>
        <button class="btn">CHECKOUT</button>
    </div>
</div>

</div>`

const dettaglioPRodottoCheckout = `        <div class="row border-top border-bottom">
<div class="row main align-items-center">
    <div class="col-2"><img class="img-fluid" src="[IMG]"></div>
    <div class="col">
        <div class="row text-muted">[NOME]</div>
        <div class="row">[CATEGORIA]</div>
    </div>
    <div class="col">
        <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
    </div>
    <div class="col">&euro; [PREZZO]</div>
</div>
</div>`