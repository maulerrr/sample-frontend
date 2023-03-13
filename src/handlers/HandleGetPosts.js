import axios from "axios";
import {useCookies} from "react-cookie";

// async function GetPosts(){
//     const token = "Bearer " + localStorage.getItem("token")
//
//     if (!token) return
//
//     const options = {
//         url: "http://localhost:3001/api/v1/post/",
//         config: {
//             headers: {
//                 'Content-Type': "application/json",
//                 'Authorization': token
//             }
//         }
//     }
//
//     const response = (await axios.get(
//         options.url,
//         options.config,
//     )).data
//
//     localStorage.setItem("posts", JSON.stringify(response))
//     console.log(response)
// }

async function GetPosts() {
    const token = "Bearer " + localStorage.getItem("token");

    const options = {
        url: "http://localhost:3001/api/v1/post/",
        config: {
            headers: {
                'Content-Type': "application/json",
                'Authorization': token
            }
        }
    }

    return axios.get(options.url, options.config);
}

export default GetPosts;