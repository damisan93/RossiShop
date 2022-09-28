create database security;
use security;

create table infoutenti(
	id int primary key AUTO_INCREMENT,
	nome varchar(50) not null,
	cognome varchar(50) not null,
	ddn date not null,
	indirizzo varchar(110) not null,
	citta varchar(100) not null,
	indirizzofat varchar(150) default "nessuno",
	cittafat varchar (110) default "nessuna",
	ntel varchar(10) default "none",
	email varchar(110) unique not null,
	tipocarta varchar(50) default "nessuna",
	numerocarta VARBINARY(50) unique not null,
	cvv VARBINARY(50) not null
);

create table users(
	id int primary key,
	username varchar(100) unique not null,
	password VARBINARY(255) not null,
	ruolo varchar(20) not null,
	foreign key (id) references infoutenti(id) on delete cascade
);

insert into infoutenti 
(nome, cognome, ddn, indirizzo, citta, indirizzofat, cittafat, ntel, email,tipocarta,numerocarta,cvv)
values
("Maira","Database","2002-05-28","Via SQL, 15", "Milano","Ca'Rezzonico interno 5", "Venezia","0418564982","mariadb@virgilio.it", "Mastercard",AES_ENCRYPT("5127745411237016","El_Captain"),AES_ENCRYPT("802", "El_Captain")),
("Fernanduccio","Schioppavini","1989-12-27","Via delle vittorie, 122", "Arezzo","Parco San Giuliano", "Mestre","0418564382","Fernandvini@virgilio.it", "VISA",AES_ENCRYPT("4598258049870524","El_Captain"),AES_ENCRYPT("350", "El_Captain")),
("Elisabetta","Gonzaga","2004-04-27","Piazza del plebiscito, 13", "Monza","Viale Mateotti, 43", "Ragusa","3884185934","betty.gonza@gmail.com", "VISA",AES_ENCRYPT("4198595227036665","El_Captain"),AES_ENCRYPT("350", "El_Captain"));


insert into infoutenti
(nome, cognome, ddn, indirizzo, citta, email,tipocarta,numerocarta,cvv)
values
("Pino","Pinguino","2000-04-27","viale Ghiacciato, 27","Polo sud","pino.pingu@tiscali.it","American Express",AES_ENCRYPT("374398947031478", "El_Captain"),AES_ENCRYPT("908", "El_Captain")),
("Anne","Hansson","1989-09-30","Ludig Str. 27","Hassen","ane.hansy@tiscali.de","Mastercard",AES_ENCRYPT("5232337138643569", "El_Captain"),AES_ENCRYPT("657", "El_Captain")),
("Roland ","Olson","1974-10-15","Piazza Cardinale Riario Sforza","Bologna","rolandolson@gmail.com","Visa",AES_ENCRYPT("4257118481315853", "El_Captain"),AES_ENCRYPT("828", "El_Captain"));

insert into users
(id,username, password,ruolo)
values
(1,"mariadb876",AES_ENCRYPT("yoruetpesca897!", "El_Captain"),"utente"),
(2, "schioppyviy", AES_ENCRYPT("tarantellaNA$", "El_Captain"),"utente"),
(3, "Fairyprincess04", AES_ENCRYPT("fAtin@04", "El_Captain"),"admin"),
(4,"pinopingu883",AES_ENCRYPT("Zainetto88!", "El_Captain"),"admin"),
(5, "Annettehoffy", AES_ENCRYPT("Capricornu$74!", "El_Captain"),"utente"),
(6,"kingoftheking",AES_ENCRYPT("G€miniE£f11!", "El_Captain"),"admin");


