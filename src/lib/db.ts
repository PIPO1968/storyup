import { pgTable, serial, text, timestamp, boolean, integer, jsonb } from 'drizzle-orm/pg-core';
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

export const friendshipRequests = pgTable('FriendshipRequest', {
    id: serial('id').primaryKey(),
    origen: text('origen').notNull(),
    destino: text('destino').notNull(),
    estado: text('estado').default('pendiente').notNull(), // pendiente, aceptada, rechazada
    fecha: timestamp('fecha').defaultNow().notNull(),
});

export const premiumUsers = pgTable('PremiumUser', {
    id: serial('id').primaryKey(),
    nick: text('nick').notNull().unique(),
    activo: boolean('activo').default(true).notNull(),
    fechaInicio: timestamp('fechaInicio').notNull(),
    expiracion: timestamp('expiracion').notNull(),
    tipo: text('tipo').notNull(),
    precio: integer('precio').notNull(),
    metodoPago: text('metodoPago').notNull(),
    activadoPorAdmin: boolean('activadoPorAdmin').default(false).notNull(),
    solicitudId: text('solicitudId'),
    emailPago: text('emailPago'),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});

export const premiumRequests = pgTable('PremiumRequest', {
    id: text('id').primaryKey(),
    nick: text('nick').notNull(),
    email: text('email').notNull(),
    fechaSolicitud: timestamp('fechaSolicitud').defaultNow().notNull(),
    estado: text('estado').default('pendiente').notNull(), // pendiente, aprobado, rechazado
    tipo: text('tipo').notNull(),
    precio: integer('precio').notNull(),
    metodoPago: text('metodoPago').notNull(),
    fechaAprobacion: timestamp('fechaAprobacion'),
    fechaRechazo: timestamp('fechaRechazo'),
    motivo: text('motivo'),
});

export const tournaments = pgTable('Tournament', {
    id: serial('id').primaryKey(),
    nombre: text('nombre').notNull(),
    descripcion: text('descripcion'),
    fechaInicio: timestamp('fechaInicio').notNull(),
    fechaFin: timestamp('fechaFin').notNull(),
    activo: boolean('activo').default(true).notNull(),
    participantes: text('participantes').array().default([]).notNull(),
    datos: jsonb('datos'), // Para datos específicos del torneo
    createdAt: timestamp('createdAt').defaultNow().notNull(),
});

export const competitionStats = pgTable('CompetitionStat', {
    id: serial('id').primaryKey(),
    nick: text('nick').notNull(),
    tipo: text('tipo').notNull(), // e.g., 'premium'
    victorias: integer('victorias').default(0).notNull(),
    participaciones: integer('participaciones').default(0).notNull(),
    puntuacionTotal: integer('puntuacionTotal').default(0).notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
});