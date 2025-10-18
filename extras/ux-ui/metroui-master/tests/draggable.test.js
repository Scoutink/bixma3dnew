
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("draggable.html tests", () => {
    it("draggable.html", async () => {
        await B.visit(`${getFileUrl(`./examples/draggable.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
