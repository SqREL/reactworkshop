export const getGames = () =>
  fetch("https://demo6603181.mockable.io/games").then(response =>
    response.json()
  );

export const orderGames = gameIds =>
  fetch("https://demo6603181.mockable.io/order", {
    method: "POST",
    body: gameIds
  }).then(response => response.json());
