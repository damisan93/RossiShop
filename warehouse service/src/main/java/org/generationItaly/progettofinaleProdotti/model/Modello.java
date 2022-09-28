package org.generationItaly.progettofinaleProdotti.model;


import org.generationItaly.progettofinaleProdotti.util.IMappablePro;



public class Modello implements IMappablePro{
	
	private int id;
	private String colore;
	private String taglia;
	private int quantita;
	private String link1;
	private String link2;
	private String link3;
	private int idProdotto;
	
	public Modello(int id, String colore, String taglia, int quantita, String link1, String link2, String link3,
			int idProdotto) {
		super();
		this.id = id;
		this.colore = colore;
		this.taglia = taglia;
		this.quantita = quantita;
		this.link1 = link1;
		this.link2 = link2;
		this.link3 = link3;
		this.idProdotto = idProdotto;
	}
	
	public Modello(String colore, String taglia, int quantita, String link1, String link2, String link3,
			int idProdotto) {
		super();
		this.colore = colore;
		this.taglia = taglia;
		this.quantita = quantita;
		this.link1 = link1;
		this.link2 = link2;
		this.link3 = link3;
		this.idProdotto = idProdotto;
	}
	
	public Modello() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getColore() {
		return colore;
	}

	public void setColore(String colore) {
		this.colore = colore;
	}

	public String getTaglia() {
		return taglia;
	}

	public void setTaglia(String taglia) {
		this.taglia = taglia;
	}

	public int getQuantita() {
		return quantita;
	}

	public void setQuantita(int quantita) {
		this.quantita = quantita;
	}

	public String getLink1() {
		return link1;
	}

	public void setLink1(String link1) {
		this.link1 = link1;
	}

	public String getLink2() {
		return link2;
	}

	public void setLink2(String link2) {
		this.link2 = link2;
	}

	public String getLink3() {
		return link3;
	}

	public void setLink3(String link3) {
		this.link3 = link3;
	}

	public int getIdProdotto() {
		return idProdotto;
	}

	public void setIdProdotto(int idProdotto) {
		this.idProdotto = idProdotto;
	}
	
	
	
	
}
