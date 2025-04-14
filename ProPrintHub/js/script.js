document.addEventListener('DOMContentLoaded', () => {
    console.log('ProPrintHub is ready!');

    // Razorpay Payment Integration
    const buyNowButton = document.getElementById('buy-now');
    buyNowButton.addEventListener('click', () => {
        const options = {
            key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay API key
            amount: 2599900, // Amount in paise (₹25,999.00)
            currency: "INR",
            name: "ProPrintHub",
            description: "Purchase Digital Printer",
            image: "images/digital-printer.jpg", // Optional: Add your logo or product image
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                // You can send the payment ID to your server for verification
            },
            prefill: {
                name: "Customer Name", // Optional: Prefill customer name
                email: "customer@example.com", // Optional: Prefill customer email
                contact: "9876543210" // Optional: Prefill customer contact
            },
            theme: {
                color: "#003366" // Customize the payment popup color
            }
        };

        const razorpay = new Razorpay(options);
        razorpay.open();
    });
});