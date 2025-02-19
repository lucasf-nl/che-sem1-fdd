<script>
    import clsx from "clsx";
    let { type, id, name, required, placeholder, cclass, value = $bindable() } = $props();
</script>

<div class={clsx("flex flex-col gap-1 w-full", cclass)}>
    <label class="text-sm" for={id}>{name}</label>
    <input class="w-full border border-solid" type={type} id={id} name={name} required={required} placeholder={placeholder} bind:value />
</div>
