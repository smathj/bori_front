import React, {FC, ReactElement, useCallback, useContext, useEffect, useState} from "react";
import {DataContext} from "../../App.tsx";
import Card from "./Card.tsx";

export const DataCard = () => {

    console.log('DataCard 컴포넌트 ...');

    const context = useContext(DataContext);

    // context.start = context.currentPage === 1 ? 0 : context.limit * (context.currentPage -1);
    context.start = (context.currentPage -1) * context.limit;

    const {limit,offset,currentPage,type, start} = context;
    console.log('[카드] 컨텍스트 데이터', {limit, offset, currentPage, type, start});


    const [page, setPage] = useState(context.currentPage)


    /**
     * 데이터 더미 생성 함수
     */
    const makeCardList = () => {
        const data: ReactElement[] = [];
        for (let i = context.start; i < context.start + context.offset; i++) {
            data.push(<Card key={i} {...{num: i}} />)
        }
        return data;
    }

    const prevData = useCallback(() => {
        console.log('>> prevData')
        if (context.currentPage - 1 > 0) {
            context.currentPage = context.currentPage - 1;
            setPage(context.currentPage);
        }

    }, [])

    const nextData = useCallback(() => {
        console.log('>> nextData')
        context.currentPage = context.currentPage + 1;
        setPage(context.currentPage);
    }, [])

    return (
        <div>
            <div className={'cardParent'}>
                {makeCardList()}
            </div>
            <div className={'cardPaging'}>
                <div>
                    <button onClick={prevData}>이전</button>
                    <button onClick={nextData}>다음</button>
                </div>
                <div>현재 페이지 : {page}</div>
            </div>
        </div>

    );
};
