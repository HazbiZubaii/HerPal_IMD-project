import React from 'react';
import styled from 'styled-components';
import { FaYoutube } from 'react-icons/fa'; // Import YouTube icon

const MenstrualCupInstructions = () => {
  return (
    <Wrapper>
      <Header> This is a Menstrual Cup!! </Header>
      <Instructions>
        <p>Here are the steps to use a menstrual cup:</p>
        <InstructionList>
          <li>Step 1: Sterilize the cup before use.</li>
          <li>Step 2: Fold the cup and insert it.</li>
          <li>Step 3: Adjust the cup so it fits comfortably.</li>
          <li>Step 4: Remove and clean the cup every 8-12 hours.</li>
        </InstructionList>
      </Instructions>

      <ProsConsSection>
        <h2>Advantages:</h2>
        <p>
          <strong>Pros:</strong> Reusable, eco-friendly, long-lasting.
        </p>
        <p>
          <strong>Cons:</strong> Can be tricky to insert, initial learning curve.
        </p>
      </ProsConsSection>

      <YouTubeLinks>
        <h2>Learn More:</h2>
        <Link href="https://youtu.be/o9fPUfm-uYE?si=GhM0jMSJHF0erL15" target="_blank">
          <FaYoutube /> How to Use a Menstrual Cup ?
        </Link>
        <Link href="https://youtu.be/Xp4nLPH1-G8?si=ZDJyVqhdAPak1K30" target="_blank">
          <FaYoutube /> Benefits of Using a Menstrual Cup
        </Link>
      </YouTubeLinks>
    </Wrapper>
  );
};

export default MenstrualCupInstructions;

// Styled Components
const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: #2c3e50;
`;

const Header = styled.h1`
  text-align: center;
  color: #e52f8a; // Accent color for header
`;

const Instructions = styled.div`
  margin: 20px 0;

  p {
    font-size: 18px;
    line-height: 1.6;
  }
`;

const InstructionList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 10px 0;

  li {
    margin: 5px 0;
    padding: 10px;
    background-color: rgba(255, 182, 193, 0.8); // Light pink background
    border-radius: 5px;
  }
`;

const ProsConsSection = styled.div`
  margin: 20px 0;

  h2 {
    color: #e52f8a; // Accent color for subheadings
  }
`;

const YouTubeLinks = styled.div`
  margin-top: 20px;

  h2 {
    color: #e52f8a; // Accent color for subheadings
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  margin: 10px 0;
  text-decoration: none;
  color: #2c3e50; // Navy blue text color
  font-size: 18px;

  &:hover {
    color: #e52f8a; // Change color on hover
  }

  svg {
    margin-right: 10px; // Space between icon and text
  }
`;

