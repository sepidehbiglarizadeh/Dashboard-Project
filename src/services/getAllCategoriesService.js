import http from "./httpServices";

const getAllCategoriesService = () => {
    return http.get("/categories");
}
 
export default getAllCategoriesService;