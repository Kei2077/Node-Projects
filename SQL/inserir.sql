insert into usuarios(nome, email, idade) values(
    "John Doe",
    "Johnathandoe@email.com",
    8
);

--para listar uma tabela usar "select * from (nome da tabela);"


select * from usuarios where idade = 8;
--lista na tabela usuarios que tenham 8 anos

select * from usuarios where nome = "joão";
--lista na tabela usuarios que no nome "João"

select * from usuarios where idade >= 18;
--lista na tabela usuarios que sejam maiores de 18 anos