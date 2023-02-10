import http from "./httpServices";

const addNewCategoryService = (data) => {
    return http.post("/categories",data);
}
 
export default addNewCategoryService;