let activeVueTools = async () => {
    // Find Vue 2
    let app = Array.from(document.querySelectorAll("*")).find((e) => e.__vue__).__vue__;

    if (app) {
        // Enable VueDevTools config
        const devtools = window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        devtools.enabled = true;

        // Enable VueDevTools
        let VueApp = Object.getPrototypeOf(app).constructor;

        while (VueApp.super) {
            VueApp = VueApp.super;
        }

        VueApp.config.devtools = true;

        // Restart Extension
        devtools.emit("init", VueApp);

        return "Vue 2 DevTool is Ready!";
    }

    // Find Vue 3
    if (app === undefined || app === null) {
        app = Array.from(document.querySelectorAll("*")).find((e) => e.__vue_app__).__vue_app__;

        if (app === undefined || app === null) return "Vue not found.";
    }

    //  Initialize and enable VueDevTools config
    const version = app.version;
    const devtools = window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    devtools.enabled = true;

    // Restart Extension
    devtools.emit("app:init", app, version, {});

    return "Vue 3 DevTool is Ready!";
};

setTimeout(activeVueTools, 500);