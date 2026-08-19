# SIte-Kung-Fu
# 🥋 Carrossel Interativo Kung Fu

Um carrossel de exibição responsivo desenvolvido com **HTML5**, **CSS3** e **JavaScript Vanilla**, com animações dinâmicas de preenchimento circular (*clip-path*), suporte a gestos (*touch/swipe* e arrasto com mouse) e adaptação específica para dispositivos móveis.

---

## 📸 Demonstração Visual

* **Desktop**: Exibe a imagem de fundo sincronizada com a miniatura em destaque, bloco textual alinhado e cards laterais com projeção exterior.
* **Mobile**: Layout vertical adaptado, com miniaturas na lateral direita, controles centralizados no vão livre e textos alinhados à margem do botão.

---

## ✨ Funcionalidades

- **Sincronização de Fundo**: A imagem de fundo principal corresponde sempre à miniatura ativa no momento.
- **Animações Circulares (`clip-path`)**:
  - *Avançar*: A nova imagem se expande a partir do centro da miniatura sobre o fundo anterior.
  - *Voltar*: A imagem atual se recolhe em direção à miniatura, revelando o fundo anterior.
- **Navegação Multicanal**:
  - Botões de navegação anteriores/próximos (◁ / ▷).
  - Suporte a arrasto com o mouse no Desktop (*drag & drop*).
  - Suporte a deslize com o dedo em telas sensíveis ao toque (*touch/swipe*).
- **Links Dinâmicos**: Cada faixa/slide possui seu próprio link configurável no botão **Acessar**.
- **Layout Totalmente Responsivo**: Layout dedicado para mobile via Media Queries (`@media (max-width: 768px)`).
- **Sem Dependências**: Desenvolvido 100% em JavaScript puro, sem bibliotecas externas (como jQuery ou Swiper).

---

## 📁 Estrutura de Arquivos

```text
├── index.html        # Estrutura semântica e marcação das faixas/slides
├── style.css         # Estilização completa, animações e regras responsivas
├── script.js         # Lógica de transição, eventos de clique e arrasto
└── README.md         # Documentação do projeto