import React from 'react';
import GeneralComponent from '../components/Main/RightSection/GeneralComponents/GeneralComponent';
import Base from './Base';

const LikePage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <GeneralComponent p={'No video is liked'} />
        </Base>
    )
}

export default LikePage