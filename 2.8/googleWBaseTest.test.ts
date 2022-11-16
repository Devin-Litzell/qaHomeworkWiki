import {Google} from './googlePageWBase'
const google = new Google()

test('do a search', async () => {
    await google.navigate()
    await google.search('Black Walnut Ice Cream')
    let text = await google.getResults()
    expect(text).toContain('Black Walnut Ice Cream')
    await google.driver.quit()
})