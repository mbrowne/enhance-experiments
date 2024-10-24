const BaseComponent = globalThis.HTMLElement ?? class BaseComponent {}

export class HelloWorldWebComponent extends BaseComponent {
    connectedCallback() {
        console.log('HelloWorldWebComponent: connectedCallback')
        const paragraphs = this.querySelector('p')
        console.log('paragraphs', paragraphs)
    }

    render({ html }) {
        return html`
            <p>Hello World</p>
        `
    }
}
