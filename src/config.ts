import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'

import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet],
  connectors:[injected()],
	  transports: {
	    [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/Tf44rSGwRPjROnMtiOn22L7-t8QGqCZm"),
  },
})