import React from 'react';
import WatchLater from '../components/Main/RightSection/WatchLater/WatchLater';
import Base from './Base';

const WatchLaterPage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <WatchLater />
        </Base>
    )
}

export default WatchLaterPage