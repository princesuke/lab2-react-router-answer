import { redirect } from "react-router";

export async function subscribeAction({ request }) {
  const formData = await request.formData();
  const email = (formData.get("email") || "").toString().trim();

  if (!email) {
    // In a real app, you'd return validation errors with a 400 and use useActionData
    return new Response(JSON.stringify({ error: "กรุณากรอกอีเมลก่อน" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Simulate server-side processing here if needed
  // await new Promise((r) => setTimeout(r, 300));

  return redirect(`/success/${encodeURIComponent(email)}`);
}
