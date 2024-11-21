import React from 'react';
import styled from 'styled-components';
import { FaYoutube } from 'react-icons/fa'; // Import YouTube icon

const SanitaryPadInstructions = () => {
  return (
    <Wrapper>
      <Header>This is  a Sanitary Pad !!</Header>
      <Instructions>
        <p>Here are the steps to use a sanitary pad:</p>
        <InstructionList>
          <li>Step 1: Unwrap the sanitary pad.</li>
          <li>Step 2: Peel the pad off the adhesive strip.</li>
          <li>Step 3: Place it inside your underwear.</li>
          <li>Step 4: Change regularly for hygiene.</li>
        </InstructionList>
      </Instructions>

      <ProsConsSection>
        <h2>Advantages:</h2>
        <p>
          <strong>Pros:</strong> Convenient, disposable, widely available.
        </p>
        <p>
          <strong>Cons:</strong> Can be uncomfortable, environmental impact due to disposal.
        </p>
      </ProsConsSection>

      <YouTubeLinks>
        <h2>Learn More:</h2>
        <Link href="https://youtu.be/J6bZsI1pi_o?si=yfvNQCdGLYHKE5vm" target="_blank">
          <FaYoutube /> How to Use a Sanitary Pad and Dispose them?
        </Link>
        <Link href="https://youtu.be/UoVoUaEySfQ?si=f_ndcU6Rn34dxenp" target="_blank">
          <FaYoutube /> How to Change A Pad- Step by Step?
        </Link>
      </YouTubeLinks>
    </Wrapper>
  );
};

export default SanitaryPadInstructions;

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

