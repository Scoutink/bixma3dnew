
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("resizer.html tests", () => {
    it("resizer.html", async () => {
        await B.visit(`${getFileUrl(`./examples/resizer.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
