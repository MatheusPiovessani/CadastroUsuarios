# 📋 Cadastro de Usuários — Full Stack

> Projeto desenvolvido com o objetivo de consolidar conhecimentos em desenvolvimento back-end com Java e Spring Boot, arquitetura em camadas, API REST e integração com banco de dados relacional.

---

## 💡 O que eu aprendi com esse projeto

### 🏗️ Arquitetura em Camadas
Aprendi a organizar um projeto back-end seguindo o padrão de camadas:
- **Controller** — recebe as requisições HTTP e delega para o Service
- **Service** — contém a lógica de negócio (validações, regras)
- **Repository** — responsável pela comunicação com o banco de dados
- **Model** — representa a entidade do sistema

Essa separação torna o código mais organizado, legível e fácil de manter.

### 🌐 API REST
Aprendi a construir uma API RESTful do zero, utilizando os métodos HTTP corretamente:
- `GET` para buscar dados
- `POST` para cadastrar
- `DELETE` para remover

Também aprendi a tratar respostas com `ResponseEntity`, retornando status HTTP adequados como `200 OK`, `204 No Content` e `400 Bad Request`.

### 🗄️ Banco de Dados
Aprendi a conectar uma aplicação Spring Boot a um banco de dados PostgreSQL, utilizando o Spring Data JPA para:
- Mapear uma classe Java para uma tabela no banco com `@Entity`
- Criar queries automáticas com o Spring Data (ex: `existsByEmail`)
- Deixar o Hibernate gerenciar a criação das tabelas automaticamente com `ddl-auto=update`

### 🖥️ Integração Front-end e Back-end
Aprendi a consumir uma API REST a partir do front-end utilizando a **Fetch API** do JavaScript, enviando e recebendo dados em formato JSON sem precisar de nenhum framework.

---

## 🚀 Tecnologias Utilizadas

| Camada | Tecnologia |
|--------|-----------|
| Linguagem | Java 17 |
| Framework Back-end | Spring Boot 3.x |
| Persistência | Spring Data JPA + Hibernate |
| Banco de Dados | PostgreSQL 16 |
| Front-end | HTML5, CSS3, JavaScript |
| Comunicação | Fetch API (REST) |
| Versionamento | Git + GitHub |

---

## ⚙️ Funcionalidades

- ✅ Cadastrar usuário (Nome, Email, CPF)
- ✅ Listar todos os usuários
- ✅ Deletar usuário por ID
- ✅ Validação de Email e CPF duplicados com retorno de erro amigável

---

## 🗂️ Estrutura do Projeto

```
src/
├── main/
│   ├── java/br/dev/matheuspiovessani/cadastro_usuarios/
│   │   ├── controller/
│   │   │   └── UsuarioController.java
│   │   ├── model/
│   │   │   └── Usuario.java
│   │   ├── repository/
│   │   │   └── UsuarioRepository.java
│   │   ├── service/
│   │   │   └── UsuarioService.java
│   │   └── CadastroUsuariosApplication.java
│   └── resources/
│       ├── static/
│       │   ├── index.html
│       │   ├── style.css
│       │   └── script.js
│       └── application.properties.example
```

---

## 🔧 Como Rodar o Projeto

### Pré-requisitos
- Java 17+
- Maven
- PostgreSQL 16

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/MatheusPiovessani/cadastro-usuarios.git
cd cadastro-usuarios
```

2. Crie o banco de dados no PostgreSQL:
```sql
CREATE DATABASE cadastro_usuarios;
```

3. Configure as credenciais do banco:
```bash
cp src/main/resources/application.properties.example src/main/resources/application.properties
```
Edite o `application.properties` com seu usuário e senha do PostgreSQL.

4. Rode o projeto:
```bash
./mvnw spring-boot:run
```

5. Acesse no navegador:
```
http://localhost:8080
```

---

## 📡 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/usuarios` | Lista todos os usuários |
| `POST` | `/usuarios` | Cadastra um novo usuário |
| `DELETE` | `/usuarios/{id}` | Deleta um usuário por ID |

### Exemplo de requisição POST:
```json
{
  "nome": "Matheus",
  "email": "matheus@email.com",
  "cpf": "12345678901"
}
```

### Exemplo de resposta de erro (email duplicado):
```
400 Bad Request
E-mail já cadastrado.
```

---

## 👨‍💻 Autor

**Matheus Piovessani**  
Estudante de Ciência da Computação — PUC-RS  
[github.com/MatheusPiovessani](https://github.com/MatheusPiovessani)
