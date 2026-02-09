import { useState } from "react";
import { useNavigate } from "react-router";

export default function Subscribe() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    // firstName: "",  <-- ถ้ามีช่องอื่นก็เพิ่มตรงนี้ได้
    // lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,          // ก๊อปปี้ค่าเก่าที่มีอยู่ทั้งหมด
      [name]: value,    // อัปเดตเฉพาะช่องที่กำลังพิมพ์ (ใช้ name จาก tag input)
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // 3. เรียกใช้ข้อมูลจาก state ได้เลย (ไม่ต้องไป get จากไหนแล้ว)
      console.log("ข้อมูลที่จะส่ง:", formData.email);

      // จำลองการรอ 2 วินาที
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 4. ส่งไปหน้า Success
      navigate(`/success/${encodeURIComponent(formData.email)}`);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Subscribe (with State Object)</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email" // สำคัญมาก: ต้องตรงกับ key ใน formData state
          type="email"
          value={formData.email} // ผูกค่าเข้ากับ state
          onChange={handleChange} // อัปเดต state ทุกครั้งที่พิมพ์
          placeholder="Enter your email"
          required
        />
        &nbsp;
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "กำลังส่ง..." : "สมัครเลย"}
        </button>
      </form>

      {/* ลองเช็คค่าใน State แบบ Real-time */}
      <pre style={{ marginTop: "20px", background: "#eee", padding: "10px" }}>
        Current State: {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}