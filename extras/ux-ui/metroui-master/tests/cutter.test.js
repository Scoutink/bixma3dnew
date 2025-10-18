
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("cutter.html tests", () => {
    it("cutter.html", async () => {
        await B.visit(`${getFileUrl(`./examples/cutter.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
