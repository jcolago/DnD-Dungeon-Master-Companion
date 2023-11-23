
-- players queries
CREATE TABLE "players" (
	"id" SERIAL PRIMARY KEY,
	"player_name" VARCHAR(50) NOT NULL,
	"character_name" VARCHAR(100) NOT NULL,
	"character_img" VARCHAR(1000),
	"character_level" INT NOT NULL,
	"character_class" VARCHAR(80),
	"current_hp" INT NOT NULL,
	"total_hp" INT NOT NULL,
	"armor_class" INT NOT NULL,
	"speed" INT,
	"initiative_bonus" INT NOT NULL,
	"strength" INT NOT NULL,
	"str_bonus" INT NOT NULL,
	"str_save" INT NOT NULL,
	"dexterity" INT NOT NULL,
	"dex_bonus" INT NOT NULL,
	"dex_save" INT NOT NULL,
	"constitution" INT NOT NULL,
	"con_bonus" INT NOT NULL,
	"con_save" INT NOT NULL,
	"intelligence" INT NOT NULL,
	"int_bonus" INT NOT NULL,
	"int_save" INT NOT NULL,
	"wisdom" INT NOT NULL,
	"wis_bonus" INT NOT NULL,
	"wis_save" INT NOT NULL,
	"charisma" INT NOT NULL,
	"cha_bonus" INT NOT NULL,
	"cha_save" INT NOT NULL,
	"displayed" BOOLEAN DEFAULT FALSE,
	"game_id" INT REFERENCES "games"
);

DROP TABLE "players" CASCADE;
DROP TABLE "players_inventory";
DROP TABLE "players_conditions";
DROP TABLE "games" CASCADE;
DROP TABLE "monsters";


DELETE FROM "players_inventory" WHERE "player_id" = 8 RETURNING "player_id";
DELETE FROM "players_conditions" WHERE "player_id" = 8 RETURNING "player_id";
DELETE FROM "players" WHERE "id" = 8;

INSERT INTO "players" ("player_name", "character_name", "character_img", "character_level", "character_class", "current_hp", "total_hp", "armor_class", "speed", "initiative_bonus", "strength", "str_bonus", "str_save", "dexterity", "dex_bonus", "dex_save", "constitution", "con_bonus", "con_save", "intelligence", "int_bonus", "int_save", "wisdom", "wis_bonus", "wis_save", "charisma", "cha_bonus", "cha_save", "game_id")
VALUES ('Joe', 'Corvo', ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCmul5XDMItSV_dIanVRCdTBVlKBnaDCePBY4qvvklmLrqCZg', '6', 'Cleric', '46', '46', '16', '30', '1', '14', '2', '2', '12', '1', '1', '14', '2', '2', '13', '1', '1', '18', '4', '7', '18', '4', '7', '1')
RETURNING "id";

UPDATE "players" SET "current_hp" = '2' WHERE "id" = 1; --Will add all fields for final query




-- inventory insert 
CREATE TABLE "inventory" (
	"id" SERIAL PRIMARY KEY,
	"item_name" VARCHAR(80) NOT NULL
);

DELETE FROM "inventory";

INSERT INTO "inventory" ("item_name")
VALUES ('Padded armor'),('Leather armor'),('Studded leather armor'),('Hide armor'),('Chain shirt'),('Scale mail'),('Breastplate'),('Half plate armor'),('Ring mail'),('Chain mail'),('Splint mail'),('Plate mail'),('Shield'),('Club'),('Dagger'),('Greatclub'),('Handaxe'),('Javelin'),('Light hammer'),('Mace'),('Quarterstaff'),('Sickle'),('Spear'),('Light crossbow'),('Dart'),('Shortbow'),('Sling'),('Battleaxe'),('Flail'),('Glaive'),('Greataxe'),('Greatsword'),('Halberd'),('Lance'),('Longsword'),('Maul'),('Morningstar'),('Pike'),('Rapier'),('Scimitar'),('Shortsword'),('Trident'),('War pick'),('Warhammer'),('Whip'),('Blowgun'),('Hand crossbow'),('Heavy crossbow'),('Longbow'),('Net'),('Arrows'),('Blowgun needles'),('Crossblw bolts'),('Sling bullets'), ('Abacus'), ('Acid vial'),('Alchemists fire'),('Antitoxin'),('Backpack'),('Bag of ball bearings'),('Bedroll'),('Bell'),('Blanket'),('Book'),('Caltrops'),('Candle'),('Case, map'),('Case, bolt'),('Chalk'),('Climbers kit'),('Component pouch'),('Crowbar'),('Fishing tackle'),('Flask'),('Glass bottle'),('Grappling hook'),('Hammer'),('Healers kit'),('Holy water'),('Hourglass'),('Hunting trap'),('Ink'),('Ink pen'),('Ladder'),('Lamp'),('Lantern'),('Lock'), ('Magnifying glass'),('Manacles'),('Mess kit'),('Mirror'),('Flask of oil'),('Paper'),('Parchment'),('Perfume'),('Miners pick'),('Piton'),('Vial of poison'),('10ft pole'),('Iron pot'),('Potion of healing'),('Pouch'),('Quiver'),('Rations'),('Hempen rope'),('Silk rope'),('Sack'),('Sealing wax'),('Shovel'),('Signal whistle'),('Signet ring'),('Soap'),('Spellbook'),('10 iron spikes'),('Spyglass'),('Tent'),('Tinderbox'),('Torch'),('Vial'),('Waterskin'),('Whetstone');

SELECT * FROM "inventory";
DROP TABLE "inventory" CASCADE;
DROP TABLE "players_inventory";
-- players_inventory insert
CREATE TABLE "players_inventory" (
	"id" SERIAL PRIMARY KEY,
	"quantity" INT,
	"inventory_id" INT REFERENCES "inventory",
	"player_id" INT REFERENCES "players"	
);

INSERT INTO "players_inventory" ("quantity", "inventory_id", "player_id")
VALUES ('1', '41', '6');

DELETE FROM "players_inventory";

--Need to ask about updating a character's inventory, unsure how this works with a many to many relationship

DELETE FROM "players_inventory" WHERE "player_id" = 1;

-- Conditions insert
CREATE TABLE "conditions"(
	"id" SERIAL PRIMARY KEY,
	"condition_name" varchar(80)
);

INSERT INTO "conditions" ("condition_name")
VALUES ('None');

SELECT * FROM "conditions";

-- Good News! Conditions will not change from this list! Yahoo!


-- players_conditions queries
CREATE TABLE "players_conditions"(
	"id" SERIAL PRIMARY KEY,
	"condition_length" INT,
	"condition_id" INT REFERENCES "conditions",
	"player_id" INT REFERENCES "players"
);

UPDATE "players_conditions" SET "condition_length" = '2' WHERE "id" = 5;

INSERT INTO "players_conditions" ("condition_length", "condition_id", "player_id")
VALUES ('0', '16', '1');

DELETE FROM "players_conditions" WHERE "id" = 6;

-- Again will need some guidance on this many to many update, probably overthinking it


--- Games queries
CREATE TABLE "games"(
	"id" SERIAL PRIMARY KEY,
	"game_name" VARCHAR(150) NOT NULL,
	"dm_id" INT REFERENCES "user"
);


INSERT INTO "games" ("game_name", "dm_id")
VALUES ('Curse of Strahd', '1');

SELECT * FROM "games";


UPDATE "games" SET "dm_id" = '2' WHERE "id" = 1;

DELETE FROM "games" WHERE "id" = 4;


-- Users queries
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(80) UNIQUE NOT NULL,
	"password" VARCHAR(1000) NOT NULL
);

