export function manageStorage(data: any) {
  console.log(data);
  const storageData = {
    original_link: data.original_link,
    short_url: data.short_link,
  };

  const oldItems = JSON.parse(localStorage.getItem("url_short") || "[]")
    ? JSON.parse(localStorage.getItem("url_short") || "[]")
    : [];

  const found: boolean = oldItems.some(
    (el: { original_link: string }) => el.original_link === data.original_link
  );

  if (!found) {
    oldItems.push(storageData);
    localStorage.setItem("url_short", JSON.stringify(oldItems));
  }

  return oldItems;
}
