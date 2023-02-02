 const ItemListContainers = ( { usuario, apellido, edad } ) => {

    /* const { usuario, apellido, edad } = props */

    return (

        <div style={{
            border: "1px solid white",
            width: "500px"

        }}>
            <h2> Hola {usuario} {apellido} </h2>
            <h3> Tenes {edad} años! </h3>
        </div>
    )
 }

 export default ItemListContainers