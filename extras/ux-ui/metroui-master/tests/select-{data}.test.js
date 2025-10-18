
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("select-{data}.html tests", () => {
    it("select-{data}.html", async () => {
        await B.visit(`${getFileUrl(`./examples/select-{data}.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
