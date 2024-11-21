import React from 'react';
import styled from 'styled-components';
import { FaYoutube } from 'react-icons/fa'; // Import YouTube icon

const TamponInstructions = () => {
  return (
    <Wrapper>
      <Header>This is a Tampon !!</Header>
      <Instructions>
        <p>Here are the steps to use a tampon:</p>
        <InstructionList>
          <li>Step 1: Wash your hands thoroughly.</li>
          <li>Step 2: Unwrap the tampon and pull the string to ensure it's secure.</li>
          <li>Step 3: Insert the tampon using the applicator or your fingers.</li>
          <li>Step 4: Ensure it's comfortably placed and change it every 4-8 hours.</li>
        </InstructionList>
      </Instructions>

      <ProsConsSection>
        <h2>Advantages:</h2>
        <p>
          <strong>Pros:</strong> Discreet, comfortable, allows for swimming.
        </p>
        <p>
          <strong>Cons:</strong> Requires proper insertion, risk of TSS (Toxic Shock Syndrome) if not changed on time.
        </p>
      </ProsConsSection>

      <YouTubeLinks>
        <h2>Learn More:</h2>
        <Link href="https://www.youtube.com/watch?v=5ECfobwUhsM&pp=ygUWaG93IHRvIGluc2VydCBhIHRhbXBvbg%3D%3D" target="_blank">
          <FaYoutube /> How to Insert and Use a Tampon?
        </Link>
        <Link href="https://www.youtube.com/watch?v=qG3_TXrpAXw&pp=ygUaVGlwcyBmb3IgYSBzYWZlIHRhbXBvbiB1c2U%3D" target="_blank">
          <FaYoutube /> Tips for Safe Tampon Use.
        </Link>
      </YouTubeLinks>
    </Wrapper>
  );
};

export default TamponInstructions;

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
