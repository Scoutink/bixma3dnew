
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("marquee-sw.html tests", () => {
    it("marquee-sw.html", async () => {
        await B.visit(`${getFileUrl(`./examples/marquee-sw.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
