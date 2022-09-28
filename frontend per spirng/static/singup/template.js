const primaParte = `<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-user fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="text" id="nome" class="form-control" />
    <label class="form-label" for="form3Example1c">Nome</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="text" id="cognome" class="form-control" />
    <label class="form-label" for="form3Example3c">Cognome</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="date" id="ddn" class="form-control" />
    <label class="form-label" for="form3Example3c">Data di Nascita</label>
</div>
</div>

<p id='controllaDati' style="display: none;">Controlla tutti i dati prima di continuare</p>

<div class="form-check d-flex justify-content-center mb-5">
<input class="form-check-input me-2" type="checkbox" value=""
    id="form2Example3c" />
<label class="form-check-label" for="form2Example3">
    Accetto <a href="#!">termini del servizio</a>
</label>
</div>

<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
<button type="button" class="btn btn-primary btn-lg btn-primo">Next</button>
</div>`

const secondaParte = `<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-user fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="text" id="email" class="form-control" />
    <label class="form-label" for="form3Example1c">Email</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="email" id="indirizzo" class="form-control" />
    <label class="form-label" for="form3Example3c">Indirizzo</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-lock fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="text" id="citta" class="form-control" />
    <label class="form-label" for="form3Example4c">Città</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-key fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="text" id="indirizzoFatt" class="form-control" />
    <label class="form-label" for="form3Example4cd">Indirizzo Fatturazione</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-key fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="text" id="cittaFatt" class="form-control" />
    <label class="form-label" for="form3Example4cd">Città Fatturazione</label>
</div>
</div>

<p id='controllaDati' style="display: none;">Controlla tutti i dati prima di continuare</p>

<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
<button type="button" class="btn btn-primary btn-lg btn-secondo">Next</button>
</div>`

const terzaParte = `<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-user fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <select class="form-control" id="tipoCarta">
        <option value="visa">VISA</option>
        <option value="mastercard">MASTERCARD</option>
        <option value="american express">AMERICAN EXPRESS</option>
        <option value="maestro">MAESTRO</option>
    </select>
    <label class="form-label" for="form3Example1c">Tipo Carta</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="number" id="numerocarta" class="form-control" />
    <label class="form-label" for="form3Example3c">Numero Carta</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-lock fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="number" id="cvv" class="form-control" />
    <label class="form-label" for="form3Example4c">CVV</label>
</div>
</div>

<p id='controllaDati' style="display: none;">Controlla tutti i dati prima di continuare</p>

<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
<button type="button" class="btn btn-primary btn-lg btn-terzo">Next</button>
</div>`

const quartaParte = `<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-user fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="number" id="ntel" class="form-control" />
    <label class="form-label" for="form3Example1c">Telefono</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="text" id="username" class="form-control" />
    <label class="form-label" for="form3Example3c">Username</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-lock fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="password" id="form3Example4c" class="form-control" />
    <label class="form-label" for="form3Example4c">Password</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-key fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="password" id="password" class="form-control" />
    <label class="form-label" for="form3Example4cd">Ripeti Password</label>
</div>
</div>

<p id='controllaDati' style="display: none;">Controlla tutti i dati prima di continuare</p>

<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
<button type="button" class="btn btn-primary btn-lg btn-finale">Registrati</button>
</div>`


{/* <div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-lock fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="password" id="form3Example4c" class="form-control" />
    <label class="form-label" for="form3Example4c">Password</label>
</div>
</div>

<div class="d-flex flex-row align-items-center mb-4">
<i class="fas fa-key fa-lg me-3 fa-fw"></i>
<div class="form-outline flex-fill mb-0">
    <input type="password" id="form3Example4cd" class="form-control" />
    <label class="form-label" for="form3Example4cd">Ripeti Password</label>
</div>
</div> */}