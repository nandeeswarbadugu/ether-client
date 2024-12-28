import { WagmiProvider } from 'wagmi'
import { config } from './config'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WalletOptions } from './components/wallet-options';
import { Account } from './components/Account';
import { TotalSupply } from './components/TotalSupply';

const queryClient = new QueryClient();

function App() {
  return (

  
  <WagmiProvider config={config} >
    <QueryClientProvider client={queryClient}>
      <WalletOptions />
      <br />
      <Account />
      <br />
      <TotalSupply />
    </QueryClientProvider>
    
  </WagmiProvider>
  )
  
}


export default App;
