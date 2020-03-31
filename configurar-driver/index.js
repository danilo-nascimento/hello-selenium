const path = require("path");
const { Builder } = require("selenium-webdriver")
const firefox = require("selenium-webdriver/firefox")
const options = new firefox.Options();
const proxy = require("selenium-webdriver/proxy");
const foldersDownload = {
    askToUser: 0,
    defaultDirectory: 1,
    customFolder: 2
}
const proxyServer = "170.81.232.9:55302"; //https://free-proxy-list.net/

options.setPreference("browser.download.dir", "C:\\Users\\danil\\Desktop\\estudos\\hello-world-selenium\\Downloads")
options.setPreference("browser.download.folderList", foldersDownload.customFolder)
options.setPreference("browser.helpersApps.neverAsk.saveToDisk", "application/x-csv")
options.setProfile(path.resolve(__dirname, 'firefox-selenium-profile'));


const driver = new Builder()
    .forBrowser("firefox")
    .setFirefoxOptions(options)
    .setProxy(proxy.manual({
        http: proxyServer,
        https: proxyServer
    }))
    .build()

driver.get("https://whatismyipaddress.com/")