

export const GrifItems = ({id, title, url})=>{
    return (
        <div className="card" key={id}>
            <h1>{title}</h1> 
            <img src={url} alt={title} />
        </div>                        
    )
}