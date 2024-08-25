export default defineNuxtConfig({
    modules: ["@nuxt/ui", "@nuxt/fonts"],
    devtools: { enabled: false },
    runtimeConfig: { public: { pocketbase: process.env.POCKETBASE_URL } }
});