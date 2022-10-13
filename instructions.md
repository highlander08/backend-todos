1 - server.js -> criei os servidor
2 - routes.js -> criei as rotas para teste
3 - docker-compose.yml -> criei banco de dados com postresssql atraves do docker compose
4 - schema.prisma -> instalei o prisma rodei o comando npx prisma init, conectei com o banco de dados postresssql que criei rodando o docker compose
5 - migration.sql -> rodei o comando npx prisma migrate dev 'name-table' para criar o modelo da tabela que esta no arquivo schema.prisma linha 13
6 - routes.js -> criei as rotas(CRUD)
  - Buscar
  - Criar
  - Atualizar
  - Deletar