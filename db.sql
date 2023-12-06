--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Homebrew)
-- Dumped by pg_dump version 14.9 (Homebrew)

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
-- Name: conditions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.conditions (
    id integer NOT NULL,
    condition_name character varying(80)
);


--
-- Name: conditions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.conditions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: conditions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.conditions_id_seq OWNED BY public.conditions.id;


--
-- Name: games; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.games (
    id integer NOT NULL,
    game_name character varying(150) NOT NULL,
    dm_id integer
);


--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- Name: inventory; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.inventory (
    id integer NOT NULL,
    item_name character varying(80) NOT NULL
);


--
-- Name: inventory_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.inventory_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: inventory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.inventory_id_seq OWNED BY public.inventory.id;


--
-- Name: monsters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.monsters (
    id integer NOT NULL,
    name character varying(150) NOT NULL,
    size character varying(50),
    alignment character varying(50),
    armor_class integer NOT NULL,
    hit_points integer NOT NULL,
    speed integer NOT NULL,
    resistances character varying(500),
    proficiency_bonus integer,
    attacks character varying(1000),
    displayed boolean DEFAULT false,
    game_id integer
);


--
-- Name: monsters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.monsters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: monsters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.monsters_id_seq OWNED BY public.monsters.id;


--
-- Name: players; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.players (
    id integer NOT NULL,
    player_name character varying(50) NOT NULL,
    character_name character varying(100) NOT NULL,
    character_img character varying(1000),
    character_level integer NOT NULL,
    character_class character varying(80),
    current_hp integer NOT NULL,
    total_hp integer NOT NULL,
    armor_class integer NOT NULL,
    speed integer,
    initiative_bonus integer NOT NULL,
    strength integer NOT NULL,
    str_bonus integer NOT NULL,
    str_save integer NOT NULL,
    dexterity integer NOT NULL,
    dex_bonus integer NOT NULL,
    dex_save integer NOT NULL,
    constitution integer NOT NULL,
    con_bonus integer NOT NULL,
    con_save integer NOT NULL,
    intelligence integer NOT NULL,
    int_bonus integer NOT NULL,
    int_save integer NOT NULL,
    wisdom integer NOT NULL,
    wis_bonus integer NOT NULL,
    wis_save integer NOT NULL,
    charisma integer NOT NULL,
    cha_bonus integer NOT NULL,
    cha_save integer NOT NULL,
    displayed boolean DEFAULT false,
    game_id integer
);


--
-- Name: players_conditions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.players_conditions (
    id integer NOT NULL,
    condition_length integer,
    condition_id integer,
    player_id integer
);


--
-- Name: players_conditions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.players_conditions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: players_conditions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.players_conditions_id_seq OWNED BY public.players_conditions.id;


--
-- Name: players_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.players_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: players_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.players_id_seq OWNED BY public.players.id;


--
-- Name: players_inventory; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.players_inventory (
    id integer NOT NULL,
    quantity integer,
    inventory_id integer,
    player_id integer
);


--
-- Name: players_inventory_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.players_inventory_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: players_inventory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.players_inventory_id_seq OWNED BY public.players_inventory.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
    password character varying(1000) NOT NULL
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: conditions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conditions ALTER COLUMN id SET DEFAULT nextval('public.conditions_id_seq'::regclass);


--
-- Name: games id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- Name: inventory id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.inventory ALTER COLUMN id SET DEFAULT nextval('public.inventory_id_seq'::regclass);


--
-- Name: monsters id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.monsters ALTER COLUMN id SET DEFAULT nextval('public.monsters_id_seq'::regclass);


--
-- Name: players id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players ALTER COLUMN id SET DEFAULT nextval('public.players_id_seq'::regclass);


--
-- Name: players_conditions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players_conditions ALTER COLUMN id SET DEFAULT nextval('public.players_conditions_id_seq'::regclass);


