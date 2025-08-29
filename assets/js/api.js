
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/matheussouza94/js-developer-portfolio-DIO/refs/heads/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
