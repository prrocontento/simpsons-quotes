export async function getQuotesService() {
  try {
    const response = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=5"
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
