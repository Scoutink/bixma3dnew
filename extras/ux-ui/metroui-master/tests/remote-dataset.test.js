
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("remote-dataset.html tests", () => {
    it("remote-dataset.html", async () => {
        await B.visit(`${getFileUrl(`./examples/remote-dataset.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
