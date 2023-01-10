import React from "react";
import { Pagination, PaginationItem} from "@material-ui/lab";
import theme from "./Theme";
import {Link} from 'react-router-dom'

const Paginate = () => {
    return(
        <Pagination 
            count={5}
            page={1}
            variant='outlined'
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/tenants?page=${1}`}/>
            )}
        />
    )
}

export default Paginate;