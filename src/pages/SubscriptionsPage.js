import React from 'react'
import Base from './Base'
import Subscription from '../components/Main/RightSection/Subscription/Subscription';

const SubscriptionsPage = ({ isHeader, currentTab, setCurrentTab }) => {
    return (
        <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
            <Subscription />
        </Base>
    )
}

export default SubscriptionsPage