import React, { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import templatePdf from '../../../reciept.pdf'
const Donateform = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile_No: "",
    Address: "",
    AdharId: "",
    Donation: "",
    Toward: "",
    Remark: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "Donation" ? value.replace(/[^\d]/g, '') : value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.Name) errors.Name = "Full Name is required";
    if (!formData.Email) errors.Email = "Email is required";
    if (!formData.Mobile_No) errors.Mobile_No = "Phone Number is required";
    if (!formData.Address) errors.Address = "Address is required";
    if (!formData.AdharId) errors.AdharId = "Adhaar ID No. is required";
    if (!formData.Donation)
      errors.Donation = "Donation Amount is required";
    if (!formData.Toward) errors.Toward = "Purpose of Donation is required";
    return errors;
  };

  const generateCertificate = async () => {
  try {
    // Load the PDF template
    const templatePdfBytes = await fetch(templatePdf).then((res) => res.arrayBuffer());

    // Load the PDF document
    const pdfDoc = await PDFDocument.load(templatePdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Set text properties
    const textOptions = { size: 12, color: rgb(0, 0, 0) };

    // Prepare data with default values to prevent undefined errors
    const name = formData.Name || "N/A";
    const address = formData.Address || "N/A";
    const amount = formData.Donation || "N/A";
    const toward = formData.Toward || "N/A";
    const remark = formData.Remark || "N/A";
    
    // Center position calculation
    const centerX = firstPage.getWidth() / 2;
    const startY = 600; // Starting Y position
    const lineSpacing = 20; // Spacing between lines

    // Function to draw text centered
    const drawCenteredText = (text, yOffset) => {
      const textWidth = text.length * 5; // Approximate width per character
      const x = centerX - textWidth / 2; // Centering the text
      firstPage.drawText(text, { x, y: yOffset, ...textOptions });
    };

    // Draw placeholders and user data
    drawCenteredText(`Name: ${name}`, startY);
    drawCenteredText(`Address: ${address}`, startY - lineSpacing);
    drawCenteredText(`Amount: Rs.${amount} `, startY - lineSpacing * 2);
    drawCenteredText(`Purpose of Donation: ${toward}`, startY - lineSpacing * 3);
    drawCenteredText(`Remarks: ${remark}`, startY - lineSpacing * 4);

    // Receipt number and date (hardcoded for this example)
    drawCenteredText(`Receipt No: 123456`, startY - lineSpacing * 5);
    drawCenteredText(`Date: 01-09-2003`, startY - lineSpacing * 6);

    // Save the modified PDF and prepare for download
    const modifiedPdfBytes = await pdfDoc.save();
    const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "donation_receipt.pdf";
    link.click();
  } catch (error) {
    console.error("Error generating certificate:", error);
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://192.168.1.2:8000/create-donation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error("Something went wrong with the donation request.");
        }
         
        const data = await response.json();
        console.log(data.order.amount)

        const options= {
          key: "rzp_test_bVnwqq5GvuvOi4", 
          order_id: data.order.id,
          amount: data.order.amount,
          currency: "INR",
          handler: function (response) {
            
            // Capture the payment details
            const paymentId = response.razorpay_payment_id; // Payment ID
            const orderId = response.razorpay_order_id; // Order ID
            const signature = response.razorpay_signature; // Signature
            
            // Log or send these details to your server for verification
            console.log('Payment ID:', paymentId);
            console.log('Order ID:', orderId);
            console.log('Signature:', signature);
            alert("Payment Successful!");

            fetch('http://192.168.1.2:8000/payment-verification', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  payment_id: paymentId,
                  order_id: orderId,
                  signature: signature,
                  data:formData
              }),
          })
          .then(response => response.json())
          .then(data => {
            generateCertificate(formData);
            console.log(response)
            console.log("Payment verification successful. Generating certificate...");
          })
          .catch((error) => {
              console.error('Error:', error);
          });

          },
        }
        const rzp = new window.Razorpay(options);
        rzp.open();
    
        console.log("Donation submitted successfully:", data);

        
        // Clear form fields after successful submission
        setFormData({
          Name: "",
          Email: "",
          Mobile_No: "",
          Address: "",
          AdharId: "",
          Donation: "",
          Toward: "",
          Remark: "",
        });
        // alert("Thank you for your donation!");
  
      } catch (error) {
        console.error("Error during donation submission:", error);
        alert("There was an error processing your donation. Please try again later.");
      }
    }
  };
  

  return (
    <section id="donate-form" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Make a Donation</h2>
        <form className="max-w-lg mx-auto grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          {/* Full Name and Email (two items in one line) */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                type="text"
                name="Name"
                placeholder="Full Name"
                value={formData.Name}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              />
              {errors.Name && <span className="text-red-500 text-sm">{errors.Name}</span>}
            </div>
            <div className="flex flex-col">
              <input
                type="Email"
                name="Email"
                placeholder="Email"
                value={formData.Email}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              />
              {errors.Email && <span className="text-red-500 text-sm">{errors.Email}</span>}
            </div>
          </div>

          {/* Mobile_No and Address */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                type="text"
                name="Mobile_No"
                placeholder="Phone Number"
                value={formData.Mobile_No}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              />
              {errors.Mobile_No && <span className="text-red-500 text-sm">{errors.Mobile_No}</span>}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="Address"
                placeholder="Address"
                value={formData.Address}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              />
              {errors.Address && <span className="text-red-500 text-sm">{errors.Address}</span>}
            </div>
          </div>

          {/* Donation Amount and Purpose */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <div className="relative">
                <span className="absolute inset-y-0 left-2 flex items-center text-gray-600">
                  {formData.Donation ? "₹" : ""}
                </span>
                <input
                  type="number"
                  name="Donation"
                  placeholder="Amount (in INR)"
                  value={formData.Donation}
                  onChange={handleInputChange}
                  className="border border-gray-600 p-3 rounded-md w-full pl-7 focus:outline-none focus:ring focus:ring-red-500 transition"
                />
              </div>
              {errors.Donation && <span className="text-red-500 text-sm">{errors.Donation}</span>}
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name="Toward"
                placeholder="Toward (Purpose)"
                value={formData.Toward}
                onChange={handleInputChange}
                className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              />
              {errors.Toward && <span className="text-red-500 text-sm">{errors.Toward}</span>}
            </div>
          </div>

          {/* ID Number (Adhaar/PAN) */}
          <div className="flex flex-col bg-white border rounded-md items-center">
            <input
              type="text"
              name="AdharId"
              placeholder="Adhaar, PAN or Any ID Proof"
              value={formData.AdharId}
              onChange={handleInputChange}
              className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
            />
            {errors.AdharId && <span className="text-red-500 text-sm">{errors.AdharId}</span>}
          </div>

          {/* Remark */}
          <div className="flex flex-col">
            <textarea
              name="Remark"
              placeholder="Remark (Optional)"
              value={formData.Remark}
              onChange={handleInputChange}
              className="border border-gray-600 p-3 rounded-md w-full focus:outline-none focus:ring focus:ring-red-500 transition"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-600 transition w-full"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Donateform;
