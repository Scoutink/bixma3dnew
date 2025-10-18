
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("form-elements.html tests", () => {
    it("form-elements.html", async () => {
        await B.visit(`${getFileUrl(`./examples/form-elements.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
