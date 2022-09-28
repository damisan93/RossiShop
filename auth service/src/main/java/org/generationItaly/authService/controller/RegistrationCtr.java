package org.generationItaly.authService.controller;

import org.generationItaly.authService.dao.IDao;
import org.generationItaly.authService.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController 
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class RegistrationCtr {
	
	@Autowired
	IDao dao;
	

	@PutMapping("/update")
 	public User updateData(@RequestBody User user) {
		if(dao.updateUser(user))
			return user;
		else 
			return null;
    }
	
	@PostMapping("/singup")
	public boolean register(@RequestBody User user) { 
		return dao.register(user);
    }
	

}
