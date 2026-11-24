# McLaren Racing Hub — Página Única (HTML, CSS e JavaScript)

Projeto desenvolvido no VS Code para a avaliação prática de Programação de Aplicativos, com tema focado na escuderia **McLaren** e um **Simulador de Combustível para Corrida**.

## Estrutura do Repositório

- `index.html`: Estrutura semântica da página, navegação, conteúdo temático, imagem acessível e formulário.
- `css/style.css`: Estilização responsiva (mobile-first com adaptação para desktop) e estados visuais de feedback.
- `js/script.js`: Validação de campos, tratamento de exceções (`try/catch`) e cálculo do combustível necessário.
- `img/`: Pasta destinada às imagens utilizadas na página.
- `README.md`: Documentação do projeto, testes e identificação de recursos.

## Como Executar no VS Code

1. Abre a pasta `pagina-tema-livre` no **Visual Studio Code**.
2. Adiciona uma imagem em `img/mclaren-hero.jpg` (ou ajusta o caminho em `index.html`).
3. Abre `index.html` no navegador (por exemplo, com a extensão *Live Server* ou abrindo diretamente o ficheiro).

## Regras de Validação e Cálculo do Formulário

- **Identificação da sessão/piloto:** Obrigatório (não pode ficar vazio).
- **Número de voltas:** Número inteiro entre `1` e `100`.
- **Consumo por volta (litros):** Número entre `0.5` e `10` (aceita ponto ou vírgula decimal).
- **Cálculo:** `combustível base = voltas × consumo`, acrescido de `5%` de margem de segurança.

## Registo de Testes do Formulário

| Cenário testado | Entrada | Resultado esperado / obtido |
| :--- | :--- | :--- |
| Campos em branco | Tudo vazio | Recusa e exibe mensagem pedindo preenchimento; página continua funcional. |
| Número de voltas inválido | `voltas = 0` ou `2.5` | Recusa com mensagem explicando a faixa/tipo permitido. |
| Consumo inválido | `consumo = abc` ou `-1` | Recusa com mensagem de erro sem quebrar a aplicação. |
| Envio válido | Sessão preenchida, `voltas = 20`, `consumo = 1.5` | Exibe combustível base (`30.00 L`), margem (`1.50 L`) e total (`31.50 L`). |

## Origem das Imagens e Uso de Ferramentas / IA

- **Origem da imagem:** *(Substitui este trecho pela URL/fonte exata da imagem que colocaste em `img/`, garantindo licença livre/adequada ao ambiente escolar).*
- **Uso de IA / apoio:** Código estruturado com apoio de assistente de IA e revisado manualmente no VS Code.
