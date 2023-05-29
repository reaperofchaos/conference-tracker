import { Presentation } from "./Presentation.types";

export interface FetchPresentationByIdPayload{
    id: string; 
}

export interface CreateNewPresentationPayload{
    presentation: Presentation
    conferenceId: string
}