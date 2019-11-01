export class Music{

    constructor(public id: string,
        public code:string,
        public name:string,
        public genre:string){    }
}

export class RespMusic{
    /**
     *  success: boolean;
    message: string;
    data: Music[];
     */
    constructor(public success: boolean,
        public message: string,
        public data: Music[]) {
        
    } 
}