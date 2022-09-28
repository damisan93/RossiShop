package org.genrationItaly.servizioMail.service;

import java.io.File;
import java.nio.file.FileSystem;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailService {
	@Autowired
	JavaMailSender invioMail;
	
	@Value("${spring.mail.username}")
	private String  mittente;
	
	
	public void invioMail(String destinatario, String messaggio, String oggetto) {
		
		SimpleMailMessage email= new SimpleMailMessage();
		
		email.setFrom(mittente);
		email.setTo(destinatario);
		email.setSubject(oggetto);
		email.setText(messaggio);
		
		invioMail.send(email);
	}
	
	public void mailConallegato(String destinatario, String messaggio, String oggetto, String allegato) {
		MimeMessage email = invioMail.createMimeMessage();
		try{
		MimeMessageHelper mail= new MimeMessageHelper(email, true);
		
		mail.setFrom(mittente);
		mail.setTo(destinatario);
		mail.setSubject(oggetto);
		mail.setText(messaggio);
		
		FileSystemResource fsr= new FileSystemResource(new File(allegato));
		
		mail.addAttachment(fsr.getFilename(), fsr);
		
		invioMail.send(email);
		
		}catch(MessagingException e) {
			
			
		}
	
		
	}
	

}
