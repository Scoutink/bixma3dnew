
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("double-slider.html tests", () => {
    it("double-slider.html", async () => {
        await B.visit(`${getFileUrl(`./examples/double-slider.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
