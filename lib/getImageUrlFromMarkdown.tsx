export const getImageUrlFromMarkdown = (markdown: string) => {
  const regex = /!\[.*?\]\((.*?)\)/;
  const match = regex.exec(markdown);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
};
