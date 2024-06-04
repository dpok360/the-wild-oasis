import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.4rem 1.2rem;
  border-radius: 90px;

  /* Make these dynamic, based on the received prop */
  color: rgb(255, 255, 255);
  background-color: var(--color-${(props) => props.type}-700);
`;

export default Tag;
