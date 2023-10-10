import axios from 'axios'

const apiUrl = "https://www.omdbapi.com/"
// ?apikey=4342db7d&t="
const apiKey = "4342db7d&t"
export const fetchMovie = async (moviename) => {
    // Promise Way 
    // axios.get(apiUrl)
    // .then(Response => {
    //     console.log(Response)
    // })

    // async/await

    try{
        const response = await axios.get(`${apiUrl}?apikey=${apiKey}&t= ${moviename}`)
        return response.data
        // console.log(response)
    }
    
    catch(error){
        console.log(error)
    }
}