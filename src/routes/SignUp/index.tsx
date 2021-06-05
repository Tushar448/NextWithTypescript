import React from 'react';
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../common/hook/useTypedSelector";

import {fetchRoleActionCreator} from './redux/action/roleAction';
import {Registration} from './Registration';

export const SignUp: React.FC = () => {
    const dispatch = useDispatch();
    const {roleData} =useTypedSelector(state => state.signUpRoute.roleState);

    
    React.useEffect(() => {
        if(!roleData) {
            dispatch(fetchRoleActionCreator());
        }
    },[])

    if(roleData && roleData) {
       return  <Registration roleData={roleData}/>
    } else {
        return null;
    }
}