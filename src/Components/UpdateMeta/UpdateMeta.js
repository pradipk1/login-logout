export function updateOpenGraphTags(username) {
    // Update Open Graph tags dynamically based on login information
    document.querySelector('meta[property="og:title"]').content = "Welcome, " + username + "!";
    document.querySelector('meta[property="og:description"]').content = "User logged in: " + username;
    document.querySelector('meta[property="og:image"]').content = "url_to_user_image"; // Replace with actual URL
}

export function resetOpenGraphTags() {
    // Reset Open Graph tags to default values
    document.querySelector('meta[property="og:title"]').content = "Login/Logout Web Page Example";
    document.querySelector('meta[property="og:description"]').content = "A simple web page with login/logout functionality.";
    document.querySelector('meta[property="og:image"]').content = "url_to_default_image"; // Replace with actual URL
}