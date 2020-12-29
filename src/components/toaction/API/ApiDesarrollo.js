



 export async function funPauta() {
  let data =  JSON.stringify({
    "token": "1VLC3A8A3PZ04XXJLYI4"
  })
const config =  {
  method: 'POST',
  headers: {
  "Content-Type": "application/json"
  },
  body: data
}


return await fetch('http://api.gdsnet.com:3005/post_duo_pauta_V2', config)
.then((response) => {
  return response.json()
})
}