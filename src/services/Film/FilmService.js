import call from "../Call.js"

const filmService = {
    originalImagePath: call.originalImagePath,
    imagePathW500: call.imagePathW500,
    imagePathW400: call.imagePathW400,
    imagePathW300: call.imagePathW300,
    imagePathW200: call.imagePathW200,

    getPopular : function(page){
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${page}`;
        return call.getRequest(url);
    },

    getNowPlaying: function(page){
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${page}`;
        return call.getRequest(url);
    },

    getLatest: function(){
        let url = `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`;
        return call.getRequest(url);
    },

    getTopRated: function(page){
        let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.VUE_APP_API_KEY}&language=en-US&page=${page}`;
        return call.getRequest(url);
    }
}

export default filmService;