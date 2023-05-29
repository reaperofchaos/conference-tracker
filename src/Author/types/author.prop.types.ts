import { Author } from "../../Presentation/types/Presentation.types";

export interface AuthorFormProps{
    submit: (value: Author)=>void; 
    cancel: ()=>void;
}