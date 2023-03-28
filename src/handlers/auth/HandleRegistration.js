import axios from "axios"
import {useCookies} from "react-cookie";

async function SignUp(username, email, password){
    const options = {
        url: "http://localhost:3001/api/v1/auth/signup",
        headers: "",
        body: {
            username: username,
            email: email,
            password: password
        }
    }

    const response = (await axios.post(
        options.url,
        options.body,
        options.headers
    )).data

    localStorage.setItem("token", response.data.token)

    console.log(response)

    const user = {
        id : response.data?.user_id,
        username : response.data?.username,
        email : response.data?.email,
    }

    localStorage.setItem("user", JSON.stringify(user))

    return response
}

export default SignUp;