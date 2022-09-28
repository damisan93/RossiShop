package org.generationItaly.progettofinaleProdotti.dao;

import java.util.List;

import org.generationItaly.progettofinaleProdotti.model.Categoria;
import org.generationItaly.progettofinaleProdotti.model.Modello;
import org.generationItaly.progettofinaleProdotti.model.Prodotto;



public interface IDao {
	
	
	List<Prodotto> prodotti();
	
	List<Prodotto> RicercaPerNome(String nome);
	
	Prodotto prodotto(int idProdotto);
	
	int addProdotto(Prodotto p);
	
	boolean cancProdotto(int idProdotto);
	
	boolean modProdotto(Prodotto p);
	
	List<Modello> modelli();
	
	List<Modello> modello(int idProdotto);
	
	Modello modelloSingolo(int id);
	
	boolean addModello(Modello m);
	
	boolean cancModello(int idModello);
	
	boolean modModello(Modello m);
	
//	List<Img> immaginiProdotto(int idProdotto);
//	
//	boolean addImg(Img i);
//	
//	boolean cancImg(int idImg);
//	
//	boolean modImg(Img i);
	
	List<Categoria> categorie();
	
	Categoria categoria(int id);
	
	boolean addCategoria(Categoria c);
	
	boolean cancCategoria(int idCategoria);
	
	boolean modCategoria(Categoria categoria);
	
	
	List<Prodotto>Prodotticategoria (int id);
	
	
	

}