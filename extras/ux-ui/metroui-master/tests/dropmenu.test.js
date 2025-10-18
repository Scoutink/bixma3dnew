
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("dropmenu.html tests", () => {
    it("dropmenu.html", async () => {
        await B.visit(`${getFileUrl(`./examples/dropmenu.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
