alter table empresas modify cnpj varchar(14);

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 92738495032845),
    ('Vale', 38495043123487),
    ('NuBank', 98730123384027);

desc empresas;
desc prefeitos;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);
    
    