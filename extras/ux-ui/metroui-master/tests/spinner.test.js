
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("spinner.html tests", () => {
    it("spinner.html", async () => {
        await B.visit(`${getFileUrl(`./examples/spinner.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
