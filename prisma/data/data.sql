--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Medichine; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Medichine" (
    id integer NOT NULL,
    name text NOT NULL,
    production_date date DEFAULT CURRENT_TIMESTAMP NOT NULL,
    expired_date date DEFAULT CURRENT_TIMESTAMP NOT NULL,
    company text NOT NULL,
    description text NOT NULL
);


ALTER TABLE public."Medichine" OWNER TO postgres;

--
-- Name: Medichine_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Medichine_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Medichine_id_seq" OWNER TO postgres;

--
-- Name: Medichine_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Medichine_id_seq" OWNED BY public."Medichine".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Medichine id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Medichine" ALTER COLUMN id SET DEFAULT nextval('public."Medichine_id_seq"'::regclass);


--
-- Data for Name: Medichine; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Medichine" (id, name, production_date, expired_date, company, description) FROM stdin;
1	paracetamol	2024-04-01	2028-04-01	Combhiphar	obat untuk meredakan gejala demam
2	bodrex	2024-04-30	2029-04-01	Tempo Scan Group	obat untuk meredakan gejala sakit kepala
6	tolak angin	2024-05-01	2024-08-10	sidomuncul	membantu menjaga stamina tubuh
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
0f1309d7-f9e5-44e2-a270-eeb717faa9cc	f86c8abef09ffc824db7df7c0d3a4017dfdae7e9f0ce978127bf760eae787502	2024-04-30 11:16:24.035376+07	20240430041623_init	\N	\N	2024-04-30 11:16:23.993002+07	1
\.


--
-- Name: Medichine_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Medichine_id_seq"', 10, true);


--
-- Name: Medichine Medichine_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Medichine"
    ADD CONSTRAINT "Medichine_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

