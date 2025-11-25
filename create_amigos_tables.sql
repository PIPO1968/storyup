CREATE TABLE IF NOT EXISTS amigos (
  id SERIAL PRIMARY KEY,
  nick1 TEXT NOT NULL,
  nick2 TEXT NOT NULL,
  UNIQUE (nick1, nick2)
);

CREATE TABLE IF NOT EXISTS solicitudes_amistad (
  id SERIAL PRIMARY KEY,
  origen TEXT NOT NULL,
  destino TEXT NOT NULL,
  estado TEXT NOT NULL DEFAULT 'pendiente',
  UNIQUE (origen, destino)
);