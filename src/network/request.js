import axios from "axios"

export function request(config){
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: 'http://127.0.0.1:8080/my-drop-wizard/vue/',
            timeout: 5000,
            // headers:{}
        });

        instance(config).then(res => {resolve(res)}).catch(err => {reject(err)})
    })
}


// export function request(config){
//     const instance = axios.create({
//         baseURL: 'http://127.0.0.1:8080/my-drop-wizard/vue/'
//     })

//     return instance(config)
// }