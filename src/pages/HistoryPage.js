import React from 'react';
import History from '../components/Main/RightSection/History/History';
import Base from './Base';

const HistoryPage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <History />
        </Base>
    )
}

export default HistoryPage