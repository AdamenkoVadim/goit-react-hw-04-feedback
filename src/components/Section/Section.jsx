

export const Section =({title,children})=>{
    return(
        <section style={{margin:100}}>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    )
}