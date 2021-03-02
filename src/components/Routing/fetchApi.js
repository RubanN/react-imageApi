import ApiUrl from '../apipage/ApiUrl';
import axios from 'axios';

const apiFetch= async ()=>{
    try{
        let apiValue = await axios.get(ApiUrl+'/photos')
        return apiValue
    }catch(err){
        return err
    }
}
export default apiFetch