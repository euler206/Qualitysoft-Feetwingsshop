export const generarVenta = async (data) => {
    try{
        const res = await fetch('http://localhost:4000/api/v1/ventas',{
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

export const ventasPorUsuario = async (id) => {
    try{
        const res = await fetch(`http://localhost:4000/api/v1/ventas/cliente/${id}`)
        return await res.json()
    } catch(err){
        return err
    }   
}

export const todasLasVentas = async () => {
    try{
        const res = await fetch(`http://localhost:4000/api/v1/ventas`)
        return await res.json()
    } catch(err){
        return err
    }   
}


export const ventaPorId = async (id) => {
    try{
        const res = await fetch(`http://localhost:4000/api/v1/ventas/${id}`)
        console.log("entro a utils")
        return await res.json()
    } catch(err){
        return err
    }   
}
