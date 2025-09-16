

export default function EventObject(){
    function byprint(event) {
   event.preventDefault();
    console.log('Form was Submitted')
    
}
    return(

        <form onSubmit={byprint}>
            <input type="text" placeholder="Enter" />
            <button>Submit</button>
        </form>
    )
}
