import React from 'react';
import GeneralComponent from '../components/Main/RightSection/GeneralComponents/GeneralComponent';
import Base from './Base';

const ErrorPage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <GeneralComponent p={'404 | Not Found'} />
        </Base>
    )
}

export default ErrorPage;