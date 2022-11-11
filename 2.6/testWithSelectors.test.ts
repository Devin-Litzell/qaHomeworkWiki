import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.name("inputField") //fill in the blank
    const mkeInput: By = By.name("inputField") //fill in the blank
    const oaiInput: By = By.name("inputfield") //fill in the blank
    const nameInput: By = By.name("inputField") //fill in the blank
    const clrBtn: By = By.id("clearButton") //fill in blank 
    const submitBtn: By = By.id("saveButton") //fill in blank
    const errorMsg: By = By.id("errorList") // fill in blank 

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("DUI")
        await driver.findElement(mkeInput).sendKeys("Utah")
        await driver.findElement(oaiInput).sendKeys("Seven")
        await driver.findElement(nameInput).sendKeys("George Lopez")
        await driver.findElement(submitBtn).click()
        expect(errorMsg).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    });
});