// Link to access athlete token
// https://www.strava.com/api/v3/athlete/activities?access_token=0fa0ae202f7092f5dfb5adf76b7bf7acb0cb932c

function getActivities(){

    // accesstoken = "0fa0ae202f7092f5dfb5adf76b7bf7acb0cb932c"
    const activites_link = "https://www.strava.com/api/v3/athlete/activities?access_token=0fa0ae202f7092f5dfb5adf76b7bf7acb0cb932c"

    fetch(activities_link)
        .then((res) => console.log(res.json()))
}

getActivities()