--
-- Name: players_inventory id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players_inventory ALTER COLUMN id SET DEFAULT nextval('public.players_inventory_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: conditions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.conditions (id, condition_name) VALUES (1, 'Blinded');
INSERT INTO public.conditions (id, condition_name) VALUES (2, 'Charmed');
INSERT INTO public.conditions (id, condition_name) VALUES (3, 'Deafened');
INSERT INTO public.conditions (id, condition_name) VALUES (4, 'Frightened');
INSERT INTO public.conditions (id, condition_name) VALUES (5, 'Grappled');
INSERT INTO public.conditions (id, condition_name) VALUES (6, 'Incapacitated');
INSERT INTO public.conditions (id, condition_name) VALUES (7, 'Invisible');
INSERT INTO public.conditions (id, condition_name) VALUES (8, 'Paralyzed');
INSERT INTO public.conditions (id, condition_name) VALUES (9, 'Petrified');
INSERT INTO public.conditions (id, condition_name) VALUES (10, 'Poisoned');
INSERT INTO public.conditions (id, condition_name) VALUES (11, 'Prone');
INSERT INTO public.conditions (id, condition_name) VALUES (12, 'Restrained');
INSERT INTO public.conditions (id, condition_name) VALUES (13, 'Stunned');
INSERT INTO public.conditions (id, condition_name) VALUES (14, 'Unconscious');
INSERT INTO public.conditions (id, condition_name) VALUES (15, 'Exhaustion');
INSERT INTO public.conditions (id, condition_name) VALUES (16, 'None');


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.games (id, game_name, dm_id) VALUES (1, 'Curse of Strahd', 2);
INSERT INTO public.games (id, game_name, dm_id) VALUES (2, 'Storm Kings Thunder', 2);
INSERT INTO public.games (id, game_name, dm_id) VALUES (3, 'The Dragon''s Hoard', 2);
INSERT INTO public.games (id, game_name, dm_id) VALUES (6, 'Adventures in Exandria', 2);
INSERT INTO public.games (id, game_name, dm_id) VALUES (7, 'Bemidji game', 2);
INSERT INTO public.games (id, game_name, dm_id) VALUES (5, 'EDA Solo project', 2);
INSERT INTO public.games (id, game_name, dm_id) VALUES (8, 'Eberon', 7);
INSERT INTO public.games (id, game_name, dm_id) VALUES (9, 'Lost in Space', 8);


--
-- Data for Name: inventory; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.inventory (id, item_name) VALUES (1, 'Padded armor');
INSERT INTO public.inventory (id, item_name) VALUES (2, 'Leather armor');
INSERT INTO public.inventory (id, item_name) VALUES (3, 'Studded leather armor');
INSERT INTO public.inventory (id, item_name) VALUES (4, 'Hide armor');
INSERT INTO public.inventory (id, item_name) VALUES (5, 'Chain shirt');
INSERT INTO public.inventory (id, item_name) VALUES (6, 'Scale mail');
INSERT INTO public.inventory (id, item_name) VALUES (7, 'Breastplate');
INSERT INTO public.inventory (id, item_name) VALUES (8, 'Half plate armor');
INSERT INTO public.inventory (id, item_name) VALUES (9, 'Ring mail');
INSERT INTO public.inventory (id, item_name) VALUES (10, 'Chain mail');
INSERT INTO public.inventory (id, item_name) VALUES (11, 'Splint mail');
INSERT INTO public.inventory (id, item_name) VALUES (12, 'Plate mail');
INSERT INTO public.inventory (id, item_name) VALUES (13, 'Shield');
INSERT INTO public.inventory (id, item_name) VALUES (14, 'Club');
INSERT INTO public.inventory (id, item_name) VALUES (15, 'Dagger');
INSERT INTO public.inventory (id, item_name) VALUES (16, 'Greatclub');
INSERT INTO public.inventory (id, item_name) VALUES (17, 'Handaxe');
INSERT INTO public.inventory (id, item_name) VALUES (18, 'Javelin');
INSERT INTO public.inventory (id, item_name) VALUES (19, 'Light hammer');
INSERT INTO public.inventory (id, item_name) VALUES (20, 'Mace');
INSERT INTO public.inventory (id, item_name) VALUES (21, 'Quarterstaff');
INSERT INTO public.inventory (id, item_name) VALUES (22, 'Sickle');
INSERT INTO public.inventory (id, item_name) VALUES (23, 'Spear');
INSERT INTO public.inventory (id, item_name) VALUES (24, 'Light crossbow');
INSERT INTO public.inventory (id, item_name) VALUES (25, 'Dart');
INSERT INTO public.inventory (id, item_name) VALUES (26, 'Shortbow');
INSERT INTO public.inventory (id, item_name) VALUES (27, 'Sling');
INSERT INTO public.inventory (id, item_name) VALUES (28, 'Battleaxe');
INSERT INTO public.inventory (id, item_name) VALUES (29, 'Flail');
INSERT INTO public.inventory (id, item_name) VALUES (30, 'Glaive');
INSERT INTO public.inventory (id, item_name) VALUES (31, 'Greataxe');
INSERT INTO public.inventory (id, item_name) VALUES (32, 'Greatsword');
INSERT INTO public.inventory (id, item_name) VALUES (33, 'Halberd');
INSERT INTO public.inventory (id, item_name) VALUES (34, 'Lance');
INSERT INTO public.inventory (id, item_name) VALUES (35, 'Longsword');
INSERT INTO public.inventory (id, item_name) VALUES (36, 'Maul');
INSERT INTO public.inventory (id, item_name) VALUES (37, 'Morningstar');
INSERT INTO public.inventory (id, item_name) VALUES (38, 'Pike');
INSERT INTO public.inventory (id, item_name) VALUES (39, 'Rapier');
INSERT INTO public.inventory (id, item_name) VALUES (40, 'Scimitar');
INSERT INTO public.inventory (id, item_name) VALUES (41, 'Shortsword');
INSERT INTO public.inventory (id, item_name) VALUES (42, 'Trident');
INSERT INTO public.inventory (id, item_name) VALUES (43, 'War pick');
INSERT INTO public.inventory (id, item_name) VALUES (44, 'Warhammer');
INSERT INTO public.inventory (id, item_name) VALUES (45, 'Whip');
INSERT INTO public.inventory (id, item_name) VALUES (46, 'Blowgun');
INSERT INTO public.inventory (id, item_name) VALUES (47, 'Hand crossbow');
INSERT INTO public.inventory (id, item_name) VALUES (48, 'Heavy crossbow');
INSERT INTO public.inventory (id, item_name) VALUES (49, 'Longbow');
INSERT INTO public.inventory (id, item_name) VALUES (50, 'Net');
INSERT INTO public.inventory (id, item_name) VALUES (51, 'Arrows');
INSERT INTO public.inventory (id, item_name) VALUES (52, 'Blowgun needles');
INSERT INTO public.inventory (id, item_name) VALUES (53, 'Crossblw bolts');
INSERT INTO public.inventory (id, item_name) VALUES (54, 'Sling bullets');
INSERT INTO public.inventory (id, item_name) VALUES (55, 'Abacus');
INSERT INTO public.inventory (id, item_name) VALUES (56, 'Acid vial');
INSERT INTO public.inventory (id, item_name) VALUES (57, 'Alchemists fire');
INSERT INTO public.inventory (id, item_name) VALUES (58, 'Antitoxin');
INSERT INTO public.inventory (id, item_name) VALUES (59, 'Backpack');
INSERT INTO public.inventory (id, item_name) VALUES (60, 'Bag of ball bearings');
INSERT INTO public.inventory (id, item_name) VALUES (61, 'Bedroll');
INSERT INTO public.inventory (id, item_name) VALUES (62, 'Bell');
INSERT INTO public.inventory (id, item_name) VALUES (63, 'Blanket');
INSERT INTO public.inventory (id, item_name) VALUES (64, 'Book');
INSERT INTO public.inventory (id, item_name) VALUES (65, 'Caltrops');
INSERT INTO public.inventory (id, item_name) VALUES (66, 'Candle');
INSERT INTO public.inventory (id, item_name) VALUES (67, 'Case, map');
INSERT INTO public.inventory (id, item_name) VALUES (68, 'Case, bolt');
INSERT INTO public.inventory (id, item_name) VALUES (69, 'Chalk');
INSERT INTO public.inventory (id, item_name) VALUES (70, 'Climbers kit');
INSERT INTO public.inventory (id, item_name) VALUES (71, 'Component pouch');
INSERT INTO public.inventory (id, item_name) VALUES (72, 'Crowbar');
INSERT INTO public.inventory (id, item_name) VALUES (73, 'Fishing tackle');
INSERT INTO public.inventory (id, item_name) VALUES (74, 'Flask');
INSERT INTO public.inventory (id, item_name) VALUES (75, 'Glass bottle');
INSERT INTO public.inventory (id, item_name) VALUES (76, 'Grappling hook');
INSERT INTO public.inventory (id, item_name) VALUES (77, 'Hammer');
INSERT INTO public.inventory (id, item_name) VALUES (78, 'Healers kit');
INSERT INTO public.inventory (id, item_name) VALUES (79, 'Holy water');
INSERT INTO public.inventory (id, item_name) VALUES (80, 'Hourglass');
INSERT INTO public.inventory (id, item_name) VALUES (81, 'Hunting trap');
INSERT INTO public.inventory (id, item_name) VALUES (82, 'Ink');
INSERT INTO public.inventory (id, item_name) VALUES (83, 'Ink pen');
INSERT INTO public.inventory (id, item_name) VALUES (84, 'Ladder');
INSERT INTO public.inventory (id, item_name) VALUES (85, 'Lamp');
INSERT INTO public.inventory (id, item_name) VALUES (86, 'Lantern');
INSERT INTO public.inventory (id, item_name) VALUES (87, 'Lock');
INSERT INTO public.inventory (id, item_name) VALUES (88, 'Magnifying glass');
INSERT INTO public.inventory (id, item_name) VALUES (89, 'Manacles');
INSERT INTO public.inventory (id, item_name) VALUES (90, 'Mess kit');
INSERT INTO public.inventory (id, item_name) VALUES (91, 'Mirror');
INSERT INTO public.inventory (id, item_name) VALUES (92, 'Flask of oil');
INSERT INTO public.inventory (id, item_name) VALUES (93, 'Paper');
INSERT INTO public.inventory (id, item_name) VALUES (94, 'Parchment');
INSERT INTO public.inventory (id, item_name) VALUES (95, 'Perfume');
INSERT INTO public.inventory (id, item_name) VALUES (96, 'Miners pick');
INSERT INTO public.inventory (id, item_name) VALUES (97, 'Piton');
INSERT INTO public.inventory (id, item_name) VALUES (98, 'Vial of poison');
INSERT INTO public.inventory (id, item_name) VALUES (99, '10ft pole');
INSERT INTO public.inventory (id, item_name) VALUES (100, 'Iron pot');
INSERT INTO public.inventory (id, item_name) VALUES (101, 'Potion of healing');
INSERT INTO public.inventory (id, item_name) VALUES (102, 'Pouch');
INSERT INTO public.inventory (id, item_name) VALUES (103, 'Quiver');
INSERT INTO public.inventory (id, item_name) VALUES (104, 'Rations');
INSERT INTO public.inventory (id, item_name) VALUES (105, 'Hempen rope');
INSERT INTO public.inventory (id, item_name) VALUES (106, 'Silk rope');
INSERT INTO public.inventory (id, item_name) VALUES (107, 'Sack');
INSERT INTO public.inventory (id, item_name) VALUES (108, 'Sealing wax');
INSERT INTO public.inventory (id, item_name) VALUES (109, 'Shovel');
INSERT INTO public.inventory (id, item_name) VALUES (110, 'Signal whistle');
INSERT INTO public.inventory (id, item_name) VALUES (111, 'Signet ring');
INSERT INTO public.inventory (id, item_name) VALUES (112, 'Soap');
INSERT INTO public.inventory (id, item_name) VALUES (113, 'Spellbook');
INSERT INTO public.inventory (id, item_name) VALUES (114, '10 iron spikes');
INSERT INTO public.inventory (id, item_name) VALUES (115, 'Spyglass');
INSERT INTO public.inventory (id, item_name) VALUES (116, 'Tent');
INSERT INTO public.inventory (id, item_name) VALUES (117, 'Tinderbox');
INSERT INTO public.inventory (id, item_name) VALUES (118, 'Torch');
INSERT INTO public.inventory (id, item_name) VALUES (119, 'Vial');
INSERT INTO public.inventory (id, item_name) VALUES (120, 'Waterskin');
INSERT INTO public.inventory (id, item_name) VALUES (121, 'Whetstone');


--
-- Data for Name: monsters; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.monsters (id, name, size, alignment, armor_class, hit_points, speed, resistances, proficiency_bonus, attacks, displayed, game_id) VALUES (1, 'Zombie', 'medium', 'neutral evil', 8, 22, 20, 'Immune to poison and poisoned condition', 2, 'Slam: +3 to hit, reach 5 ft, one target, hit: 1d6 + 1', false, 1);
INSERT INTO public.monsters (id, name, size, alignment, armor_class, hit_points, speed, resistances, proficiency_bonus, attacks, displayed, game_id) VALUES (2, 'Kobold', 'Small', 'Lawful Evil', 12, 5, 30, 'None', 2, 'Dagger: +4 to hit, 1d4+2 dmg', false, 3);
INSERT INTO public.monsters (id, name, size, alignment, armor_class, hit_points, speed, resistances, proficiency_bonus, attacks, displayed, game_id) VALUES (7, 'Owlbear', 'Large', 'Unaligned', 13, 59, 40, 'None', 2, 'Multiattack, Claw +7 to hit, 2d8 + 5, Beak: +7 to hit, 1d10 + 5', false, 5);


--
-- Data for Name: players; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.players (id, player_name, character_name, character_img, character_level, character_class, current_hp, total_hp, armor_class, speed, initiative_bonus, strength, str_bonus, str_save, dexterity, dex_bonus, dex_save, constitution, con_bonus, con_save, intelligence, int_bonus, int_save, wisdom, wis_bonus, wis_save, charisma, cha_bonus, cha_save, displayed, game_id) VALUES (1, 'John', 'Richard', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23569aa3-3ab0-4f23-9089-39016061d0e7/dfz5z21-e58789df-6471-41b8-be68-11a141350223.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzNTY5YWEzLTNhYjAtNGYyMy05MDg5LTM5MDE2MDYxZDBlN1wvZGZ6NXoyMS1lNTg3ODlkZi02NDcxLTQxYjgtYmU2OC0xMWExNDEzNTAyMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hMH3Xe0K4p7vLmFLNmQtzM6onWD0vS1QKMtmyCNdW6g', 4, 'Fighter', 49, 49, 19, 25, 2, 16, 3, 6, 15, 2, 3, 19, 4, 7, 14, 2, 3, 14, 2, 3, 15, 2, 3, false, 7);
INSERT INTO public.players (id, player_name, character_name, character_img, character_level, character_class, current_hp, total_hp, armor_class, speed, initiative_bonus, strength, str_bonus, str_save, dexterity, dex_bonus, dex_save, constitution, con_bonus, con_save, intelligence, int_bonus, int_save, wisdom, wis_bonus, wis_save, charisma, cha_bonus, cha_save, displayed, game_id) VALUES (2, 'Kord', 'Mustaine', 'https://www.d20radio.com/main/wp-content/uploads/2017/01/TieflingBard.jpg', 1, 'Bard', 10, 10, 13, 30, 2, 11, 0, 0, 15, 2, 4, 15, 2, 2, 9, -1, -1, 15, 2, 2, 18, 4, 6, true, 2);
INSERT INTO public.players (id, player_name, character_name, character_img, character_level, character_class, current_hp, total_hp, armor_class, speed, initiative_bonus, strength, str_bonus, str_save, dexterity, dex_bonus, dex_save, constitution, con_bonus, con_save, intelligence, int_bonus, int_save, wisdom, wis_bonus, wis_save, charisma, cha_bonus, cha_save, displayed, game_id) VALUES (5, 'Joe', 'Corvo', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/636cc5ef-7820-4bb6-b9ba-4757374e4727/deczouy-9cffc335-caf9-4362-90b6-7ccca79f6706.png/v1/fill/w_1280,h_1280,q_80,strp/dnd_tiefling_cleric_commission_by_jetinx_deczouy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzYzNmNjNWVmLTc4MjAtNGJiNi1iOWJhLTQ3NTczNzRlNDcyN1wvZGVjem91eS05Y2ZmYzMzNS1jYWY5LTQzNjItOTBiNi03Y2NjYTc5ZjY3MDYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CcF-WbHMdQL8UwqKEIePYzoXz7PUJ02ZiJa-_-fnAzQ', 6, 'Cleric', 50, 50, 16, 30, 1, 14, 2, 2, 12, 1, 1, 14, 2, 2, 13, 1, 1, 18, 4, 7, 18, 4, 7, true, 5);


--
-- Data for Name: players_conditions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.players_conditions (id, condition_length, condition_id, player_id) VALUES (4, 2, 7, 2);
INSERT INTO public.players_conditions (id, condition_length, condition_id, player_id) VALUES (5, 3, 13, 1);
INSERT INTO public.players_conditions (id, condition_length, condition_id, player_id) VALUES (9, 3, 4, 5);


--
-- Data for Name: players_inventory; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (1, 1, 5, 1);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (2, 1, 13, 1);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (3, 1, 35, 1);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (4, 2, 15, 1);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (5, 1, 18, 1);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (6, 1, 59, 1);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (7, 1, 2, 2);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (8, 1, 24, 2);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (9, 1, 15, 2);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (10, 1, 59, 2);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (11, 1, 68, 2);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (24, 1, 5, 5);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (25, 1, 35, 5);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (26, 1, 13, 5);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (27, 1, 59, 5);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (28, 1, 64, 5);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (29, 1, 99, 5);
INSERT INTO public.players_inventory (id, quantity, inventory_id, player_id) VALUES (30, 1, 91, 5);


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."user" (id, username, password) VALUES (1, 'jcolago', '1234');
INSERT INTO public."user" (id, username, password) VALUES (2, 'joe', '$2a$10$Yre9zTfNq1yrb/T9L1B1U.ZWO7zQf1q/y6pOkBGab3LRYhf8AETKm');
INSERT INTO public."user" (id, username, password) VALUES (7, 'newDM', '$2a$10$vZMuEsTn2VgR1HIUtZ87NePsyRwV/xOsUmy631m.K28T5LM.Bm4S.');
INSERT INTO public."user" (id, username, password) VALUES (8, 'newDM2', '$2a$10$PI1EZEoq773Ngbx6gLW.AuFz6uUSEagFDTpsJIfwg.rh.8dh2AqWS');
INSERT INTO public."user" (id, username, password) VALUES (9, 'newDM3', '$2a$10$/fiSaX8lhTvnLVhtbt3XjeqnU6yiE3ZP4jOtG0DHzTUmotvK7cE3i');


--
-- Name: conditions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.conditions_id_seq', 16, true);


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.games_id_seq', 9, true);


--
-- Name: inventory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.inventory_id_seq', 121, true);


--
-- Name: monsters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.monsters_id_seq', 7, true);


--
-- Name: players_conditions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.players_conditions_id_seq', 10, true);


--
-- Name: players_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.players_id_seq', 6, true);


--
-- Name: players_inventory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.players_inventory_id_seq', 31, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.user_id_seq', 10, true);


--
-- Name: conditions conditions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conditions
    ADD CONSTRAINT conditions_pkey PRIMARY KEY (id);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- Name: inventory inventory_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_pkey PRIMARY KEY (id);


--
-- Name: monsters monsters_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.monsters
    ADD CONSTRAINT monsters_pkey PRIMARY KEY (id);


--
-- Name: players_conditions players_conditions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players_conditions
    ADD CONSTRAINT players_conditions_pkey PRIMARY KEY (id);


--
-- Name: players_inventory players_inventory_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players_inventory
    ADD CONSTRAINT players_inventory_pkey PRIMARY KEY (id);


--
-- Name: players players_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players
    ADD CONSTRAINT players_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- Name: games games_dm_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_dm_id_fkey FOREIGN KEY (dm_id) REFERENCES public."user"(id);


--
-- Name: monsters monsters_game_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.monsters
    ADD CONSTRAINT monsters_game_id_fkey FOREIGN KEY (game_id) REFERENCES public.games(id);


--
-- Name: players_conditions players_conditions_condition_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players_conditions
    ADD CONSTRAINT players_conditions_condition_id_fkey FOREIGN KEY (condition_id) REFERENCES public.conditions(id);


--
-- Name: players_conditions players_conditions_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players_conditions
    ADD CONSTRAINT players_conditions_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.players(id);


--
-- Name: players players_game_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players
    ADD CONSTRAINT players_game_id_fkey FOREIGN KEY (game_id) REFERENCES public.games(id);


--
-- Name: players_inventory players_inventory_inventory_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players_inventory
    ADD CONSTRAINT players_inventory_inventory_id_fkey FOREIGN KEY (inventory_id) REFERENCES public.inventory(id);


--
-- Name: players_inventory players_inventory_player_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.players_inventory
    ADD CONSTRAINT players_inventory_player_id_fkey FOREIGN KEY (player_id) REFERENCES public.players(id);


--
-- PostgreSQL database dump complete
--

