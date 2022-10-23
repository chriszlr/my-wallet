import {useState, createContext, useEffect} from "react"
import {ethers} from "ethers"
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export const AppState = createContext()

const { ethereum } = window

function App() {

  const [connected, setconnected] = useState(false)
  const [currentAccount, setcurrentAccount] = useState("")
  const [balance, setbalance] = useState("")
  const [chain, setchain] = useState("")
  
  
  useEffect(() => {
    cWallet()
    accountBalance()
    chainId()
  }, [])

  ethereum.on("accountsChanged", (accounts) => {
    window.location.reload()
  })

  ethereum.on("chainChanged", () => {
    window.location.reload()
  })

  // connect wallet
  const cWallet = async () => {
    if(ethereum){
      try {
        const accounts = await ethereum.request({method: "eth_requestAccounts"})
        setcurrentAccount(accounts[0])
        console.log("current account set to ", accounts[0])
        setconnected(true)
      } catch (error) {
        console.log(error)
      }
    }else{
      console.log("ethereum object not found")
    }
  }


  // get account balance
  const accountBalance = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer =  provider.getSigner()
    let bal = await signer.getBalance()
    const convertBal = ethers.utils.formatEther(bal)
    setbalance(convertBal)
  }

  const chainId = async () => {
    let req_chain = await ethereum.request({method: "eth_chainId"})
    if(req_chain !== "0x5" && req_chain !== "0x1"){
      alert("Please switch to the mainnet or the goerli testnet to continue!")
    }

    if(req_chain = "0x5"){
      setchain("Goerli")
      console.log("On Goerli Network!")
    }else if(req_chain = "0x1"){
      setchain("Mainnet")
      console.log("On Mainnet!")
    }else{
      console.log("chain not recognized !!!!")
    }
  }

  const changeToMainnet = async () => {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }],
    })

    setchain("Mainnet")
  }

  const changeToGoerli = async () => {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x5' }],
    })

    setchain("Goerli")
  }



  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#111860] via-indigo-500 to-cyan-600">
      <AppState.Provider value={{connected, setconnected, currentAccount, setcurrentAccount, cWallet, accountBalance, balance, setbalance, chainId, chain, setchain, changeToMainnet, changeToGoerli}}>
        {!connected ? <Navbar /> : (
          <div>
          <Navbar/>
          <Main />
          </div>
        )}
      </AppState.Provider>
    </div>
  );
}

export default App;
