<table>
<tr>
<td width="35%" align="center">
<img src="https://i.imgur.com/AzshGmS.png" width="280"/>
</td>
<td width="65%">

# ✨ Blog Pessoal: Frontend com React

<img src="https://img.shields.io/badge/React-CDB4FF?style=for-the-badge&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-B8C0FF?style=for-the-badge&logoColor=white">
<img src="https://img.shields.io/badge/TailwindCSS-FFC8DD?style=for-the-badge&logoColor=white">
<img src="https://img.shields.io/badge/Vite-BDE0FE?style=for-the-badge&logoColor=white">

Aplicação frontend desenvolvida em React e TypeScript, consumindo a API REST construída com Spring Boot, proposta pela Generation Brasil.

</td>
</tr>
</table>

---

## 🌸 Sobre o projeto

O **Blog Pessoal - Frontend** é uma aplicação web desenvolvida com **React** e **TypeScript**, com o objetivo de consumir e exibir dados de uma API REST construída com **Spring Boot**. A aplicação permite a visualização, criação, edição e exclusão de postagens de blog, categorizadas por temas e vinculadas a usuários autenticados.

## 🌸 Habilidades trabalhadas

- Modelagem de dados com interfaces TypeScript
- Consumo de API REST com Axios
- Autenticação via Context API (estado em memória)
- Roteamento com React Router DOM
- CRUD completo de Postagem e Tema
- Formulários controlados com validação
- Alertas personalizados com React Toastify
- Página de Perfil do usuário autenticado
- Estilização responsiva com Tailwind CSS

## 🌸 Estrutura do projeto

```
src/
├── assets/
├── components/
│   ├── footer/Footer.tsx
│   ├── navbar/Navbar.tsx
│   ├── postagem/
│   │   ├── cardpostagem/CardPostagem.tsx
│   │   ├── deletarpostagem/DeletarPostagem.tsx
│   │   ├── formpostagem/FormPostagem.tsx
│   │   ├── listapostagens/ListaPostagens.tsx
│   │   └── modalpostagem/ModalPostagem.tsx
│   └── tema/
│       ├── cardtema/CardTema.tsx
│       ├── deletartema/DeletarTema.tsx
│       ├── formtema/FormTema.tsx
│       └── listatemas/ListaTemas.tsx
├── contexts/
│   └── AuthContext.tsx
├── models/
│   ├── Postagem.ts
│   ├── Tema.ts
│   ├── Usuario.ts
│   └── UsuarioLogin.ts
├── pages/
│   ├── cadastro/Cadastro.tsx
│   ├── home/Home.tsx
│   ├── login/Login.tsx
│   └── perfil/Perfil.tsx
├── services/
│   └── Service.ts
├── utils/
│   └── ToastAlerta.ts
├── App.tsx
└── main.tsx
```

## 🌸 Funcionalidades

**Cadastro e login de usuário**
- Cadastro com confirmação de senha
- Autenticação via API com token
- Indicador de carregamento durante as requisições
- Redirecionamento automático após login

**Perfil**
- Exibição da foto e dos dados do usuário autenticado

**CRUD de Postagem**
- Listagem de postagens na Home
- Cadastro de nova postagem, vinculada a um tema e ao usuário logado
- Edição de postagem existente
- Exclusão com tela de confirmação

**CRUD de Tema**
- Listagem, cadastro, edição e exclusão de temas

**Alertas personalizados**
- Feedback de sucesso, erro e informação com React Toastify em todas as telas

**Controle de acesso**
- Usuários não autenticados são redirecionados para o Login ao tentar acessar rotas internas

## 🌸 Rotas da aplicação

| Rota | Página | Descrição |
|---|---|---|
| `/` | Login | Autenticação do usuário |
| `/cadastro` | Cadastro | Cadastro de novo usuário |
| `/home` | Home | Página inicial, com listagem de postagens |
| `/perfil` | Perfil | Dados do usuário autenticado |
| `/temas` | ListaTemas | Listagem de temas |
| `/cadastrartema` | FormTema | Cadastro de tema |
| `/editartema/:id` | FormTema | Edição de tema |
| `/deletartema/:id` | DeletarTema | Exclusão de tema |
| `/postagens` | ListaPostagens | Listagem de postagens |
| `/cadastrarpostagem` | FormPostagem | Cadastro de postagem |
| `/editarpostagem/:id` | FormPostagem | Edição de postagem |
| `/deletarpostagem/:id` | DeletarPostagem | Exclusão de postagem |

## 🌸 Como executar

1. Clone este repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o projeto em ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:5173` no navegador

## 🌸 Tecnologias utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify
- React Spinners
- Reactjs Popup

## 👤 Feito por:

Luiza Paolinelli