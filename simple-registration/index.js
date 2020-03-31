const path = require("path");
const { Builder, By } = require("selenium-webdriver")
const firefox = require("selenium-webdriver/firefox")
const options = new firefox.Options();

options.setProfile(path.resolve(__dirname, '../configurar-driver/firefox-selenium-profile'));

const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build();

async function simpleRegistration() {
    try {
        (await driver).get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        (await driver).findElement(By.name("email")).sendKeys("example@gmail.com");
        (await driver).findElement(By.id("password")).sendKeys("12345");
        (await driver).findElement(By.id("submit")).click()
    } catch (error) {
        console.error("Erro ao tentar acessar os sites", error);
    }
}

simpleRegistration();