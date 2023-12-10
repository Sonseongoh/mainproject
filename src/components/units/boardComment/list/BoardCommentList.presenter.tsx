import InfiniteScroll from "react-infinite-scroller";
import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import BoardCommentListUIItem from "./BoardCommentList.presenterItem";

export default function BoardCommentListUI(
  props: IBoardCommentListUIProps
): JSX.Element {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUIItem key={el._id} el={el} />
      )) ?? <></>}
    </InfiniteScroll>
  );
}
