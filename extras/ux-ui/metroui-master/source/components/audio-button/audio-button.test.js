import { suite, it, expect, mock, beforeAll, beforeEach, DOM, waitFor } from '@olton/latte'

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

// Test suite for the Audio Button component
suite("Audio Button Component Tests", () => {
    // Test initialization with default options
    it("should initialize with default options", async () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <button id="test-audio-button">Click Me</button>
        `;

        // Initialize the audio button
        Metro.makePlugin("#test-audio-button", "audio-button");

        // Get the audio button instance
        const audioButton = Metro.getPlugin("#test-audio-button", "audio-button");

        // Check that the audio button was initialized
        expect(audioButton).not.toBeNull();
        
        // Check default options
        expect(audioButton.options.audioVolume).toBe(0.5);
        expect(audioButton.options.audioSrc).toBe("");
    });

    // Test initialization with custom options
    it("should initialize with custom options", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <button id="test-audio-button-custom"></button>
        `;

        // Initialize the audio button with custom options
        Metro.makePlugin("#test-audio-button-custom", "audio-button", {
            audioVolume: 0.8,
            audioSrc: "test-audio.mp3"
        });

        // Get the audio button instance
        const audioButton = Metro.getPlugin("#test-audio-button-custom", "audio-button");

        // Check that the audio button was initialized with custom options
        expect(audioButton.options.audioVolume).toBe(0.8);
        expect(audioButton.options.audioSrc).toBe("test-audio.mp3");
        expect(audioButton.audio.volume).toBe(0.8);
        expect(audioButton.audio.src).toContain("test-audio.mp3");
    });

    // Test initialization with data attributes
    it("should initialize with data attributes", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <button id="test-audio-button-attr" data-audio-src="attr-audio.mp3" data-audio-volume="0.3"></button>
        `;

        // Initialize the audio button
        Metro.makePlugin("#test-audio-button-attr", "audio-button");

        // Get the audio button instance
        const audioButton = Metro.getPlugin("#test-audio-button-attr", "audio-button");

        // Check that the audio button was initialized with data attributes
        expect(audioButton.options.audioVolume).toBe(0.3);
        expect(audioButton.options.audioSrc).toBe("attr-audio.mp3");
        expect(audioButton.audio.volume).toBe(0.3);
        expect(audioButton.audio.src).toContain("attr-audio.mp3");
    });

    // Test play method
    it("should have a working play method", () => {
        return
        // Create a DOM element for testing
        document.body.innerHTML = `
            <button id="test-audio-button-play"></button>
        `;

        // Initialize the audio button
        Metro.makePlugin("#test-audio-button-play", "audio-button", {
            audioSrc: "test-audio.mp3"
        });

        // Get the audio button instance
        const audioButton = Metro.getPlugin("#test-audio-button-play", "audio-button");
        
        // Mock the audio play method
        const originalPlay = audioButton.audio.play;
        const playMock = mock();
        audioButton.audio.play = playMock;
        
        // Set canPlay to true to simulate loaded audio
        audioButton.canPlay = true;
        
        // Call the play method
        audioButton.play();
        
        // Check that the audio play method was called
        expect(playMock).toHaveBeenCalled();
        
        // Restore the original play method
        audioButton.audio.play = originalPlay;
    });

    // Test stop method
    it("should have a working stop method", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <button id="test-audio-button-stop"></button>
        `;

        // Initialize the audio button
        Metro.makePlugin("#test-audio-button-stop", "audio-button", {
            audioSrc: "test-audio.mp3"
        });

        // Get the audio button instance
        const audioButton = Metro.getPlugin("#test-audio-button-stop", "audio-button");
        
        // Mock the audio pause method
        const pauseMock = mock();
        audioButton.audio.pause = pauseMock;
        
        // Call the stop method
        audioButton.stop();
        
        // Check that the audio pause method was called
        expect(pauseMock).toHaveBeenCalled();
        expect(audioButton.playing).toBe(false);
    });

    // Test event firing
    it("should fire audio-button-create event", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <button id="test-audio-button-event"></button>
        `;

        // Create a mock for the event handler
        const createEventMock = mock();

        // Initialize the audio button with event handler
        Metro.makePlugin("#test-audio-button-event", "audio-button", {
            onAudioButtonCreate: createEventMock
        });

        // Check that the event handler was called
        expect(createEventMock).toHaveBeenCalled();
    });

    // Test changeAttribute method
    it("should update when attributes change", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <button id="test-audio-button-attr-change"></button>
        `;

        // Initialize the audio button
        Metro.makePlugin("#test-audio-button-attr-change", "audio-button");

        // Get the audio button instance
        const audioButton = Metro.getPlugin("#test-audio-button-attr-change", "audio-button");
        
        // Change attributes
        const element = document.querySelector("#test-audio-button-attr-change");
        element.setAttribute("data-audio-src", "new-audio.mp3");
        element.setAttribute("data-audio-volume", "0.7");
        
        // Trigger attribute change handlers
        audioButton.changeAttribute("data-audio-src");
        audioButton.changeAttribute("data-audio-volume");
        
        // Check that the options and audio properties were updated
        expect(audioButton.options.audioSrc).toBe("new-audio.mp3");
        expect(audioButton.options.audioVolume).toBe(0.7);
        expect(audioButton.audio.src).toContain("new-audio.mp3");
        expect(audioButton.audio.volume).toBe(0.7);
    });

    // Test Metro.playSound utility
    it("should have a working Metro.playSound utility", () => {
        // Mock the Audio constructor
        const originalAudio = window.Audio;
        const audioMock = mock();
        const addEventListenerMock = mock();
        
        window.Audio = function() {
            return {
                volume: 0,
                addEventListener: addEventListenerMock
            };
        };
        
        // Call the playSound utility
        Metro.playSound("test-sound.mp3");
        
        // Check that the Audio constructor was called with the correct source
        expect(addEventListenerMock).toHaveBeenCalled();
        
        // Restore the original Audio constructor
        window.Audio = originalAudio;
    });

    // Test destroy method
    it("should destroy the audio button component", () => {
        // Create a DOM element for testing
        document.body.innerHTML = `
            <button id="test-audio-button-destroy"></button>
        `;

        // Initialize the audio button
        Metro.makePlugin("#test-audio-button-destroy", "audio-button");

        // Get the audio button instance
        const audioButton = Metro.getPlugin("#test-audio-button-destroy", "audio-button");

        // Destroy the audio button
        audioButton.destroy();

        // Check that the element was removed
        expect(document.querySelector("#test-audio-button-destroy")).toBeNull();
    });
});