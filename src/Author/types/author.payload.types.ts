import { Author } from "../../Presentation/types/Presentation.types";

export interface CreateNewAuthorPayload{
    author: Author
}

export interface FetchAuthorByIdPayload{
    id: string; 
}