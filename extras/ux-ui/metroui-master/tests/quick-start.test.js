
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("quick-start.html tests", () => {
    it("quick-start.html", async () => {
        await B.visit(`${getFileUrl(`./examples/quick-start.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
