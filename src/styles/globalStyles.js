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
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center
  }
`;
export const LogoContain = styled.div`
  displau: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: 50px;
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const MenuItem = styled.a`
  padding: 20px 20px;
  text-decoration: none;
  color: black;
`;
export const MenuActiveItem = styled.button`
  padding: 20px 20px;
  background: #fee100;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
export const Timerblock = styled.div`
  display: flex;
  justify-content: center;
`;
export const TimerText = styled.div`
  margin-top: 260px;
  width: 400px;
  display: flex;
  background: green;
  justify-content: center;
  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;
export const ItemContain = styled.div`
  margin: 10px 20px;
`;
export const TimerValue = styled.p`
  font-size: 50px;
  color: black;
  font-weight: bold;
`;
export const Timertitle = styled.p`
  color: white;
  text-align: center;
`
export const CommentText = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 300px;
  @media (max-width: 767px) {
    margin-left: 0;
  }
`;
export const MintBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 60px;
`;
export const Card = styled.div`
  display: flex;
  margin: 20px;
  border-radius: 20px;
  flex-direction: column;
  background: white;
  align-items: center;
  padding: 30px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const CardImg = styled.img`
  width: 330px;
`;
export const CardText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const CardButton = styled.button`
  border-radius: 30px;
  padding: 10px 110px;
  margin-top: 30px;
  background: red;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;