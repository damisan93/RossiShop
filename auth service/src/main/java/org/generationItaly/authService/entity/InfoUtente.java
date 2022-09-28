package org.generationItaly.authService.entity;

import org.generationItaly.authService.util.IMappablePro;

public class InfoUtente implements IMappablePro {
	private int id;
	private String nome;
	private String cognome;
	private String ddn;
	private String indirizzo;
	private String citta;
	private String indirizzoFat;
	private String cittaFat;
	private String nTel;
	private String email;
	private String tipoCarta;
	private String numeroCarta;
	private String cvv;
	
	public InfoUtente(int id, String nome, String cognome, String ddn, String indirizzo, String citta,
			String indirizzoFat, String cittaFat, String nTel, String email, String tipoCaarta, String numeroCarta,
			String cvv) {
		super();
		this.id = id;
		this.nome = nome;
		this.cognome = cognome;
		this.ddn = ddn;
		this.indirizzo = indirizzo;
		this.citta = citta;
		this.indirizzoFat = indirizzoFat;
		this.cittaFat = cittaFat;
		this.nTel = nTel;
		this.email = email;
		this.tipoCarta = tipoCaarta;
		this.numeroCarta = numeroCarta;
		this.cvv = cvv;
	}
	
	

	public InfoUtente(String nome, String cognome, String ddn, String indirizzo, String citta, String indirizzoFat,
			String cittaFat, String nTel, String email, String tipoCaarta, String numeroCarta, String cvv) {
		super();
		this.nome = nome;
		this.cognome = cognome;
		this.ddn = ddn;
		this.indirizzo = indirizzo;
		this.citta = citta;
		this.indirizzoFat = indirizzoFat;
		this.cittaFat = cittaFat;
		this.nTel = nTel;
		this.email = email;
		this.tipoCarta = tipoCaarta;
		this.numeroCarta = numeroCarta;
		this.cvv = cvv;
	}
	
	public InfoUtente(String nome, String cognome, String ddn, String indirizzo, String citta, String email,
			String tipoCaarta, String numeroCarta, String cvv) {
		super();
		this.nome = nome;
		this.cognome = cognome;
		this.ddn = ddn;
		this.indirizzo = indirizzo;
		this.citta = citta;
		this.email = email;
		this.tipoCarta = tipoCaarta;
		this.numeroCarta = numeroCarta;
		this.cvv = cvv;
	}
	
	public InfoUtente() {
		super();
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getDdn() {
		return ddn;
	}

	public void setDdn(String ddn) {
		this.ddn = ddn;
	}

	public String getIndirizzo() {
		return indirizzo;
	}

	public void setIndirizzo(String indirizzo) {
		this.indirizzo = indirizzo;
	}

	public String getCitta() {
		return citta;
	}

	public void setCitta(String citta) {
		this.citta = citta;
	}

	public String getIndirizzoFat() {
		return indirizzoFat;
	}

	public void setIndirizzoFat(String indirizzoFat) {
		this.indirizzoFat = indirizzoFat;
	}

	public String getCittaFat() {
		return cittaFat;
	}

	public void setCittaFat(String cittaFat) {
		this.cittaFat = cittaFat;
	}

	public String getnTel() {
		return nTel;
	}

	public void setnTel(String nTel) {
		this.nTel = nTel;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTipoCarta() {
		return tipoCarta;
	}

	public void setTipoCarta(String tipoCarta) {
		this.tipoCarta = tipoCarta;
	}

	public String getNumeroCarta() {
		return numeroCarta;
	}

	public void setNumeroCarta(String numeroCarta) {
		this.numeroCarta = numeroCarta;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	
	
	
	

}
