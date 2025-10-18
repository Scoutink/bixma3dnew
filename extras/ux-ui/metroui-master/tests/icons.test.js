
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("icons.html tests", () => {
    it("icons.html", async () => {
        await B.visit(`${getFileUrl(`./examples/icons.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
