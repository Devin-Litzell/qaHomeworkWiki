import { googlePage } from "./pageObject";
import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
} from "selenium-webdriver";
const chromdriver = require("chromedriver");
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

const google = new googlePage(driver, "https://www.google.com")

test ("go a google search", async () =>{
    await google.navigate();
    await google.doSearch('legos');
    await google.getResults
});

afterAll(async () =>{
    await driver.quit();
})