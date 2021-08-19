import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border: 1px solid #ececec;
  width: 100%;
  min-height: 200px;
  box-shadow: 0px 2px 2px 1px rgb(0 0 0 / 40%);
  border-radius: 3px;
  padding: 8px;
`;
Card.displayName = "Card";

export const ThinCard = styled(Card)`
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  //A little ehh, but if this were a real project I'd clean this up.
  & > *:nth-child(odd) {
    margin-top: 8px;
  }
`;
ThinCard.displayName = "ThinCard";
