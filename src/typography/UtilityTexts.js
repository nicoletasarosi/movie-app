import styled from 'styled-components';

const BaseSubtitle = styled.Text`
  font-style: normal;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.87);
`;

const Subtitle1 = styled(BaseSubtitle)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

const Subtitle2 = styled(BaseSubtitle)`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.1px;
`;

export {Subtitle1, Subtitle2};
