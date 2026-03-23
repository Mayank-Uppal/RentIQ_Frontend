interface Prop{
    message:string,
    css:string
}

function Alert({message,css}:Prop){
    return(
        <>
        <div role="alert" className={css}>
        <span className="text-white">{message}</span>
        </div>
        </>
    )
}
export default Alert;