import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "2bc7fb4f4c1a85f82";

interface itemProps {
    cacheId: string;
    displayLink: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    htmlSnippet: string;
    htmlTitle: string;
    kind: string;
    link: string;
    pagemap: object;
    snippet: string;
    title: string;
}

interface searchInfoProps {
    formattedSearchTime: string;
    formattedTotalResults: string;
    searchTime: number;
    totalResults: string;
}

interface dataProps {
    context: { title: string };
    items: itemProps[];
    kind: string;
    queries: [];
    searchInformation: searchInfoProps;
    url: object;
}

const useGoogleSearch = (term: string): { data: dataProps | null } => {
    const [data, setData] = useState<dataProps | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            ).then(res => res.json()).then(result => {
                setData(result);
            })
        };

        fetchData();
    }, [term]);

    return { data }
};

export default useGoogleSearch;
