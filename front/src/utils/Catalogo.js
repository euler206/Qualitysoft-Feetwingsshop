export const TraerTodos = async () => {
    try{
        const res = await fetch('http://localhost:4000/api/v1/catalogo')
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

