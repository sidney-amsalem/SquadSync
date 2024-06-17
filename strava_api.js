const auth_link = "https://www.strava.com/oauth/token"


function plotActivities(dates, distances){
    data = {dates, distances}
    Plotly.newPlot('strava data', [data], {margin: { t: 0 }} )
}


function getActivities(response){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${response.access_token}`

    fetch(activities_link)
        .then((res) => res.json()) // Parse the response into a JSON
        .then(function(data){
            let dates = [];
            let distances = [];
            for(var x=0; x<data.length; x++){
                let distance = data[x].distance
                let type = data[x].type

                if (type == 'Run'){
                    distance *= 0.9322
                }

                dates.push(data[x].start_date);
                distances.push(distance);
            }
            plotActivities(dates, distances);
        })
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
            refresh_token: '6b76ea9d526d179ffe5384f88d0396860723eb03',
            grant_type: 'refresh_token'
        })
    })
    .then(res => res.json())
        .then(res => getActivities(res))
}


reAuthorize()