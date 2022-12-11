import fetch from 'isomorphic-fetch';


export  async function callApi({
    endpoint,
    method = 'post',
    body = undefined,
    fullUrl = false
}) {

    let url = ''
    if (fullUrl) {
        url = endpoint;
    } else {
        url = `http://192.168.1.143:4000/${endpoint}`; // put you local ip address here
    }
    console.log('body', body)

    let res =  await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        // mode: 'no-cors',
        body: JSON.stringify(body)
    })
    return res.json() || res.text();
    // let data = await res.json();
    // console.log(data);
    // return data

    // return await fetch(url, {
    //     method,
    //     headers: { 'Content-Type': 'application/json' },
    //     // mode: 'no-cors',
    //     body: JSON.stringify(body)
    // })
    //     .then(async (response) => {
    //         if (!response.ok) {
    //             alert('An error Occured. Please verify the inputs/operation you are trying to perform.')
    //             return response.json()
    //                 ``
    //                 .then((json) => {
    //                     return Promise.reject(json)
    //                 });
    //         }
    //         return response.json() || response.text();
    //     });
}