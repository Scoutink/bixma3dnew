
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("directive.html tests", () => {
    it("directive.html", async () => {
        await B.visit(`${getFileUrl(`./examples/directive.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
