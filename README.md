<br><br>

<p align="center">
  <img width="700" height="" src="readme-assets/geradordesenha.png">
</p>

<h2 align="center">Esse gerador de senha aleatória é meu primeiro programa feito com a framework electronjs.</h2>

<br><br>

<p align="center">
  <img width="" height="" src="readme-assets/screenshot-geradorsenha.png"></p>

<br>

Esse repositório foi criado para compartilhar o que eu aprendo estudando a framework electron, abaixo eu deixo vários links de referência que me ajudaram na criação da minha primeira aplicação.
Para fazer building da minha aplicação eu utilizei o electronforge foi o que eu me adaptei melhor mas existem outras ferramentas tais como:

- [Electron Forge](https://github.com/electron-userland/electron-forge)
- [Electron Builder](https://github.com/electron-userland/electron-builder)
- [Electron Packager](https://github.com/electron/electron-packager)


<br>

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


<br><br>