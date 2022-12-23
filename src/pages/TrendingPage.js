import React from 'react';
import VideoSection from '../components/Main/RightSection/VideoSection/VideoSection';
import Base from './Base';

const TrendingPage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <VideoSection />
        </Base>
    )
}

export default TrendingPage