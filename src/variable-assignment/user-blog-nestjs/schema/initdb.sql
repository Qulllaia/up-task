-- Table: public.post

-- DROP TABLE IF EXISTS public.post;

CREATE TABLE IF NOT EXISTS public.post
(
    id integer NOT NULL DEFAULT nextval('post_id_seq'::regclass),
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    content character varying(255) COLLATE pg_catalog."default" NOT NULL,
    image character varying(255) COLLATE pg_catalog."default",
    "userId" integer,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    CONSTRAINT post_pkey PRIMARY KEY (id),
    CONSTRAINT "post_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.post
    OWNER to postgres;

-- Table: public.roles

-- DROP TABLE IF EXISTS public.roles;

CREATE TABLE IF NOT EXISTS public.roles
(
    id integer NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
    value character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT roles_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.roles
    OWNER to postgres;

-- Table: public.user

-- DROP TABLE IF EXISTS public."user";

CREATE TABLE IF NOT EXISTS public."user"
(
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    banned boolean DEFAULT false,
    "banReason" character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id),
    CONSTRAINT user_email_key UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."user"
    OWNER to postgres;

-- Table: public.user_roles

-- DROP TABLE IF EXISTS public.user_roles;

CREATE TABLE IF NOT EXISTS public.user_roles
(
    id integer NOT NULL DEFAULT nextval('user_roles_id_seq'::regclass),
    "roleId" integer,
    "userId" integer,
    CONSTRAINT user_roles_pkey PRIMARY KEY (id),
    CONSTRAINT "user_roles_roleId_userId_key" UNIQUE ("roleId", "userId"),
    CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId")
        REFERENCES public.roles (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_roles
    OWNER to postgres;