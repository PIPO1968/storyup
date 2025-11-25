CREATE TABLE IF NOT EXISTS "User" (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    nick TEXT NOT NULL UNIQUE,
    centro TEXT NOT NULL,
    curso TEXT NOT NULL,
    tipo TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    "linkPerfil" TEXT NOT NULL,
    "fechaInscripcion" TIMESTAMP DEFAULT NOW() NOT NULL,
    "textoFechaInscripcion" TEXT NOT NULL,
    likes INTEGER DEFAULT 0 NOT NULL,
    amigos TEXT[] DEFAULT '{}' NOT NULL,
    historias TEXT[] DEFAULT '{}' NOT NULL,
    comentarios TEXT[] DEFAULT '{}' NOT NULL,
    premium BOOLEAN DEFAULT false NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW() NOT NULL,
    "updatedAt" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS "Act" (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    tipo TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT NOW() NOT NULL
);