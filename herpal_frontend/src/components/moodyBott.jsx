import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// Predefined responses for different queries (chat.js logic)
const responses = {
  "hello": "Hi! How can I assist you with your period-related queries today?",
  "what is a menstrual cycle": "A menstrual cycle is the regular natural change that occurs in the female reproductive system that makes pregnancy possible. It usually lasts around 28 days but can vary from person to person.",
  "when should i start using a sanitary pad": "You should start using a sanitary pad when your period begins, and continue using it throughout the duration of your menstrual cycle.",
  "how often should i change my pad": "You should change your pad every 4 to 6 hours to maintain good hygiene and avoid discomfort.",
  "what is a menstrual cup": "A menstrual cup is a reusable, bell-shaped cup made of medical-grade silicone. It's inserted into the vagina to collect menstrual blood.",
  "how to use a menstrual cup": "To use a menstrual cup, fold it, insert it into the vagina, and make sure it's fully opened. Empty and clean it every 8-12 hours before reinserting.",
  "is it safe to use a tampon": "Yes, tampons are generally safe to use as long as you follow the instructions carefully. It’s important to change your tampon every 4 to 6 hours to avoid risks like Toxic Shock Syndrome (TSS).",
  "what are the symptoms of PMS": "Symptoms of PMS (Premenstrual Syndrome) include mood swings, bloating, cramps, headaches, and fatigue. They typically occur a week or two before your period starts.",
  "how to relieve period cramps": "To relieve period cramps, try using a heating pad, doing light exercise, taking pain relievers, or drinking herbal tea like chamomile or ginger.",
  "what is period blood color": "Period blood can range in color from bright red to dark brown or even black at the start or end of your period. The color depends on how fresh or old the blood is.",
  "is it normal to miss a period": "Missing a period can be normal occasionally, but if you miss several cycles or experience other symptoms, you should consult a healthcare professional.",
  "how to track my period": "You can track your period by using a period tracker app or simply noting the dates on a calendar. Many apps also provide predictions for ovulation and fertility windows.",
  "how to maintain menstrual hygiene": "To maintain menstrual hygiene, make sure to change your pads or tampons regularly, wash your hands before and after changing, and store your products in a clean, dry place.",
  "is it safe to exercise during periods": "Yes, it's safe to exercise during your period, and in fact, light exercise can help alleviate cramps and improve your mood. Just listen to your body and avoid strenuous activities if you're feeling uncomfortable.",
  "how can i prevent period leaks": "To prevent period leaks, ensure you use the right absorbency for your flow, change pads or tampons regularly, and consider using a pantyliner for added protection.",
  "why is my period late": "There can be several reasons for a late period, including stress, hormonal changes, diet, exercise, or pregnancy. If it's consistently late, you may want to consult a healthcare provider.",
  "what is endometriosis": "Endometriosis is a condition where tissue similar to the lining of the uterus grows outside the uterus. It can cause pain, heavy bleeding, and fertility issues.",
  "should i use a pad or tampon": "It depends on personal preference. Pads are easy to use and comfortable, while tampons are more discreet and allow for more freedom of movement. You can also use menstrual cups as an alternative.",
  "is it okay to swim on my period": "Yes, you can swim during your period. If you’re using a tampon or menstrual cup, it will help you stay clean and comfortable in the water.",
  "how to reduce heavy flow": "To reduce heavy flow, try using menstrual cups or tampons with higher absorbency, and consider talking to a healthcare provider about options like birth control or medication to regulate your cycle."
};

// Function to get chatbot response
const getChatbotResponse = (userInput) => {
  const normalizedInput = userInput.trim().toLowerCase();
  const response = responses[normalizedInput];
  return response || "Sorry, I didn't understand that. Could you ask something else about periods or menstrual health?";
};

const MoodyBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  // Load a welcome message when the component first renders
  useEffect(() => {
    setMessages([
      { text: "Hi! How can I assist you with your period-related queries today?", sender: "bot" }
    ]);
  }, []);

  const handleSend = () => {
    if (!userInput) return;

    // Add user message
    const newMessages = [
      ...messages,
      { text: userInput, sender: "user" },
      // Add bot response
      { text: getChatbotResponse(userInput), sender: "bot" }
    ];

    setMessages(newMessages);
    setUserInput(''); // Clear the input field
  };

  return (
    <div className="body">
      <header className="header">
        I can assist with period-related questions. Feel free to ask!
      </header>
      <div className="chatbot">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={message.sender}>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="input-section">
          <input 
            type="text" 
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)} 
            placeholder="Ask something..." 
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<MoodyBot />, rootElement);

export default MoodyBot;


