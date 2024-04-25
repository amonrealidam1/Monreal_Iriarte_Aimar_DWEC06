const Articulo = ({ nombreClase, src, name, categoria }) => {
    // Se crea el articulo correspondiente
    return (
        <article className={nombreClase}>
            <img src={src} alt="" className="person-img" />
            <h4>{name}</h4>
            <p className="title">{categoria}</p>
        </article>
    )
}

export default Articulo