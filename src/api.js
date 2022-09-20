const buildRequestOptions = (method, { credentials = "", body }) => {
  return {
    method,
    mode: "cors",
    ...(credentials && { credentials: "include" }),
    headers: {
      "content-type": "application/json",
    },
    ...(method !== "GET" && { body: JSON.stringify(body) }),
  };
};

export const getipDetails = async (ip = "") => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/ip`,
      buildRequestOptions("POST", {
        body: { ip, apikey: import.meta.env.VITE_API_KEY },
      })
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(data.message);
  } catch (error) {
    let msg;
    String(error.message).includes("ip address") ||
    String(error.message).includes("valid")
      ? (msg = error.message)
      : (msg = "Something went wrong on our side. ");
    throw new Error(msg);
  }
};

export const getGeolocation = async () => {
  try {
    const response = await fetch("https://api.ipregistry.co/?key=tryout");
    if (response.ok) {
      const data = await response.json();
      return { country: data.location.country.name };
    }

    return { country: "We are try to find you. 😉" };
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (me) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/admin/login`,
      buildRequestOptions("POST", {
        credentials: "include",
        body: { ...me },
      })
    );
    const json = await response.json();
    if (response.ok) {
      return json;
    } else if (String(json.message)) throw new Error(json.message);
    else throw new Error("Something went wrong :(");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/admin/logout`,
      buildRequestOptions("POST", {
        credentials: "include",
        body: {},
      })
    );
    const json = await response.json();
    if (response.ok) {
      return json;
    } else if (String(json.message)) throw new Error(json.message);
    else throw new Error("Something went wrong :(");
  } catch (error) {
    throw new Error(error.message);
  }
};

export const isAuthenticated = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/admin/me`,
      buildRequestOptions("GET", {
        credentials: "include",
        body: null,
      })
    );
    const json = await response.json();
    if (response.ok) {
      return json;
    } else if (String(json.message)) throw new Error(json.message);
    else throw new Error("Something went wrong :(");
  } catch (error) {
    throw new Error(error.message);
  }
};
