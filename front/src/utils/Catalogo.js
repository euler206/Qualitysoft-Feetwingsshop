export const TraerTodos = async () => {
    try{
        const res = await fetch('http://localhost:4000/api/v1/catalogo')
        return await res.json()
    } catch(err){
        return err
    }   
}
export const sinStock = async () => {
    try{
        const res = await fetch('http://localhost:4000/api/v1/catalogo/sinStock')
        return await res.json()
    } catch(err){
        return err
    }   
}

export const traerPorId = async (id) => {
    try{
        const res = await fetch(`http://localhost:4000/api/v1/catalogo/${id}`)
        return await res.json()
    } catch(err){
        return err
    }   
}

export const crearProductoEnCatalogo = async (data) => {
    try{
        const res = await fetch('http://localhost:4000/api/v1/catalogo',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify(data)
        })
        return await res.json()
    } catch(err){
        return err
    }   
}

export const actualizarProducto = async (id, data) => {
    try{
        const res = await fetch(`http://localhost:4000/api/v1/catalogo/${id}`,{
            method:"PATCH",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify(data)
        })
        return await res.json()
    } catch(err){
        return err
    }   
}
export const eliminarPorId = async (id) => {
    try{
        const res = await fetch(`http://localhost:4000/api/v1/catalogo/${id}`,{
            method:"DELETE"
        })
        return await res.json()
    } catch(err){
        return err
    }   
}