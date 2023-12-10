import type { ILayoutHeaderProps } from "./LayoutHeader.types";
import {
  Wrapper,
  InnerButton,
  InnerWrapper,
  InnerLogo,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: ILayoutHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>🎉FSTV</InnerLogo>
        <div>
          <InnerButton onClick={props.onClickMoveToLogin}>로그인</InnerButton>
          <InnerButton>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
