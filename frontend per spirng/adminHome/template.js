var tabella = ` <table class=" table table-striped table-bordered">
                  <thead class="thead-dark">
                     <tr>
                     <th>nome</th>
                     <th>categoria</th>
                     <th>prezzo</th>
                     <th>descrizione</th>
                     <th>Opzioni</th>
                     </tr>
                  </thead>
                  <tbody>

                     [ROW]

                  </tbody>
                  </table> `;

var menu = `<select id='categoria'>
 [ROW]
</select>`;

const templateModifica = `<div class="container">
                              <input type="hidden" value="[ID]" id="idProdotto"> 
                              <p>Nome:</p>
                              <input id="nome" type="text" value="[NOME]">
                              <p>Prezzo:</p>
                              <input id="prezzo" type="number" value="[PREZZO]">
                              <p>Descrizone:</p>
                              <textarea id="descrizione" rows="4" cols="50">[DESCRIZIONE]</textarea>
                              Categoria:
                              [CATEGORIE]
                           </div>`
const templateModificaModello =  
`<div class="container">
                              <input type="hidden" value="[ID]" id="idModello"> 
                              <p>Taglia:</p>
                              <input id="taglia" type="text" value="[TAGLIA]">
                              <p>Quantità:</p>
                              <input id="quantita" type="number" value="[QUANTITA]">
                              <p> Colore:</p>
                              <input id="colore" type= 'text' value= [COLORE]
                              <br>
                              <p>Immagine 1:</p>
                           <input type="file" id="file1">
                           <button type="button" id="upload" class="" value="1">Carica</button>
                           <input type="hidden" value="[LINK1]" id="link1">
                           <svg id="svg1" style="display: none;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                           <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                           <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                           </svg>
                           <p>Immagine 2:</p>
                           <input type="file" value="[LINK2]" id="file2">
                           <button type="button" id="upload" class="" value="2">Carica</button>
                           <input type="hidden" id="link2">
                           <svg id="svg2" style="display: none;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                           <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                           <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                           </svg>
                           <p>Immagine 3:</p>
                           <input type="file" id="file3">
                           <input type="hidden" value="[LINK3]" id="link3">
                           <button type="button" id="upload" class="" value="3">Carica</button>
                           <svg id="svg3" style="display: none;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                           <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                           <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                           </svg>
                              
                              
                           </div>`                    

const bottoniModifica = `<button type="button" class="mr-2 btn btn-primary btn-esegui-modifica"">Modifica</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Chiudi</button>`

const bottoniModificaModello = `<button type="button" data-bs-toggle="modal" class="mr-2 btn btn-primary btn-esegui-modifica-modello"" idProdotto='[IDPRODOTTO]' value='[ID]'>Modifica</button>
<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Chiudi</button>`

const templateAggiungi = `<div class="container">
                              <p>Nome:</p>
                              <input id="nome" type="text" placeholder="Nome....">
                              <p>Prezzo:</p>
                              <input id="prezzo" type="number" placeholder="Prezzo.....">
                              <p>Descrizone:</p>
                              <textarea id="descrizione" rows="4" cols="50" placeholder="Inserisci una descrizione...."></textarea>
                              Categoria:
                              [CATEGORIE]
                           </div>`

const bottoniAggiungi = `<button type="button" class="mr-2 btn btn-primary btn-esegui-add">Aggiungi</button>
                           <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Chiudi</button>`

                           const templateAggiungiModello = `<div class="container">
                           <input type="hidden" value="[ID]" id="idProdotto"> 
                           <p>Colore:</p>
                           <input type="text" id="colore" placeholeder="Colore.....">
                           <p>Taglia:</p>
                           <input type="text" id="taglia" placeholeder="Taglia.....">
                           <p>Quantità:</p>
                           <input type="number" id="quantita" placeholeder="Quantità.....">
                           <p>Immagine 1:</p>
                           <input type="file" id="file1">
                           <button type="button" id="upload" class="" value="1">Carica</button>
                           <input type="hidden" id="link1">
                           <svg id="svg1" style="display: none;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                           <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                           <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                           </svg>
                           <p>Immagine 2:</p>
                           <input type="file" id="file2">
                           <button type="button" id="upload" class="" value="2">Carica</button>
                           <input type="hidden" id="link2">
                           <svg id="svg2" style="display: none;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                           <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                           <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                           </svg>
                           <p>Immagine 3:</p>
                           <input type="file" id="file3">
                           <input type="hidden" id="link3">
                           <button type="button" id="upload" class="" value="3">Carica</button>
                           <svg id="svg3" style="display: none;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                           <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                           <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                           </svg>
                        </div>`

const bottoniAggiungiModello = `<button type="button" class="mr-2 btn btn-primary  btn-esegui-add-modello-termina" value="[ID]" >Aggiungi e Termina</button>
                                 <button type="button" class="mr-2 btn btn-primary btn-esegui-add-modello-continua" value="[ID]">Aggiungi e Continua</button>
                                 <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Chiudi</button>`


const bottoniAggiungiModello2 = `<button type="button" class="mr-2 btn btn-primary btn-esegui-add-modello-termina" onclick="document.getElementById('id01').style.display='none'" data-bs-toggle="modal" data-bs-target="#myModal" value="[ID]" >Aggiungi e Termina</button>
                                 <button type="button" class="mr-2 btn btn-primary btn-esegui-add-modello-continua" value="[ID]">Aggiungi e Continua</button>
                                 <button type="button" class="btn btn-danger btn-chiudiModal2" data-bs-toggle="modal" value="[ID]"data-bs-target="#myModal" onclick="document.getElementById('id01').style.display='none'">Chiudi</button>`


const bottoniGestioneModelli = `<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Chiudi</button>`

const headerAggiungiModello = `<div>
                                 <span>MODELLI PRODOTTO</span>
                              </div>`

const tabellaModelli = ` <table class=" table table-striped table-bordered">
                           <thead class="thead-dark">
                           <div>
                           <button onclick="document.getElementById('id01').style.display='block'" data-bs-dismiss="modal" value='[ID]' class="btn btn-primary btn-aggiungi-nuovi-modelli ">Aggiungi modello</button>
                           </div>
                           
                              <tr>
                                 <th>Taglia</th>
                                 <th>Quantità</th>
                                 <th>Opzioni</th>
                              </tr>
                           </thead>
                           <tbody>

                              [ROW]

                           </tbody>
                           </table> `