async function showBalance(wallet) {
    const provider = wallet.provider;
    const address = await wallet.getAddress();
    const balance = await provider.getBalance(address);
    const ethBalance = ethers.utils.formatEther(balance);
    document.getElementById("balance").innerText = ethBalance + " ETH";
}
