
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("bar3d.html tests", () => {
    it("bar3d.html", async () => {
        await B.visit(`${getFileUrl(`./examples/bar3d.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
