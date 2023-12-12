import { DogImg, Wrapper } from "./PhotosList.styles";
import type { IPhotosListUIProps } from "./PhotosList.types";

export default function PhotosListUI(props: IPhotosListUIProps): JSX.Element {
  console.log(props.imgUrls);
  return (
    <Wrapper>
      <div>
        {props.imgUrls.map((el, index) => (
          <>
            <DogImg key={el} src={el} />
          </>
        ))}
      </div>
    </Wrapper>
  );
}