DROP TABLE "user" CASCADE;

INSERT INTO "user" ("username", "password")
VALUES ('jcolago', '1234');


-- Monster queries
CREATE TABLE "monsters" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (150) NOT NULL,
	"size" VARCHAR(50),
	"alignment" VARCHAR(50),
	"armor_class" INT NOT NULL,
	"hit_points" INT NOT NULL,
	"speed" INT NOT NULL,
	"resistances" VARCHAR(500),
	"proficiency_bonus" INT,
	"attacks" VARCHAR(1000),
	"displayed" BOOLEAN DEFAULT FALSE,
	"game_id" INT REFERENCES "games"
	
);

INSERT INTO "monsters" ("name", "size", "alignment", "armor_class", "hit_points", "speed", "resistances", "proficiency_bonus", "attacks", "game_id")
VALUES ('Zombie', 'medium', 'neutral evil', '8', '22', '20', 'Immune to poison and poisoned condition', '2', 'Slam: +3 to hit, reach 5 ft, one target, hit: 1d6 + 1', '1');

SELECT * FROM "monsters";

UPDATE "monsters" SET "hit_points" = '5' WHERE "id" = 1;

DELETE FROM "monsters" WHERE "id" = 1;

-- Conditions tied to player
SELECT "c".id, "c".condition_name, "pc".condition_length, "pc".player_id FROM "conditions" AS "c"
JOIN "players_conditions" AS "pc" ON "c".id = "pc".condition_id;

-- Inventory tied to player
SELECT "i".id, "i".item_name, "pi".quantity, "pi".player_id FROM "inventory" AS "i"
JOIN "players_inventory" AS "pi" ON  "i".id = "pi".inventory_id;

-- Game with monster and player info
SELECT "g".id, "g".game_name, "m".name, "m".size, "m".alignment, "m".armor_class, "m".armor_class, "m".hit_points, "m".speed, "m".resistances, "m".proficiency_bonus, "m".attacks, "m".displayed, "p".player_name, "p".character_name, "p". character_img, "p".character_level, "p".current_hp, "p".total_hp, "p".armor_class, "p".speed, "p".initiative_bonus, "p".strength, "p".str_bonus, "p".str_save, "p".dexterity, "p".dex_bonus, "p".dex_save, "p".constitution, "p".con_bonus, "p".con_save, "p".intelligence, "p".int_bonus, "p".int_save, "p".wisdom, "p".wis_bonus, "p".wis_save, "p".charisma, "p".cha_bonus, "p".cha_save, "p".displayed FROM "games" AS "g"
JOIN "monsters" AS "m" ON "g".id = "m".game_id
JOIN "players" AS "p" ON "g".id = "p".game_id;


