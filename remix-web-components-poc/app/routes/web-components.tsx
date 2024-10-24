import React from 'react'
import { Button, HelloWorldWC } from '~/components'

export default function WebComponentsPOC() {
    const [addHelloWorldClicked, setAddHelloWorldClicked] =
        React.useState(false)

    function handleAddHello() {
        setAddHelloWorldClicked(true)
    }

    return (
        <div>
            <HelloWorldWC />
            
            <p className="my-2">
                <Button onClick={handleAddHello}>
                    Add another Hello World
                </Button>
            </p>

            <div>{addHelloWorldClicked && <HelloWorldWC />}</div>
        </div>
    )
}
