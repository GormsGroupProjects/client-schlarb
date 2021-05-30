<<<<<<< HEAD
export class Band{
=======
export interface Band{
>>>>>>> 6e584660f980bbeaab742ae34e984c15585eae89
    id?: number;
    name: string;
    url: string;
    image_url: string;
    facebook_page_url: string;
    mbid: string; //?
    tracker_count: number; //?
    upcoming_event_count: number;
<<<<<<< HEAD
=======
    //supporturl    support_url
    //options
    //these were nto in docs but show up - do I need to include them?
    // options?: object; //object might need details...
    // support_url?: string;
>>>>>>> 6e584660f980bbeaab742ae34e984c15585eae89
}