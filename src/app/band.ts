export interface Band{
    id?: number;
    name: string;
    url: string;
    image_url: string;
    facebook_page_url: string;
    mbid: string; //?
    tracker_count: number; //?
    upcoming_event_count: number;
    //supporturl    support_url
    //options
    //these were nto in docs but show up - do I need to include them?
    // options?: object; //object might need details...
    // support_url?: string;
}