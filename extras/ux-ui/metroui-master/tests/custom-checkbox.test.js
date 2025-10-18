
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("custom-checkbox.html tests", () => {
    it("custom-checkbox.html", async () => {
        await B.visit(`${getFileUrl(`./examples/custom-checkbox.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
