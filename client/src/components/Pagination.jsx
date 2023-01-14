import React, {useEffect, useState} from "react";
import { Pagination, PaginationItem, ThemeProvider} from "@mui/material";
import theme from "./Theme";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getTenants} from '../actions/tenants';
import {getEmployees} from '../actions/employees';
import {getEstates} from '../actions/estates';

const Paginate = ({page, type}) => {
    const dispatch = useDispatch();
    const { numberOfPages } = useSelector((state) => state.objects)

    useEffect(() => {
        if(page) {
            console.log(page);
            if(type === "tenants") dispatch(getTenants(page));
            if(type === "estates") dispatch(getEstates(page));
            if(type === "employees") dispatch(getEmployees(page));
            //if(type === "offers") dispatch(getOffers(page));
        } 
    }, [page]);

    return(
        <ThemeProvider theme={theme}>
        <Pagination 
            count={numberOfPages}
            page={Number(page) || 1}
            variant='outlined'
            shape="rounded"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/admin/${type}?page=${item.page}`}/>
            )}
        />
        </ThemeProvider>
    )
}

export default Paginate;