
import {beforeAll, afterAll, describe, it, expect, delay, getFileUrl, B} from "@olton/latte";

beforeAll(async () => {
    await B.create()
})

afterAll(async () => {
    await B.bye()
})

describe("breadcrumbs.html tests", () => {
    it("breadcrumbs.html", async () => {
        await B.visit(`${getFileUrl(`./examples/breadcrumbs.html`)}`)
        expect(B.error).toBeNull(B.error)
    })
})
