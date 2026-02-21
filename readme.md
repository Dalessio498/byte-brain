# 🧠 ByteBrain - Quiz de Lógica de Programação

![Preview do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success)
![SENAI](https://img.shields.io/badge/Institui%C3%A7%C3%A3o-SENAI-red)

O **ByteBrain** é um quiz interativo desenvolvido para testar conhecimentos em lógica de programação e peculiaridades da linguagem JavaScript (como coerção de tipos, loops, arrays e condicionais). O jogo conta com diferentes níveis de dificuldade e um sistema de progressão.

Este projeto foi desenvolvido como um trabalho acadêmico para o curso de tecnologia do **SENAI**, com o foco em aplicar na prática os fundamentos de Desenvolvimento Web (Front-end).

---

## 🎮 Funcionalidades

* **Sistema de Níveis:** Progressão de dificuldade (Easy, Medium, Hard, Nível Final).
* **Feedback Imediato:** Respostas corretas e incorretas são destacadas visualmente na hora.
* **Memória de Jogo:** Utilização de `LocalStorage` para que o navegador lembre o progresso e os erros do jogador mesmo ao trocar de página.
* **Dicas Dinâmicas:** Botões interativos que revelam dicas curtas para ajudar nas questões mais difíceis.
* **Design Responsivo:** A interface se adapta perfeitamente a celulares, tablets, notebooks (como Lenovo IdeaPad) e monitores Ultrawide.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as bases do desenvolvimento web moderno, sem o uso de frameworks externos:

* **HTML5:** Estruturação semântica de múltiplas páginas.
* **CSS3:** * Layout flexível com `Flexbox`.
  * Estilização de interface (gradientes, sombras, bordas arredondadas).
  * Animações contínuas (`@keyframes pulsar`) e transições suaves (`transition: ease`).
  * `Media Queries` para responsividade extrema.
  * Integração de fontes customizadas do Google Fonts (`Jersey 10`, `Consolas`).
* **JavaScript (Vanilla):** * Manipulação direta do DOM (`getElementById`, `querySelectorAll`).
  * Lógica de validação de respostas e controle de escopo.

---

## 🚀 Como executar o projeto localmente

Como o projeto é feito puramente em HTML, CSS e JS, rodar ele na sua máquina é muito simples:

1. Clone este repositório:
   ```bash
   git clone [https://github.com/Dalessio498/ByteBrain.git](https://github.com/Dalessio498/ByteBrain.git)
