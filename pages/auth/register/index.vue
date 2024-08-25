<script lang="ts" setup>
import Joi from "joi";
import type { FormSubmitEvent } from "#ui/types";

const pocketbase = usePocketbase();
const toast = useToast();

const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(8).required(),
    confirmation: Joi.string().min(8).required()
});

const state = reactive({
    username: undefined,
    password: undefined,
    confirmation: undefined
});

const loading = ref(false);

const handleSubmit = async ({ data }: FormSubmitEvent<any>) => {
    const { username, password, confirmation } = data
    loading.value = true
    await pocketbase.collection("users").create({ username, password, passwordConfirm: confirmation })
        .then(() => {
            loading.value = false
            toast.add({ title: "Success", description: "Successfully created!", timeout: 2500 });
            navigateTo("/auth/login");
        })
        .catch(() => {
            loading.value = false
            toast.add({ title: "Error", description: "Verify entered values!", timeout: 2500 });
        });
}
</script>

<template>
    <Head>
        <Title>Register</Title>
    </Head>
    <div class="flex flex-col justify-center items-center gap-4 h-screen">
        <p class="text-2xl font-bold uppercase">Register</p>
        <UForm :schema="schema" :state="state" class="w-full md:w-80 flex flex-col gap-2 px-4" @submit="handleSubmit">
            <UFormGroup label="Username" name="username" required>
                <UInput placeholder="Username" icon="i-heroicons-user-solid" size="lg" v-model="state.username" />
            </UFormGroup>
            <UFormGroup label="Password" name="password" required>
                <UInput type="password" placeholder="•••••••••••" icon="i-heroicons-key-solid" size="lg"
                    v-model="state.password" />
            </UFormGroup>
            <UFormGroup label="Confirm Password" name="confirmation" required>
                <UInput type="password" placeholder="•••••••••••" icon="i-heroicons-key-solid" size="lg"
                    v-model="state.confirmation" />
            </UFormGroup>
            <UButton type="submit" variant="soft" size="lg" block :loading="loading">
                {{ loading ? "Processing" : "Register" }}</UButton>
        </UForm>
        <div class="flex items-center">
            <p class="text-base font-normal">Already have an account?</p>
            <UButton to="/auth/login" variant="link">Login</UButton>
        </div>
    </div>
</template>