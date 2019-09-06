"use strict";
import fetch from "cross-fetch";
import parameters from "./utils";

export const packageThree = async () => {
  console.log("Inside package three");
  const BASE_URL = "https://codesandbox.io/api/v1/sandboxes/define";
  try {
    const response = await fetch(`${BASE_URL}?json=1`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ files: parameters })
    });

    const result = await response.json();

    return { success: true, payload: result.sandbox_id };
  } catch (error) {
    return { success: false, payload: error.message };
  }
};
