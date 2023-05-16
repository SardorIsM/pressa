create database pressa;

create table admin(
    id VARCHAR UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    login VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);
    
insert into admin(login, password) values('sardor', '123456');