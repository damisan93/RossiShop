package org.generationItaly.authService.controller;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.generationItaly.authService.dao.IDao;
import org.generationItaly.authService.entity.User;
import org.generationItaly.authService.model.LoginInput;
import org.generationItaly.authService.model.LoginOutput;
import org.generationItaly.authService.secutiry.JwtProvider;
import org.generationItaly.authService.util.JsonCoverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.interfaces.DecodedJWT;

@RestController 
@RequestMapping("/authenticationctr")
public class AuthenticationCtr {
	
	@Autowired
	IDao dao;
	
	 @PostMapping
	 	public ResponseEntity<LoginOutput> login(@RequestBody LoginInput body) { 

	    	User user = dao.user(body.getUsername(), body.getPwd());
	    	
	        if (user == null) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	        }

	        Map claimMap = new HashMap<String, Object>();
	        claimMap.put("username", user.getUsername());
	        claimMap.put("role", user.getRuolo());
	        
	        
	        String jwt = JwtProvider.createJwt(user.getUsername(), claimMap);
	        LoginOutput tmp = new LoginOutput();
	        tmp.setToken(jwt);
	        tmp.setUser(user);
	        return ResponseEntity.ok(tmp); 
	    }
	 
	 @GetMapping
	 @ResponseBody
	 @CrossOrigin(origins = "*")
	    public Map <String,Object> isLogged(@RequestHeader("Authorization") String header ) {
		  	DecodedJWT decoded = JwtProvider.verifyJwt(header.substring(7));
		  	String jwtPayload = new String(Base64.getDecoder().decode(decoded.getPayload()));
		  	Map <String,Object> userData = JsonCoverter.fromJsonToMap(jwtPayload);
		  	
		  	Map <String,Object> filteredData = new HashMap<>();
		  	filteredData.put("username", userData.get("username"));
		  	filteredData.put("role", userData.get("role"));
		  	
	        return userData;
	    }
	 
	 
}

