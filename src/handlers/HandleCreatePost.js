import axios from "axios";
import {useCookies} from "react-cookie";

async function CreatePost(header, body) {
    const token = "Bearer " + localStorage.getItem("token")

    const options = {
        url: "http://localhost:3001/api/v1/post/",
        config: {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        },
        body: {
            header: header,
            body: body
        }
    }

    const response = (await axios.post(
        options.url,
        options.body,
        options.config
    )).data

}

export default CreatePost;