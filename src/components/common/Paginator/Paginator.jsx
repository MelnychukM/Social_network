import React from "react"
import c from './Paginator.module.css'


let Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p && c.selectedPage}
                             onClick={(event) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
    )
}


export default Paginator;