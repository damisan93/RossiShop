package org.generationItaly.authService.util;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonCoverter {
	
	private static ObjectMapper mapper = new ObjectMapper();  
	
	public static Map<String,Object> fromJsonToMap (String json){
		Map<String, Object> mappedJson = new HashMap<>();
		 try {
			mappedJson = mapper.readValue(json, Map.class);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
		 return mappedJson;
	}

}
