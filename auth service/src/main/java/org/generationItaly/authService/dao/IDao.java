package org.generationItaly.authService.dao;

import org.generationItaly.authService.entity.User;

public interface IDao {
	User user(String username, String password); 
	boolean updateUser(User user);
	boolean register (User user);
	
}
