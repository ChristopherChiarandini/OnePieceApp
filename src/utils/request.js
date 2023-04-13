export default function Request(url) {
    
    // Code requête générale par url

    return fetch(url).then((res) => res.json())
}