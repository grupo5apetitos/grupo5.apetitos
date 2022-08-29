USE apetitos_db;

INSERT INTO users_profile(`name`, `abrev`) VALUES ('ADMINISTRADOR', 'ADMIN');
INSERT INTO users_profile(`name`, `abrev`) VALUES ('USUARIO', 'USERS');

INSERT INTO users (`user_name`, `email`, `name`, `last_name`, `password`, `avatar`, `id_profile`) VALUES ('josue', 'josephee.xp@gmail.com', 'Josué Fernando', 'Martínez Higuera', md5('12345'), 'josue.png', 1);
INSERT INTO users (`user_name`, `email`, `name`, `last_name`, `password`, `avatar`, `id_profile`) VALUES ('shirly', 'shirly@gmail.com', 'Shirly', 'Batista', md5('12345'), 'shirly.png', 1);
INSERT INTO users (`user_name`, `email`, `name`, `last_name`, `password`, `avatar`, `id_profile`) VALUES ('david', 'david@gmail.com', 'David', 'Gómez', md5('12345'), 'david.png', 1);
INSERT INTO users (`user_name`, `email`, `name`, `last_name`, `password`, `avatar`, `id_profile`) VALUES ('admin', 'admin@admin.com', 'admin', 'principal', md5('admin'), 'admin.png', 1);

INSERT INTO category (`name`) VALUES ('Lo más visto');
INSERT INTO category (`name`) VALUES ('Lo menos visto');
INSERT INTO category (`name`) VALUES ('Lo más comprado');
INSERT INTO category (`name`) VALUES ('Lo menos comprado');

INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES ('Camarones', 'Camarones pelados, pasados por jugo de limón, harina, huevo y pan molido y, posteriormente, fritos. Acompañados por una salsa de mesa tradicional y con arroz o ensalada de verduras.', 850.00, 'camarones.png', 1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Pata y Muslo', 'Pata y Muslo Deshuesada de Pollo a la Pomarola con Puré de Calabazas.', 850,'pata_muslo.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Tarta de Cebolla', 'Tarta de Cebolla y Queso Port Salut Light (con masa de ricotta y harina Integral.', 950,'tarta-de-cebolla.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Vegetales Fritos', 'Una preparacion a base de verduras, por lo que su consumo va aportarnos una buena cantidad de vitaminas, minerales, y sustancias de acción antioxidates.', 850,'vegetales_fritos.png',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Tempura de Verduras', 'Tempura de verduras ligera y crujiente. Se puede servir con alguna salsa para mojar como la de soja.', 1225,'empanizado.png',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Ravioles con Bolognesa', 'Deliciosos ravioles con bolognesa echos con relleno de queso y ricotta o de espinaca y una deliciosa bolonesa con salsa de tomate natural.', 980,'raviolis-con-bolognesa.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Salmon con Fideos', 'Este Salmon con fideos llena de sabor la perfecta combinacion y es un hit para toda la familia. Con una salsa teriyaki realmente exquisita.', 1200,'Salmon-con-Fideos.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Lasaña', 'La lasaña un plato delicioso elaborado de finas laminas de pasta que son rellenadas con carne, tomate, verduras, cebolla y normalmente son cocinadas con aceite de oliva. Este plato presenta una gran variedad de posibilidades ya wue hay lasañas de todo tipo. En cualquier caso, se trata de un plato muy nutritivo y exquisito!', 980,'lasaña.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Tallarines con Crema', 'Los tallarines con crema que ofrecemos son echos con tallarines caseros y una cream libre de gluten para que todos la puedan disfrutar sin ningun problema.', 850,'tallarines-con-crema.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Ensalada', 'Ofrecemos una ensalada unica a tu gusto. La podes armar como vos quieras. Pedilo y te la hacemos!', 800,'ensalada.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Caesar Salad', 'Caeser Salad es una ensalada echa con lechuga, tomate, cubos de pan tostados, y pollo(opcional) y un adereso para Caesaer salad muy delicioso.', 780,'caesar-salad.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Pizza con Vegetales', 'Para los amantes de los vegetales, les ofrecemos una pizza con vegetales riquisima. Tradiconalmente esta echa con calabacin, berenjena, pimiento rojo, y cebollo pero le la pueden pedir a su gusto con los vegetales que mas le gusten.', 980,'pizza-vegetales.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Pollo al Horno con Papas', 'Les ofrecemos un Pollo al horno con papas delicioso que cuando lo prueben les va ser acordar a su infancia como lo hacia mamá.', 980,'pollo-con-papas.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Tiramisu', 'Un postre echo con capas de bizcocho soletilla junto con una deliciosa crema de Mascarpone, donde el contraste de sabores del queso, café, licor y bizcochos hacen de esta tarta un bocado difícil de olvidar.', 1100,'tiramisu.jpg',1);
INSERT INTO meals(`name`, `description`, `price`, `image`, `id_category`) VALUES('Tacos de asada', 'Deliciosos tacos de asada, con su verdurita y salsita.', 25.00,'imagen-1657051172450.jpeg',1);