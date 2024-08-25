import { usePocketbase } from "@/composables/Pocketbase";

export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = usePocketbase().authStore.isValid
    if (!isLoggedIn && !process.server) return navigateTo("/auth/login");
});