const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJiMjJjczEzMEBraXRzdy5hYy5pbiIsImV4cCI6MTc1NzMxNDY4NCwiaWF0IjoxNzU3MzEzNzg0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYmRhYmY0NTMtOGNjYy00NzZkLWI4ZDEtMDI1ODU0NTc0NmI1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3llZCB6YXllZCBzaGFoIiwic3ViIjoiY2ViNzBkZWUtOTNmZS00OWEzLWIxZDYtODQyNmE5OTAyZGQyIn0sImVtYWlsIjoiYjIyY3MxMzBAa2l0c3cuYWMuaW4iLCJuYW1lIjoic3llZCB6YXllZCBzaGFoIiwicm9sbE5vIjoiYWExYmIiLCJhY2Nlc3NDb2RlIjoicXFRelprIiwiY2xpZW50SUQiOiJjZWI3MGRlZS05M2ZlLTQ5YTMtYjFkNi04NDI2YTk5MDJkZDIiLCJjbGllbnRTZWNyZXQiOiJmZllHUkJHa1dqbUhrd2F4In0.vfRQvE4FE2-XIBn3_0n6GgDLgNhC2U_LS7myYKICVtg"

const Log  = async(stack,level,package,message)=>{
    const response = await fetch("http://20.244.56.144/evaluation-service/logs",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            "stack": stack,
            "level": level,
            "package": package,
            "message": message
     })
    })
    const data = await response.json()
    console.log(data);
}

module.exports = Log