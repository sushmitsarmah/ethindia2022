import { useEffect } from 'react';
import { Links } from "../Router";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
    useAccount,
    useProvider,
    useConnect,
    useSigner,
    // chain,
    useNetwork
} from 'wagmi';

import { ethers } from 'ethers';

import {
    ChainId
} from "@biconomy/core-types";

import SmartAccount from "@biconomy/smart-account";

import web3 from 'web3';
import DSA from 'dsa-connect';

const Logo = () => <div>
    <img className='w-3/4' src="/logo.svg"/>
</div>

const Navbar = () => {
    const { address, isConnected } = useAccount();
    const { data: signer, isError, isLoading } = useSigner()
    const { chain, chains } = useNetwork()

    console.log(chain, chains)

    useEffect(() => {
        const init = async () => {
            if (signer) {
                const walletProvider = new ethers.providers.Web3Provider(signer.provider.provider);
                let options = {
                    activeNetworkId: chain.id,
                    supportedNetworksIds: chains.map(k => k.id)
                }

                let smartAccount = new SmartAccount(walletProvider, options);
                smartAccount = await smartAccount.init();
                console.log(smartAccount)

                const w = new web3(walletProvider);
                console.log(w)
                const dsa = new DSA(w, chain.id);
                // await dsa.build();
                // console.log(dsa)
            }
        };
        init();

    }, [signer]);

    const links = () => Links.map((k, i) => (
        <li key={i}><Link to={k.path}>{k.title}</Link></li>
    ));

    return (
        <div className="navbar">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                        {links()}
                    </ul>
                </div> */}
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <Logo />
                </Link>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {links()}
                </ul>
            </div> */}
            <div className="navbar-end">
                <ConnectButton />
            </div>
        </div>
    )
};

export default Navbar;