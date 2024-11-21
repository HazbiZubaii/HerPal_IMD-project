import axios from "axios";

// Predefined responses for period-related queries
const predefinedResponses = {
    // Period Health
    "what is a sanitary pad": "A sanitary pad is an absorbent item worn in the underwear during menstruation to absorb menstrual flow.",
    "how to use a sanitary pad": "To use a sanitary pad, remove the protective paper from the back and place it in your underwear. Make sure it is centered.",
    "what is a menstrual cup": "A menstrual cup is a flexible cup made of silicone or rubber that is inserted into the vagina to collect menstrual fluid.",
    "how to use a menstrual cup": "To use a menstrual cup, fold it, insert it into the vagina, and let it open to create a seal to prevent leaks.",
    "what are the symptoms of periods": "Some common period symptoms include cramps, bloating, mood swings, fatigue, and headaches.",
    "how to manage period pain": "To manage period pain, you can try using heat pads, pain relievers, regular exercise, and stress management techniques.",
    "what is PMS": "PMS (Premenstrual Syndrome) refers to symptoms that occur in the luteal phase of the menstrual cycle, such as mood swings, irritability, and fatigue.",
    
    // Feminine Hygiene Products
    "what is a tampon": "A tampon is a small, cylindrical product made of absorbent material, inserted into the vagina during menstruation to absorb menstrual flow.",
    "how to use a tampon": "To use a tampon, insert it into your vagina using the applicator or your finger. Make sure it is positioned comfortably and change it every 4-8 hours.",
    "what is a pantyliner": "A pantyliner is a thin, absorbent pad worn in your underwear to absorb daily discharge or light menstrual flow.",
    "what is intimate wash": "Intimate washes are specially formulated soaps or gels designed for cleaning the genital area, ensuring hygiene and maintaining the pH balance.",
    "how to maintain feminine hygiene": "Maintaining feminine hygiene includes regularly washing the genital area with mild, unscented products, changing sanitary products frequently, and wearing breathable underwear.",
    
    // Medications and Treatments
    "what are common pain relievers for period pain": "Common medications for period pain relief include ibuprofen, naproxen, and acetaminophen. Always consult a healthcare provider before taking any medication.",
    "is it safe to take painkillers during periods": "It is generally safe to take over-the-counter painkillers like ibuprofen for period pain, but always consult a doctor, especially if you have any underlying health conditions.",
    "what is hormonal birth control": "Hormonal birth control includes pills, patches, or IUDs that regulate menstrual cycles and prevent pregnancy by releasing hormones like estrogen and progesterone.",
    "can exercise help with period pain": "Yes, moderate exercise can help reduce period pain by releasing endorphins, which are natural pain relievers. Yoga and walking are great options.",
    
    // Mood Detection
    "i am stressed": "I can see you're stressed. Try practicing yoga or deep breathing exercises to calm your mind. Taking a warm bath can also help relieve tension.",
    "i feel anxious": "It sounds like you're feeling anxious. Try some relaxation techniques like mindfulness, meditation, or even going for a short walk to ease your mind.",
    "i am sad": "I can sense you're feeling down. It's okay to have low moments. Try journaling, talking to someone you trust, or doing something that makes you feel good.",
    "i feel tired": "I can understand you're feeling fatigued. Make sure you're resting enough, staying hydrated, and eating nutritious foods. Light stretching or a nap could help.",
    "i am happy": "That's great to hear! Keep enjoying your day and share your positive energy with others around you!",
    "i am angry": "It sounds like you're feeling frustrated. Take a deep breath, count to 10, and try doing something calming like listening to soothing music or meditating.",
    
    // General Period Health Advice
    "how to track my period": "You can track your period using a period tracker app or by marking the start and end dates on a calendar. This will help predict your next cycle and detect any irregularities.",
    "how to know when i am ovulating": "Ovulation typically occurs around the middle of your menstrual cycle. Signs include changes in cervical mucus, mild pelvic pain, and increased basal body temperature.",
    "is it normal to have irregular periods": "Irregular periods can be normal, especially in teenagers or women approaching menopause. However, if irregularity persists or is accompanied by pain or excessive bleeding, it's good to consult a healthcare provider.",
    "how long should my period last": "The average menstrual period lasts 3 to 7 days. If your period lasts longer or shorter, or if you experience very heavy or light bleeding, it's worth discussing with your doctor.",

    // Feminine Hygiene Products
    "tampon": "A tampon is a small, cylindrical product made of absorbent material, inserted into the vagina during menstruation to absorb menstrual flow.",
    "tampon advantages": "Advantages of tampons: 1. Comfortable and discreet. 2. Does not cause bulkiness. 3. Suitable for swimming and sports.",
    "tampon disadvantages": "Disadvantages of tampons: 1. Risk of Toxic Shock Syndrome (TSS) if left in too long. 2. Can be uncomfortable to insert for some people. 3. Not as eco-friendly as reusable products.",
    
    // Menstrual Cup
    "menstrual cup": "A menstrual cup is a flexible cup made of silicone or rubber that is inserted into the vagina to collect menstrual fluid.",
    "menstrual cup advantages": "Advantages of menstrual cups: 1. Eco-friendly and reusable. 2. Can hold more fluid, reducing the need for frequent changes. 3. Comfortable once inserted properly.",
    "menstrual cup disadvantages": "Disadvantages of menstrual cups: 1. Can be tricky to insert and remove for beginners. 2. Requires cleaning and maintenance. 3. May not be suitable for those with certain medical conditions.",
    
    
    "thank you": "You're welcome! I'm here to help you. If you have more questions, feel free to ask!",
    
};

// Replace the external moodGuesser API call with predefined responses
async function getPeriodRelatedResponse(message) {
    const query = message.toLowerCase();
    if (predefinedResponses[query]) {
        return predefinedResponses[query];  // Return predefined response
    } else {
        return "I'm not sure about that. Feel free to ask about menstrual hygiene or products!";
    }
}

const API = {
    GetChatbotResponse: async (message) => {
        return new Promise(async (resolve, reject) => {
            setTimeout(async () => {
                if (message === "hi" || message === "hey" || message === "hello") {
                    resolve("Hello! I’m your period support bot. Ask me about menstrual hygiene.");
                } else {
                    try {
                        const data = await getPeriodRelatedResponse(message);  // Get predefined response
                        resolve(data); // Resolve with the period-related response
                    } catch (error) {
                        reject(error); // Reject on error
                    }
                }
            }, 1000);
        });
    },
};

export default API;
