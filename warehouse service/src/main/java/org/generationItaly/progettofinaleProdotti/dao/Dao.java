package org.generationItaly.progettofinaleProdotti.dao;

import java.util.ArrayList;
import java.util.List;

import org.generationItaly.progettofinaleProdotti.model.Categoria;
import org.generationItaly.progettofinaleProdotti.model.Modello;
import org.generationItaly.progettofinaleProdotti.model.Prodotto;
import org.generationItaly.progettofinaleProdotti.util.BasicDao;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;


@Repository
public class Dao extends BasicDao implements IDao{
	
	public Dao(@Value ("${db.address}") String dbAddress,@Value ("${db.user}") String user,@Value ("${db.password}") String password) {
		super(dbAddress, user, password);
		
	}

	@Override
	public List<Prodotto> prodotti() {
		List<Prodotto> prodotti= listFromQuery("SELECT * FROM prodotti", Prodotto.class);
		
		for (Prodotto p:prodotti) {
			p.setCategoria(categoriaProdotto(p.getId()));
			p.setModelli(modello(p.getId()));
		}
		
		
		return prodotti;
		
	}
	
	private Categoria categoriaProdotto(int id){
		
		return objectFromQuery("SELECT categorie.* FROM categorie INNER JOIN prodotti ON prodotti.idcategoria = categorie.id WHERE prodotti.id = ? ", Categoria.class, id);
	}
	
	@Override
	public Prodotto prodotto(int idProdotto) {
		Prodotto p = objectFromQuery("Select * FROM prodotti WHERE id = ?", Prodotto.class, idProdotto);
		p.setModelli(modello(idProdotto));
		p.setCategoria(categoriaProdotto(idProdotto));
		return p;
	}

	@Override
	public int addProdotto(Prodotto p) {
		System.out.println("hello");
		return insertAndGetId("insert into prodotti (nome,idcategoria,prezzo, descrizione) values (?,?,?,?)"
				, p.getNome()
				, p.getCategoria().getId()
				, p.getPrezzo()
				, p.getDescrizione());
	}

	@Override
	public boolean cancProdotto(int idProdotto) {
		return isExecute("DELETE FROM prodotti WHERE id = ?",
				idProdotto);
	}

	@Override
	public boolean modProdotto(Prodotto p) {
		return isExecute("UPDATE prodotti SET nome = ?, idcategoria = ?, prezzo = ?, descrizione = ? WHERE id = ?"
				, p.getNome()
				, p.getCategoria().getId()
				, p.getPrezzo()
				, p.getDescrizione()
				, p.getId());
	}
	
	@Override
	public List<Modello> modelli() {
		
		return listFromQuery("SELECT * FROM modelli", Modello.class);
	
	}


	@Override
	public List<Modello> modello(int idProdotto) {
	
		return listFromQuery("SELECT modelli.* FROM modelli INNER JOIN prodotti ON modelli.idprodotto = prodotti.id WHERE idprodotto = ?", Modello.class, idProdotto);
		
		
	}
	
	@Override
	public Modello modelloSingolo(int id) {
		
		return objectFromQuery("SELECT * FROM modelli WHERE ID = ?", Modello.class, id);
		
	}
	
	@Override
	public boolean addModello(Modello m) {
		return isExecute("insert into modelli (colore, taglia,quantita,idprodotto, link1, link2, link3) values(?,?,?,?,?,?,?)"
				, m.getColore()
				, m.getTaglia()
				, m.getQuantita()
				, m.getIdProdotto()
				, m.getLink1()
				, m.getLink2()
				, m.getLink3());
	}

	@Override
	public boolean cancModello(int idModello) {
		return isExecute("DELETE FROM modelli WHERE id = ?",
				idModello);
	}

	@Override
	public boolean modModello(Modello m) {
		return isExecute("UPDATE modelli SET colore = ?, taglia = ?, quantita = ?, idprodotto = ?, link1 = ?, link2 = ?, link3 = ? WHERE id = ?"
				, m.getColore()
				, m.getTaglia()
				, m.getQuantita()
				, m.getIdProdotto()
				, m.getLink1()
				, m.getLink2()
				, m.getLink3()
				, m.getId());
	}

	
	@Override
	public List<Categoria> categorie() {
		return listFromQuery("SELECT * FROM categorie", Categoria.class);
	}

	@Override
	public Categoria categoria(int id) {
		return objectFromQuery("SELECT *  FROM categorie WHERE ID = ?", Categoria.class, id);
	}
	
	@Override
	public boolean addCategoria(Categoria c) {
		return isExecute("insert into categorie (nome) values(?)",c.getNome());
	}

	@Override
	public boolean cancCategoria(int idCategoria) {
		return isExecute("DELETE FROM categorie WHERE ID = ?", idCategoria);
	}

	@Override
	public boolean modCategoria(Categoria categoria) {
		return isExecute("UPDATE CATEGORIE set nome = ? WHERE id = ?", categoria.getNome(), categoria.getId());
	}

	@Override
	public List<Prodotto> RicercaPerNome(String nome) {
		String like ="%"+nome+"%";
		List<Prodotto> prodotti= new ArrayList<Prodotto>(listFromQuery("SELECT * FROM prodotti WHERE prodotti.nome LIKE ?", Prodotto.class, like));
		
		for(Prodotto p: prodotti) {
			p.setCategoria(categoriaProdotto(p.getId()));
			p.setModelli(modello(p.getId()));
		}
		
		
		return prodotti;
	}

	@Override
	public List<Prodotto> Prodotticategoria(int id) {
			List<Prodotto> prodottiCategoria= listFromQuery("select * from prodotti where idcategoria=?", Prodotto.class, id);
			
			for(Prodotto p: prodottiCategoria) {
				p.setCategoria(categoriaid(id));
				p.setModelli(modello(p.getId()));
			}
		return prodottiCategoria;
	}
	
	private Categoria categoriaid (int id) {
		return objectFromQuery("select * from categorie where id=?", Categoria.class, id);
		
	}



}