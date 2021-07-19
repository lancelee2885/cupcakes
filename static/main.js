/*
 * makes an AJAX call to the api
 * returns an array of cupcakes(objects)
*/
async function getCupcakeInfo(){
    let response = await axios.get("/api/cupcakes");
    return response.data;
}

async function displayCupcakes(){
    
    let cupcakes = await getCupcakeInfo();
    
    for(let cupcake of cupcakes.cupcakes){
        $("#cupcake-list").append(`<li>${cupcake.flavor}</li>`)
    }
}

$(displayCupcakes);