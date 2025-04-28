# 🚀 Cypress API - Testes com e sem Mock (cy.intercept + fixtures)

Este projeto demonstra como utilizar o **Cypress** para testar **requisições de API**, mpregando tanto chamadas reais quanto mock de dados usando `cy.intercept` e `fixtures` (dados simulados).
## 📂 Estrutura do Projeto

```
cypress/
 ├── e2e/
 │    └── api/
 │         ├── criarUsuario.cy.js
 │         ├── login.cy.js
 │         └── usuarioLogin.cy.js
 │
 ├── fixtures/
 │    └── usuarios/
 │         ├── ausenciaSenha.json
 │         ├── invalido.json
 │         ├── mockUsuario.json
 │         ├── realizarLogin.json
 │         └── valido.json
 │
 ├── support/
 │    ├── commands/
 │    │    ├── criarUsuario.js
 │    │    ├── login.js
 │    │    └── usuarioLogin.js
 │    └── commands.js
 │
 └── index.html   (página de simulação de requisição)
```
---


## 🧪 Casos de Teste Implementados

### ✅ Login
- Validar realizar login com sucesso
- Validar ealizar login com ausência de senha

### ✅ RegistrarUsuarioLogin
- Registrar novo usuário com dados válidos
- Registrar novo usuário - ausência de senha

### ✅ CriarUsuario

- **Teste de criação de usuário (mockado)**:
  - Usamos o `cy.intercept` para interceptar a chamada `POST` para `/api/users`.
  - Simulamos a resposta da API usando um arquivo da pasta `fixtures` (`mockUsuario.json`).
  - Assim, testamos o comportamento do sistema mesmo sem precisar da API real.


## 🛠️ Como Funciona o Mock

- O botão no `index.html` envia uma requisição `fetch()` para a API (simulada).
- O Cypress intercepta essa chamada com `cy.intercept`.
- Devolve uma resposta **mockada** criada no `mockUsuario.json`.
- Isso permite validar a criação do usuário sem precisar da API de verdade.

### 📄 Exemplo de interceptação (`criarUsuario.cy.js`)

```javascript
import '../../support/commands';

describe('Teste com intercept e mock', () => {
    it('Deve mockar a criação de usuário', () => {
        cy.fixture('usuarios/mockUsuario').then((tmock) => {
            cy.intercept('POST', 'https://reqres.in/api/users', {
                statusCode: 201,
                body: tmock
            }).as('mockCriarUser');

            cy.visit('cypress/fixtures/index.html'); // abre a página HTML local
            cy.get('#criar').click(); // clica no botão para fazer a requisição

            cy.wait('@mockCriarUser').its('response.statusCode').should('eq', 201);
        });
    });
});
```

## 📦 Requisitos para rodar o projeto

- Node.js
- Cypress instalado (`npm install cypress --save-dev`)


## 🧪 Como executar os testes

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Abra o Cypress:

```bash
npx cypress open
```

4. Execute o teste `criarUsuario.cy.js` na interface do Cypress.


## 🌐 Observação importante

- Para simular o comportamento localmente sem depender da internet, você pode alterar o endpoint para `https://127.0.0.1/api/users` na página `index.html`.
- Dessa forma, o Cypress **sempre intercepta** a chamada, independente da API real estar disponível.


## 📚 Conceitos aplicados

- **cy.intercept**: intercepta chamadas de rede para alterar ou monitorar requisições.
- **cy.fixture**: carrega arquivos JSON externos para usar como mock.
- **cy.request**: usado nos comandos customizados para simular chamadas de API.



