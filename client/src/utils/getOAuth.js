// Get OAuth token
const clientId = "agbyorA3I1ZK9cdUAq6vgl3NUMUTRVAJ5gNfzeR9Vjx8Wgq8hl";
const clientSecret = "53ldJkG06ajP7meb3zAbUjVhhpDp49Q0wc81nT5T";
let token;
let tokenType;
let expires;
let authenticationInfo = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhZ2J5b3JBM0kxWks5Y2RVQXE2dmdsM05VTVVUUlZBSjVnTmZ6ZVI5Vmp4OFdncThobCIsImp0aSI6ImViNzM5MGFlNzUwM2M5NGQzMWZmMDg5MDNiOGY2YjExMzBhODRmZjczOWFmMWY4ZDkzOWJkMWMxMTc1Y2Y0OWYwOTg4MDQzYTg1NTYyNTU4IiwiaWF0IjoxNjg5NzM4MzIyLCJuYmYiOjE2ODk3MzgzMjIsImV4cCI6MTY4OTc0MTkyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.xeIaUbNykbQB-E5_T_TxpaZ3Lja3nOfOb3EEmc5GAvA15iTIX1rAd36e9a4KYjKmppYpdZB_8uXuMFvMKjAcZnF8BCJ59MYUXzkyFwm3RfEowcIiMzS12YPv8UWpFV4_3gjxop_n_1Gn-QXOn-X5XttRUBcqnD2-_7WIKuJQRs5ORL2cAis14b6NaUN_EFiBiRwMpj50mFqSZGPnyBFYg612YGigzImE3IzzlcujXV_3lmlBTbZNHFNXfetSdF4vuGhM9atLkOI8EZCcmMGzcj-RvnjMnyKGTlEO1DRV7SeoZuSW-m8SjHvYse7fFe7VzvlAfq7yeSucEpykE8Y2rA";

const getOAuth = async function () {
    const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    // console log the contents of our returned object
    // console.log('response is ', response);
    // return json;
    const data = await response.json();
    // console.log('data is', data);
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
const makeCall = () => {
    // If current token is invalid, get a new one
    if (!expires || expires - new Date().getTime() < 1) {
        getOAuth();
        // .then(function() {
        // use access token
    };
    // );
}

export default getOAuth;