import axios from "axios";

const call = {
    originalImagePath: 'https://image.tmdb.org/t/p/original/',
    imagePathW500: 'https://image.tmdb.org/t/p/w500',
    imagePathW400: 'https://image.tmdb.org/t/p/w400',
    imagePathW300: 'https://image.tmdb.org/t/p/w300',
    imagePathW200: 'https://image.tmdb.org/t/p/w200',

    getRequest : function(url){
        return axios({
            method: "get",
            url: url,
            headers : {'Content-Type' : 'application/json'}
        })
    },

    postRequest : function(url){
        return axios({
            method: "post",
            url: url,
            headers : {'Content-Type' : 'application/json'}
        })
    }
}

export default call;