
document.getElementById("fetch-btn").onclick = getCombinedResponse
async function getCombinedResponse() {
    const name = document.getElementById("name").value;

    if (localStorage.getItem(name) != null) {
        document.getElementById("info").innerText = localStorage.getItem(name);
        return localStorage.getItem(name)

    } else {
        const response = await fetch("http://localhost:8080/api/" + name)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem(name, JSON.stringify(data));
                document.getElementById("info").innerText = JSON.stringify(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
}