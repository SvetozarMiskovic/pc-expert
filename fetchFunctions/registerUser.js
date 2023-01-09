import axios from 'axios'

export const registerUser = async (data) => {
    const url = 'http://localhost:3000/api/register'
    // console.log(stari)
    // console.log(data)

    const asa = await axios.post(url, data)
    // console.log(nesto)
    // console.log('iz register usera ' + jsonData)
    // const res = await jsonData.json()

    return asa
}
