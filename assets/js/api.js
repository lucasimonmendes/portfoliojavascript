
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/lucasimonmendes/portfoliojavascript/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}
