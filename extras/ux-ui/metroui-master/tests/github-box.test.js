
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("github-box.html tests", () => {
    it("github-box.html", async () => {
        await B.visit(`${getFileUrl(`./examples/github-box.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
