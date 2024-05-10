export function fetchImages(searchData) {
    const searchParams = new URLSearchParams({
        key: '43761083-735c77d8194f3d0bda00bacf0',
        q: searchData,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}