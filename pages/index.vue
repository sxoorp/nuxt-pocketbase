<template>
    <Head>
        <Title>Nuxt x Pocketbase</Title>
    </Head>
    <div class="flex flex-col justify-center items-center gap-4 h-screen">
        <p class="text-2xl font-bold uppercase">Hey!</p>
        <p class="text-base font-normal">Get Started ↓</p>
        <div class="flex items-center gap-2">
            <UButton to="/auth/register">Register</UButton>
            <p class="text-base font-normal">OR</p>
            <UButton to="/auth/login">Login</UButton>
        </div>
    </div>
</template>