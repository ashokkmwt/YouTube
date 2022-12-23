import React from 'react'
import Shorts from '../components/Main/RightSection/Shorts/Shorts'
import Base from './Base';

const ShortsPage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <Shorts />
        </Base>
    )
}

export default ShortsPage