# Proyecto base SerenityJs-WebDriverIO-Screenplay

### Usage

Este repositorio es un template para iniciar un proyecto usando los frameworks SerenityJS, Cucumber, WebDriverIO con el patrón de diseño Screenplay. [create a new GitHub repository](https://help.github.com/en/articles/creating-a-repository-from-a-template), [clone it to your computer](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository).


### Installation

Para correr el proyecto es necesario:
- Node.js, a Long-Term Support (LTS) release version 16 or later - [download](https://nodejs.org/en/)
- Java Runtime Environment (JRE) or a Java Development Kit (JDK) version 11 or later - [download](https://adoptopenjdk.net/)
- Chrome web browser - [download](https://www.google.co.uk/chrome/)


Una vez clone el código ejecute el siguiente comando en el directorio donde clonó el proyecto:
```
npm install
```

### Execution

El proyecto proporciona varios scripts configurados [NPM scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) definidos en el [`package.json`](package.json):

```
npm run serenity 
```
ejecuta la suite pruebas de ejemplo y genera el reporte en la ruta ./target/site/serenity