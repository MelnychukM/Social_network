import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "de18d8ad-21dd-4747-97e1-408b0c2d1beb"
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





