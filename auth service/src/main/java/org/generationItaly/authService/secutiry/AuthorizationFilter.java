package org.generationItaly.authService.secutiry;

import java.io.IOException;
import java.util.Collections;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.interfaces.DecodedJWT;

public class AuthorizationFilter extends BasicAuthenticationFilter {

    /**
     * Instantiates a new Authorization filter.
     *
     * @param authenticationManager the authentication manager
     */
    @Autowired
    public AuthorizationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
       
    	System.out.println(SecurityConfig.param);
    	String header = request.getHeader(SecurityConfig.param);
        System.out.println("header:"+header);
        if (header != null && header.startsWith(SecurityConfig.prefix)) {
        	
        	DecodedJWT decoded = JwtProvider.verifyJwt(header.replace(SecurityConfig.prefix, ""));
          
        	SecurityContextHolder.getContext().setAuthentication(
                    new UsernamePasswordAuthenticationToken(decoded.getSubject(), null, Collections.emptyList())
            );
        	
            
        }
        chain.doFilter(request, response);
    }
}