-- Game with monster info
SELECT "g".id, "g".game_name, "g".dm_id, "m".name, "m".size, "m".alignment, "m".armor_class, "m".armor_class, "m".hit_points, "m".speed, "m".resistances, "m".proficiency_bonus, "m".attacks, "m".displayed FROM "games" AS "g"
JOIN "monsters" AS "m" ON "g".id = "m".game_id
WHERE "g".dm_id = 2;



-- Game with player info
SELECT "g".id, "g".game_name, "p".player_name, "p".character_name, "p". character_img, "p".character_level, "p".current_hp, "p".total_hp, "p".armor_class, "p".speed, "p".initiative_bonus, "p".strength, "p".str_bonus, "p".str_save, "p".dexterity, "p".dex_bonus, "p".dex_save, "p".constitution, "p".con_bonus, "p".con_save, "p".intelligence, "p".int_bonus, "p".int_save, "p".wisdom, "p".wis_bonus, "p".wis_save, "p".charisma, "p".cha_bonus, "p".cha_save, "p".displayed FROM "games" AS "g"
JOIN "players" AS "p" ON "g".id = "p".game_id;


-- Player info with inventory
SELECT "p".id, "p".player_name, "p".character_name, "p". character_img, "p".character_level, "p".current_hp, "p".total_hp, "p".armor_class, "p".speed, "p".initiative_bonus, "p".strength, "p".str_bonus, "p".str_save, "p".dexterity, "p".dex_bonus, "p".dex_save, "p".constitution, "p".con_bonus, "p".con_save, "p".intelligence, "p".int_bonus, "p".int_save, "p".wisdom, "p".wis_bonus, "p".wis_save, "p".charisma, "p".cha_bonus, "p".cha_save, "p".displayed, JSON_AGG ("pi".quantity) AS "quantity", JSON_AGG ("i".item_name) AS "item_name" FROM "players" AS "p"
JOIN  "players_inventory" AS "pi" ON "p".id = "pi".player_id
JOIN "inventory" AS "i" ON "pi".inventory_id = "i".id
GROUP BY "p".id;

-- Player info with conditions
SELECT "p".id, "p".player_name, "p".character_name, "p". character_img, "p".character_level, "p".current_hp, "p".total_hp, "p".armor_class, "p".speed, "p".initiative_bonus, "p".strength, "p".str_bonus, "p".str_save, "p".dexterity, "p".dex_bonus, "p".dex_save, "p".constitution, "p".con_bonus, "p".con_save, "p".intelligence, "p".int_bonus, "p".int_save, "p".wisdom, "p".wis_bonus, "p".wis_save, "p".charisma, "p".cha_bonus, "p".cha_save, "p".displayed, "pc".condition_length, "c".condition_name FROM "players" AS "p"
JOIN  "players_conditions" AS "pc" ON "p".id = "pc".player_id
JOIN "conditions" AS "c" ON "pc".condition_id = "c".id;


-- Query for all player data including inventory and conditions
SELECT "p".id, "p".player_name, "p".character_name, "p". character_img, "p".character_class, "p".character_level, "p".current_hp, "p".total_hp, "p".armor_class, "p".speed, "p".initiative_bonus, "p".strength, "p".str_bonus, "p".str_save, "p".dexterity, "p".dex_bonus, "p".dex_save, "p".constitution, "p".con_bonus, "p".con_save, "p".intelligence, "p".int_bonus, "p".int_save, "p".wisdom, "p".wis_bonus, "p".wis_save, "p".charisma, "p".cha_bonus, "p".cha_save, "p".displayed,
"g".game_name, "g".dm_id,
		(SELECT JSON_AGG(JSON_BUILD_OBJECT('id', "pi".id, 'quantity',"pi".quantity, 'item_name', "i".item_name)) FROM "players_inventory" as "pi" JOIN "inventory" AS "i" ON 		"pi".inventory_id = "i".id WHERE "pi".player_id = "p".id) AS quantity_items,
		(SELECT JSON_AGG(JSON_BUILD_OBJECT('id', "pc".id, 'length', "pc".condition_length,  'condition_name', "c".condition_name)) FROM "players_conditions" as "pc"
		 JOIN "conditions" AS "c" ON "pc".condition_id = "c".id WHERE "pc".player_id = "p".id) AS length_condition
FROM "players" AS "p"
JOIN "games" AS "g" ON "p".game_id = "g".id
WHERE "g".dm_id = 2 ORDER BY "g".id;
-- Need to get the inventory sorted into an object with 2 keys probably