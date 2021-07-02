import preloader from "../../../images/preloader.gif";
import React from "react";
import classes from "../../Users/Users.module.css";

function Paginator({pagesCount, currentPage, onPageChanged}) {
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (currentPage === 1 || currentPage === 2) {
        pages = pages.slice(0, 5)
    } else if (currentPage === pagesCount || currentPage === pagesCount - 1) {
        pages = pages.slice(-5)
    } else {
        pages = pages.slice(currentPage - 3, currentPage + 2)
    }


    return (
        <div>
            <lu>
                <li className={currentPage && classes.selectedPage} >&laquo; </li>
            {pages.map(p => {
                return <li className={currentPage === p && classes.selectedPage}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</li>
            })}
            </lu>
        </div>
    )
}

export default Paginator