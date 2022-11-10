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