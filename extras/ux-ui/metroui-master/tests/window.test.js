
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("window.html tests", () => {
    it("window.html", async () => {
        await B.visit(`${getFileUrl(`./examples/window.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
