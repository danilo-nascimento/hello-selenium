const {Builder} = require("selenium-webdriver")
const firefox = require("selenium-webdriver/firefox")
const options = new firefox.Options();

const foldersDownload = {
    askToUser: 0,
    defaultDirectory: 1,
    customFolder: 2
}

options.setPreference("browser.download.dir", "C:\\Users\\danil\\Desktop\\estudos\\hello-world-selenium\\Downloads")
options.setPreference("browser.download.folderList", foldersDownload.customFolder); 
options.setPreference("browser.helpersApps.neverAsk.saveToDisk", "application/x-csv")

const driver = new Builder()
            .forBrowser("firefox")
            .setFirefoxOptions(options)
            .build()

driver.get("https://google.com")