create or replace view decrypt AS
    (SELECT 
		infoutenti.id,
        infoutenti.nome,
        infoutenti.cognome,
        infoutenti.ddn,
        infoutenti.indirizzo,
        infoutenti.citta,
        infoutenti.indirizzofat,
        infoutenti.cittafat,
        infoutenti.ntel,
        infoutenti.email,
        infoutenti.tipocarta,
		CAST(AES_DECRYPT(infoutenti.numerocarta,'El_Captain') AS CHAR (50) CHARSET UTF8MB4) AS numerocarta,
          CAST(AES_DECRYPT(infoutenti.cvv,'El_Captain') AS CHAR (50) CHARSET UTF8MB4) AS cvv,
		users.username,
        CAST(AES_DECRYPT(users.password,'El_Captain') AS CHAR (50) CHARSET UTF8MB4) AS password,
        users.ruolo
    FROM
	infoutenti
    inner join users on infoutenti.id=users.id
    );
    
    
    delimiter $
    
	CREATE PROCEDURE trovautente(in_key varchar(50), 
								in_username varchar(50),
                                in_password VARBINARY(50))
begin
    
    select *
	FROM  decrypt
    where username=in_username
    and password= convert(in_password using utf8mb4) collate utf8mb4_bin;
    end $
    
delimiter ;

create table log(
	id int primary key auto_increment,
    dataevento timestamp,
    evento varchar(6),
    dettaglio varchar(150)
    );
    
    
delimiter $

CREATE PROCEDURE controllo_insert (in_nome varchar(50),
								  in_cognome varchar(50),
                                  in_ddn date,
                                  in_indirizzo varchar(110),
                                  in_citta varchar(100),
								  in_indirizzofat varchar(150),
                                  in_cittafat varchar(110),
                                  in_ntel varchar(10),
                                  in_mail varchar(110),
                                  in_tipocarta varchar(50),
                                  in_numerocarta varchar(50),
                                  in_cvv varchar(50),
                                  in_username varchar(100),
                                  in_password varchar(255),
                                  in_ruolo varchar(20),
                                  in_key varchar(50))
begin
	declare tel varchar(10);
    declare indirizzof varchar(150);
    declare cittaf varchar(110);
	declare id_max int; 
	declare l_ntel int;
	declare ck_mail int;
    declare ck_tel int;
    declare  C_id cursor for select max(id) from infoutenti;
	
    set tel =in_ntel;
    set indirizzof=in_indirizzofat;
    set cittaf:=in_cittafat;
    set l_ntel=LENGTH(in_ntel);
    

    select count(*) as conteggio into ck_tel
    from infoutenti
    where ntel=in_ntel;
    
    select count(*) as conteggio into ck_mail
     from infoutenti
    where email=in_mail;
    
    if LENGTH(in_nome)<3 or in_nome not regexp '^[A-Za-z]+$' then
		insert into log
		(dataevento,evento,dettaglio)
		values
		(now(),"ERRM","tentativo di inserimento di nome troppo corto o non conforme");
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = "nome non valido";
	end if;
    
 
    if LENGTH(in_cognome)<3 or in_cognome not regexp '^[A-Za-z]+$' then
		insert into log
		(dataevento,evento,dettaglio)
		values
		(now(),"ERRM","tentativo di inserimento di cognome troppo corto o non conforme");
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = "cognome non valido";
	end if;

    if year(in_ddn)>year(now()) then 
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento di data di nascita non valida");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "data di nascita non valida";
		end if;

    if LENGTH(in_indirizzo)<3 then
		insert into log
		(dataevento,evento,dettaglio)
		values
		(now(),"ERRM","tentativo di inserimento indirizzo troppo corto");
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = " indirizzo di residenza non valido";
	end if;
    
    if LENGTH(in_citta)<3 or in_citta not regexp '^[A-Za-z]+$' then
		insert into log
		(dataevento,evento,dettaglio)
		values
		(now(),"ERRM","tentativo di inserimento città troppo corto");
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = "citta di residenza non valida";
	end if;
    
    
    if indirizzof="" or indirizzof is null then
		set indirizzof:="nessuno";
    end if;
    
    	insert into tabella_test
		(variabile)
        value
        (length(indirizzof));
    
    
	if  LENGTH(indirizzof)<3 then 
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento indirizzo fatturazione troppo corto");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "indirizzo di fatturazione non valido";
	end if;
        
        if cittaf="" or cittaf is null then
			set cittaf:="nessuna";
        end if;
        
        
        if cittaf !="nessuna" and LENGTH(cittaf)<3 or cittaf not regexp '^[A-Za-z]+$' then 
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento indirizzo fatturazione troppo corto");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "citta di fatturazione non valida";
	end if;
        
    if tel="" or tel is null then 
		set tel="none";
	end if;
        
	if tel !="none" and tel not regexp "^[0-9]{9,10}$" then
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento  numero di telefono non valido");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "tel non valido";
		ELSEIF tel !="none" and  ck_tel>0 then 
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento  numero di telefono duplicato");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "numero di telefono duplicato";
        end if;
        
	if in_mail not regexp '^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[A-Za-z]{2,4}' then 
    insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento  mail non valida");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "mail non valido";
	ELSEIF  in_mail regexp '^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[A-Za-z]{2,4}' and ck_mail> 0 then 
		   insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento  mail duplicata");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "mail nduplicata";
		end if;
	if in_tipocarta not in ("visa","mastercard", "american express", "maestro") or in_tipocarta not regexp '^[A-Za-z]+$' then  
         insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento tipo di carta di credito  non ammesso");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "tipo carta di credito non ammesso";
            end if;
            
            if LENGTH(in_numerocarta) not in(14,16) or in_numerocarta not regexp '^[0-9]+$' then 
            insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento numero carta non valido");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "numero carta di credito non valido";
            end if;
            
	if Length(in_cvv) not in (3,4) or in_cvv not regexp '^[0-9]+$' then 
		insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento cvv carta non valido");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "cvv carta di credito non valido";
		end if;
        
	if Length(in_username)<3 then 
    insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento username non valido");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "username non valido";
            end if;
		if in_password not regexp "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%€£*?&])[A-Za-z0-9@$€£!%*?&]{8,20}" then
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento password non valida");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "password non valida";
		end if;
	if in_ruolo not in( "admin", "user") then 
		  insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento nome utente non valido");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "ruolo non valido";
    end if;
    
   insert into infoutenti 
