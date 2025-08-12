# Automação de API com Cypress – JSONPlaceholder

Projeto prático de **automação de testes de API REST** usando **Cypress** contra a API pública **JSONPlaceholder**.

[![CI - Cypress API](https://img.shields.io/github/actions/workflow/status/mylena-oliveira/cypress-jsonplaceholder-tests/main.yml?label=CI%20Cypress&logo=github)](https://github.com/mylena-oliveira/cypress-jsonplaceholder-tests/actions)

## 🎯 Objetivos
- Validar endpoints REST com **GET, POST, PUT, DELETE**.
- Demonstrar escrita de testes claros e reutilizáveis.
- Executar em **CI (GitHub Actions)** a cada push/PR.

## 🧰 Stack
- Node.js 20+
- Cypress 13+
- JSONPlaceholder (http://jsonplaceholder.typicode.com)
- GitHub Actions

## 🗂 Estrutura
cypress/
e2e/
posts.cy.js # CRUD /posts
users.cy.js # Listagem /users
cypress.config.js
package.json
.github/workflows/main.yml

arduino
Copy
Edit

## ▶️ Como rodar local
```bash
npm install
npm run cy:open   # modo interativo
npm test          # headless
baseUrl definido em cypress.config.js para http://jsonplaceholder.typicode.com.

✅ Escopo dos testes
/users

GET /users → 200, array não vazio, chaves esperadas.

/posts

GET /posts → 200, array não vazio

POST /posts → 201, retorna payload + id

PUT /posts/1 → 200, retorna payload atualizado

DELETE /posts/1 → 200 (API simula deleção e retorna body vazio)

📈 CI (GitHub Actions)
Pipeline em .github/workflows/main.yml executa:

npm ci || npm i

npx cypress run

🚀 Próximos passos
Validar schemas com AJV

Relatórios (Mochawesome/Allure)

Testes de performance (k6) nos mesmos fluxos para um “Parte 2”
