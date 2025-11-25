CREATE TABLE IF NOT EXISTS historias (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  contenido TEXT NOT NULL,
  autor TEXT NOT NULL,
  fecha TIMESTAMP NOT NULL,
  imagen TEXT,
  likes INTEGER DEFAULT 0,
  comentarios JSONB DEFAULT '[]'::jsonb,
  concurso TEXT DEFAULT '',
  liked_by JSONB DEFAULT '[]'::jsonb
);