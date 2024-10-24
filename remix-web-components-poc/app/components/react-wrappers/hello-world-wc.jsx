import React from "react"
import { HelloWorldWebComponent } from "../custom-elements/hello-world-web-component"
import enhance from '@enhance/ssr'

const html = enhance({
    bodyContent: true,
    elements: {
        'hello-world-web-component': HelloWorldWebComponent.prototype.render
    }
})

let customElementDefined = false

export function HelloWorldWC() {
    const elHtml = html`<hello-world-web-component></hello-world-web-component>`

    React.useEffect(() => {
        if (!customElementDefined) {
            customElements.define('hello-world-web-component', HelloWorldWebComponent)
            customElementDefined = true
        }
    }, [])
    
    return (
        <span dangerouslySetInnerHTML={{ __html: elHtml }} />
    )
}