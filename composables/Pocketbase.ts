import PocketBase from "pocketbase";

export const usePocketbase = () => {
    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.pocketbase as string);
    return pb as PocketBase
}