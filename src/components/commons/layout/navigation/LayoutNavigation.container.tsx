import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  // 리팩토링 전  (props로)
  // const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
  //   void router.push("/boards");
  // };
  // const onClickMenuStage = (event: MouseEvent<HTMLDivElement>): void => {
  //   void router.push("/stage");
  // };

  // const onClickMenuMypage = (event: MouseEvent<HTMLDivElement>): void => {
  //   void router.push("/mypages");
  // };

  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
