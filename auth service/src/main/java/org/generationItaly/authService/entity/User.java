package org.generationItaly.authService.entity;

import org.generationItaly.authService.util.IMappablePro;

public class User extends InfoUtente implements IMappablePro {

	private String username;
	private String password;
	private String ruolo;
	
	public User(int id, String nome, String cognome, String ddn, String indirizzo, String citta, String indirizzoFat,
			String cittaFat, String nTel, String email, String tipoCaarta, String numeroCarta, String cvv,
			String username, String password, String ruolo) {
		super(id, nome, cognome, ddn, indirizzo, citta, indirizzoFat, cittaFat, nTel, email, tipoCaarta, numeroCarta,
				cvv);
		this.username = username;
		this.password = password;
		this.ruolo = ruolo;
		
		
	}

	public User() {
		
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRuolo() {
		return ruolo;
	}

	public void setRuolo(String ruolo) {
		this.ruolo = ruolo;
	}

	@Override
	public String toString() {
		return "{ username : " + username + ", password : " + password + ", ruolo : " + ruolo + ", getId() : " + getId()
				+ ", getNome() : " + getNome() + ", getCognome() : " + getCognome() + ", getDdn() : " + getDdn()
				+ ", getIndirizzo() : " + getIndirizzo() + ", getCitta() : " + getCitta() + ", getIndirizzoFat() : "
				+ getIndirizzoFat() + ", getCittaFat() : " + getCittaFat() + ", getnTel() : " + getnTel()
				+ ", getEmail() : " + getEmail() + ", getTipoCarta() : " + getTipoCarta() + ", getNumeroCarta() : "
				+ getNumeroCarta() + ", getCvv() : " + getCvv() + " }\n";
	}
	

	
	
	

}