(nome, cognome, ddn, indirizzo, citta, indirizzofat, cittafat, ntel, email,tipocarta,numerocarta,cvv)
values
(in_nome,in_cognome,in_ddn,in_indirizzo,in_citta ,indirizzof, cittaf,tel,in_mail, in_tipocarta,AES_ENCRYPT(in_numerocarta, in_key),AES_ENCRYPT(in_cvv, in_key));
        
       open C_id;
       fetch C_id into id_max;
       close C_id;
        
    insert into users
    (id, username,password, ruolo)
    value
    (id_max,in_username,AES_ENCRYPT(in_password, in_key),in_ruolo);

end $

delimiter ;

delimiter $
CREATE PROCEDURE aggiorna_utente  (in_id int,
								  in_nome varchar(50),
								  in_cognome varchar(50),
                                  in_ddn date,
                                  in_indirizzo varchar(110),
                                  in_citta varchar(100),
                                  in_indirizzofat varchar(150),
                                  in_cittafat varchar(110),
                                  in_ntel varchar(10),
                                  in_mail varchar(110),
                                  in_password varchar(255),
                                  in_key varchar(50))
begin

	declare tel varchar(10);
    declare indf varchar(150);
    declare cittaf varchar(110);
    declare ck_mail_update int; 
	declare ck_tel_update int;
    
	declare l_ntel int;
	declare ck_mail int;
    declare ck_tel int;
    
    select count(*) into ck_mail_update
    from infoutenti 
    where id=in_id and email=in_mail;
    
    
