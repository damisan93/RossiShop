package org.generationItaly.progettofinaleProdotti.controller;

import java.util.List;

import org.generationItaly.progettofinaleProdotti.dao.IDao;
import org.generationItaly.progettofinaleProdotti.model.Modello;
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
@RequestMapping("/modelli")
@CrossOrigin(origins = "http://localhost:3000")
public class ModelloController {
	
	@Autowired
	private IDao dao;
	
	@GetMapping
	public List<Modello> modelli(){
		return dao.modelli();
	}
	
	@GetMapping("/prodotto/{idProdotto}")
	public List<Modello> modelli(@PathVariable int idProdotto){
		return dao.modello(idProdotto);
	}
	
	@GetMapping("/{id}")
	public Modello modello(@PathVariable int id) {
		
		return dao.modelloSingolo(id);
	}
	
	@PostMapping
	public boolean aggiungiModello(@RequestBody Modello m) {
		return dao.addModello(m);
	}
	
	@PutMapping
	public boolean modificaModello(@RequestBody Modello m) {
		
		return dao.modModello(m);
	}
	
	@DeleteMapping("/{id}")
	public boolean cancellaModello(@PathVariable int id) {
		
		return dao.cancModello(id);
	}

}
