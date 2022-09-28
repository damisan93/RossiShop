package org.generationItaly.authService.model;

import org.generationItaly.authService.entity.User;

public class LoginOutput {

	private String token;
	private User user;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	
}
