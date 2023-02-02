const Navbar = ( ) => {

    return (
        <ul style={{
            display: "flex", 
            width: "50%", 
            alignItems: "flex-end", 
            justifyContent: "space-between",
            listStyle: "none"/* ,
            backgroundColor: "red" */
        }} >
            <li>Quienes somos</li>
            <li>Cartas</li>
            <li>Juguetes</li>
            <li>Contacto</li>
        </ul>
    )
}

export default Navbar