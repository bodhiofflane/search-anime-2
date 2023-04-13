export const httpRequest = async () => {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=10`);

  if (!response.ok) {
    throw new Error(`Ошибка получения данных. Статус: ${response.statusText}. Код: ${response.status}`);
  }

  return await response.json();
}