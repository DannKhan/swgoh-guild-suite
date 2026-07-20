const BASE_URL = "https://free-comlink.onrender.com";

async function post(endpoint, payload) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            enums: false,
            payload
        })
    });

    if (!response.ok) {
        throw new Error(`Comlink request failed: ${response.status}`);
    }

    return response.json();
}

export { post };
