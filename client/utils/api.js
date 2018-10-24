// import axios from "axios";

// key = "b0f7f7e94d3f5e9983a12176da905fce";
// const api = {
//     weatherSearch: function() {
//         // const location = "Capron, IL"
//         const key = "b0f7f7e94d3f5e9983a12176da905fce";
//         const queryURL = "http://api.openweathermap.org/data/2.5/?APPID=" + key + "&q=Capron";
//         return axios.get(queryURL);
//     }
// };

// export default api;

function api() {
    const key = "b0f7f7e94d3f5e9983a12176da905fce";
    const queryURL = "http://api.openweathermap.org/data/2.5/?APPID=" + key + "&q=Capron";

    $.ajax({
        url: queryURL,
        method: "GET", 
    }).then(data);
    console.log(data);
}

api();
