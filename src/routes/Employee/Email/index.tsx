import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";

import {fetchEmailActionCreator} from '../redux/action/emailAction';
import { useTypedSelector } from "../../../common/hook/useTypedSelector";
import { LoginLayout } from "../../../common/component/layout";

import {EmailList} from './list';

export const Email:React.FC = () => {
    const dispatch = useDispatch();
    const {emaildata, isEmailError} = useTypedSelector(state => state.employeeRoute.emailState);
    useEffect(() => {
        if(!emaildata) {
            dispatch(fetchEmailActionCreator())
        }
    },[])

    if(emaildata) {
        return (
            <LoginLayout title="Email" logoutButton={true}>
                <EmailList emailList={emaildata}/>
            </LoginLayout>
        )
    } else if(isEmailError) {
        return <h1>No Data Found</h1>
    } else{
        return null
    }
}