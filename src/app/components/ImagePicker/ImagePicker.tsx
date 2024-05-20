import { useContext, useEffect } from "react";
import { useFilePicker } from "use-file-picker";
import {
  FileAmountLimitValidator,
  FileTypeValidator,
  FileSizeValidator,
  ImageDimensionsValidator,
} from "use-file-picker/validators";
import { ImageContext } from "@/app/contexts/ImageContext";
import { transformImageFile } from "@/app/utils/helper";
import { Button } from "../Button/Button";

export function ImagePicker() {
  const { openFilePicker, filesContent, loading, errors } =
    useFilePicker({
      readAs: "DataURL",
      accept: "image/*",
      multiple: true,
      validators: [
        new FileAmountLimitValidator({ max: 1 }),
        new FileTypeValidator(["jpg", "png"]),
        new FileSizeValidator({
          maxFileSize: 50 * 1024 * 1024 /* 50 MB */,
        }),
        new ImageDimensionsValidator({
          maxHeight: 9000, // in pixels
          maxWidth: 16000,
          minHeight: 10,
          minWidth: 18,
        }),
      ],
    });

  const [image, setImage] = useContext(ImageContext);

  useEffect(() => {
    if (filesContent.length === 0) return;
    const transformedContent = transformImageFile(
      filesContent[0]
    );
    setImage(() => transformedContent);
  }, [setImage, filesContent]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    console.log("Error: ", errors);
    return <div>Error...</div>;
  }

  return (
    <Button
      label="Upload image"
      className="imageButton"
      icon="/icons/image.svg"
      onClick={() => openFilePicker()}
    />
  );
}
