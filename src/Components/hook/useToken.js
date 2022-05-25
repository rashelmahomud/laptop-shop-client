import { useEffect, useState } from "react"
const useToken = user => {
    const [token, setToken] = useState('');
    useEffect( () => {

        const email = user?.user?.email;
        const currentUser = {email: email};
        
        if(email){
            fetch(`https://polar-spire-39773.herokuapp.com/user/${email}`,{

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(currentUser)   
            })
            .then(res => res.json())
            .then(data => {

                console.log("hello newUser", data);

                const accessToken = data.token;
                setToken(accessToken);
                localStorage.setItem('accessToken', accessToken);
            })
        }
    } ,[user])

    return [token];
}
export default useToken;