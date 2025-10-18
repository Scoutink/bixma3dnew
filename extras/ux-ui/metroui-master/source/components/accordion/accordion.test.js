import { suite, it, expect, mock, beforeAll, DOM, waitFor, beforeEach } from '@olton/latte'

let Metro = null

beforeAll(async () => {
    const metro_js = `./lib/metro.js` 
    const metro_css = `./lib/metro.css`

    DOM.js.fromFile(metro_js)
    DOM.css.fromFile(metro_css)

    Metro = await DOM.waitForObject('Metro')
})

beforeEach(() => {
    document.body.innerHTML = '';
})

// Test suite for the Accordion component
suite("Accordion Component Tests", () => {
    // Test initialization
    it("should initialize with default options", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-accordion">
                <div class="frame">
                    <div class="heading">Header 1</div>
                    <div class="content">Content 1</div>
                </div>
                <div class="frame">
                    <div class="heading">Header 2</div>
                    <div class="content">Content 2</div>
                </div>
            </div>
        `;
        // Initialize the accordion
        Metro.makePlugin("#test-accordion", "accordion");
        
        // Get the accordion instance
        const accordion = Metro.getPlugin("#test-accordion", "accordion");
        
        // Check that the accordion was initialized
        expect(accordion).not.toBeNull();
        expect(document.querySelector("#test-accordion").classList.contains("accordion")).toBe(true);
    });

    it("should initialize with custom options", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-accordion-custom">
                <div class="frame">
                    <div class="heading">Header 1</div>
                    <div class="content">Content 1</div>
                </div>
                <div class="frame">
                    <div class="heading">Header 2</div>
                    <div class="content">Content 2</div>
                </div>
            </div>
        `;

        // Initialize the accordion with custom options
        Metro.makePlugin("#test-accordion-custom", "accordion", {
            showMarker: false,
            material: true,
            oneFrame: false
        });

        // Get the accordion element
        const accordionElement = document.querySelector("#test-accordion-custom");

        // Check that the accordion was initialized with custom options
        expect(accordionElement).hasClass("accordion")
        expect(accordionElement).not.hasClass("marker-on")
        expect(accordionElement).hasClass("material")
    });

    // Test API methods
    it("should open a frame", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-accordion-open">
                <div class="frame">
                    <div class="heading">Header 1</div>
                    <div class="content">Content 1</div>
                </div>
                <div class="frame active">
                    <div class="heading">Header 2</div>
                    <div class="content">Content 2</div>
                </div>
            </div>
        `;

        // Initialize the accordion
        Metro.makePlugin("#test-accordion-open", "accordion");

        // Get the accordion instance
        const accordion = Metro.getPlugin("#test-accordion-open", "accordion");

        // Open the first frame
        accordion.open(0);

        // Check that the frame is open
        const frame = document.querySelector("#test-accordion-open .frame:first-child");
        expect(frame).hasClass("active")
    });

    it("should close a frame", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-accordion-close">
                <div class="frame active">
                    <div class="heading">Header 1</div>
                    <div class="content">Content 1</div>
                </div>
                <div class="frame">
                    <div class="heading">Header 2</div>
                    <div class="content">Content 2</div>
                </div>
            </div>
        `;

        // Initialize the accordion
        Metro.makePlugin("#test-accordion-close", "accordion");
        
        // Get the accordion instance
        const accordion = Metro.getPlugin("#test-accordion-close", "accordion");
        // Close the first frame
        accordion.close(0);

        // Check that the frame is closed
        const frame = document.querySelector("#test-accordion-close .frame:first-child");
        expect(frame).not.hasClass("active")
    });

    it("should toggle a frame", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-accordion-toggle">
                <div class="frame">
                    <div class="heading">Header 1</div>
                    <div class="content">Content 1</div>
                </div>
                <div class="frame active">
                    <div class="heading">Header 2</div>
                    <div class="content">Content 2</div>
                </div>
            </div>
        `;

        // Initialize the accordion
        Metro.makePlugin("#test-accordion-toggle", "accordion");

        // Get the accordion instance
        const accordion = Metro.getPlugin("#test-accordion-toggle", "accordion");

        // Toggle frames
        accordion.toggle(0); // Should open
        // accordion.toggle(1); // Should close

        // Check that the frames are toggled
        const frame1 = document.querySelector("#test-accordion-toggle .frame:first-child");
        const frame2 = document.querySelector("#test-accordion-toggle .frame:nth-child(2)");
        expect(frame1.classList.contains("active")).toBe(true);
        expect(frame2.classList.contains("active")).toBe(false);
    });

    it("should get active frames", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-accordion-active">
                <div class="frame active">
                    <div class="heading">Header 1</div>
                    <div class="content">Content 1</div>
                </div>
                <div class="frame">
                    <div class="heading">Header 2</div>
                    <div class="content">Content 2</div>
                </div>
                <div class="frame active">
                    <div class="heading">Header 3</div>
                    <div class="content">Content 3</div>
                </div>
            </div>
        `;

        // Initialize the accordion with oneFrame: false to allow multiple active frames
        Metro.makePlugin("#test-accordion-active", "accordion", {
            oneFrame: false
        });
        // Get the accordion instance
        const accordion = Metro.getPlugin("#test-accordion-active", "accordion");

        // Get active frames
        const activeFrames = accordion.getActive();

        // Check that the correct frames are active
        expect(activeFrames).toBeArrayEqual([0, 2]);
    });
    
    // Test oneFrame option
    it("should allow only one frame to be open when oneFrame is true", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-accordion-one-frame">
                <div class="frame">
                    <div class="heading">Header 1</div>
                    <div class="content">Content 1</div>
                </div>
                <div class="frame">
                    <div class="heading">Header 2</div>
                    <div class="content">Content 2</div>
                </div>
                <div class="frame">
                    <div class="heading">Header 3</div>
                    <div class="content">Content 3</div>
                </div>
            </div>
        `;

        // Initialize the accordion with oneFrame: true
        Metro.makePlugin("#test-accordion-one-frame", "accordion", {
            oneFrame: true
        });

        // Get the accordion instance
        const accordion = Metro.getPlugin("#test-accordion-one-frame", "accordion");

        // Open multiple frames
        accordion.open(0);
        accordion.open(1);

        // Check that only the last opened frame is active
        const frames = document.querySelectorAll("#test-accordion-one-frame .frame");
        expect(frames[0].classList.contains("active")).toBe(false);
        expect(frames[1].classList.contains("active")).toBe(true);
        expect(frames[2].classList.contains("active")).toBe(false);
    });

    // Test events
    it("should trigger events when frames are opened and closed", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-accordion-events">
                <div class="frame">
                    <div class="heading">Header 1</div>
                    <div class="content">Content 1</div>
                </div>
                <div class="frame active">
                    <div class="heading">Header 2</div>
                    <div class="content">Content 2</div>
                </div>
            </div>
        `;

        // Create spies for the events
        const onFrameOpen = mock();
        const onFrameBeforeOpen = mock(() => true);
        const onFrameClose = mock();
        const onFrameBeforeClose = mock(() => true);

        // Initialize the accordion with event handlers
        Metro.makePlugin("#test-accordion-events", "accordion", {
            onFrameOpen,
            onFrameBeforeOpen,
            onFrameClose,
            onFrameBeforeClose
        });

        // Get the accordion instance
        const accordion = Metro.getPlugin("#test-accordion-events", "accordion");

        // Open and close frames
        accordion.open(0);
        accordion.close(1);

        // Check that the events were triggered
        expect(onFrameBeforeOpen).toHaveBeenCalled();
        expect(onFrameOpen).toHaveBeenCalled();
        expect(onFrameBeforeClose).toHaveBeenCalled();
        expect(onFrameClose).toHaveBeenCalled();
    });

    // Test event cancellation
    it("should not open a frame if onFrameBeforeOpen returns false", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-accordion-cancel">
                <div class="frame">
                    <div class="heading">Header 1</div>
                    <div class="content">Content 1</div>
                </div>
                <div class="frame">
                    <div class="heading">Header 2</div>
                    <div class="content">Content 2</div>
                </div>
            </div>
        `;

        // Initialize the accordion with an event handler that cancels opening
        Metro.makePlugin("#test-accordion-cancel", "accordion", {
            onFrameBeforeOpen: () => false
        });

        // Get the accordion instance
        const accordion = Metro.getPlugin("#test-accordion-cancel", "accordion");

        // Try to open a frame
        accordion.open(0);

        // Check that the frame was not opened
        const frame = document.querySelector("#test-accordion-cancel .frame:first-child");
        expect(frame.classList.contains("active")).toBe(false);
    });

    // // Test keyboard navigation
    // it("should support keyboard navigation", () => {
    //     // Create a DOM element for testing
    //     document.body.innerHTML = `
    //         <div id="test-accordion-keyboard">
    //             <div class="frame">
    //                 <div class="heading">Header 1</div>
    //                 <div class="content">Content 1</div>
    //             </div>
    //             <div class="frame">
    //                 <div class="heading">Header 2</div>
    //                 <div class="content">Content 2</div>
    //             </div>
    //         </div>
    //     `;
    //
    //     // Initialize the accordion
    //     Metro.makePlugin("#test-accordion-keyboard", "accordion");
    //
    //     // Get the heading elements
    //     const heading1 = document.querySelector("#test-accordion-keyboard .frame:first-child .heading");
    //     const heading2 = document.querySelector("#test-accordion-keyboard .frame:nth-child(2) .heading");
    //
    //     // Simulate Enter key press on the first heading
    //     const enterEvent = new KeyboardEvent('keydown', { keyCode: 13 });
    //     heading1.dispatchEvent(enterEvent);
    //
    //     // Check that the first frame is opened
    //     const frame1 = document.querySelector("#test-accordion-keyboard .frame:first-child");
    //     expect(frame1.classList.contains("active")).toBe(true);
    //
    //     // Simulate Space key press on the second heading
    //     const spaceEvent = new KeyboardEvent('keydown', { keyCode: 32 });
    //     heading2.dispatchEvent(spaceEvent);
    //
    //     // Check that the second frame is opened
    //     const frame2 = document.querySelector("#test-accordion-keyboard .frame:nth-child(2)");
    //     expect(frame2.classList.contains("active")).toBe(true);
    // });
});