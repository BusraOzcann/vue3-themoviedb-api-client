import filmService from "../services/Film/FilmService"

// API'den çekilip global olarak tutulacaklar !
export default{
    beforeMount() {
        this.getGenres();
    },
    data(){
        return {
            genres: []
        }
    },
    methods:{
        getGenres(){
            filmService.getGenres().then((response) => {
                this.genres = response.data.genres
            })
        }
    }
}