package org.generationItaly.progettofinaleProdotti.model;

import java.util.List;

import org.generationItaly.progettofinaleProdotti.util.IMappablePro;



public class Prodotto implements IMappablePro{
	private int id;
	private String nome;
	private Categoria categoria;
	private double prezzo;
	private String descrizione;
	private List<Modello> modelli;
	
	public Prodotto(int id, String nome, Categoria categoria, double prezzo, String descrizione,
			List<Modello> modelli) {
		super();
		this.id = id;
		this.nome = nome;
		this.categoria = categoria;
		this.prezzo = prezzo;
		this.descrizione = descrizione;
		this.modelli = modelli;
	}
	
	public Prodotto(String nome, Categoria categoria, double prezzo, String descrizione, List<Modello> modelli) {
		super();
		this.nome = nome;
		this.categoria = categoria;
		this.prezzo = prezzo;
		this.descrizione = descrizione;
		this.modelli = modelli;
	}
	
	public Prodotto() {
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

	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	public double getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public List<Modello> getModelli() {
		return modelli;
	}

	public void setModelli(List<Modello> modelli) {
		this.modelli = modelli;
	}

}
