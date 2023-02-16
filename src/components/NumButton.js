import { useRef } from "react"

const NumButton = (props) => {
    const numRef = useRef()
    return (
        <button ref={numRef} onClick={props.addDigit} className='btn btn-primary'>{props.value}</button>
    )
}

export default NumButton