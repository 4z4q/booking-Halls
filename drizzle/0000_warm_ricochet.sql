CREATE TYPE "public"."role" AS ENUM('client', 'vendor', 'admin');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(10) NOT NULL,
	"last_name" varchar(10) NOT NULL,
	"email" varchar(50) NOT NULL,
	"password" text NOT NULL,
	"role" "role" DEFAULT 'client' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
