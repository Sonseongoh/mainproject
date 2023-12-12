import axios from "axios";
import { useEffect, useState } from "react";
import PhotosListUI from "./PhotosList.presenter";

export default function PhotosList(): JSX.Element {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const getImg = async (): Promise<void> => {
      // [1, 1, 1, 1, 1, 1, 1, 1, 1]
      new Array(9).fill(1).forEach(async (_) => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setImgUrls((prev) => [...prev, result.data.message]);
      });
    };
    void getImg();
  }, []);

  return <PhotosListUI imgUrls={imgUrls} />;
}
