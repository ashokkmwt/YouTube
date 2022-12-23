import React from 'react';
import NavBar from '../components/Main/RightSection/NavBar/NavBar';
import VideoSection from '../components/Main/RightSection/VideoSection/VideoSection';
import Base from './Base';

const HomePage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <NavBar />
            <VideoSection />
        </Base>
    )
}

export default HomePage