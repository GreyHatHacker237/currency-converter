const BASE_URL = process.env.REACT_APP_API_URL || "http://backend:8000";

export const convertCurrency = async ({ amount, from_currency, to_currency }) => {
  try {
    const response = await fetch(`${BASE_URL}/convert/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount, from_currency, to_currency })
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la conversion");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur convertCurrency:", error);
    throw error;
  }
};

export const getConversionHistory = async () => {
  try {
    const response = await fetch(`${BASE_URL}/history/`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération de l'historique");
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur getConversionHistory:", error);
    return [];
  }
};
