<script lang="ts" setup>
definePageMeta({ middleware: "auth" });

const pocketbase = usePocketbase();
const toast = useToast();

const handleLogout = () => {
    pocketbase.authStore.clear();
    toast.add({ title: "Goodbye", description: "Successfully logged out!", timeout: 2500 });
    navigateTo("/");
}
</script>

<template>
    <Head>
        <Title>Dashboard</Title>
    </Head>
    <div class="flex flex-col justify-center items-center gap-4 h-screen">
        <ClientOnly>
            <p class="text-2xl font-bold uppercase">Hey, {{ pocketbase.authStore.model?.username }}! </p>
        </ClientOnly>
        <UButton color="red" @click="handleLogout">Logout</UButton>
    </div>
</template>