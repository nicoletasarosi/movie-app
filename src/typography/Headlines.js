import styled from 'styled-components';

const BaseHeading = styled.Text`
  font-style: normal;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.87);
`;

const Heading1 = styled(BaseHeading)`
  font-size: 24px;
  line-height: 36px;
`;

const Heading2 = styled(BaseHeading)`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
`;

export {Heading1, Heading2};
