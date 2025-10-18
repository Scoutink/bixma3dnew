
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("storage.html tests", () => {
    it("storage.html", async () => {
        await B.visit(`${getFileUrl(`./examples/storage.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
