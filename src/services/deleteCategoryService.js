import http from "./httpServices";

const deleteCategoryService = (id) => {
    return http.delete(`/categories/${id}`);
}
 
export default deleteCategoryService;