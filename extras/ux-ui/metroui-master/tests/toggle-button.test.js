
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("toggle-button.html tests", () => {
    it("toggle-button.html", async () => {
        await B.visit(`${getFileUrl(`./examples/toggle-button.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
