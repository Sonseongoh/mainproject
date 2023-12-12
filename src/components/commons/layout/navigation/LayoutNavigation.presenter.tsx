import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import type { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MENUS = [
  { name: "사진첩", pages: "/photos" },
  { name: "라이브게시판", page: "/boards" },
  { name: "공연 정보", page: "/Stage" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigationUI(
  props: ILayoutNavigationUIProps
): JSX.Element {
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <MenuItem id={el.page} onClick={props.onClickMenu} key={el.page}>
          {el.name}
        </MenuItem>
      ))}
    </Wrapper>

    // 리팩토링 전
    //    <Wrapper>
    //  <MenuItem onClick={props.onClickMenuBoards}>라이브게시판</MenuItem>
    //  <MenuItem onClick={props.onClickMenuStage}>공연 정보</MenuItem>
    //  <MenuItem onClick={props.onClickMenuMypage}>마이페이지</MenuItem>
    //
    //    ))}
    //  </Wrapper>
  );
}
