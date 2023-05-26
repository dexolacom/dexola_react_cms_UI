// removes the link to the image
export const removeImageLinksFromMarkdown = (markdownText: string) => {
  const imageLinkRegex = /!\[[^\]]+\]\([^)]+\)/g;
  return markdownText.replace(imageLinkRegex, "");
};
