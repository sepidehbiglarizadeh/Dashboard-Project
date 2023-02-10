import http from "./httpServices";

const updateCategoryService = (id,data) => {
    return http.put(`/categories/${id}`,data);
}
 
export default updateCategoryService;