import styled from 'styled-components';

const BaseBodyText = styled.Text`
  font-style: normal;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.87);
`;

const BodyText1 = styled(BaseBodyText)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

const BodyText2 = styled(BaseBodyText)`
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.25px;
  font-weight: 500;
`;

const BodyText3 = styled(BaseBodyText)`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #676c7a;
`;

const BodyText4 = styled(BaseBodyText)`
  font-size: 14px;
  color: #676c7a;
`;

export {BodyText1, BodyText2, BodyText3, BodyText4};
