 const LCoupon = () => {
    // 👇 5 सेकंड (5000ms) के बाद कूपन दिखेगा
    setTimeout(() => {
        document.getElementById("coupons").style.visibility = "visible";
        document.getElementsByClassName("content-blur")[0].style.filter = "blur(8px)";
        document.getElementsByClassName("content-blur")[0].style.pointerEvents = "none"; // पीछे क्लिक बंद करने के लिए
    }, 5000)
}

const closeCoupon = () => {
    // 💡 यहाँ से "coupons " का एक्स्ट्रा स्पेस हटा दिया गया है
    document.getElementById("coupons").style.visibility = "hidden";
    document.getElementsByClassName("content-blur")[0].style.filter = "none";
    document.getElementsByClassName("content-blur")[0].style.pointerEvents = "auto";
}

// टेस्ट करने के लिए इस लाइन को चालू (uncomment) करना न भूलें
// window.onload = LCoupon;
