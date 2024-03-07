export function imageArrayToBlobUrl(imageArray: number[]) {
  const uint8Array = new Uint8Array(imageArray);
  const imageBlob = new Blob([uint8Array], {
    type: "image/jpeg",
  });
  return URL.createObjectURL(imageBlob);
}
