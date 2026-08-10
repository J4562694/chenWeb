export const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export type DemoPayload = {
  name: string;
  message: string;
};

export async function submitDemoPayload(payload: DemoPayload) {
  const response = await fetch(`${apiBaseUrl}/api/v1/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json();
}

