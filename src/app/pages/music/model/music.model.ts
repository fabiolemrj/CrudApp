import { Musicauthor } from '../../musicauthor/model/musicauthor.model';

export class Music {

    /**
     * "Id": "11658f05-587a-47c5-8439-2fdc7a491b6b",
        "Name": "Teste tetstettste",
        "Code": "098",
        "Genre": 1,
        "MusicAuthor": []
     */
    constructor(private Id: string, Name: string, Code: string, Genre: number, private GenreDescription: string ) {}

}
