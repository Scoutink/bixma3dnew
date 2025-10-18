
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("hotkey.html tests", () => {
    it("hotkey.html", async () => {
        await B.visit(`${getFileUrl(`./examples/hotkey.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
