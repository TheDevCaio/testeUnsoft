# Projeto Imobiliária

Site responsivo para exibição de imóveis, com filtros, carrosséis e informações de contato. Desenvolvido com foco em uma boa experiência tanto para desktop quanto para dispositivos móveis.

---

## 🛠 Tecnologias Utilizadas

- **HTML5 & CSS3** — Estrutura e estilo da página
- **Bootstrap 5** — Framework CSS para responsividade e componentes prontos
- **jQuery** — Biblioteca JavaScript para manipulação do DOM e eventos
- **Slick Carousel** — Biblioteca jQuery para criação dos carrosséis de imóveis
- **Bootstrap Icons** — Ícones utilizados na interface
- **CDN** — Uso de bibliotecas via CDN para facilitar o setup

---

## 🚀 Como Rodar Localmente

1. Clone este repositório:

   ```bash
   git clone <URL_DO_REPOSITÓRIO>

Navegue até a pasta do projeto:

bash
Copiar
Editar
cd nome-do-projeto
Abra o arquivo index.html no seu navegador preferido (Chrome, Firefox, Edge, etc.):

Você pode abrir direto pelo sistema operacional (clicando duas vezes no arquivo)

Ou abrir via linha de comando, por exemplo:

bash
Copiar
Editar
start index.html     # Windows
open index.html      # macOS
xdg-open index.html  # Linux
📁 Estrutura do Projeto
graphql
Copiar
Editar
/
├── css/
│   └── style.css           # Estilos personalizados
├── img/
│   └── logo.webp           # Logo e imagens do site
├── js/
│   └── script.js           # Scripts JavaScript para carrosséis e interatividade
└── index.html              # Página principal do site
⚙ Funcionalidades
Navegação responsiva com menu simples e direto

Banner com filtro customizado para imóveis (compra, aluguel, tipo, região, quartos, faixa de preço)

Três carrosséis independentes para imóveis em destaque (super, venda e locação)

Seção "Horário de Funcionamento" com informações da empresa e unidades

Footer com contatos, links institucionais e redes sociais

Layout responsivo e fluido para desktop e dispositivos móveis

📌 Considerações
Projeto é estático, não requer backend para funcionar

As imagens devem estar corretamente posicionadas na pasta /img

Os carrosséis são configurados via jQuery + Slick no arquivo js/script.js

Estilos adaptados para mobile com media queries no CSS

Pode ser facilmente hospedado em qualquer servidor estático (GitHub Pages, Netlify, Vercel, etc.)

🤝 Contribuindo
Se quiser contribuir com melhorias ou correções, fique à vontade para abrir uma issue ou enviar um pull request.

📝 Licença
Projeto aberto para aprendizado e uso livre.

