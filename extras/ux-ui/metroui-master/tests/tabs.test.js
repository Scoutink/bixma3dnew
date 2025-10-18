
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("tabs.html tests", () => {
    it("tabs.html", async () => {
        await B.visit(`${getFileUrl(`./examples/tabs.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
