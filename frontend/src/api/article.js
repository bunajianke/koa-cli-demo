// import { fetch, post } from "../utils/http"
import request from "@/utils/http";

// 新建文章
export const createArticle = art => request.post('/art/create', art)