select count(*) into ck_tel_update
from infoutenti 
where id=in_id and ntel=tel;
    
	set tel =in_ntel;
    set indf=in_indirizzofat;
    set cittaf =in_cittafat;
    
    set l_ntel =LENGTH(in_ntel);
    
    select count(*) as conteggio into ck_tel
    from infoutenti
    where ntel=in_ntel;
    
    select count(*) as conteggio into ck_mail
     from infoutenti
    where email=in_mail;
    
    if LENGTH(in_nome)<3 or in_nome not regexp '^[A-Za-z]+$' then
		insert into log
		(dataevento,evento,dettaglio)
		values
		(now(),"ERRM","tentativo di inserimento di nome troppo corto o non conforme");
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = "nome non valido";
	end if;
    
    if LENGTH(in_cognome)<3 or in_cognome not regexp '^[A-Za-z]+$' then
		insert into log
		(dataevento,evento,dettaglio)
		values
		(now(),"ERRM","tentativo di inserimento di cognome troppo corto o non conforme");
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = "cognome non valido";
	end if;

    if year(in_ddn)>year(now()) then 
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento di data di nascita non valida");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "data di nascita non valida";
		end if;

    if LENGTH(in_indirizzo)<3 then
		insert into log
		(dataevento,evento,dettaglio)
		values
		(now(),"ERRM","tentativo di inserimento indirizzo troppo corto");
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = " indirizzo di residenza non valido";
	end if;
    
    if LENGTH(in_citta)<3 or in_citta not regexp '^[A-Za-z]+$' then
		insert into log
		(dataevento,evento,dettaglio)
		values
		(now(),"ERRM","tentativo di inserimento città troppo corto");
		SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = "citta di residenza non valida";
	end if;
    
	if indf="" or indf is null then
		set indf="nessuno";
	end if;
    
	if LENGTH(indf)<3  then 
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento indirizzo fatturazione troppo corto");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "indirizzo di fatturazione non valido";
	end if;
    
        if cittaf="" or cittaf is null then 
			set cittaf="nessuna";
        end if;
        
	if LENGTH(cittaf)<3 or cittaf not regexp '^[A-Za-z]+$' then 
		insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento citta di fatturazione troppo corta");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "citta di faturazione non valida";
	end if;
    
    if tel ="" then 
		set tel="none";
	end if;
    
    
    select count(*) into ck_tel_update
    from infoutenti
    where id=in_id and tel;
        
	if tel!="none" and tel not regexp '^[0-9]{9,10}$' then
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento  numero di telefono non valido");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "tel non valido";
		ELSEIF tel!="none"and  ck_tel_update<1 and ck_tel>0 then 
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento  numero di telefono duplicato");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "numero di telefono duplicato";
        end if;
        
	if in_mail not regexp '^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[A-Za-z]{2,4}' then 
    insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento  mail non valida");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "mail non valido";
	ELSEIF  ck_mail_update<1 and ck_mail>0 then 
		   insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento  mail duplicata");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "mail nduplicata";
		end if;
	
            
          
		if in_password not regexp "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%€£*?&])[A-Za-z0-9@$€£!%*?&]{8,20}" then
			insert into log
			(dataevento,evento,dettaglio)
			values
			(now(),"ERRM","tentativo di inserimento password non valida");
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = "password non valida";
		end if;

	update infoutenti set nome= in_nome, 
						 cognome= in_cognome,
						 ddn=in_ddn,
						indirizzo= in_indirizzo,
						citta=in_citta,
						indirizzofat=indf,
						cittafat=cittaf,
						ntel=in_ntel,
						email=in_mail
						where id=in_id;

	update users set password=aes_encrypt(in_password, in_key)
	where id=in_id;
end $
delimiter ;


delimiter $
    create function controllo_nome(in_nome varchar (50)) returns boolean
    not deterministic
    
	begin
    
		if LENGTH(in_nome)>=3 and in_nome regexp '^[A-Za-z]+$' then 
			return true;
		else 
			return false;
		end if;
		
		end $
delimiter ;
     
     
delimiter $
    create function controllo_cognome(in_cognome varchar (50)) returns boolean
	deterministic
    
	begin
    
			if LENGTH(in_cognome)>=3 and in_nome regexp '^[A-Za-z]+$' then 
				return true;
			else 
				return false;
		end if;
		
	end $
delimiter ;
     
     
delimiter $
    create function controllo_ddn(in_ddn date) returns boolean
    deterministic
    begin
    
		if in_ddn <now() then 
			return true;
		else 
			return false;
		end if;
    end $
