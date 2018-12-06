export const setTitle = (newsTitle)=>{
   return {
    type: "SET_TITLE",
    newsTitle
   }
}

export const getTitle = ()=>{
    return {
     type: "GET_TITLE"  
    }
 }