 const defaultState = {
    newsTitle: ""
 }

 const passTitleReducer = (state = defaultState, action)=>{
     switch (action.type) {
         
        case "SET_TITLE":         
             return {
                ...state,
                newsTitle: action.newsTitle
             }             
     
        case "GET_TITLE":        
             return{
                 ...state,
                 newsTitle :  state.newsTitle                 
             }

         default:
             return state;             
     }
 }

 export default passTitleReducer;

