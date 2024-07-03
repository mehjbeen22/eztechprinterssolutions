import React from "react";

const faqs = [
  {
    category: "General Printer Use",
    questions: [
      {
        question:
          "What are the different types of printers available (inkjet, laser, etc.)?",
        answer:
          "Inkjet printers are versatile and good for photo printing but can be costly for heavy use due to ink prices. Laser printers are faster and more cost-effective for text documents but usually less suited for high-quality photo prints.",
      },
      {
        question:
          "How do I connect my printer to my computer (wired, wireless)?",
        answer:
          "For wired connections, use a USB cable to connect the printer to your computer. For wireless connections, ensure your printer is connected to the same Wi-Fi network as your computer, then follow the setup instructions specific to your operating system.",
      },
      {
        question:
          "What type of paper should I use for different printing tasks (text, photos)?",
        answer:
          "Use standard office paper for text documents, glossy or matte photo paper for photos, and make sure to check your printer's compatibility with the paper type.",
      },
      {
        question:
          "How do I troubleshoot common printing problems (ink cartridges, paper jams)?",
        answer:
          "Check if cartridges are correctly installed, ensure paper is loaded properly, and follow detailed troubleshooting guides on our blog for specific issues.",
      },
      {
        question: "How can I maintain my printer for optimal performance?",
        answer:
          "Regularly clean your printer, replace ink cartridges as needed, and perform routine maintenance as recommended by the manufacturer.",
      },
    ],
  },
  {
    category: "Ordering and Support",
    questions: [
      {
        question:
          "What types of printer supplies do you offer (ink cartridges, toner, paper)?",
        answer:
          "We offer a wide range of supplies including ink cartridges, toner, and various types of paper compatible with many printer models.",
      },
      {
        question: "How do I order printer supplies from your website?",
        answer:
          "Select the items you need, add them to your cart, proceed to checkout, and choose your preferred payment and delivery options.",
      },
      {
        question: "What is your return policy for printer supplies?",
        answer:
          "You can return unopened or defective items within 30 days of purchase. Please refer to our return policy page for more details.",
      },
      {
        question: "How do I contact customer support if I have a question?",
        answer:
          "You can reach our customer support via phone, email, or live chat available on our website.",
      },
    ],
  },
  {
    category: "Software and Drivers",
    questions: [
      {
        question: "Where can I download the latest drivers for my printer?",
        answer:
          "Visit our driver download page or the manufacturer's website to get the latest drivers for your printer model.",
      },
      {
        question: "How do I install the printer drivers on my computer?",
        answer:
          "Download the driver file, run the installer, and follow the on-screen instructions. Refer to our detailed guide for specific operating systems if needed.",
      },
      {
        question: "What printing software is compatible with my printer?",
        answer:
          "We offer printing software that enhances your printer's functionality. Check the software section on our website for compatibility details.",
      },
    ],
  },
  {
    category: "Advanced Topics",
    questions: [
      {
        question: "What is the difference between DPI and PPI in printing?",
        answer:
          "DPI (Dots Per Inch) refers to the printer's resolution, while PPI (Pixels Per Inch) refers to the image resolution. Higher DPI generally means better print quality.",
      },
      {
        question: "Can I refill ink cartridges or use generic brands?",
        answer:
          "Refilling cartridges can be cost-effective but might affect print quality and void warranties. Generic brands are cheaper but ensure they are compatible with your printer.",
      },
      {
        question: "How can I print wirelessly from my smartphone or tablet?",
        answer:
          "Use the printer's mobile app or AirPrint for iOS devices and Google Cloud Print for Android devices. Ensure your printer and device are on the same network.",
      },
      {
        question:
          "What are the security considerations for using a wireless printer?",
        answer:
          "Secure your network with a strong password, disable unnecessary network protocols, and keep your printer's firmware updated to protect against vulnerabilities.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="bg-white text-[#115e59] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        {faqs.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-teal-900 underline mb-4">
              {section.category}
            </h2>
            {section.questions.map((q, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{q.question}</h3>
                <p className="text-gray-700">{q.answer}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
