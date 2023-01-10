import React, {useEffect, useState} from "react";
import { Pagination, PaginationItem, ThemeProvider} from "@mui/material";
import theme from "./Theme";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

//TODO: make it universal
import {getTenants} from '../actions/tenants';

const Paginate = ({page}) => {
    const dispatch = useDispatch();
    const { numberOfPages } = useSelector((state) => state.tenants)

    useEffect(() => {
        if(page) dispatch(getTenants(page));
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
                <PaginationItem {...item} component={Link} to={`/admin/tenants?page=${item.page}`}/>
            )}
        />
        </ThemeProvider>
    )
}

export default Paginate;