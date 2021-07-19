/*
 * makes an AJAX call to the api
 * returns an array of cupcakes(objects)
*/

const BASE_URL = "/api/cupcakes"

async function getCupcakeInfo() {
    let response = await axios.get(BASE_URL);
    return response.data;
}

async function displayCupcakes() {

    let cupcakes = await getCupcakeInfo();

    for (let cupcake of cupcakes.cupcakes) {
        $("#cupcake-list").append(`<li>${cupcake.flavor}</li>`)
    };
}

$(displayCupcakes);

async function addCupcake(evt) {
    evt.preventDefault();

    let flavor = $("#flavor").val();
    let size = $("#size").val();
    let rating = $("#rating").val();
    let image = $("#image").val();

    let resp = await axios.post(BASE_URL,
        { "flavor": flavor, "size": size, "rating": rating, "image": image})

}

async function updateCupcakesList() {

    await addCupcake()
    $("#cupcake-list").empty()
    await displayCupcakes()

}

$("#create-cupcake").on("click", updateCupcakesList)