import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto items-centet p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:bg-gradient-to-r transition ease-in-out delay-150s hover:scale-105 duration-500 rounded-3xl text-white">
        <div className="flex justify-center items-center">
          <h3 className="text-3xl font-semibold">Wallet.</h3>
        </div>

        <ul className="flex flex-col justify-between items-center space-y-1">
          <li className="text-lg font-bold"><a>Network:</a></li>

          <div className="py-1">
            <li className="font-semibold"><a>Mainnet</a></li>
            <li className="font-semibold"><a>Goerli</a></li>
          </div>
        </ul>
      </nav>
  )
}

export default Navbar