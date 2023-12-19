export const host = "http://127.0.0.1:8090";

export async function getSeller(id) {
     ( fetch(`${host}/user/all`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }))
    .then(response => response.json())
    .then(response =>
        response.filter((seller) => { seller.id === id})
        )
    
  }