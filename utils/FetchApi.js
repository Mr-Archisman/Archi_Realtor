import axios from "axios";

export const baseUrl="https://bayut.p.rapidapi.com"


export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'fa08dbc953msha5cd6df6c72ac00p13fd90jsnb114809a519d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
          
    });
    return data;
}