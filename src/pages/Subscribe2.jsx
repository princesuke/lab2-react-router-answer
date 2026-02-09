import { useState } from "react";
import { useNavigate } from "react-router"; 

export default function Subscribe() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    //  const email = event.target.elements.email.value;

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    try {
      // จำลองการส่งข้อมูล (Delay 2 วิ)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log("บันทึกสำเร็จ:", email);

      // 3. ส่งไปหน้า Success พร้อม email ทาง URL
      // encodeURIComponent ช่วยป้องกันกรณี email มีตัวอักษรพิเศษ
      navigate(`/success/${encodeURIComponent(email)}`);

    } catch (err) {
      alert("เกิดข้อผิดพลาด");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required placeholder="Email ของคุณ" />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "กำลังส่ง..." : "สมัครเลย"}
      </button>
    </form>
  );
}