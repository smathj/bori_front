import {createContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import {DataView, DataViewType} from "./components/dataView/DataView.tsx";


const contextData :DataViewType = {
    type: 'Card',
    limit: 12,
    offset: 12,
    currentPage: 1,
    start: 0

}


export const DataContext: React.Context<DataViewType> = createContext(contextData)


function App() {

    console.log('App 컴포넌트 ...');

  return (
    <DataContext.Provider value={contextData}>
        <Header/>
        <DataView />
        <Footer/>
    </DataContext.Provider>
  )
}

export default App
