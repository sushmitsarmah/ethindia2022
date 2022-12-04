import {useEffect, useState} from 'react';
import {
    useAccount,
    useProvider,
    useConnect,
    useSigner,
    // chain,
    useNetwork
} from 'wagmi';

const LeaderBoard = () => {
    const { chain, chains } = useNetwork()
    const [nftData, setNFtData] = useState();

    // fetch from nft port
    const fetchNFTData = async () => {
        const url = `https://api.nftport.xyz/v0/nfts?chain=${chain.name.toLowerCase()}&page_size=50&include=metadata`;
        const res = await fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.REACT_APP_NFT_PORT_KEY
                },
            }
        );
        const data = await res.json();
        setNFtData(data.nfts);
    };

    useEffect(() => {
        fetchNFTData();
    }, []);

    return (
        <div>Leaderboard</div>
    )
};

export default LeaderBoard;