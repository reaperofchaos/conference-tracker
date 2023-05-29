import { useDispatch } from "react-redux";
import AuthorForm from "./AuthorForm";
import { createAuthor } from "../reducers/author.reducers";
import { Author } from "../types";

const AuthorFormWrapper = ()=>{
    const dispatch = useDispatch(); 
    const submit = (value: Author)=>{
        dispatch(createAuthor({author: value}))
    }
    const cancel = ()=>{}

    return (
        <AuthorForm submit={submit} cancel={cancel}/>
    )
}

export default AuthorFormWrapper;