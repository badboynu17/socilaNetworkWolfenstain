import {default as axios} from "axios";


const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"f399d0a5-93b4-4925-81b9-856a79fdd015"
    }

});
export const usersAPI ={
    getUsers(currentPage=1,pageSize=20) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}` )
    },
    unfollow(userId){
       return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)}

}
