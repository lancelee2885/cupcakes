class Cupcake{
    
    constructor(cupcake){
        this.flavor = cupcake.flavor
        this.id = cupcake.id
        this.image = cupcake.image
        this.rating = cupcake.rating
        this.size = cupcake.size   
    }
    
    /*
     * adds the cupcake object to the database
    */
    async addCupcake() {
        let resp = await axios.post(BASE_URL,
            { "flavor": this.flavor, "size": this.size, "rating": this.rating, "image": this.image})
    }
    
    static async fetchAllCupcakes(term=""){
        if(term===""){
            let response = await axios.get(BASE_URL);
            return response.data;
        }
        else{
            let response = await axios.get(`${BASE_URL}/search`,
                {params : {"term": term}}
                );
            return response.data;
        } 
    }
}