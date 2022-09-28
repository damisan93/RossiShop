package org.generationItaly.authService.util;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

// Metodi di default metodi già sviluppati che le classi che le implementano
// le interfacce ereditano così come sono
// Metodi static metodi che non appartengono agli oggeti delle classi che implementano 
// l'interfaccia ma appartengono direttamente all'interfaccia. Li invoco attraverso
// l'interfaccia
public interface IMappablePro {

	// Tutto quello che utilizzeremo qua dentro analizza la struttura delle 
	// classi che implementano quest'interfaccia.
	// Il tutto senza conoscere nulla sulle classi che implementano quest'interfaccia
	// Da OGGETTO a MAPPA
	default Map<String, String> toMap() {
		Map<String, String> ris = new HashMap<>();
		
		// Devo ricordarmi una cosa: qua dentro posso invocare i metodi
		// come se fossi dentro alla classe che implementa quest'interfaccia
		// Mi faccio restituire la classe dell'oggetto su cui viene invocato il metodo
		// sono sicuro che avrà almeno due tipi:
		// - Object
		// - IMappablePro
		// getClass restituisce la classe di runtime dell'oggetto
		Class<? extends IMappablePro> classe = getClass();
		
		// Una Class mi permette di ottenere informazioni sulla struttura della classe
		// Le classi che implementeranno quest'interfaccia avrano sempre tutti i getters
		// Dalla classe posso farmi ritornare tutti i suoi metodi
		// Mi viene restituito un vettore di Method
		Method[] metodi = classe.getMethods();
		
		// itero i metodi
		for (Method metodo : metodi) {
			// Prendo solo il nome dei metodi
			String nomeMetodo = metodo.getName();
			
			// Voglio recuperare solamente i metodi getters
			// Ciò implica che se utilizziamo questa libreria
			// non dobbiamo aggiungere altri metodi che iniziano con is o get
			if (nomeMetodo.startsWith("get") || nomeMetodo.startsWith("is")) {
				
				// Abbiamo bisogno del valore delle proprietà
				// le recuperiamo dai getters
				try {
					// Invoco il metodo, quello con la firma lunga
					// invoke accetta sicuramente un parametro, cioè su cosa deve
					// essere invocato il metodo
					// Deve essere invocato su this, cioè sull'oggetto su cui viene invocato
					// il toMap
					// Curiosità: invoke ha anche la possibilità di accettare
					// dei parametri. Possiamo passargliene quanti ne vogliamo
					// Non sappiamo nello specifico cosa ritornerà quel metodo
					// In teoria invoke ritorna un Object
					// Tutto anche gli int, i double ecc sono degli Object
					// faccio quindi il toString()
					String valore = metodo.invoke(this).toString();
					
					// Ora che abbiamo il valore devo recuperare la chiave
					// i metodi possono iniziare con get o is
					int indicePartenza = nomeMetodo.startsWith("get") ? 3 : 2;
					
					String chiave = nomeMetodo.substring(indicePartenza).toLowerCase();
					
					ris.put(chiave, valore);
				} catch (IllegalAccessException e) {
					e.printStackTrace();
				} catch (InvocationTargetException e) {
					e.printStackTrace();
				}
			}
		}
		
		// sovrascrivo la class con il nome semplice (senza package)
		ris.put("class", classe.getSimpleName());
		
		return ris;
 	}
	
	// Da MAPPA a OGGETTO
	// Il mio compito è sempre quello di caricare le proprietà dell'oggetto dalla mappa
	default void fromMap(Map<String, String> map) {
		Class<? extends IMappablePro> classe = getClass();

		Method[] metodi = classe.getMethods();
		
		for (Method metodo : metodi) {
			String nomeMetodo = metodo.getName();
			
			if (nomeMetodo.startsWith("set")) {
				String chiave = nomeMetodo.substring(3).toLowerCase();
				
				// Recupero dalla mappa che arriva da parametro il 
				// valore associato alla proprietà dell'oggetto che corrisponde
				// alla chiave della mappa che corrisponde alla colonna del db
				String valore = map.get(chiave);
				
				// Se c'è un null nella cella nel database non voglio invocare i parse
				// quindi skippo
				if (valore == null) continue;
				
				// Devo caricare i valori della mappa dentro alle proprietà dell'oggetto
				// utilizzando i setters
				// ma i valori della mappa sono stringhe
				// mentre i setters vogliono interi, double, stringhe ecce
				// I parametri potrebbero essere più di uno. prendo il primo
				// (I setter ne hanno uno solo)
				Class<?> tipoParametro = metodo.getParameterTypes()[0];
				
				// Dovete elencare per ogni tipo che necessita di un'operazione
				// in più cosa fare
				try {
					if (tipoParametro.equals(int.class)) {
						// Dobbiamo invocare il metodo setter per poter caricare
						// il valore nell'oggetto
						metodo.invoke(this, Integer.parseInt(valore));
						
					} else if (tipoParametro.equals(double.class)) {
						metodo.invoke(this, Double.parseDouble(valore));
					} else if (tipoParametro.equals(boolean.class)) {
						metodo.invoke(this, valore.equals("1") || valore.equals("true"));
					} else {
						// Se per esempio è una stringa non devo parsare
						metodo.invoke(this, valore);
					}
				} catch (NumberFormatException e) {
					e.printStackTrace();
				} catch (IllegalAccessException e) {
					e.printStackTrace();
				} catch (InvocationTargetException e) {
					e.printStackTrace();
				}
			}
		}
	}
	
}