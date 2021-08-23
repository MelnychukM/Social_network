import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b828990d-a6ac-4ef1-a967-85e486d9d0eb"
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const followAPI = {
    deleteUsers(u) {
        return instance.delete(`follow/${u.id}`)
            .then(response => response.data);
    },
    postUsers(u) {
        return instance.post(`follow/${u.id}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}





