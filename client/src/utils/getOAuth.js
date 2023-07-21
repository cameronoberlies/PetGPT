// Get OAuth token
const clientId = "agbyorA3I1ZK9cdUAq6vgl3NUMUTRVAJ5gNfzeR9Vjx8Wgq8hl";
const clientSecret = "53ldJkG06ajP7meb3zAbUjVhhpDp49Q0wc81nT5T";
// let token;
// let tokenType;
// let expires;

const getOAuth = async function () {
    const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    // console log the contents of our returned object
    console.log('response is ', response);
    // return json;
    const data = await response.json();
    console.log('data is', data);
    // destrucutre token, tokenType, and epxires
    const { access_token } = data;
    return access_token;
    // .then(function (resp) {
    //     return resp.json();
    // }).then(function (data) {
    //     // Store token data
    //     token = data.access_token;
    //     tokenType = data.token_type;
    //     expires = new Date().getTime() + (data.expires_in * 1000);
    // });
};


// Make call if token expired
// const makeCall = () => {
//     // If current token is invalid, get a new one
//     if (!expires || expires - new Date().getTime() < 1) {
//         getOAuth();
//         // .then(function() {
//         // use access token
//     };
//     // );
// }

export default getOAuth;