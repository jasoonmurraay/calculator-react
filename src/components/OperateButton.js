const OperateButton = (props) => {
    return (
        <button onClick={props.operateHandler} className='btn btn-secondary'>{props.value}</button>
    )
}

export default OperateButton