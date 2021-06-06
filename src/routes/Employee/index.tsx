import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../common/hook/useTypedSelector";

import {fetchEmployeeActionCreator} from './redux/action/employeeListAction'
import {EmployeeList} from './List';

export const Employee:React.FC = () => {
    const dispatch =useDispatch();
    const {employeeListData, isEmployeeListError} = useTypedSelector(state => state.employeeRoute.employeeListState)
    useEffect(() => {
        if(!employeeListData) {
            dispatch(fetchEmployeeActionCreator())
        }
    }, [])

    if(employeeListData) {
        return<EmployeeList list={employeeListData}/>
    } else if(isEmployeeListError) {
        return <h1>No data Found</h1>
    } else {
        return null;
    }
    return<h1>Employee page</h1>
}