-- Tabla users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  nick VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  nombre VARCHAR(255),
  centro VARCHAR(255),
  curso VARCHAR(255),
  tipo VARCHAR(255),
  linkPerfil VARCHAR(255),
  fechaInscripcion TIMESTAMP NOT NULL,
  textoFechaInscripcion TEXT,
  likes INTEGER DEFAULT 0,
  trofeos INTEGER DEFAULT 0,
  historias JSONB DEFAULT '[]'::jsonb,
  amigos JSONB DEFAULT '[]'::jsonb,
  trofeosDesbloqueados JSONB DEFAULT '[]'::jsonb,
  trofeosBloqueados JSONB DEFAULT '[]'::jsonb,
  preguntasFalladas INTEGER DEFAULT 0,
  competicionesSuperadas INTEGER DEFAULT 0,
  estaEnRanking BOOLEAN DEFAULT FALSE,
  autoTrofeos JSONB DEFAULT '[]'::jsonb,
  comentarios JSONB DEFAULT '[]'::jsonb
);

-- Tabla historias
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

-- Tabla noticias
CREATE TABLE IF NOT EXISTS noticias (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  contenido TEXT NOT NULL,
  autor TEXT NOT NULL,
  imagen TEXT,
  fecha TIMESTAMP DEFAULT NOW()
);

-- Tabla premium
CREATE TABLE IF NOT EXISTS premium (
  id SERIAL PRIMARY KEY,
  nick VARCHAR(255) UNIQUE NOT NULL,
  expiracion TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla estadisticas
CREATE TABLE IF NOT EXISTS estadisticas (
  id SERIAL PRIMARY KEY,
  nick VARCHAR(255) NOT NULL,
  tipo VARCHAR(255) NOT NULL,
  puntos INTEGER DEFAULT 0,
  UNIQUE(nick, tipo)
);

-- Tabla chat
CREATE TABLE IF NOT EXISTS chat (
  id SERIAL PRIMARY KEY,
  nick VARCHAR(255) UNIQUE NOT NULL,
  mensajes JSONB DEFAULT '[]',
  aviso BOOLEAN DEFAULT FALSE
);

-- Tabla torneos
CREATE TABLE IF NOT EXISTS torneos (
  id VARCHAR(255) PRIMARY KEY,
  resultados JSONB DEFAULT '[]'
);