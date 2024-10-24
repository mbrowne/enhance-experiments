import { DemoCompositionComponentCustomElement } from '../custom-elements/demo-composition-component'
import { ButtonCustomElement } from '../custom-elements/button'
import { HelloWorldCustomElement } from '../custom-elements/hello-world'
import enhance from '@enhance/ssr'

const html = enhance({
  bodyContent: true,
  elements: {
    'demo-composition-component': DemoCompositionComponentCustomElement,
    'hello-world': HelloWorldCustomElement,
    'library-button': ButtonCustomElement
  }
})

export function DemoCompositionComponent() {
    const elHtml = html`<demo-composition-component></demo-composition-component>`

    return <span dangerouslySetInnerHTML={{ __html: elHtml }}></span>
}
