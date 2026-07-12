const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getAuthToken = () => {
  return localStorage.getItem("token") || localStorage.getItem("authToken");
};

export const apiRequest = async (path, options = {}) => {
  const token = getAuthToken();
  const headers = {
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message =
      typeof data === "object" && data !== null && data.message
        ? data.message
        : "Request failed";

    throw new Error(message);
  }

  return data;
};
