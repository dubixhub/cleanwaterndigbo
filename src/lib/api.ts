/**
 * API Utility
 * Centralized API configuration and helper functions
 */

// Get API base URL from environment variable or use production URL as default
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://api.cleanwaterndigbo.org";

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}

/**
 * Submit contact form to API
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send message");
    }

    return result;
  } catch (error) {
    console.error("API Error:", error);

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
