export function login(credentials){
    return new Promise((res,rej) => {
        axios.post('/api/auth/login', credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((error) => {
                rej('Wrong Email or Password');

            })
        })
}


export function getLocalUser(){
    const userStr = localStorage.getItem("user");
    if(!userStr){
        return null;
    }

    return JSON.parse(userStr);
}

