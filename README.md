# Desafio Classificador de Nível de Herói do Felipão

Um projeto web interativo que classifica o nível de um herói com base na sua experiência (XP) inserida pelo usuário. Desenvolvido como um desafio prático para consolidar conhecimentos em HTML, CSS e JavaScript.

## 🚀 Acessar o Projeto Online

Você pode visualizar este projeto diretamente no seu navegador através do seguinte link:

[https://leonardosabino2025.github.io/desafio-do-felipao/](https://leonardosabino2025.github.io/desafio-do-felipao/)

## 💻 Tecnologias Utilizadas

* **HTML:** Estrutura da página web e elementos de interação.
* **CSS:** Estilização completa da interface, incluindo layout, cores, tipografia personalizada (MedievalSharp do Google Fonts) e imagem de fundo temática.
* **JavaScript:** Lógica de classificação do nível do herói, validação de entrada do usuário (nome e XP) e funcionalidades dinâmicas como o botão "Tentar outro Herói" e controle de volume da música de fundo.
* **Fonte:** [MedievalSharp](https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap) (Google Fonts) para um visual temático.
* **Imagem de Fundo:** `imgs/castle.jpg` - Uma imagem de castelo para criar uma atmosfera imersiva de fantasia.
* **Música de Fundo:** `music/WARCRAFT2_04.ogg` - Uma faixa temática para ambientação, com controles de reprodução para o usuário.

## ✨ Funcionalidades Principais

* **Entrada de Nome do Herói:** Campo de texto com validação (mínimo 4 letras, primeira letra maiúscula) para o usuário nomear seu herói.
* **Entrada de Experiência (XP):** Campo numérico com restrições (valor inicial 1000, incremento de 5, sem valores negativos) para o usuário inserir a XP do herói.
* **Classificação de Nível:** Determinação automática do nível do herói com base na XP inserida, seguindo a seguinte escala:
    * `< 1.000`: Ferro
    * `1.001 - 2.000`: Bronze
    * `2.001 - 5.000`: Prata
    * `5.001 - 7.000`: Ouro
    * `7.001 - 8.000`: Platina
    * `8.001 - 9.000`: Ascendente
    * `9.001 - 10.000`: Imortal
    * `>= 10.001`: Radiante
* **Exibição do Nível:** Apresentação clara do nível do herói classificado na página.
* **Validação de Dados:** Feedback ao usuário em caso de entrada de nome ou XP inválida.
* **Botão "Tentar outro Herói":** Permite limpar os campos de entrada e o resultado, habilitando a classificação de um novo herói.
* **Música de Fundo:** Reprodução automática em loop de uma música temática com controle de volume e reprodução para o usuário.
* **Interface Temática:** Design visual imersivo com imagem de fundo de castelo e tipografia medieval.

## 📂 Estrutura de Arquivos

* desafio-do-felipao/
    * index.html
    * css/
        * style.css
    * js/
        * script.js
    * imgs/
        * castle.jpg
    * music/
        * WARCRAFT2_04.ogg
    * README.md

## 🚀 Como Executar Localmente

1.  Clone este repositório para sua máquina local:
    ```bash
    git clone [https://github.com/LeonardoSabino2025/desafio-do-felipao.git](https://github.com/LeonardoSabino2025/desafio-do-felipao.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd desafio-do-felipao
    ```
3.  Abra o arquivo `index.html` no seu navegador web preferido.

## 🛠️ Próximos Passos (Opcional)

* Melhorar a responsividade da interface para diferentes dispositivos.
* Adicionar animações ou efeitos visuais para enriquecer a experiência do usuário.
* Implementar um sistema de pontuação ou histórico de heróis classificados.
* Explorar a utilização de Local Storage para persistir dados entre sessões.

## 🧑‍💻 Autor

[Leonardo Sabino](https://github.com/LeonardoSabino2025)
