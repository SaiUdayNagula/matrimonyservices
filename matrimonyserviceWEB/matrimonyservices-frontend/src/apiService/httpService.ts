const header = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "your-api-key",
      "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
    }
};

export function Get(url){
    return fetch(url,header)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => console.log(error));
}

export async function post(url,data){
    debugger;
    const postheader = {
        method: "post",
        headers: {
          "X-RapidAPI-Key": "your-api-key",
          "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
        "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    };

    return await fetch(url,postheader)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((error) => console.log(error));
}