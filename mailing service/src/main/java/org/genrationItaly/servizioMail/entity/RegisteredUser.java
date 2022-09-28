package org.genrationItaly.servizioMail.entity;

public class RegisteredUser {
	
	private String email;
	private String pwd;
	private String username;
	private String nome;
	private String cognome;
	
	public RegisteredUser() {}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getCorpoMail() {
		return "Benvenuto " + nome + " " + cognome +"\n\n" 
				+"Hai terminato la registrazione sul nostro FANTASTICO Ecommerce\n"
				+"di seguito puoi trovare le tue credenziali d'accesso\n\n"
				+"Username: " + username + "\n"
				+"Password: " + pwd + "\n\n"
				+"ricordati di conservare le credenziali\n\n"
				+"Un Saluto da Rossi SPA";
	}
	
	public String getOggettoMail() {
		return "Registrazione Rossi SPA";
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
	
	

}
