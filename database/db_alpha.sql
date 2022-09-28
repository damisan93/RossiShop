create database db_alpha;
use db_alpha;

CREATE TABLE categorie(
id int primary key auto_increment, 
nome varchar(255) NOT NULL unique
);


CREATE TABLE prodotti (
  id int primary key auto_increment,
  nome varchar(255) NOT NULL,
  idcategoria int,
  prezzo double NOT NULL,
  descrizione text NOT NULL,
  foreign key (idcategoria) references categorie (id) on delete cascade
);
  
create table modelli(
    id int primary key auto_increment,
    colore varchar(50),
    taglia varchar(6),
    quantita int,
    idprodotto int,
    link1 text not null,
    link2 text,
    link3 text,
	foreign key (idprodotto) references prodotti(id) on delete cascade
);
    
insert into categorie (nome) values
("T-shirt e Top"),
("Camicie"),
("Jeans"),
("Pantaloni"),
("Gonne"),
("Giacche"),
("Cappotti"),
("Intimo"),
("Calze");

insert into prodotti (nome,idcategoria,prezzo, descrizione) values
("Boxer uomo - ma vah?", 8,20,"boxer da uomo leggi il nome"),
("Jeans strappati donna", 3,28, "jeans pre distrutti che stranamente costano di piiù dei normali jeans"),
("Completo giacca + cravatta",6,50.99 , "set giacca e cravatta che indosserai al matrimonio del cugino di terzo grado e poi dimenticherai che esiste sia il cugino che il set ovviamente"),
("Giaccone da sci",7,60.20,"è una giacca per andare a sciare non ha una particolare lore non tutti possiamo avere un background complicato ed interessante ma le vogliamo bene comunque"), 
("calze della nonna", 9,8.79,"fari un figurone spacciandoti per una vera pro nel lavoro a maglia regalando questi calzini di pura lana merinos che puntualmente saranno accolti con lo sdegno che si confa all'ospite dopo i famosi tre giorni");

select * from prodotti;

insert into modelli
(colore,taglia,quantita,idprodotto,link1,link2,link3)
values
("blu scuro","L",150,1,"https://m.media-amazon.com/images/I/71AcsAYszmL._AC_UX679_.jpg","https://m.media-amazon.com/images/I/51w8dP0GdkL._AC_SX679._SX._UX._SY._UY_.jpg","https://www.dicandiashoponline.it/pimages/Boxer-uomo-microfibra-Pompea-elasticizzato-costa-no-stress-anato-extra-big-1738-428.jpg"),
("bianco", "XL",250,1,"https://m.media-amazon.com/images/I/41up2xSf-qL._AC_UX679_.jpg","https://cdn1.jolicloset.com/imgr/full/2022/04/500058-1/giovanni-pantaloni-donna-balmain-strappati-in-jeans-denim-grigio-zip-a-vita-bassa-slim-fit-tg-38.jpg","https://m.media-amazon.com/images/I/617MaxGpwTL._AC_UX679_.jpg"),
("nero", "S",20,2,"https://m.media-amazon.com/images/I/41up2xSf-qL._AC_UX679_.jpg","https://cdn1.jolicloset.com/imgr/full/2022/04/500058-1/giovanni-pantaloni-donna-balmain-strappati-in-jeans-denim-grigio-zip-a-vita-bassa-slim-fit-tg-38.jpg","https://m.media-amazon.com/images/I/617MaxGpwTL._AC_UX679_.jpg"),
("grigio","L",200,2,"https://m.media-amazon.com/images/I/41up2xSf-qL._AC_UX679_.jpg","https://cdn1.jolicloset.com/imgr/full/2022/04/500058-1/giovanni-pantaloni-donna-balmain-strappati-in-jeans-denim-grigio-zip-a-vita-bassa-slim-fit-tg-38.jpg","https://m.media-amazon.com/images/I/617MaxGpwTL._AC_UX679_.jpg"),
("blu","XL",120,2,"https://m.media-amazon.com/images/I/41up2xSf-qL._AC_UX679_.jpg","https://cdn1.jolicloset.com/imgr/full/2022/04/500058-1/giovanni-pantaloni-donna-balmain-strappati-in-jeans-denim-grigio-zip-a-vita-bassa-slim-fit-tg-38.jpg","https://m.media-amazon.com/images/I/617MaxGpwTL._AC_UX679_.jpg");
    
select modelli.* from modelli inner join prodotti on prodotti.id=modelli.idprodotto where idprodotto=1;
    
select * from prodotti where prodotti.nome like"%strappati%";

    select * 
    from prodotti where idcategoria=8
    order by prezzo desc;
    
    select * from prodotti where id = 1;


select * from modelli;