import React from 'react'
import Base from './Base'
import Library from '../components/Main/RightSection/Library/Library';

const LibraryPage = ({ isHeader, currentTab, setCurrentTab }) => {
  return (
    <Base isHeader={isHeader} currentTab={currentTab} setCurrentTab={setCurrentTab}>
      <Library />
    </Base>
  )
}

export default LibraryPage