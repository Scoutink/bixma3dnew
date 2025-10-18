import { suite, it, expect, mock, beforeAll, DOM, waitFor, beforeEach } from '@olton/latte'

let Metro = null
let $ = null

beforeAll(async () => {
   const metro_js = `./lib/metro.js`
   const metro_css = `./lib/metro.css`

   DOM.js.fromFile(metro_js)
   DOM.css.fromFile(metro_css)

   Metro = await DOM.waitForObject('Metro')
   $ = await DOM.waitForObject('$')
})

beforeEach(() => {
   document.body.innerHTML = '';
})

// Test suite for the App Bar component
suite("App Bar Component Tests", () => {
    // Test initialization
    it("should initialize with default options", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-app-bar">
                <a href="#" class="brand">
                    <span class="caption">Brand</span>
                </a>
                <ul class="app-bar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        `;

        // Initialize the app-bar
        Metro.makePlugin("#test-app-bar", "app-bar");

        // Get the app-bar instance
        const appBar = Metro.getPlugin("#test-app-bar", "app-bar");

        // Check that the app-bar was initialized
        expect(appBar).not.toBeNull();
        expect(document.querySelector("#test-app-bar").classList.contains("app-bar")).toBe(true);
    });

    it("should initialize with custom options", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-app-bar-custom">
                <a href="#" class="brand">
                    <span class="caption">Brand</span>
                </a>
                <ul class="app-bar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        `;

        // Initialize the app-bar with custom options
        Metro.makePlugin("#test-app-bar-custom", "app-bar", {
            expand: true,
            duration: 200
        });

        // Get the app-bar element
        const appBarElement = document.querySelector("#test-app-bar-custom");

        // Check that the app-bar was initialized with custom options
        expect(appBarElement).hasClass("app-bar");
        expect(appBarElement).hasClass("app-bar-expand");
    });

    // Test API methods
    it("should open the menu", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-app-bar-open">
                <a href="#" class="brand">
                    <span class="caption">Brand</span>
                </a>
                <ul class="app-bar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        `;

        // Initialize the app-bar
        Metro.makePlugin("#test-app-bar-open", "app-bar");

        // Get the app-bar instance
        const appBar = Metro.getPlugin("#test-app-bar-open", "app-bar");

        // Open the menu
        appBar.open();

        // Wait for animation to complete
        await waitFor(150); // Wait a bit longer than the default duration (100ms)

        // Check that the menu is open
        const menu = document.querySelector("#test-app-bar-open .app-bar-menu");
        expect(menu).hasClass("opened");
        expect(menu).not.hasClass("collapsed");
    });

    it("should close the menu", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-app-bar-close">
                <a href="#" class="brand">
                    <span class="caption">Brand</span>
                </a>
                <ul class="app-bar-menu opened">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        `;

        // Initialize the app-bar
        Metro.makePlugin("#test-app-bar-close", "app-bar");

        // Get the app-bar instance
        const appBar = Metro.getPlugin("#test-app-bar-close", "app-bar");

        // Close the menu
        appBar.close();

        // Wait for animation to complete
        await waitFor(150); // Wait a bit longer than the default duration (100ms)

        // Check that the menu is closed
        const menu = document.querySelector("#test-app-bar-close .app-bar-menu");
        expect(menu).hasClass("collapsed");
        expect(menu).not.hasClass("opened");
    });

    // Test events
    it("should trigger events when menu is opened and closed", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-app-bar-events">
                <a href="#" class="brand">
                    <span class="caption">Brand</span>
                </a>
                <ul class="app-bar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        `;

        // Create spies for the events
        const onMenuOpen = mock();
        const onBeforeMenuOpen = mock(() => true);
        const onMenuClose = mock();
        const onBeforeMenuClose = mock(() => true);

        // Initialize the app-bar with event handlers
        Metro.makePlugin("#test-app-bar-events", "app-bar", {
            onMenuOpen,
            onBeforeMenuOpen,
            onMenuClose,
            onBeforeMenuClose
        });

        // Get the app-bar instance
        const appBar = Metro.getPlugin("#test-app-bar-events", "app-bar");

        // Open and close the menu
        appBar.open();
        await waitFor(150);
        appBar.close();
        await waitFor(150);

        // Check that the events were triggered
        expect(onBeforeMenuOpen).toHaveBeenCalled();
        expect(onMenuOpen).toHaveBeenCalled();
        expect(onBeforeMenuClose).toHaveBeenCalled();
        expect(onMenuClose).toHaveBeenCalled();
    });

    // Test hamburger button
    it("should toggle menu when hamburger button is clicked", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-app-bar-hamburger">
                <a href="#" class="brand">
                    <span class="caption">Brand</span>
                </a>
                <ul class="app-bar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        `;

        // Initialize the app-bar
        Metro.makePlugin("#test-app-bar-hamburger", "app-bar");

        // Get the hamburger button
        const hamburger = document.querySelector("#test-app-bar-hamburger .hamburger");

        // Click the hamburger button to open the menu
        hamburger.click();
        await waitFor(150);

        // Check that the menu is open
        let menu = document.querySelector("#test-app-bar-hamburger .app-bar-menu");
        expect(menu).hasClass("opened");
        expect(menu).not.hasClass("collapsed");

        // Click the hamburger button again to close the menu
        hamburger.click();
        await waitFor(150);

        // Check that the menu is closed
        menu = document.querySelector("#test-app-bar-hamburger .app-bar-menu");
        expect(menu).hasClass("collapsed");
        expect(menu).not.hasClass("opened");
    });

    // Test expandPoint option
    it("should expand when expandPoint media query is matched", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-app-bar-expand-point">
                <a href="#" class="brand">
                    <span class="caption">Brand</span>
                </a>
                <ul class="app-bar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        `;

        // Mock Metro.utils.mediaExist to return true
        const originalMediaExist = Metro.utils.mediaExist;
        Metro.utils.mediaExist = mock(() => true);
        Metro.utils.isValue = mock(() => true);

        try {
            // Initialize the app-bar with expandPoint
            Metro.makePlugin("#test-app-bar-expand-point", "app-bar", {
                expandPoint: "md"
            });

            // Get the app-bar element
            const appBarElement = document.querySelector("#test-app-bar-expand-point");

            // Check that the app-bar is expanded
            expect(appBarElement).hasClass("app-bar-expand");
        } finally {
            // Restore original function
            Metro.utils.mediaExist = originalMediaExist;
        }
    });

    // Test accessibility attributes
    it("should have proper accessibility attributes", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <div id="test-app-bar-a11y">
                <a href="#" class="brand">
                    <span class="caption">Brand</span>
                </a>
                <ul class="app-bar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        `;

        // Initialize the app-bar
        Metro.makePlugin("#test-app-bar-a11y", "app-bar");

        // Get elements
        const appBar = document.querySelector("#test-app-bar-a11y");
        const hamburger = appBar.querySelector(".hamburger");
        const menu = appBar.querySelector(".app-bar-menu");

        // Check accessibility attributes
        expect(appBar.getAttribute("role")).toBe("navigation");
        expect(hamburger.getAttribute("aria-label")).toBe("Toggle menu");
        expect(hamburger.getAttribute("aria-expanded")).toBe("false");
        expect(hamburger.getAttribute("aria-controls")).toBe(`app-bar-menu-${appBar.id}`);
        expect(menu.getAttribute("role")).toBe("menubar");
        expect(menu.getAttribute("id")).toBe(`app-bar-menu-${appBar.id}`);
    });
});
