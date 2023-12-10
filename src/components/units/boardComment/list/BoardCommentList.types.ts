import type {
  IQuery,
  IBoardComment,
} from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export interface IBoardCommentListUIItemProps {
  el: IBoardComment;
}
