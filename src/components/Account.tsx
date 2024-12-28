import { useAccount, useDisconnect } from "wagmi"



export function Account() {

    const {address} = useAccount();
    const {disconnect} = useDisconnect();
    return (
        <>
        {address ? `Connected to ${address}`:address}
        <button onClick={() => disconnect()}>Disconnect</button>
        </>
    )
}