
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("h-menu.html tests", () => {
    it("h-menu.html", async () => {
        await B.visit(`${getFileUrl(`./examples/h-menu.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
