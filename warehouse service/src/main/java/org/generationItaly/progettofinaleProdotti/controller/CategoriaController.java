package org.generationItaly.progettofinaleProdotti.controller;

import java.util.List;

import org.generationItaly.progettofinaleProdotti.dao.IDao;
import org.generationItaly.progettofinaleProdotti.model.Categoria;
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
@RequestMapping("/categorie")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoriaController {
	@Autowired
	private IDao dao;
	
	@GetMapping
	public List<Categoria> categorie(){
		
		return dao.categorie();
	}
	
	@GetMapping("/{id}")
	public Categoria categoria(@PathVariable int id) {
		
		return dao.categoria(id);
	}
	
	@PostMapping
	public boolean aggiungiCategoria(@RequestBody Categoria c) {
		
		return dao.addCategoria(c);
	}
	
	@PutMapping
	public boolean modificaCategoria (@RequestBody Categoria c) {
		
		return dao.modCategoria(c);
	}
	
	@DeleteMapping("/{id}")
	public boolean cancellaCategoria (@PathVariable int id) {
		
		return dao.cancCategoria(id);
		
	}
	
	
	

}
