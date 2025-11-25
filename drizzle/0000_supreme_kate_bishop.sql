CREATE TABLE "Act" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"tipo" text NOT NULL,
	"descripcion" text NOT NULL,
	"fecha" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" text NOT NULL,
	"nick" text NOT NULL,
	"centro" text NOT NULL,
	"curso" text NOT NULL,
	"tipo" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"linkPerfil" text NOT NULL,
	"fechaInscripcion" timestamp DEFAULT now() NOT NULL,
	"textoFechaInscripcion" text NOT NULL,
	"likes" integer DEFAULT 0 NOT NULL,
	"amigos" text[] DEFAULT '{}' NOT NULL,
	"historias" text[] DEFAULT '{}' NOT NULL,
	"comentarios" text[] DEFAULT '{}' NOT NULL,
	"premium" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "User_nick_unique" UNIQUE("nick"),
	CONSTRAINT "User_email_unique" UNIQUE("email")
);
