import React from 'react'
import GeneralComponent from '../components/Main/RightSection/GeneralComponents/GeneralComponent';
import Base from './Base';

const PlaylistPage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <GeneralComponent p={'No playlist'} />
        </Base>
    )
}

export default PlaylistPage