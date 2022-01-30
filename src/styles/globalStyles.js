import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#f6d5dc, #feeed4);
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
export const Logo = styled.img`
  width: 50px;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuItem = styled.a`
  padding: 20px 20px;
`;
export const MenuActiveItem = styled.button`
  padding: 20px 20px;
  background: #fee100;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
export const TimerText = styled.p`
  text-align: center;
  font-size: 70px;
  font-weight: bold;
  margin-top: 260px;
`;
export const CommentText = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  margin-top: 0px;
  margin-left: 300px;
`;
export const MintBlock = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 60px;
`;
export const Card = styled.div`
  display: flex;
  margin-top: 20px;
  border-radius: 20px;
  flex-direction: column;
  background: white;
  align-items: center;
  padding: 30px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const CardImg = styled.img`
  width: 350px;
`;
export const CardText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const CardButton = styled.button`
  border-radius: 30px;
  padding: 10px 120px;
  margin-top: 30px;
  background: red;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;
// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const TextTitle = styled.p`
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
