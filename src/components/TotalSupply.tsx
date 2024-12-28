import { useReadContract } from "wagmi";


export function TotalSupply() {

    const {data, isLoading, error} = useReadContract(
        {
            address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            abi: [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"
        }
    ],
        functionName: 'totalSupply',
    
        })

    return (
        <>
        {isLoading?  <div>"loading"</div>:
        <div>Total Supply of USDT is - {JSON.stringify(data?.toString())}</div>}
        </>
    )
}