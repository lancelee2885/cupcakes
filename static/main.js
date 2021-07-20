"use strict"
const BASE_URL = "/api/cupcakes"

/*
 * makes an AJAX call to the api
 * returns an array of cupcakes(objects)
*/

async function getCupcakes(term) {
    return await Cupcake.fetchAllCupcakes(term);
}

/*
 * builds the list elements in the DOM
*/
async function displayCupcakes() {

    let cupcakes = await getCupcakes($("#term").val());
    debugger;
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

    let cupcake = new Cupcake({
        flavor : $("#flavor").val(),
        size : $("#size").val(),
        rating : $("#rating").val(),
        image : $("#image").val(),
    })
        
    cupcake.addCupcake()
    
    $('#cupcake-form').trigger("reset");
    updateCupcakesList();
}

/*
 * clears the cupcake list and rebuilds it
*/
async function updateCupcakesList() {
    $("#cupcake-list").empty()
    await displayCupcakes()
}

/**
 * Filter list based on search term
 */
async function searchCupcake(evt){
    evt.preventDefault();
    await updateCupcakesList();
}


$(displayCupcakes);
$("#create-cupcake").on("click", addCupcake);
$("#search-cupcake").on("click", searchCupcake);