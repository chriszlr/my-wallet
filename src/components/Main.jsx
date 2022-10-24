import React, { useContext, useState } from 'react'
import { AppState } from '../App'
import Wallet from './Wallet';
import ETHTransfer from './ETHTransfer';


const Main = () => {

    const App = useContext(AppState)


  return (
    <div>
        {App.route == "wallet" ? (
            <Wallet />
        ) : (
            <ETHTransfer />
        )}
    </div>    
  )
}

export default Main