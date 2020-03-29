# Hello Selenium

## 001 - Configurando o ambiente

- Procure pelo pacote Selenium Web Driver em [https://www.npmjs.com/](https://www.npmjs.com/)
- Baixe os drivers desejados. É recomendado o **geckodriver**
- Crie um diretório **seleniumWebDrivers** em C: para salvar os drivers
- Adicione o caminho do diretório ao **PATH** do Windows:![Path do Windows](/src/001.png?raw=true)
- Para confirmar que o Driver o PATH foi configurado corretamente, execute no prompt start \<driver name\>

## 002 Primeira automação Selenium

- Crie um diretório
- Inicie um projeto NPM
- Instale o pacote NPM selenium-webdriver
- Crie um arquivo index.js para configurar o teste
  
```javascript
const {Builder, By, Key} = require("selenium-webdriver")
async function example() {
    let driver = await new Builder().forBrowser("firefox").build()
    await driver.get("https://google.com")
    await driver.findElement(By.name("q")).sendKeys("Eeeita mlk", Key.RETURN);
}

example();
```
- Mais exemplos na documentação: [https://www.selenium.dev/selenium/docs/api/javascript/](https://www.selenium.dev/selenium/docs/api/javascript/)
