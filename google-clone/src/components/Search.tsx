import React, {useEffect, useState, useRef} from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import {Button} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useStateValue} from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
    // @ts-ignore
    const [sampleDispatch, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();
    const inputRef = useRef<HTMLInputElement>(document.createElement("input"));

    const search = (e: React.MouseEvent) => {
        e.preventDefault();

        console.log("sampleDispatch -> ", sampleDispatch);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });

        history.push("/search");
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon/>
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" variant="outlined" onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm feeling Lucky</Button>
                </div>
            ) : (
                <div></div>
            )}

        </form>
    )
};

export default Search;
