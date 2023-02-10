import http from "./httpServices";

const getOneCategoryService = (id) => {
    return http.get(`/categories/${id}`);
}
 
export default getOneCategoryService;