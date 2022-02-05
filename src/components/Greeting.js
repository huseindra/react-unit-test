import { useState } from "react"
import Output from "./Output"

const Greeting = () => {
    const [changeText, setChangeText] = useState(false)

    const submitChangeHandler = () => {
        setChangeText(true)
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!changeText && <Output>It will be going long night.</Output>}
            {changeText && <Output>Changed!</Output>}
            <button onClick={submitChangeHandler}>Changed Text!</button>
        </div>
    )
}

export default Greeting