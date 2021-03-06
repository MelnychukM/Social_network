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
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe,captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe,captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export  const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}` )
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
            .then(response => response.data)
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`,formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
        }
        })
            .then(response => response.data)

    },

    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data)
    }

}

export  const securityAPI = {
    getCaptchaUrl() {
        return  instance.get(`security/get-captcha-url`)
    }

}