delimiter ;
     
     
delimiter $
	create function controllo_indirizzo(in_indirizzo varchar(110)) returns boolean
    deterministic
    begin
    
		if  LENGTH(in_indirizzo)>=3   then 
			return true;
		else
			return false;
		end if;
    end $
delimiter ;
     
delimiter $
    create function controllo_citta (in_citta varchar(110)) returns boolean
    deterministic
    begin
    
		if  LENGTH(in_citta)>=3 and in_citta regexp '^[A-Za-z]+$' then 
			return true;
		else 
			return false;
		end if;
    end $
delimiter ;
 
delimiter $
    create function controllo_indirizzo_fat(in_indirizzo_fat varchar(110)) returns boolean
    deterministic
    begin
    declare indirizzo_f varchar(110);
    set indirizzo_f = in_indirizzo_fat;
    
    if indirizzo_f = '' or indirizzo_f is null then 
		set indirizzo_f = 'nessuno';
    end if;
    if LENGTH(indirizzo_f)>=3 then 
	return true;
	else return false;
    end if;
    end $
delimiter ;
     
delimiter $
    create function controllo_citta_fat (in_citta_fat varchar(110)) returns boolean
    deterministic
    
    begin
		declare citta_f varchar(110);
		set citta_f = in_citta_fat;
        
		if citta_f = '' or citta_f is null  then 
			set citta_f = 'nessuna';
		end if;
    
		if  LENGTH(citta_f)>=3 and citta_f regexp '^[A-Za-z]+$' then 
			return true;
		else
			return false;
		end if;
	end $
delimiter ;
    
delimiter £
	create function controllo_numeroTel ( in_nTel varchar(10)) returns boolean
	deterministic

	begin
		declare tel varchar(10);
		declare controllo_nTel int;
        
		set tel = in_nTel;
        
		select count(*) into controllo_nTel
		from infoutenti 
		where nTel = in_nTel;
        
		if tel = '' or tel is null then 
			set tel = 'none';
		end if;
        
		if length(tel)=10 and tel regexp '^[0-9]+$' and controllo_nTel < 1 then 
		return true;
		elseif tel = 'none' then 
			return true;
		else
			return false;
		end if;
	end £
delimiter ;  

delimiter £
create function controllo_email ( in_mail varchar(110)) returns boolean
deterministic
begin

 declare ck_mail int;
	select count(*) into ck_mail 
	from infoutenti
	where email = in_mail;
    
	if in_mail regexp '^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+.[A-Za-z]{2,4}' and ck_mail < 1 then
		return true;
	else 
		return false;
end if; 
end £
delimiter ;


delimiter £
create function controllo_tipocarta ( in_tipocarta varchar(110)) returns boolean
deterministic
begin
if in_tipocarta in('visa','mastercard','american express', 'maestro') then 
    return true;
else 
	return false;
end if;
end £
delimiter ;

delimiter £
	create function controllo_numerocarta ( in_numerocarta varchar(110)) returns boolean
	deterministic
		begin
			if length(in_numerocarta) in(14,16) and in_numerocarta regexp '^[0-9]+$' then 
				return true;
			else 
				return false;
			end if;
end £
delimiter ;

delimiter £
	create function controllo_cvv ( in_cvv varchar(110)) returns boolean
	deterministic
	begin
		if length(in_cvv) in(3,4) and in_cvv regexp '^[0-9]+$' then 
			return true;
		else 
			return false;
		end if;
	end £
delimiter ;

delimiter $
create function controllo_username(in_username varchar(110)) returns boolean
deterministic
	begin
    
    if  LENGTH(in_username)>=3   then 
	return true;
		else return false;
    end if;
    end $
delimiter ;

delimiter £
create function controllo_password ( in_password varchar(110)) returns boolean
deterministic
begin
	if in_password regexp "^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[@$!%€£?&])[A-Za-z0-9@$€£!%?&]{8,20}" then 
    return true;
else 
	return false;
end if;
end£
delimiter ;

delimiter £
create function controllo_ruolo ( in_ruolo varchar(110)) returns boolean
deterministic
begin
	if in_ruolo in("admin","user") then 
    return true;
else 
	return false;
end if;
end £
delimiter ;
