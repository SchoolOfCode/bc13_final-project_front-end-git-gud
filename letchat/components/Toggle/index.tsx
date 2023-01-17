type ToggleProps = {
    completed : boolean,
    handleClick : React.MouseEventHandler<HTMLInputElement>,
}



function Toggle ({completed, handleClick} : ToggleProps) {

    return (
    <div className="flex flex-col">
        <div className="form-control w-52">
            <label className="cursor-pointer label">
            <span className="label-text">Completed</span> 
            <input type="checkbox" className="toggle toggle-primary" {...completed ? {checked: true} : {checked: false}} onClick={handleClick}/>
            </label>
        </div>
    </div>
    )
}

export default Toggle;