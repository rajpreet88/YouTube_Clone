import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [selectedCategory, setSelectCategories] = useState('New')
    const [mobileMenu, setMobileMenu] = useState(false)


    const fetchSelectedCategoryData = async (category)=>{
        setLoading(true);
        await fetchDataFromAPI(`search/?q=${category}`).then((res)=>{
            // console.log(res.contents);
            if(res){
                setSearchResults(res.contents)
                setLoading(false)
            }
        })
    }

    useEffect(()=>{
        fetchSelectedCategoryData(selectedCategory)
    },[selectedCategory])

    return(<Context.Provider value={
        {loading, setLoading,
        searchResults, setSearchResults,
        selectedCategory, setSelectCategories,
        mobileMenu, setMobileMenu    
    }}>
        {props.children}
    </Context.Provider>)



}