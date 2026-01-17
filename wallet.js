async function connectWallet() {
    if (!window.ethereum) {
        alert("MetaMask is not installed");
        return null;
    }

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        return signer;
    } catch (error) {
        console.log("Wallet connection failed", error);
        return null;
    }
}

async function showAddress(wallet) {
    const address = await wallet.getAddress();
    document.getElementById("address").innerText = address;
}
