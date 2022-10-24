import React from 'react'
import { useContext, useState } from 'react'
import { AppState } from '../App'
import truncateEthAddress from 'truncate-eth-address'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Wallet = () => {

    const App = useContext(AppState)

    const [copied, setcopied] = useState(false)

    if(copied){
        alert("Copied!")
        setcopied(!copied)
    }

    return (
    <div className="flex justify-center items-center">
        <div className="flex justify-center items-center container max-w-lg my-40 bg-gradient-to-r from-[#73D3CA] via-cyan-300 to-blue-300 rounded-lg">
            <div className="flex justify-center flex-col items-center my-6">
                <div className="py-5 flex justify-center flex-col items-center">
                <h3 className="text-2xl font-bold text-black">Account:</h3>
                <CopyToClipboard text={App.currentAccount} onCopy={() => setcopied(true)}>
                    <p className="text-[#464646] cursor-pointer">{truncateEthAddress(App.currentAccount)}</p>
                </CopyToClipboard>
                </div>

                <div className="flex justify-center flex-col items-center">
                <h3 className="text-2xl font-bold text-black">Balance:</h3>
                    <p className="text-[#464646]">{App.balance} ETH</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet