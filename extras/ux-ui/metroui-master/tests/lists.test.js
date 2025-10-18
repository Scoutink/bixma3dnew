
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("lists.html tests", () => {
    it("lists.html", async () => {
        await B.visit(`${getFileUrl(`./examples/lists.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
