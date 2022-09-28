package org.generationItaly.authService.dao;


import org.generationItaly.authService.entity.User;
import org.generationItaly.authService.util.BasicDao;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;


@Repository
public class Dao extends BasicDao implements IDao{
	
	private String dbEncrypt;
	
	public Dao(@Value ("${db.address}") String dbAddress,@Value ("${db.user}") String user,@Value ("${db.password}") String password, @Value("${db.key}") String  dbEncrypt) {
		super(dbAddress, user, password);
		this.dbEncrypt = dbEncrypt;
	}

	@Override
	public User user(String username, String password) {
		
		return objectFromQuery("call trovautente(?,?,?)", User.class, dbEncrypt, username, password);
	}

	@Override
	public boolean register(User user) {
		return isExecute("call controllo_inser(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
				   user.getNome(),
				   user.getCognome(),
				   user.getDdn(),
				   user.getIndirizzo(),
				   user.getCitta(),
				   user.getIndirizzoFat(),
				   user.getCittaFat(),
				   user.getnTel(),
				   user.getEmail(),
				   user.getTipoCarta(),
				   user.getNumeroCarta(),
				   user.getCvv(),
				   user.getUsername(),
				   user.getPassword(),
				   user.getRuolo(),
				   dbEncrypt
				   );
	}

	@Override
	public boolean updateUser(User user) {
		return isExecute("call aggiorna_utente(?,?,?,?,?,?,?,?,?,?,?,?)", user.getId(),
				   user.getNome(),
				   user.getCognome(),
				   user.getDdn(),
				   user.getIndirizzo(),
				   user.getCitta(),
				   user.getIndirizzoFat(),
				   user.getCittaFat(),
				   user.getnTel(),
				   user.getEmail(),
				   user.getPassword(),
				   dbEncrypt
				   );
	}
	
}