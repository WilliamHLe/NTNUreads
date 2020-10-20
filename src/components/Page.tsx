import React, {useEffect, useState} from "react";
import { Pagination } from "react-bootstrap";

const Page = (props:any) => {
    const [pagination, setPagination] = useState(1)
    const [count, setCount] = useState(10)

    const prevPage = () => {
        if (pagination > 1) {
            setPagination(pagination - 1)
            setCount(count - 10)
            props.onChange(count)
        }
    }

    const nextPage = () => {
        setPagination(pagination + 1)
        setCount(count + 10)
        props.onChange(count)
    }

    return(
        <div>
            <Pagination>
                <Pagination.Prev onClick={prevPage}/>
                <Pagination.Next onClick={nextPage}/>
            </Pagination>
        </div>
    )
}

export default Page