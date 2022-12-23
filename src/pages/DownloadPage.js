import React from 'react';
import GeneralComponent from '../components/Main/RightSection/GeneralComponents/GeneralComponent';
import Base from './Base';

const DownloadPage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <GeneralComponent p={'No Downloads Available'} />
        </Base>
    )
}

export default DownloadPage