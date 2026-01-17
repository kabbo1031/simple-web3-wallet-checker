document.getElementById("connectBtn").addEventListener("click", async function () {
    log("Connect button clicked");

    const wallet = await connectWallet();
    if (!wallet) {
        log("Wallet not connected");
        return;
    }

    showAddress(wallet);
    showBalance(wallet);
    showNetwork();
});
