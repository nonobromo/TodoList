import { createContext, useContext, useState } from "react";
const categoryContext = createContext({
    category: "",
    handleCategory: () => {}
});
export function CategoryContext({children}){
    const [category, setCategory] = useState("");

    function handleCategory(e){
            setCategory(e.target.value)
            console.log(category)
    }

    return(
        <categoryContext.Provider value={{handleCategory: handleCategory, category}}>  {children}</categoryContext.Provider>
    )
}

export function useCategory(){
    return useContext(categoryContext)
}