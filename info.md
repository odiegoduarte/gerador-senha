<br>

<p align="center">
  <img width="700" height="" src="readme-assets/geradordesenha.png">
</p>

<br><br>

<h2 align="center">Repositório Arquivado.</h2>

<br><br>

#### Aquivos e pastas contidos no repositorio

Nome pasta e aquivos | Descrição
:------ | :------
readme-assets | Imagens do arquivo README md
npm-start.sh  | Simples shell que roda o comando start pra testar app.
npm-run-make.sh | Simples shell que roda o comando run make do electronforge
source-code-app | Codico fonte da aplicação
Template-Logo-Editavel-GIMP.xcf | Arquivo editavel GIMP logo do app.

<br>

### Iniciando novo projeto com Electron Forge

~~~
npx create-electron-app nome-app
~~~

### Estrutura do Electron Forge

```text

nome-app/
├── node_modules
├──src
│  ├── index.css
│  ├── index.html
│  └── index.js
├──.git
├──package.json
├──package-lock.json
└──.gitignore

```

### Comando para rodar app

```text
npm start
```

### Comando para compirar app

```text
npm run make
```

### Adicionando icone da aplicação no linux.
Dentro do arquivo "package.json" adicionar a linha 
```text
"icon": "./src/icon.png"
```

Exemplo:

~~~javascript
 {
          "name": "@electron-forge/maker-deb",
          "config": {
            "icon": "./src/icon.png"
          }
        },
        {
          "name": "@electron-forge/maker-rpm",
          "config": {
            "icon": "./src/icon.png"
          }
~~~

<br><br>

### Referências


- [Node.JS](https://nodejs.org/en/docs/)
- [Electron Wiki](https://www.electronjs.org/docs)
- [Electron Quick Start](https://www.electronjs.org/docs/tutorial/quick-start)
- [Electron Forge](https://github.com/electron-userland/electron-forge)
- [Forge Config](https://www.electronforge.io/configuration)
- [Electron Forge Building](https://www.electronforge.io/)
- [Forge Importar Projeto Existente](https://www.electronforge.io/import-existing-project)
- [Electron Builder](https://github.com/electron-userland/electron-builder)
- [Electron Packager](https://github.com/electron/electron-packager)

<br><br>