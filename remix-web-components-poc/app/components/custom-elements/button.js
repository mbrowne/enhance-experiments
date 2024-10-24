export function ButtonCustomElement({ html }) {
    return html`
        <button class="rounded-sm bg-black text-white border px-4 py-2 text-center text-base focus:outline-none focus:ring-2 focus:ring-offset-2">
            <slot></slot>
        </button>`
}
