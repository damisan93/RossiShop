package org.genrationItaly.servizioMail.controller;

import org.genrationItaly.servizioMail.entity.RegisteredUser;
import org.genrationItaly.servizioMail.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mail")
@CrossOrigin(origins = "*")
public class MailController {
	@Autowired
	MailService ms;
	
	@PostMapping("/singup")
	public void inviomail(@RequestBody RegisteredUser user) {
		ms.invioMail(user.getEmail(), user.getCorpoMail(), user.getOggettoMail());
	}
	

	@PostMapping("/a")
	void messaggioConAllegato() {
		ms.mailConallegato("mario.rossi.store.web@gmail.com", "ciao", "prova","E:\\Immagini\\Immagini\\000 albero di natale.ico");
	}

}
