// Get OAuth token
const getOAuth = function() {
    return fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + 'agbyorA3I1ZK9cdUAq6vgl3NUMUTRVAJ5gNfzeR9Vjx8Wgq8hl' + '&client_secret=' + '9tSnqpdaIIz2hopAaiAlCtjXWkOxYHAFwin4jg8M',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(resp) {
        return resp.json();
    }).then(function(data) {
        // Store token data
        // token = data.access_token;
        // tokenType = data.token_type;
        // expires = new Date().getTime() + (data.expires_in * 1000);
    });
};
// export default getOAuth;

// Make call if token expired
// const makeCall = () => {
//     // If current token is invalid, get a new one
//     if (!expires || expires - new Date().getTime() < 1) {
//         getOAuth().then(function() {
//             // use access token
//         });
//     }
// };