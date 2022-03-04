import React from "react";
import "./Table.css";

const Table = (props) => {

    const {imgBg} = props;

    return (
        <div className="table" style={{backgroundImage: `url("${imgBg}")`}} >

        </div>
    )
}

export default Table;