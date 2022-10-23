import React, { useContext } from 'react'
import { AppState } from '../App'

const Navbar = () => {

  const App = useContext(AppState)

  return (
    <nav className="flex justify-between container mx-auto items-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition  hover:scale-105 duration-500 rounded-3xl text-white">
        <div className="flex justify-center items-center">
          <h3 className="text-3xl font-semibold">Wallet.</h3>
        </div>


        {!App.connected ? (
           <div>
            <a onClick={App.cWallet} className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-6 rounded-full text-white cursor-pointer'>Connect</a>
          </div>
        ) : (
          <ul className="flex flex-col justify-between items-center space-y-1">
          <li className="text-lg font-bold"><a>Networks:</a></li>

            {/* dropdown coming soon */}
          <div className="py-1">
            <li onClick={App.changeToMainnet} className="font-semibold cursor-pointer"><a>Mainnet</a></li>
            <li onClick={App.changeToGoerli} className="font-semibold cursor-pointer"><a>Goerli</a></li>
          </div>
        </ul>
        )}

        
      </nav>
  )
}

export default Navbar