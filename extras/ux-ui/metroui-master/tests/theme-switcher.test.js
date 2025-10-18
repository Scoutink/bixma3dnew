
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("theme-switcher.html tests", () => {
    it("theme-switcher.html", async () => {
        await B.visit(`${getFileUrl(`./examples/theme-switcher.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
