import { pgTable, serial, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL!;

const pool = new Pool({
    connectionString,
});

export const db = drizzle(pool);

export const users = pgTable('User', {
    id: serial('id').primaryKey(),
    nombre: text('nombre').notNull(),
    nick: text('nick').notNull().unique(),
    centro: text('centro').notNull(),
    curso: text('curso').notNull(),
    tipo: text('tipo').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    linkPerfil: text('linkPerfil').notNull(),
    fechaInscripcion: timestamp('fechaInscripcion').defaultNow().notNull(),
    textoFechaInscripcion: text('textoFechaInscripcion').notNull(),
    likes: integer('likes').default(0).notNull(),
    amigos: text('amigos').array().default([]).notNull(),
    historias: text('historias').array().default([]).notNull(),
    comentarios: text('comentarios').array().default([]).notNull(),
    premium: boolean('premium').default(false).notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const acts = pgTable('Act', {
    id: serial('id').primaryKey(),
    email: text('email').notNull(),
    tipo: text('tipo').notNull(),
    descripcion: text('descripcion').notNull(),
    fecha: timestamp('fecha').defaultNow().notNull(),
});