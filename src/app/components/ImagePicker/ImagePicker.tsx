import { useFilePicker } from "use-file-picker";
import {
  FileAmountLimitValidator,
  FileTypeValidator,
  FileSizeValidator,
  ImageDimensionsValidator,
} from "use-file-picker/validators";
import { Button } from "../Button/Button";

export default function ImagePicker() {
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
          maxHeight: 900, // in pixels
          maxWidth: 1600,
          minHeight: 600,
          minWidth: 768,
        }),
      ],
    });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    return <div>Error...</div>;
  }

  return (
    <Button
      label="Select files"
      className="imageButton"
      icon="/icons/image.svg"
      onClick={() => openFilePicker()}
    />
  );
}
