# Gabriel Max Gomes - Portfolio

## 📖 Sobre o Projeto

Este é o portfolio pessoal de Gabriel Max Gomes de Bessa (aka gabrielmaxgb), um desenvolvedor front-end apaixonado por criar experiências digitais intuitivas e belas. O projeto apresenta uma interface moderna com animações 3D interativas usando Three.js, destacando sua jornada profissional, projetos e artigos técnicos.

O portfolio reflete a filosofia de transformar complexidade em simplicidade através de interfaces intuitivas, combinando design moderno com funcionalidade robusta. Inclui seções para apresentação pessoal, jornada profissional, projetos atuais e blog com artigos técnicos.

## 🚀 Tecnologias Utilizadas

### Core Framework

- **[Nuxt 3](https://nuxt.com/)** - Framework Vue.js para aplicações universais
- **[Vue 3](https://vuejs.org/)** - Framework progressivo para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### UI & Styling

- **[Nuxt UI](https://ui.nuxt.com/)** - Biblioteca de componentes Vue 3
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Utilitário para mesclar classes Tailwind

### 3D & Animations

- **[Three.js](https://threejs.org/)** - Biblioteca 3D para WebGL
- **[@types/three](https://www.npmjs.com/package/@types/three)** - Tipos TypeScript para Three.js

### Development Tools

- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[Nuxt Content](https://content.nuxt.com/)** - Sistema de gerenciamento de conteúdo
- **[Nuxt Icon](https://github.com/nuxt-modules/icon)** - Sistema de ícones
- **[Nuxt Image](https://image.nuxt.com/)** - Otimização de imagens
- **[Nuxt Fonts](https://github.com/nuxt-modules/fonts)** - Gerenciamento de fontes

### Deployment

- **[GitHub Pages](https://pages.github.com/)** - Hospedagem estática
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** - Deploy automatizado

## 📁 Estrutura do Projeto

```
nuxt-app/
├── assets/
│   └── css/
│       └── main.css              # Estilos globais e configuração Tailwind
├── components/
│   ├── ArticleItem.vue           # Componente para exibir artigos do blog
│   ├── MainContainer.vue         # Container principal com layout responsivo
│   ├── MainSection.vue           # Seção de conteúdo reutilizável
│   ├── ThreeScene.vue            # Cena 3D interativa com Three.js
│   └── TopNavigationBar.vue      # Barra de navegação superior
├── layouts/
│   └── default/
│       └── index.vue             # Layout padrão com ThreeScene
├── pages/
│   ├── [...all].vue              # Página catch-all para rotas dinâmicas
│   ├── blog.vue                  # Página do blog
│   └── index.vue                 # Página inicial/portfolio
├── public/
│   ├── favicon.ico               # Ícone do site
│   ├── gmgb.svg                  # Logo pessoal
│   ├── p4n-logo.svg              # Logo Pros4Noobs
│   └── robots.txt                # Configuração para crawlers
├── server/
│   └── tsconfig.json             # Configuração TypeScript do servidor
├── nuxt.config.ts                # Configuração principal do Nuxt
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração TypeScript
├── three.d.ts                    # Declarações de tipos para Three.js
└── eslint.config.mjs             # Configuração ESLint
```

## 🛠️ Configuração e Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git

### Passos para Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/gabrielmaxgb/nuxt-app.git
   cd nuxt-app
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse o projeto**
   ```
   http://localhost:3000
   ```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run preview      # Preview da build de produção

# Build e Deploy
npm run build        # Build para produção
npm run generate     # Gera site estático
npm run deploy       # Deploy para GitHub Pages
```

## 🎨 Práticas e Padrões do Projeto

### Estrutura de Componentes

- **Composables**: Uso de `<script setup>` com TypeScript
- **Props**: Tipagem forte com interfaces TypeScript
- **Eventos**: Emissão de eventos tipados
- **Slots**: Uso de slots nomeados para flexibilidade

### Estilização

- **Tailwind CSS**: Classes utilitárias para estilização rápida
- **Tailwind Merge**: Mesclagem inteligente de classes
- **Design System**: Cores e tipografia consistentes
- **Responsividade**: Mobile-first com breakpoints definidos

### Performance

- **SSR Desabilitado**: Aplicação SPA para melhor performance
- **Lazy Loading**: Carregamento sob demanda de componentes
- **Otimização de Imagens**: Nuxt Image para otimização automática
- **Fontes Otimizadas**: Carregamento eficiente via Nuxt Fonts

### 3D e Animações

- **Three.js**: Cena 3D interativa como background
- **Scroll-based Animation**: Animações baseadas no scroll
- **Performance**: Otimização com requestAnimationFrame
- **Responsive**: Adaptação da cena 3D para diferentes tamanhos

### TypeScript

- **Tipagem Estrita**: Uso consistente de tipos
- **Interfaces**: Definição clara de estruturas de dados
- **Generics**: Uso apropriado de genéricos quando necessário

## 🚀 Deploy

O projeto está configurado para deploy automático no GitHub Pages:

1. **Build do projeto**

   ```bash
   npm run generate
   ```

2. **Deploy automático**
   ```bash
   npm run deploy
   ```

O site estará disponível em: `https://gabrielmaxgb.github.io/gabrielmaxgb-arena/`

## 📝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Commit

- Use commits semânticos
- Descreva claramente as mudanças
- Inclua testes quando apropriado

## 📄 Licença

Este projeto é privado e pessoal. Todos os direitos reservados.

## 👨‍💻 Autor

**Gabriel Max Gomes de Bessa**

- GitHub: [@gabrielmaxgb](https://github.com/gabrielmaxgb)
- LinkedIn: [gabrielmaxgb](https://www.linkedin.com/in/gabrielmaxgb/)
- Instagram: [@gabrielmaxgb](https://www.instagram.com/gabrielmaxgb/)
- Email: gmaxgomes@gmail.com

## 🙏 Agradecimentos

- Comunidade Nuxt.js
- Equipe do Three.js
- Contribuidores do Tailwind CSS
- Todos que apoiaram este projeto
