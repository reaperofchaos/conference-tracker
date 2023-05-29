import { Author } from "../../Author/types";

export interface URL{
    name: string; 
    hyperlink: string; 
}

export interface Section{
    title: string;
    note: string; 
    urls?: URL[];
    subSection?: Section[];
}

export interface Presentation{
    id: string; 
    conferenceId: string;
    name: string;
    description: string;
    author: Author[];
    notes: Section[];
    date: Date;
}