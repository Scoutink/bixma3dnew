((Metro, $) => {
    // biome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
    "use strict";
    let ButtonGroupDefaultConfig = {
        buttongroupDeferred: 0,
        target: "button",
        clsActive: "active",
        requiredButton: false,
        mode: Metro.groupMode.ONE,
        onButtonClick: Metro.noop,
        onGroupCreate: Metro.noop,
    };

    Metro.buttonGroupSetup = (options) => {
        ButtonGroupDefaultConfig = $.extend({}, ButtonGroupDefaultConfig, options);
    };

    if (typeof globalThis.metroButtonGroupSetup !== "undefined") {
        Metro.buttonGroupSetup(globalThis.metroButtonGroupSetup);
    }

    Metro.Component("button-group", {
        init: function (options, elem) {
            this._super(elem, options, ButtonGroupDefaultConfig, {
                active: null,
                id: null,
            });

            return this;
        },

        _create: function () {
            const element = this.element;

            this.id = Hooks.useId(this.elem);

            this._createStruct();
            this._createEvents();

            this._fireEvent("group-create", {
                element: element,
            });
        },

        _createStruct: function () {
            const that = this;
            const element = this.element;
            const o = this.options;

            element.addClass("button-group");

            const buttons = element.find(o.target);
            const buttons_active = element.find(o.clsActive);

            if (o.requiredButton === true && buttons_active.length === 0) {
                $(buttons[0]).addClass(o.clsActive).addClass("js-active");
            }

            if (o.mode === Metro.groupMode.ONE && buttons_active.length > 1) {
                buttons_active.removeClass("js-active").removeClass(o.clsActive);
                $(buttons_active[0]).addClass("js-active").addClass(o.clsActive);
            }

            element.find(".js-active").each(function () {
                that._fireEvent("button-click", {
                    button: this,
                });
            });
        },

        _createEvents: function () {
            const that = this;
            const element = this.element;
            const o = this.options;

            element.find(o.target).on(Metro.events.click, function () {
                const el = $(this);

                that._fireEvent("button-click", {
                    button: this,
                });

                if (o.mode === Metro.groupMode.ONE && el.hasClass("js-active")) {
                    return;
                }

                if (o.mode === Metro.groupMode.ONE) {
                    element.find(o.target).removeClass(o.clsActive).removeClass("js-active");
                    el.addClass("js-active").addClass(o.clsActive);
                } else {
                    el.toggleClass("js-active").toggleClass(o.clsActive);
                }
            });
        },

        changeAttribute: (attr, val) => {},

        destroy: function () {
            const element = this.element;
            const o = this.options;
            element.off(Metro.events.click, o.targets);
            element.remove();
        },
    });
})(Metro, Dom);
