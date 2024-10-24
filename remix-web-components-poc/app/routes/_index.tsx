import React from 'react'
import { Button, HelloWorld, DemoCompositionComponent } from '~/components'

export default function WebComponentsPOC() {
    const [addHelloWorldClicked, setAddHelloWorldClicked] =
        React.useState(false)
    const [addDemoCompositionClicked, setAddDemoCompositionClicked] =
        React.useState(false)

    function handleAddHello() {
        setAddHelloWorldClicked(true)
    }

    function handleAddDemoComposition() {
        setAddDemoCompositionClicked(true)
    }

    return (
        <div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `hello-world { color: darkgreen; }`,
                }}
            />
            <HelloWorld />
            <p className="my-2">
                <Button onClick={handleAddHello}>
                    Add another Hello World
                </Button>
            </p>
            <div>{addHelloWorldClicked && <HelloWorld />}</div>
            <p>
                Button with HelloWorld inside:
            </p>
            <div>
                <DemoCompositionComponent />
            </div>

            <p className="my-2">
                <Button onClick={handleAddDemoComposition}>
                    Add another DemoCompositionComponent
                </Button>
            </p>
            <div>{addDemoCompositionClicked && <DemoCompositionComponent />}</div>
        </div>
    )
}
