
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("select.html tests", () => {
    it("select.html", async () => {
        await B.visit(`${getFileUrl(`./examples/select.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
