const profileMenuButton = document.getElementById("profile-menu-button");
        const profileMenu = document.getElementById("profile-menu");

        profileMenuButton.addEventListener("click", () => {
            profileMenu.classList.toggle("hidden");
        });

        // Close the dropdown when clicking outside of it
        document.addEventListener("click", (event) => {
            if (!profileMenuButton.contains(event.target)) {
                profileMenu.classList.add("hidden");
            }
        });