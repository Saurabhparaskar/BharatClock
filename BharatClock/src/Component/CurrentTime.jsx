let CurrentTime=()=>{

    let time = new Date();
    return(
        <p>This is a current time : {time.toLocaleDateString() }-{""} {time.toLocaleTimeString()}</p>
    )
}

export default CurrentTime;