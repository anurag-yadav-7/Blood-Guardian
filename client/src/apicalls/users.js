import { axiosInstance } from ".";  

export const LoginUser = async(payload) =>{
    const response = await axiosInstance("post","/api/users/login",payload);
    return response;
};

export const RegisterUser = async(payload) =>{
    const response = await axiosInstance("post","/api/users/register",payload);
    console.log("res recived ", response);
    return response;    
}

export const GetCurrentUser = async() =>{
    const response = await axiosInstance("get","/api/users/get-current-user");
    return response;
}

export const GetAlldonorsofAnOrganization = ()=>{
    return axiosInstance("get","/api/users/get-all-donors");
}

export const GetAllHospitalssofAnOrganization = ()=>{
    return axiosInstance("get","/api/users/get-all-hospitals");
}

export const GetAllOrganizationsOfAdonor = () =>{
    return axiosInstance('get','/api/users/get-all-organizations-for-a-donor');  
    // get all organizations of a donor
}
 

export const GetAllOrganizationsOfAHospital = () => {
    return axiosInstance('get','/api/users/get-all-organizations-for-a-hospital');
    // get all organizations of a hospital  
}
