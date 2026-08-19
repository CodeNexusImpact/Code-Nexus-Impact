# 🌐 Code Nexus Impact - Manual de Desenvolvimento & Guia Git

Guia prático e completo com pré-requisitos, instruções de execução local e fluxo de trabalho com Git e GitHub (branches, commits e Pull Requests).

---

## 📋 Sumário
1. [Pré-requisitos Iniciais](#-pré-requisitos-iniciais)
2. [Estrutura do Projeto](#-estrutura-do-projeto)
3. [Como Rodar o Site Localmente](#-como-rodar-o-site-localmente)
4. [Fluxo Git Passo a Passo (Manual Básico)](#-fluxo-git-passo-a-passo-manual-básico)
   - [1. Clonar e Atualizar](#1-clonar-e-atualizar-o-repositório)
   - [2. Criar uma Nova Branch](#2-criar-uma-nova-branch)
   - [3. Fazer Alterações e Commits](#3-fazer-alterações-e-commits)
   - [4. Enviar para o GitHub (Push)](#4-enviar-para-o-github-push)
5. [Como Criar um Pull Request (PR)](#-como-criar-um-pull-request-pr)
6. [Boas Práticas de Commits & Branches](#-boas-práticas-de-commits--branches)
7. [Comandos Git Úteis de Emergência](#-comandos-git-úteis-de-emergência)

---

## 💻 Pré-requisitos Iniciais

Antes de começar, certifique-se de ter instalado em sua máquina:

1. **[Git](https://git-scm.com/)**: Sistema de controle de versão (essencial para clonar e versionar código).
2. **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)**: Editor de código recomendado.
3. **Extensão Live Server para VS Code**:
   - Abra o VS Code.
   - Vá na aba de Extensões (`Ctrl + Shift + X`).
   - Busque por **"Live Server"** (por Ritwick Dey) e clique em **Install**.
4. *(Opcional)* **[Node.js](https://nodejs.org/)** ou **[Python](https://www.python.org/)** caso queira subir um servidor local via terminal.

---

## 🚀 Como Rodar o Site Localmente

Você pode escolher qualquer uma das opções abaixo para visualizar o site no navegador:

### Opção 1: Via VS Code com Live Server (Recomendado ⭐)
1. Abra a pasta do projeto no VS Code (`File > Open Folder... > Site-Code-Nexus-Impact`).
2. Clique com o **botão direito** no arquivo `index.html`.
3. Selecione **"Open with Live Server"** (ou use o atalho `Alt + L` seguido de `Alt + O`).
4. O navegador abrirá automaticamente em `http://127.0.0.1:5501` ou `http://localhost:5501`.
5. Qualquer alteração feita nos arquivos HTML/CSS/JS atualizará a página instantaneamente!

---

### Opção 2: Via Terminal com Node.js (npx serve)
Se você tem o Node.js instalado, execute no terminal da pasta do projeto:
```bash
npx serve .
```
Ou usando `http-server`:
```bash
npx http-server -p 5501
```
Acesse a URL exibida no terminal (ex: `http://localhost:3000` ou `http://localhost:5501`).

---

### Opção 3: Via Terminal com Python
Se você possui Python instalado:
```bash
# Python 3
python -m http.server 5501
```
Abra seu navegador em: `http://localhost:5501`.

---

### Opção 4: Abertura Direta
Dê um duplo clique no arquivo `index.html` na pasta do projeto para abri-lo diretamente no navegador padrão. *(Nota: algumas integrações de scripts e fontes podem funcionar melhor com um servidor local).*

---

## 🌿 Fluxo Git Passo a Passo (Manual Básico)

Siga este passo a passo sempre que for realizar uma nova alteração, criar uma funcionalidade ou corrigir um bug:

### 1. Clonar e Atualizar o Repositório

Se você ainda não clonou o repositório na sua máquina:
```bash
git clone https://github.com/NexusBeesCaatinga/Site-Code-Nexus-Impact.git
cd Site-Code-Nexus-Impact
```

Se já tiver clonado, garanta que sua branch `main` está atualizada antes de iniciar qualquer trabalho:
```bash
# 1. Troca para a branch principal
git checkout main

# 2. Puxa as últimas atualizações do GitHub
git pull origin main
```

---

### 2. Criar uma Nova Branch

> ⚠️ **Regra de Ouro**: Nunca faça alterações diretamente na branch `main`. Crie sempre uma branch específica para sua tarefa!

```bash
# Cria e entra na nova branch
git checkout -b feature/minha-nova-funcionalidade

# Exemplo de correção:
# git checkout -b fix/ajuste-no-menu
```

---

### 3. Fazer Alterações e Commits

Após editar o código no seu editor:

```bash
# 1. Veja quais arquivos foram modificados
git status

# 2. Adicione os arquivos alterados para o stage
git add .
# Ou adicione um arquivo específico: git add index.html

# 3. Crie o commit com uma mensagem clara e descritiva
git commit -m "feat: adiciona secao de depoimentos no index"
```

---

### 4. Enviar para o GitHub (Push)

Envie a sua branch criada para o repositório remoto:

```bash
git push -u origin feature/minha-nova-funcionalidade
```
*(Nos próximos pushes da mesma branch, basta executar apenas `git push`).*

---

## 🔀 Como Criar um Pull Request (PR)

Depois de enviar sua branch (`git push`), crie o Pull Request para mesclar o código na branch principal (`main`):

1. Acesse o repositório no GitHub: [Site-Code-Nexus-Impact](https://github.com/NexusBeesCaatinga/Site-Code-Nexus-Impact).
2. O GitHub exibirá um aviso amarelo no topo com a sua branch recém-enviada e um botão verde: **"Compare & pull request"**. Clique nele.
3. **Preencha as informações do PR**:
   - **Base**: `main` ← **Compare**: `feature/minha-nova-funcionalidade`.
   - **Título**: Resumo claro do que foi feito (ex: `feat: Adiciona formulário de contato`).
   - **Descrição**: Detalhe o que mudou, como testar e adicione prints caso envolva mudanças visuais.
4. Clique em **"Create pull request"**.
5. Aguarde a revisão de outros membros do time ou aprovação.

### Se precisar fazer ajustes após abrir o PR:
Não precisa abrir outro PR! Basta fazer as correções no seu código local na mesma branch e rodar:
```bash
git add .
git commit -m "fix: ajusta espacamento no botao"
git push
```
O Pull Request será atualizado automaticamente com os novos commits.

### Após o PR ser aprovado e mesclado (Merge):
Volte para o terminal local para sincronizar sua máquina:
```bash
# 1. Volte para a main
git checkout main

# 2. Baixe a main atualizada com o seu PR mesclado
git pull origin main

# 3. (Opcional) Delete a branch local que já foi mesclada
git branch -d feature/minha-nova-funcionalidade
```

---

## 🏷️ Boas Práticas de Commits & Branches

### Padrão de Nomenclatura de Branches:
- `feature/nome-da-funcionalidade`: Para novas telas, componentes ou recursos.
- `fix/nome-da-correcao`: Para correção de bugs e erros visuais.
- `docs/nome-da-documentacao`: Para atualizações em documentação e README.
- `refactor/nome-da-melhoria`: Para refatoração e limpeza de código sem alterar comportamento.

### Padrão de Mensagens de Commit (Conventional Commits):
| Tipo | Descrição | Exemplo |
| :--- | :--- | :--- |
| `feat:` | Nova funcionalidade ou componente | `git commit -m "feat: implementa tema escuro"` |
| `fix:` | Correção de bug ou layout quebrado | `git commit -m "fix: corrige alinhamento do rodape"` |
| `docs:` | Mudanças na documentação ou comentários | `git commit -m "docs: atualiza instrucoes do manual"` |
| `style:` | Formatação, espaçamento ou ajustes de CSS | `git commit -m "style: ajusta cores dos botoes"` |
| `refactor:` | Mudança no código que não altera a funcionalidade | `git commit -m "refactor: simplifica funcao de toggle"` |

---

## 🛠️ Comandos Git Úteis de Emergência

| Situação | Comando |
| :--- | :--- |
| **Ver o status atual dos arquivos** | `git status` |
| **Ver o que mudou nos arquivos (diff)** | `git diff` |
| **Descartar alterações não salvas de um arquivo** | `git restore index.html` |
| **Descartar todas as alterações não salvas** | `git restore .` |
| **Ver histórico simplificado de commits** | `git log --oneline -n 10` |
| **Listar todas as branches locais** | `git branch` |
| **Trocar para uma branch existente** | `git checkout nome-da-branch` |
| **Desfazer o último commit (mantendo as alterações nos arquivos)** | `git reset --soft HEAD~1` |

---

Feito com 💚 pela equipe **Code Nexus Impact**.
