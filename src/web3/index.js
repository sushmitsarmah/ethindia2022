import { ethers } from "ethers";
import axios from 'axios';
import CampaignNFT from './abi/KarmaBookCampaignContract.json';

export const campaignNFT = {
    address: '0x8fEabc19dDC4D5e14108ea94F4491b5F9B8Dab83',
    abi: CampaignNFT.abi
};

export const getCampaignContract = async () => {
    const provider = new ethers.providers.Web3Provider(window?.ethereum)
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner()
    const contract = new ethers.Contract(
        campaignNFT.address,
        campaignNFT.abi,
        signer
    );
    contract.on("CampaignCreated", async (description, id, share, ngo_address, campaign_id) => {
        console.log(description, id, share, ngo_address, campaign_id);
    });
    return contract;
};

export const redeemRewardNFT = async (contract, address, tokenId) => {
    const from_address = await contract.ownerOf(tokenId);
    const res = await contract.safeTransferFrom(from_address, address, tokenId);
    console.log(res);
};