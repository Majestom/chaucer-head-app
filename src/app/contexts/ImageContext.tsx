import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { ImageType } from "../types/types";

type ImageContextType = [
  ImageType | undefined,
  Dispatch<SetStateAction<ImageType | undefined>>
];

export const ImageContext = createContext<ImageContextType>(
  [undefined, () => {}]
);

export function ImageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [image, setImage] = useState<ImageType | undefined>(
    undefined
  );

  return (
    <ImageContext.Provider value={[image, setImage]}>
      {children}
    </ImageContext.Provider>
  );
}
