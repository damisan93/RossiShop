package org.generationItaly.progettofinaleProdotti.controller;

import java.util.List;

import org.generationItaly.progettofinaleProdotti.dao.IDao;
import org.generationItaly.progettofinaleProdotti.model.Prodotto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/prodotti")
@CrossOrigin(origins = "http://localhost:3000")
public class ProdottoController {
	
	@Autowired
	private IDao dao;
	
	@GetMapping

	public List<Prodotto> listaProdotti(){
		
		return dao.prodotti();
		
	}
	
	@GetMapping("/prodotto/{id}")
	public Prodotto prodotto(@PathVariable Integer id) {
		return dao.prodotto(id);
	
	}
	
	@GetMapping("/{nome}")
	public List<Prodotto> RicercaPerNome(@PathVariable String nome){
		return dao.RicercaPerNome(nome);
	}
	
	@PostMapping
	public int aggiungiProdotto(@RequestBody Prodotto p) {
		return dao.addProdotto(p);
	}
	
	@PutMapping
	public boolean modificaProdotto(@RequestBody Prodotto p) {
		return dao.modProdotto(p);
	}
	
	@DeleteMapping("/{id}")
	public boolean cancellaProdotto(@PathVariable int id) {
		return dao.cancProdotto(id);
	}
	
	@GetMapping("/categoria/{id}")
	public List<Prodotto>listcategoria(@PathVariable int id){
		return dao.Prodotticategoria(id);
		
	}
	
}