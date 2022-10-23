import React from 'react'

const Main = () => {
  return (
    <div className="flex justify-center items-center">
        <div className="flex justify-center items-center container max-w-lg my-40 bg-gradient-to-r from-[#73D3CA] via-cyan-300 to-blue-300 rounded-lg">
          <div className="flex justify-center flex-col items-center my-6">
            <div className="py-5 flex justify-center flex-col items-center">
              <h3 className="text-2xl font-bold text-black">Account:</h3>
              <p className="text-[#464646]">0x...fhfn</p>
            </div>

            <div className="flex justify-center flex-col items-center">
            <h3 className="text-2xl font-bold text-black">Balance:</h3>
            <p className="text-[#464646]">143 ETH</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main