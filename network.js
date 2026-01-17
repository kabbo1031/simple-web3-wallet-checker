async function showNetwork() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    document.getElementById("network").innerText = network.name;
}
