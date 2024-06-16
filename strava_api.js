// Link to access athlete token
// https://www.strava.com/api/v3/athlete/activities?access_token=0fa0ae202f7092f5dfb5adf76b7bf7acb0cb932c

const auth_link = "https://www.strava.com/oauth/token"

function getActivities(response){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${response.access_token}`

    fetch(activities_link)
        .then((res) => console.log(res.json()))
}

// If current token is invalid, fetches new token via refresh token
function reAuthorize(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({

            client_id: '128691',
            client_secret: '5b9731c4e1b1313cc7d5bbaa65371a93a7ec0a86',
            refresh_token: '5d257b97ddd58695dc03cdbf8ea9b4cbc016edfe',
            grant_type: 'refresh_token'
        })
    })
    .then(res => res.json())
        .then(res => getActivities(res))
}


reAuthorize()