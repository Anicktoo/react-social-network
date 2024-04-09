import React, { useMemo } from 'react';
import { classNameFunction } from '../../../utils/classNameCompiler';
import s from "./Paginator.module.css";

const cName = classNameFunction(s);

const MAX_PAGES_IN_BAR = 11;

const getPagesBarUIInfo = (maxPagesInMenu, currentPage, totalUsersCount, pageSize) => {
    const getStartEndIndexes = (maxNumbersOnPage, curPage, pagesCount) => {
        if (pagesCount <= maxNumbersOnPage) {
            return { startInd: 1, endInd: pagesCount };
        }

        const delta = Math.floor(maxNumbersOnPage / 2);
        const pagesToFirst = curPage - 1;
        const pagesToLast = pagesCount - curPage;

        if (pagesToFirst <= delta) {
            return { startInd: 1, endInd: maxNumbersOnPage };
        }
        if (pagesToLast <= delta) {
            return { startInd: pagesCount - maxNumbersOnPage, endInd: pagesCount };
        }

        return { startInd: curPage - delta, endInd: curPage + delta };
    }

    const curPage = currentPage;
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    let { startInd, endInd } = getStartEndIndexes(maxPagesInMenu, curPage, pagesCount);

    const startGap = startInd !== 1;
    const endGap = endInd !== pagesCount;

    if (startGap) startInd += 2;
    if (endGap) endInd -= 2;

    const pages = [];
    for (let i = startInd; i <= endInd; i++) {
        pages.push(i);
    }

    return {
        pagesCount,
        pages,
        startGap,
        endGap
    };
};

const StartBarItem = ({ onPageChange }) => <>
    <div className={cName(['page-item'])}
        onClick={() => {
            onPageChange(1)
        }}>
        1
    </div>
    <div className={cName(['page-item', 'blocked'])}>...</div>
</>;

const EndBarItem = ({ onPageChange, pagesCount }) => <>
    <div className={cName(['page-item', 'blocked'])}>...</div>
    <div className={cName(['page-item'])}
        onClick={() => {
            onPageChange(pagesCount)
        }}>
        {pagesCount}
    </div>
</>;

const DefBarItems = ({ onPageChange, currentPage, pages }) => pages.map(el => {
    const isCurrent = currentPage === el ? 'current-page' : '';
    return (
        <div className={cName(['page-item', isCurrent])}
            onClick={() => {
                onPageChange(el)
            }}
        >
            {el}
        </div>);
});

const Paginator = ({ onPageChange, currentPage, totalUsersCount, pageSize }) => {

    const { pagesCount, pages, startGap, endGap } = useMemo(() => getPagesBarUIInfo(MAX_PAGES_IN_BAR, currentPage, totalUsersCount, pageSize), [currentPage, totalUsersCount, pageSize]);

    return (
        <div className={cName(['page-container'])}>
            {startGap && <StartBarItem onPageChange={onPageChange} />}
            <DefBarItems onPageChange={onPageChange} currentPage={currentPage} pages={pages} />
            {endGap && <EndBarItem onPageChange={onPageChange} pagesCount={pagesCount} />}
        </div>
    );
}

export default Paginator;
