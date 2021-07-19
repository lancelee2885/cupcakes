const BASE_URL = "/api/cupcakes"

/*
 * makes an AJAX call to the api
 * returns an array of cupcakes(objects)
*/
async function getCupcakes() {
    let response = await axios.get(BASE_URL);
    return response.data;
}

async function displayCupcakes() {

    let cupcakes = await getCupcakes();

    for (let cupcake of cupcakes.cupcakes) {
        $("#cupcake-list").append(`<li>${cupcake.flavor}</li>`)
    };
}

/*
 * extracts the data from the form
 * makes an AJAX call to the API to create the cupcake with data from form
*/
async function addCupcake(evt) {
    evt.preventDefault();
    
    let flavor = $("#flavor").val();
    let size = $("#size").val();
    let rating = $("#rating").val();
    let image = $("#image").val();

    let resp = await axios.post(BASE_URL,
        { "flavor": flavor, "size": size, "rating": rating, "image": image})
    
    updateCupcakesList();
}

/*
 * clears the cupcake list and rebuilds it
*/
async function updateCupcakesList() {
    $("#cupcake-list").empty()
    await displayCupcakes()
}

$(displayCupcakes);
$("#create-cupcake").on("click", addCupcake);