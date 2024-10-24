import React from 'react'
import { ButtonCustomElement } from '../custom-elements/button'
import enhance from '@enhance/ssr'

const html = enhance({
  bodyContent: true,
  elements: {
    'library-button': ButtonCustomElement
  }
})

export function Button({ children, onClick }) {
    const childrenHtmlString = typeof children === 'string' ? children: ''
    const elHtml = html`<library-button>${childrenHtmlString}</library-button>`
    const containerRef = React.useRef(null)

    React.useEffect(() => {
        const container = containerRef.current
        const button = container.firstChild
        button.addEventListener('click', onClick)
        return () => {
          button.removeEventListener('click', onClick)
        }
    }, [onClick])

    return <span ref={containerRef} dangerouslySetInnerHTML={{ __html: elHtml }}></span>
}
