import { HelloWorldCustomElement } from '../custom-elements/hello-world'
import enhance from '@enhance/ssr'

const html = enhance({
  bodyContent: true,
  elements: {
    'hello-world': HelloWorldCustomElement
  }
})

export function HelloWorld() {
    const elHtml = HelloWorldCustomElement({ html })

    return <hello-world dangerouslySetInnerHTML={{ __html: elHtml }}></hello-world>
}
