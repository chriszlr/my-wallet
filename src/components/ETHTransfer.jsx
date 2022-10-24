import React, { useContext } from 'react'
import { AppState } from '../App'
import { useState } from "react"
import { ethers } from "ethers"


const ETHTransfer = () => {

    const App = useContext(AppState)

    const [to, setto] = useState("")
    const [amount, setamount] = useState("")
    const [message, setmessage] = useState("")

    const send = async () => {
        const params = {
        from: App.currentAccount,
        to: to,
        value: amount,
        data: ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message))
        }
        const tx = await window.ethereum.request({method: "eth_sendTransaction", params: [params]})
    }

    return (
    <div className="flex justify-center items-center">
        <div className="flex justify-center items-center container max-w-lg my-40 bg-gradient-to-r from-[#73D3CA] via-cyan-300 to-blue-300 rounded-lg">
            <div className="flex justify-center flex-col items-center my-6">
                <div className="py-5 flex justify-center flex-col items-center">
                <h3 className="text-2xl font-bold text-black my-3">* Recipient:</h3>
                    <input type={"text"} className="placeholder:italic placeholder:text-gray-800 block bg-transparent w-full border border-gray-900 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder='Address' value={to} onChange={(e) => setto(e.target.value)} />
                </div>

                <div className="flex justify-center flex-col items-center">
                <h3 className="text-2xl font-bold text-black my-3">* Amount:</h3>
                    <input type={"text"} className="placeholder:italic placeholder:text-gray-800 block bg-transparent w-full border border-gray-900 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder='Amount (in wei)' value={amount} onChange={(e) => setamount(e.target.value)} />
                </div>

                <div className="flex justify-center flex-col items-center">
                    <label for="message" className="text-xl font-semibold text-black my-3">Message</label>
                    <textarea id="message" rows="2" className="block p-2.5 w-full text-sm text-white bg-gray-700 bg-opacity-80 rounded-lg focus:ring-blue-500" placeholder="Your message..." value={message} onChange={(e) => setmessage(e.target.value)}>{message}</textarea>
                </div>

                <button onClick={send} className='mt-5 mb-3 '>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ETHTransfer