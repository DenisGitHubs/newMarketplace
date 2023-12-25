import styled from 'styled-components';

export const ModalSuccess = styled.div`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  height: 50px;
  margin-top: 30px;
`;
export const Message = styled.p`
  color: green;
  font-weight: 600;
  font-size: 18px;
`;
