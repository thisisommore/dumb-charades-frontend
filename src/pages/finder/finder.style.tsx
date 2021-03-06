import styled from "styled-components";

const StyledFinder = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  .card {
    box-shadow: 0 0 27px rgba(0, 0, 0, 0.22);
    padding: 20px;
    border-radius: 22px;
  }
  .clues {
    display: inline-flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    @media only screen and (max-width: 570px) {
      width: 100% !important;
    }
    .clue {
      padding: 10px;
      display: inline;
      background-color: var(--color);
      color: white;
      margin-bottom: 4px;
      margin-right: 10px;
    }

    h2 {
      margin: 10px 0;
      width: 100%;
    }
  }
  .your-guess {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    min-width: 40%;
    @media only screen and (max-width: 570px) {
      width: 100% !important;
      margin-left: 0px;
    }
    .button-submit {
      margin-top: 10px;
      width: 100%;
    }
  }
`;

export default StyledFinder;
