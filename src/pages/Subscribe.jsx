import { Form, useActionData, useNavigation } from "react-router-dom";

function Subscribe() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h1>Subscribe Page</h1>
      {actionData?.error && (
        <p style={{ color: "crimson" }}>{actionData.error}</p>
      )}
      <Form method="post" replace>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        &nbsp;
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "กำลังส่ง..." : "สมัครเลย"}
        </button>
      </Form>
    </div>
  );
}

export default Subscribe;
