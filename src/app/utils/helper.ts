export function imageArrayToBlobUrl(imageArray: number[]) {
  const uint8Array = new Uint8Array(imageArray);
  const imageBlob = new Blob([uint8Array], {
    type: "image/jpeg",
  });
  return URL.createObjectURL(imageBlob);
}

export function transformImageFile(fileContent: {
  content: string;
}) {
  const { content } = fileContent;
  const contentParts = content.split(",");
  const type = contentParts[0].split(":")[1].split(";")[0];
  const data = Array.from(atob(contentParts[1])).map(
    (char) => char.charCodeAt(0)
  );
  return { data, type };
}
