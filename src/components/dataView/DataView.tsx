// rfc

import React, {ChangeEvent, FC, useContext} from "react";
import {DataCard} from "../dataCard/DataCard.tsx";
import {DataTable} from "../dataTable/DataTable.tsx";
import {DataContext} from "../../App.tsx";

export type DataViewType = {
    type: string
    limit: number
    offset: number
    currentPage: number
    start: number
}
export const DataView = () => {


    const context = useContext(DataContext);
    const {limit,offset,currentPage,type} = context;
    console.log('컨텍스트 데이터', {limit, offset, currentPage, type});


    const dataTypeOnChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        console.dir(e)
        console.log(e.target.value);
    }

    const data = () => {
        return (
            <div className={'dataView'}>
                <div className={'dataViewSearch'}>
                    <select onChange={dataTypeOnChange}>
                        <option value={'Card'}>카드</option>
                        <option value={'Table'}>테이블</option>
                    </select>
                </div>
                {type === 'Card' ? <DataCard/> : <DataTable/>}
            </div>
        )
    };

    return (
        <>
            {data()}
        </>
    )



};
