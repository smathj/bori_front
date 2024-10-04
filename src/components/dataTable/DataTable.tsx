import {useContext} from "react";
import {DataContext} from "../../App.tsx";

export const DataTable = () => {

    const context = useContext(DataContext);

    const {limit,offset,currentPage,type} = context;

    console.log('[테이블] 컨텍스트 데이터', {limit, offset, currentPage, type});

    return (
        <>
            <h1>테이블형태</h1>
        </>
    );
};
