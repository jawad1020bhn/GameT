const LEAGUES_DATA = {

"Premier League": {

country: "England",

tier: 1,

reputation: 95,

currency: "GBP",

club_count: 20,

registration_rules: {

max_squad_size: 25,

min_homegrown: 8,

work_permit_required: true,

},

loan_rules: {

max_in_per_season: 2,

max_from_one_club: 1,

in_league_loans_allowed: true,

},

match_sub_rules: {

bench_limit: 9,

subs_allowed: 5,

},

transfer_windows: [

{ name: "Summer", open: "YYYY-06-16", close: "YYYY-09-01" },

{ name: "Winter", open: "YYYY-01-01", close: "YYYY-02-02" },

],

fixture_schedule: {

season_start: "YYYY-08-15",

season_end: "YYYY-05-24",

rounds: 38,

},

continental_qualification: {

ucl: 4,

uel: 2,

uecl: 1,

},

relegation_slots: 3,

promotion_relegation_with: "EFL Championship",

tv_distribution: {

equal_share: 0.5,

merit: 0.25,

facility: 0.25,

},

prize_money_model: {

type: "descending_linear",

top: 60000000,

bottom: 3000000,

},

var_enabled: true,

refereeing_strictness: 60,

injury_rate_modifier: 1.0,

ffp: {

rolling_loss_limit_3y: 105000000,

},

parachute_payments: {

enabled: true, years: 3, first_year_pct_of_share: 0.55,

},

transfer_market_volatility: 65,

inflation_rate: 0.05,

clubs: [

{

id: 1,

name: "Manchester City",

founded: 1880,

stadium: "City of Manchester Stadium",

capacity: 52900,

budget: 180000000,

wage_budget_weekly: 4275300,

cash_reserves: 650000000,

debt: 0,

reputation: 95,

fanbase_size: 95,

attendance_rate: 0.96,

commercial_power: 95,

facilities: {

training: 95,

youth: 90,

medical: 95,

},

scouting: {

network_quality: 92,

range: "global",

},

owner: {

ambition: 95,

patience: 90,

spend_tendency: 92,

interference: 15,

},

board_expectations: {

league_position_target: 1,

cup_target_stage: "semi_final",

continental_target_stage: "semi_final",

},

transfer_policy: {

max_age_in: 29,

min_overall_in: 83,

homegrown_bias: 35,

profit_focus: 30,

to_rivals_multiplier: 1.6,

wage_structure_strictness: 25,

buy_release_clauses: true,

},

negotiation_style: {

hardness: 88,

bid_delay_days: 2,

counter_margin_pct: 22,

},

willingness_to_sell: 30,

style_identity: {

formations: ["4-3-3", "4-2-3-1", "3-2-4-1"],

play_style: "possession_pressing",

},

rivalries: [2, 14],

affiliates: { feeder: [], parent: null },

players: [

{

id: 101,

name: "Erling Haaland",

position: "ST",

age: 25,

overall: 90,

potential: 94,

nationality: "Norway",

salary: 525000,

attributes: { pace: 89, shooting: 94, passing: 75, dribbling: 80, defending: 43, physical: 88 },

market_value: 220000000,

contract_end: "2034-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 15,

stubbornness: 85,

},

squad_role: "star",

morale: 88,

form: 85,

fitness: 95,

sharpness: 92,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 92,

loyalty: 60,

leadership: 70,

temperament: 75,

},

reputation: 94,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 102,

name: "Gianluigi Donnarumma",

position: "GK",

age: 26,

overall: 88,

potential: 90,

nationality: "Italy",

salary: 250000,

attributes: { pace: 50, shooting: 45, passing: 62, dribbling: 51, defending: 45, physical: 85 },

market_value: 75000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 12,

stubbornness: 78,

},

squad_role: "star",

morale: 85,

form: 82,

fitness: 93,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 15,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 85,

loyalty: 65,

leadership: 80,

temperament: 80,

},

reputation: 88,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 103,

name: "Stefan Ortega",

position: "GK",

age: 32,

overall: 82,

potential: 82,

nationality: "Germany",

salary: 65000,

attributes: { pace: 45, shooting: 40, passing: 68, dribbling: 50, defending: 42, physical: 72 },

market_value: 8000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 60,

},

squad_role: "rotation",

morale: 80,

form: 78,

fitness: 91,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 70,

loyalty: 75,

leadership: 72,

temperament: 88,

},

reputation: 75,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "listed",

on_loan: false,

loan: null,

},

{

id: 104,

name: "Rúben Dias",

position: "CB",

age: 28,

overall: 88,

potential: 89,

nationality: "Portugal",

salary: 250000,

attributes: { pace: 61, shooting: 40, passing: 72, dribbling: 70, defending: 89, physical: 85 },

market_value: 85000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 75,

},

squad_role: "star",

morale: 87,

form: 84,

fitness: 94,

sharpness: 90,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 92,

ambition: 85,

loyalty: 70,

leadership: 88,

temperament: 82,

},

reputation: 87,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 105,

name: "John Stones",

position: "CB",

age: 31,

overall: 84,

potential: 84,

nationality: "England",

salary: 250000,

attributes: { pace: 67, shooting: 58, passing: 78, dribbling: 76, defending: 86, physical: 75 },

market_value: 35000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 65,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 88,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 35,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 87,

ambition: 78,

loyalty: 75,

leadership: 75,

temperament: 78,

},

reputation: 84,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 106,

name: "Manuel Akanji",

position: "CB",

age: 30,

overall: 83,

potential: 83,

nationality: "Switzerland",

salary: 140000,

attributes: { pace: 74, shooting: 45, passing: 70, dribbling: 68, defending: 84, physical: 78 },

market_value: 32000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 60,

},

squad_role: "rotation",

morale: 80,

form: 77,

fitness: 90,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 25,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 75,

loyalty: 72,

leadership: 70,

temperament: 85,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 107,

name: "Nathan Aké",

position: "CB",

age: 30,

overall: 83,

potential: 83,

nationality: "Netherlands",

salary: 150000,

attributes: { pace: 75, shooting: 50, passing: 73, dribbling: 74, defending: 85, physical: 76 },

market_value: 30000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 81,

form: 78,

fitness: 89,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 30,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 74,

loyalty: 75,

leadership: 68,

temperament: 82,

},

reputation: 79,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 108,

name: "Joško Gvardiol",

position: "CB",

age: 23,

overall: 86,

potential: 91,

nationality: "Croatia",

salary: 185000,

attributes: { pace: 80, shooting: 65, passing: 76, dribbling: 78, defending: 86, physical: 83 },

market_value: 90000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 72,

},

squad_role: "star",

morale: 86,

form: 83,

fitness: 95,

sharpness: 89,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 90,

loyalty: 68,

leadership: 75,

temperament: 77,

},

reputation: 85,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 109,

name: "Rayan Aït-Nouri",

position: "LB",

age: 24,

overall: 82,

potential: 86,

nationality: "Algeria",

salary: 110000,

attributes: { pace: 86, shooting: 62, passing: 74, dribbling: 78, defending: 78, physical: 75 },

market_value: 45000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "important",

morale: 82,

form: 80,

fitness: 93,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 85,

loyalty: 65,

leadership: 60,

temperament: 72,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 110,

name: "Nico González",

position: "RB",

age: 23,

overall: 83,

potential: 87,

nationality: "Spain",

salary: 205500,

attributes: { pace: 83, shooting: 60, passing: 77, dribbling: 80, defending: 80, physical: 74 },

market_value: 55000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 94,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 88,

loyalty: 67,

leadership: 65,

temperament: 75,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 111,

name: "Tijjani Reijnders",

position: "CM",

age: 27,

overall: 85,

potential: 87,

nationality: "Netherlands",

salary: 230000,

attributes: { pace: 74, shooting: 76, passing: 84, dribbling: 82, defending: 73, physical: 76 },

market_value: 65000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 73,

},

squad_role: "star",

morale: 85,

form: 82,

fitness: 93,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 19,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 89,

ambition: 84,

loyalty: 70,

leadership: 77,

temperament: 80,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 112,

name: "Rodri",

position: "CDM",

age: 29,

overall: 90,

potential: 90,

nationality: "Spain",

salary: 220000,

attributes: { pace: 60, shooting: 74, passing: 87, dribbling: 82, defending: 87, physical: 83 },

market_value: 110000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 12,

stubbornness: 80,

},

squad_role: "star",

morale: 88,

form: 86,

fitness: 94,

sharpness: 91,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 93,

ambition: 87,

loyalty: 77,

leadership: 88,

temperament: 86,

},

reputation: 90,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 113,

name: "Mateo Kovačić",

position: "CM",

age: 31,

overall: 85,

potential: 85,

nationality: "Croatia",

salary: 175000,

attributes: { pace: 68, shooting: 73, passing: 83, dribbling: 85, defending: 74, physical: 74 },

market_value: 38000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 68,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 90,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 80,

loyalty: 72,

leadership: 74,

temperament: 83,

},

reputation: 84,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 114,

name: "İlkay Gündoğan",

position: "CM",

age: 35,

overall: 82,

potential: 82,

nationality: "Germany",

salary: 160000,

attributes: { pace: 58, shooting: 78, passing: 86, dribbling: 82, defending: 70, physical: 65 },

market_value: 10000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 55,

},

squad_role: "rotation",

morale: 80,

form: 76,

fitness: 85,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 38,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 93,

ambition: 75,

loyalty: 80,

leadership: 85,

temperament: 88,

},

reputation: 85,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 115,

name: "Bernardo Silva",

position: "CAM",

age: 31,

overall: 87,

potential: 87,

nationality: "Portugal",

salary: 300000,

attributes: { pace: 70, shooting: 79, passing: 86, dribbling: 90, defending: 70, physical: 68 },

market_value: 70000000,

contract_end: "2026-06-30",

release_clause: 50000000,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 75,

},

squad_role: "star",

morale: 83,

form: 80,

fitness: 91,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 91,

ambition: 82,

loyalty: 75,

leadership: 78,

temperament: 80,

},

reputation: 88,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 116,

name: "Kevin De Bruyne",

position: "CAM",

age: 34,

overall: 87,

potential: 87,

nationality: "Belgium",

salary: 400000,

attributes: { pace: 65, shooting: 86, passing: 93, dribbling: 85, defending: 65, physical: 75 },

market_value: 35000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "star",

morale: 85,

form: 81,

fitness: 88,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 42,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 92,

ambition: 86,

loyalty: 82,

leadership: 88,

temperament: 75,

},

reputation: 92,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 117,

name: "Phil Foden",

position: "RW",

age: 25,

overall: 88,

potential: 92,

nationality: "England",

salary: 225000,

attributes: { pace: 82, shooting: 84, passing: 85, dribbling: 90, defending: 56, physical: 61 },

market_value: 130000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 72,

},

squad_role: "star",

morale: 87,

form: 84,

fitness: 93,

sharpness: 90,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 89,

ambition: 90,

loyalty: 85,

leadership: 72,

temperament: 78,

},

reputation: 88,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 118,

name: "Rayan Cherki",

position: "RW",

age: 22,

overall: 82,

potential: 88,

nationality: "France",

salary: 145000,

attributes: { pace: 78, shooting: 75, passing: 81, dribbling: 86, defending: 38, physical: 58 },

market_value: 45000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 94,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 80,

ambition: 88,

loyalty: 60,

leadership: 55,

temperament: 68,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 119,

name: "Jérémy Doku",

position: "LW",

age: 23,

overall: 83,

potential: 88,

nationality: "Belgium",

salary: 155000,

attributes: { pace: 95, shooting: 70, passing: 74, dribbling: 87, defending: 35, physical: 68 },

market_value: 60000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "important",

morale: 83,

form: 80,

fitness: 95,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 86,

loyalty: 65,

leadership: 58,

temperament: 72,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 120,

name: "Jack Grealish",

position: "LW",

age: 29,

overall: 85,

potential: 85,

nationality: "England",

salary: 225000,

attributes: { pace: 78, shooting: 75, passing: 83, dribbling: 88, defending: 42, physical: 70 },

market_value: 55000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 65,

},

squad_role: "important",

morale: 78,

form: 74,

fitness: 89,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 83,

ambition: 80,

loyalty: 70,

leadership: 68,

temperament: 74,

},

reputation: 86,

homegrown_status: "club_trained",

fan_favorite: false,

transfer_status: "listed",

on_loan: false,

loan: null,

},

{

id: 121,

name: "Omar Marmoush",

position: "ST",

age: 26,

overall: 84,

potential: 87,

nationality: "Egypt",

salary: 295000,

attributes: { pace: 88, shooting: 84, passing: 78, dribbling: 83, defending: 38, physical: 76 },

market_value: 70000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 12,

stubbornness: 75,

},

squad_role: "important",

morale: 84,

form: 81,

fitness: 94,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 88,

loyalty: 62,

leadership: 65,

temperament: 72,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 122,

name: "Sávio",

position: "RW",

age: 21,

overall: 79,

potential: 86,

nationality: "Brazil",

salary: 85000,

attributes: { pace: 90, shooting: 72, passing: 74, dribbling: 84, defending: 32, physical: 60 },

market_value: 38000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 65,

},

squad_role: "rotation",

morale: 80,

form: 77,

fitness: 96,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 78,

ambition: 87,

loyalty: 65,

leadership: 50,

temperament: 70,

},

reputation: 74,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 123,

name: "James McAtee",

position: "CAM",

age: 22,

overall: 76,

potential: 83,

nationality: "England",

salary: 40000,

attributes: { pace: 72, shooting: 70, passing: 76, dribbling: 79, defending: 45, physical: 58 },

market_value: 18000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 55,

},

squad_role: "prospect",

morale: 78,

form: 74,

fitness: 95,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 15,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 85,

loyalty: 78,

leadership: 55,

temperament: 75,

},

reputation: 70,

homegrown_status: "club_trained",

fan_favorite: false,

transfer_status: "loan_listed",

on_loan: false,

loan: null,

},

{

id: 124,

name: "Oscar Bobb",

position: "RW",

age: 21,

overall: 75,

potential: 84,

nationality: "Norway",

salary: 35000,

attributes: { pace: 78, shooting: 70, passing: 73, dribbling: 80, defending: 38, physical: 55 },

market_value: 16000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 58,

},

squad_role: "prospect",

morale: 77,

form: 73,

fitness: 96,

sharpness: 79,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 83,

ambition: 87,

loyalty: 75,

leadership: 52,

temperament: 77,

},

reputation: 68,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 125,

name: "Matheus Nunes",

position: "CM",

age: 26,

overall: 80,

potential: 83,

nationality: "Portugal",

salary: 120000,

attributes: { pace: 78, shooting: 68, passing: 76, dribbling: 80, defending: 70, physical: 73 },

market_value: 32000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "rotation",

morale: 76,

form: 72,

fitness: 91,

sharpness: 79,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 23,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 79,

ambition: 82,

loyalty: 65,

leadership: 60,

temperament: 71,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 126,

name: "Claudio Echeverri",

position: "CAM",

age: 19,

overall: 72,

potential: 86,

nationality: "Argentina",

salary: 45000,

attributes: { pace: 72, shooting: 68, passing: 74, dribbling: 78, defending: 35, physical: 52 },

market_value: 22000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 62,

},

squad_role: "prospect",

morale: 80,

form: 75,

fitness: 97,

sharpness: 78,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 12,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 80,

ambition: 90,

loyalty: 70,

leadership: 50,

temperament: 68,

},

reputation: 70,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 127,

name: "Rico Lewis",

position: "RB",

age: 20,

overall: 76,

potential: 85,

nationality: "England",

salary: 50000,

attributes: { pace: 74, shooting: 62, passing: 78, dribbling: 76, defending: 72, physical: 65 },

market_value: 25000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 60,

},

squad_role: "rotation",

morale: 81,

form: 77,

fitness: 95,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 14,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 88,

loyalty: 82,

leadership: 58,

temperament: 79,

},

reputation: 72,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

],

},
{

id: 2,

name: "Arsenal",

founded: 1886,

stadium: "Emirates Stadium",

capacity: 60704,

budget: 140000000,

wage_budget_weekly: 3551000,

cash_reserves: 480000000,

debt: 150000000,

reputation: 93,

fanbase_size: 93,

attendance_rate: 0.99,

commercial_power: 92,

facilities: {

training: 93,

youth: 88,

medical: 93,

},

scouting: {

network_quality: 89,

range: "global",

},

owner: {

ambition: 90,

patience: 85,

spend_tendency: 85,

interference: 25,

},

board_expectations: {

league_position_target: 1,

cup_target_stage: "semi_final",

continental_target_stage: "quarter_final",

},

transfer_policy: {

max_age_in: 27,

min_overall_in: 81,

homegrown_bias: 45,

profit_focus: 35,

to_rivals_multiplier: 1.8,

wage_structure_strictness: 40,

buy_release_clauses: false,

},

negotiation_style: {

hardness: 82,

bid_delay_days: 3,

counter_margin_pct: 28,

},

willingness_to_sell: 35,

style_identity: {

formations: ["4-3-3", "4-2-3-1"],

play_style: "possession_attacking",

},

rivalries: [1, 6, 14],

affiliates: { feeder: [], parent: null },

players: [

{

id: 201,

name: "David Raya",

position: "GK",

age: 29,

overall: 87,

potential: 88,

nationality: "Spain",

salary: 100000,

attributes: { pace: 48, shooting: 42, passing: 75, dribbling: 52, defending: 43, physical: 78 },

market_value: 45000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 70,

},

squad_role: "star",

morale: 86,

form: 83,

fitness: 93,

sharpness: 89,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 89,

ambition: 84,

loyalty: 72,

leadership: 78,

temperament: 85,

},

reputation: 84,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 202,

name: "Kepa Arrizabalaga",

position: "GK",

age: 30,

overall: 80,

potential: 80,

nationality: "Spain",

salary: 60000,

attributes: { pace: 50, shooting: 40, passing: 72, dribbling: 55, defending: 42, physical: 75 },

market_value: 15000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 65,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 91,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 76,

loyalty: 70,

leadership: 72,

temperament: 79,

},

reputation: 79,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 203,

name: "William Saliba",

position: "CB",

age: 24,

overall: 88,

potential: 92,

nationality: "France",

salary: 250000,

attributes: { pace: 81, shooting: 42, passing: 73, dribbling: 72, defending: 88, physical: 84 },

market_value: 95000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 75,

},

squad_role: "star",

morale: 88,

form: 85,

fitness: 95,

sharpness: 91,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 89,

loyalty: 75,

leadership: 80,

temperament: 82,

},

reputation: 87,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 204,

name: "Gabriel Magalhães",

position: "CB",

age: 27,

overall: 86,

potential: 87,

nationality: "Brazil",

salary: 150000,

attributes: { pace: 68, shooting: 50, passing: 70, dribbling: 68, defending: 87, physical: 86 },

market_value: 70000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 72,

},

squad_role: "star",

morale: 87,

form: 84,

fitness: 94,

sharpness: 90,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 85,

loyalty: 78,

leadership: 83,

temperament: 75,

},

reputation: 85,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 205,

name: "Ben White",

position: "RB",

age: 27,

overall: 84,

potential: 85,

nationality: "England",

salary: 150000,

attributes: { pace: 77, shooting: 55, passing: 75, dribbling: 73, defending: 83, physical: 76 },

market_value: 55000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 68,

},

squad_role: "important",

morale: 84,

form: 81,

fitness: 92,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 25,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 87,

ambition: 82,

loyalty: 76,

leadership: 74,

temperament: 80,

},

reputation: 82,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 206,

name: "Jurriën Timber",

position: "RB",

age: 24,

overall: 82,

potential: 87,

nationality: "Netherlands",

salary: 90000,

attributes: { pace: 79, shooting: 52, passing: 76, dribbling: 75, defending: 81, physical: 73 },

market_value: 48000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "important",

morale: 83,

form: 80,

fitness: 93,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 86,

loyalty: 72,

leadership: 68,

temperament: 77,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 207,

name: "Riccardo Calafiori",

position: "LB",

age: 23,

overall: 81,

potential: 87,

nationality: "Italy",

salary: 120000,

attributes: { pace: 80, shooting: 58, passing: 75, dribbling: 76, defending: 79, physical: 75 },

market_value: 45000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 94,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 87,

loyalty: 68,

leadership: 65,

temperament: 73,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 208,

name: "Piero Hincapié",

position: "CB",

age: 23,

overall: 79,

potential: 84,

nationality: "Ecuador",

salary: 65000,

attributes: { pace: 76, shooting: 40, passing: 68, dribbling: 67, defending: 78, physical: 78 },

market_value: 32000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 79,

form: 76,

fitness: 93,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 19,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 84,

loyalty: 70,

leadership: 62,

temperament: 76,

},

reputation: 75,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 209,

name: "Cristhian Mosquera",

position: "CB",

age: 21,

overall: 77,

potential: 85,

nationality: "Spain",

salary: 55000,

attributes: { pace: 75, shooting: 38, passing: 66, dribbling: 65, defending: 76, physical: 77 },

market_value: 28000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 60,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 95,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 83,

ambition: 86,

loyalty: 72,

leadership: 58,

temperament: 78,

},

reputation: 73,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 210,

name: "Myles Lewis-Skelly",

position: "LB",

age: 18,

overall: 71,

potential: 83,

nationality: "England",

salary: 45000,

attributes: { pace: 78, shooting: 52, passing: 70, dribbling: 73, defending: 68, physical: 65 },

market_value: 15000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 55,

},

squad_role: "prospect",

morale: 80,

form: 76,

fitness: 97,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 12,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 90,

loyalty: 80,

leadership: 55,

temperament: 77,

},

reputation: 68,

homegrown_status: "club_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 211,

name: "Oleksandr Zinchenko",

position: "LB",

age: 28,

overall: 78,

potential: 78,

nationality: "Ukraine",

salary: 30000,

attributes: { pace: 72, shooting: 62, passing: 78, dribbling: 75, defending: 74, physical: 68 },

market_value: 18000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 60,

},

squad_role: "rotation",

morale: 75,

form: 71,

fitness: 87,

sharpness: 77,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 32,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 75,

loyalty: 72,

leadership: 76,

temperament: 73,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 212,

name: "Declan Rice",

position: "CDM",

age: 26,

overall: 88,

potential: 90,

nationality: "England",

salary: 240000,

attributes: { pace: 72, shooting: 68, passing: 81, dribbling: 76, defending: 87, physical: 85 },

market_value: 110000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 74,

},

squad_role: "star",

morale: 87,

form: 84,

fitness: 94,

sharpness: 90,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 91,

ambition: 88,

loyalty: 75,

leadership: 86,

temperament: 83,

},

reputation: 88,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 213,

name: "Martín Zubimendi",

position: "CDM",

age: 26,

overall: 84,

potential: 86,

nationality: "Spain",

salary: 75000,

attributes: { pace: 65, shooting: 65, passing: 82, dribbling: 76, defending: 83, physical: 78 },

market_value: 60000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "important",

morale: 83,

form: 80,

fitness: 93,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 82,

loyalty: 78,

leadership: 74,

temperament: 84,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 214,

name: "Christian Nørgaard",

position: "CDM",

age: 31,

overall: 78,

potential: 78,

nationality: "Denmark",

salary: 65000,

attributes: { pace: 60, shooting: 62, passing: 74, dribbling: 68, defending: 78, physical: 80 },

market_value: 12000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 58,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 89,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 73,

loyalty: 75,

leadership: 78,

temperament: 82,

},

reputation: 74,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 215,

name: "Martin Ødegaard",

position: "CAM",

age: 26,

overall: 89,

potential: 91,

nationality: "Norway",

salary: 240000,

attributes: { pace: 75, shooting: 82, passing: 88, dribbling: 87, defending: 58, physical: 69 },

market_value: 120000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 76,

},

squad_role: "star",

morale: 89,

form: 86,

fitness: 93,

sharpness: 91,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 92,

ambition: 90,

loyalty: 80,

leadership: 90,

temperament: 81,

},

reputation: 89,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 216,

name: "Mikel Merino",

position: "CM",

age: 29,

overall: 82,

potential: 82,

nationality: "Spain",

salary: 130000,

attributes: { pace: 66, shooting: 74, passing: 79, dribbling: 75, defending: 76, physical: 81 },

market_value: 35000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 91,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 27,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 87,

ambition: 79,

loyalty: 73,

leadership: 80,

temperament: 77,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 217,

name: "Eberechi Eze",

position: "CAM",

age: 27,

overall: 84,

potential: 86,

nationality: "England",

salary: 180000,

attributes: { pace: 79, shooting: 78, passing: 82, dribbling: 86, defending: 44, physical: 70 },

market_value: 65000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "important",

morale: 84,

form: 81,

fitness: 94,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 21,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 86,

loyalty: 70,

leadership: 68,

temperament: 75,

},

reputation: 82,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 218,

name: "Ethan Nwaneri",

position: "CAM",

age: 18,

overall: 74,

potential: 88,

nationality: "England",

salary: 80000,

attributes: { pace: 74, shooting: 72, passing: 76, dribbling: 80, defending: 38, physical: 58 },

market_value: 28000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 60,

},

squad_role: "prospect",

morale: 82,

form: 78,

fitness: 97,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 10,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 87,

ambition: 92,

loyalty: 85,

leadership: 58,

temperament: 76,

},

reputation: 72,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 219,

name: "Max Dowman",

position: "CAM",

age: 15,

overall: 62,

potential: 85,

nationality: "England",

salary: 35000,

attributes: { pace: 68, shooting: 58, passing: 64, dribbling: 72, defending: 28, physical: 45 },

market_value: 8000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 50,

},

squad_role: "prospect",

morale: 78,

form: 70,

fitness: 98,

sharpness: 75,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 8,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 95,

loyalty: 88,

leadership: 45,

temperament: 72,

},

reputation: 60,

homegrown_status: "club_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 220,

name: "Bukayo Saka",

position: "RW",

age: 23,

overall: 89,

potential: 93,

nationality: "England",

salary: 195000,

attributes: { pace: 87, shooting: 83, passing: 84, dribbling: 89, defending: 52, physical: 72 },

market_value: 140000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 75,

},

squad_role: "star",

morale: 88,

form: 85,

fitness: 94,

sharpness: 90,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 23,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 91,

ambition: 91,

loyalty: 85,

leadership: 82,

temperament: 80,

},

reputation: 90,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 221,

name: "Noni Madueke",

position: "RW",

age: 23,

overall: 80,

potential: 86,

nationality: "England",

salary: 150000,

attributes: { pace: 87, shooting: 76, passing: 73, dribbling: 82, defending: 36, physical: 68 },

market_value: 42000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "rotation",

morale: 80,

form: 77,

fitness: 95,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 81,

ambition: 85,

loyalty: 68,

leadership: 58,

temperament: 70,

},

reputation: 76,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 222,

name: "Gabriel Martinelli",

position: "LW",

age: 24,

overall: 84,

potential: 88,

nationality: "Brazil",

salary: 180000,

attributes: { pace: 90, shooting: 79, passing: 77, dribbling: 84, defending: 42, physical: 72 },

market_value: 70000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "important",

morale: 83,

form: 80,

fitness: 95,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 88,

loyalty: 78,

leadership: 70,

temperament: 74,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 223,

name: "Leandro Trossard",

position: "LW",

age: 30,

overall: 82,

potential: 82,

nationality: "Belgium",

salary: 90000,

attributes: { pace: 79, shooting: 80, passing: 79, dribbling: 82, defending: 48, physical: 70 },

market_value: 30000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 90,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 87,

ambition: 78,

loyalty: 74,

leadership: 72,

temperament: 76,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 224,

name: "Reiss Nelson",

position: "RW",

age: 25,

overall: 76,

potential: 78,

nationality: "England",

salary: 30000,

attributes: { pace: 82, shooting: 72, passing: 71, dribbling: 77, defending: 35, physical: 62 },

market_value: 15000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 58,

},

squad_role: "rotation",

morale: 73,

form: 69,

fitness: 92,

sharpness: 76,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 78,

ambition: 76,

loyalty: 75,

leadership: 55,

temperament: 72,

},

reputation: 72,

homegrown_status: "club_trained",

fan_favorite: false,

transfer_status: "listed",

on_loan: false,

loan: null,

},

{

id: 225,

name: "Viktor Gyökeres",

position: "ST",

age: 27,

overall: 87,

potential: 89,

nationality: "Sweden",

salary: 200000,

attributes: { pace: 84, shooting: 89, passing: 74, dribbling: 78, defending: 45, physical: 86 },

market_value: 95000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 12,

stubbornness: 76,

},

squad_role: "star",

morale: 87,

form: 84,

fitness: 95,

sharpness: 90,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 21,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 89,

loyalty: 70,

leadership: 76,

temperament: 77,

},

reputation: 86,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 226,

name: "Kai Havertz",

position: "ST",

age: 26,

overall: 85,

potential: 87,

nationality: "Germany",

salary: 280000,

attributes: { pace: 76, shooting: 82, passing: 82, dribbling: 82, defending: 54, physical: 78 },

market_value: 75000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 72,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 92,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 23,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 84,

loyalty: 70,

leadership: 74,

temperament: 75,

},

reputation: 85,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 227,

name: "Gabriel Jesus",

position: "ST",

age: 28,

overall: 83,

potential: 83,

nationality: "Brazil",

salary: 265000,

attributes: { pace: 86, shooting: 81, passing: 78, dribbling: 84, defending: 46, physical: 72 },

market_value: 45000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 89,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 35,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 83,

loyalty: 72,

leadership: 75,

temperament: 73,

},

reputation: 84,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

],

},
{

id: 3,

name: "Liverpool",

founded: 1892,

stadium: "Anfield",

capacity: 61276,

budget: 130000000,

wage_budget_weekly: 3315400,

cash_reserves: 420000000,

debt: 120000000,

reputation: 94,

fanbase_size: 94,

attendance_rate: 0.99,

commercial_power: 93,

facilities: {

training: 92,

youth: 87,

medical: 91,

},

scouting: {

network_quality: 88,

range: "global",

},

owner: {

ambition: 92,

patience: 82,

spend_tendency: 83,

interference: 30,

},

board_expectations: {

league_position_target: 1,

cup_target_stage: "final",

continental_target_stage: "semi_final",

},

transfer_policy: {

max_age_in: 26,

min_overall_in: 80,

homegrown_bias: 40,

profit_focus: 45,

to_rivals_multiplier: 2.0,

wage_structure_strictness: 45,

buy_release_clauses: false,

},

negotiation_style: {

hardness: 85,

bid_delay_days: 3,

counter_margin_pct: 30,

},

willingness_to_sell: 40,

style_identity: {

formations: ["4-3-3", "4-2-3-1"],

play_style: "pressing_counter",

},

rivalries: [1, 3, 14],

affiliates: { feeder: [], parent: null },

players: [

{

id: 301,

name: "Alisson Becker",

position: "GK",

age: 33,

overall: 89,

potential: 89,

nationality: "Brazil",

salary: 190000,

attributes: { pace: 46, shooting: 42, passing: 78, dribbling: 50, defending: 45, physical: 84 },

market_value: 35000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 70,

},

squad_role: "star",

morale: 87,

form: 84,

fitness: 92,

sharpness: 89,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 92,

ambition: 84,

loyalty: 82,

leadership: 88,

temperament: 90,

},

reputation: 90,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 302,

name: "Caoimhín Kelleher",

position: "GK",

age: 27,

overall: 79,

potential: 82,

nationality: "Ireland",

salary: 45000,

attributes: { pace: 48, shooting: 40, passing: 68, dribbling: 52, defending: 42, physical: 75 },

market_value: 18000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 94,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 80,

loyalty: 80,

leadership: 68,

temperament: 84,

},

reputation: 75,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 303,

name: "Virgil van Dijk",

position: "CB",

age: 34,

overall: 88,

potential: 88,

nationality: "Netherlands",

salary: 350000,

attributes: { pace: 74, shooting: 58, passing: 72, dribbling: 72, defending: 90, physical: 87 },

market_value: 50000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 74,

},

squad_role: "star",

morale: 88,

form: 85,

fitness: 91,

sharpness: 89,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 94,

ambition: 85,

loyalty: 85,

leadership: 92,

temperament: 86,

},

reputation: 91,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 304,

name: "Ibrahima Konaté",

position: "CB",

age: 26,

overall: 85,

potential: 87,

nationality: "France",

salary: 145000,

attributes: { pace: 78, shooting: 44, passing: 68, dribbling: 70, defending: 86, physical: 85 },

market_value: 65000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "star",

morale: 85,

form: 82,

fitness: 93,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 32,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 87,

ambition: 84,

loyalty: 74,

leadership: 76,

temperament: 79,

},

reputation: 84,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 305,

name: "Joe Gomez",

position: "CB",

age: 28,

overall: 82,

potential: 83,

nationality: "England",

salary: 100000,

attributes: { pace: 77, shooting: 42, passing: 70, dribbling: 68, defending: 82, physical: 79 },

market_value: 35000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 64,

},

squad_role: "rotation",

morale: 80,

form: 77,

fitness: 92,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 35,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 78,

loyalty: 82,

leadership: 74,

temperament: 81,

},

reputation: 79,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 306,

name: "Jarell Quansah",

position: "CB",

age: 22,

overall: 78,

potential: 84,

nationality: "England",

salary: 40000,

attributes: { pace: 74, shooting: 38, passing: 66, dribbling: 64, defending: 77, physical: 76 },

market_value: 28000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 58,

},

squad_role: "rotation",

morale: 79,

form: 76,

fitness: 95,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 14,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 87,

loyalty: 80,

leadership: 62,

temperament: 78,

},

reputation: 73,

homegrown_status: "club_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 307,

name: "Milos Kerkez",

position: "LB",

age: 22,

overall: 81,

potential: 87,

nationality: "Hungary",

salary: 95000,

attributes: { pace: 86, shooting: 56, passing: 74, dribbling: 77, defending: 78, physical: 72 },

market_value: 40000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 66,

},

squad_role: "important",

morale: 83,

form: 80,

fitness: 95,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 88,

loyalty: 70,

leadership: 64,

temperament: 75,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 308,

name: "Andy Robertson",

position: "LB",

age: 31,

overall: 83,

potential: 83,

nationality: "Scotland",

salary: 160000,

attributes: { pace: 81, shooting: 60, passing: 79, dribbling: 75, defending: 81, physical: 78 },

market_value: 28000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 66,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 90,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 80,

loyalty: 85,

leadership: 82,

temperament: 77,

},

reputation: 84,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 309,

name: "Kostas Tsimikas",

position: "LB",

age: 29,

overall: 79,

potential: 79,

nationality: "Greece",

salary: 70000,

attributes: { pace: 79, shooting: 58, passing: 74, dribbling: 73, defending: 77, physical: 74 },

market_value: 20000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 60,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 92,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 75,

loyalty: 78,

leadership: 65,

temperament: 76,

},

reputation: 75,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 310,

name: "Trent Alexander-Arnold",

position: "RB",

age: 27,

overall: 88,

potential: 89,

nationality: "England",

salary: 180000,

attributes: { pace: 76, shooting: 75, passing: 90, dribbling: 80, defending: 76, physical: 70 },

market_value: 85000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 75,

},

squad_role: "star",

morale: 86,

form: 83,

fitness: 92,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 89,

ambition: 90,

loyalty: 82,

leadership: 84,

temperament: 76,

},

reputation: 89,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 311,

name: "Conor Bradley",

position: "RB",

age: 22,

overall: 77,

potential: 84,

nationality: "Northern Ireland",

salary: 35000,

attributes: { pace: 84, shooting: 58, passing: 70, dribbling: 72, defending: 74, physical: 70 },

market_value: 22000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 58,

},

squad_role: "rotation",

morale: 80,

form: 77,

fitness: 96,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 15,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 88,

loyalty: 85,

leadership: 60,

temperament: 79,

},

reputation: 72,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 312,

name: "Alexis Mac Allister",

position: "CM",

age: 27,

overall: 86,

potential: 88,

nationality: "Argentina",

salary: 150000,

attributes: { pace: 72, shooting: 76, passing: 84, dribbling: 81, defending: 75, physical: 74 },

market_value: 75000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "star",

morale: 85,

form: 82,

fitness: 93,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 85,

loyalty: 75,

leadership: 78,

temperament: 80,

},

reputation: 85,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 313,

name: "Ryan Gravenberch",

position: "CM",

age: 23,

overall: 83,

potential: 88,

nationality: "Netherlands",

salary: 115000,

attributes: { pace: 78, shooting: 68, passing: 79, dribbling: 82, defending: 74, physical: 78 },

market_value: 60000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "important",

morale: 83,

form: 80,

fitness: 95,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 87,

loyalty: 72,

leadership: 68,

temperament: 74,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 314,

name: "Dominik Szoboszlai",

position: "CAM",

age: 25,

overall: 84,

potential: 87,

nationality: "Hungary",

salary: 140000,

attributes: { pace: 79, shooting: 80, passing: 82, dribbling: 83, defending: 64, physical: 76 },

market_value: 70000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "important",

morale: 84,

form: 81,

fitness: 94,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 88,

loyalty: 72,

leadership: 75,

temperament: 72,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 315,

name: "Curtis Jones",

position: "CM",

age: 24,

overall: 80,

potential: 84,

nationality: "England",

salary: 75000,

attributes: { pace: 72, shooting: 72, passing: 78, dribbling: 81, defending: 62, physical: 70 },

market_value: 38000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "rotation",

morale: 80,

form: 77,

fitness: 94,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 84,

loyalty: 85,

leadership: 70,

temperament: 76,

},

reputation: 77,

homegrown_status: "club_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 316,

name: "Wataru Endo",

position: "CDM",

age: 32,

overall: 79,

potential: 79,

nationality: "Japan",

salary: 85000,

attributes: { pace: 66, shooting: 62, passing: 74, dribbling: 70, defending: 80, physical: 78 },

market_value: 18000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 58,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 90,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 92,

ambition: 75,

loyalty: 80,

leadership: 80,

temperament: 86,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 317,

name: "Harvey Elliott",

position: "RW",

age: 22,

overall: 79,

potential: 85,

nationality: "England",

salary: 65000,

attributes: { pace: 76, shooting: 73, passing: 78, dribbling: 82, defending: 42, physical: 62 },

market_value: 35000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 81,

form: 78,

fitness: 95,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 88,

loyalty: 82,

leadership: 62,

temperament: 74,

},

reputation: 77,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 318,

name: "Florian Wirtz",

position: "CAM",

age: 22,

overall: 88,

potential: 94,

nationality: "Germany",

salary: 200000,

attributes: { pace: 77, shooting: 84, passing: 87, dribbling: 89, defending: 48, physical: 68 },

market_value: 130000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 12,

stubbornness: 76,

},

squad_role: "star",

morale: 86,

form: 83,

fitness: 96,

sharpness: 89,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 92,

loyalty: 70,

leadership: 74,

temperament: 78,

},

reputation: 87,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 319,

name: "Mohamed Salah",

position: "RW",

age: 33,

overall: 91,

potential: 91,

nationality: "Egypt",

salary: 400000,

attributes: { pace: 87, shooting: 88, passing: 83, dribbling: 90, defending: 45, physical: 75 },

market_value: 80000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 12,

stubbornness: 80,

},

squad_role: "star",

morale: 89,

form: 87,

fitness: 92,

sharpness: 92,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 95,

ambition: 90,

loyalty: 85,

leadership: 88,

temperament: 82,

},

reputation: 93,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 320,

name: "Luis Díaz",

position: "LW",

age: 28,

overall: 85,

potential: 86,

nationality: "Colombia",

salary: 140000,

attributes: { pace: 93, shooting: 78, passing: 76, dribbling: 87, defending: 40, physical: 72 },

market_value: 70000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 95,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 86,

loyalty: 75,

leadership: 70,

temperament: 74,

},

reputation: 84,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 321,

name: "Cody Gakpo",

position: "LW",

age: 26,

overall: 84,

potential: 86,

nationality: "Netherlands",

salary: 250000,

attributes: { pace: 85, shooting: 81, passing: 77, dribbling: 83, defending: 43, physical: 75 },

market_value: 65000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 94,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 87,

ambition: 84,

loyalty: 74,

leadership: 72,

temperament: 77,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 322,

name: "Federico Chiesa",

position: "RW",

age: 28,

overall: 82,

potential: 83,

nationality: "Italy",

salary: 130000,

attributes: { pace: 90, shooting: 77, passing: 74, dribbling: 83, defending: 38, physical: 74 },

market_value: 45000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "rotation",

morale: 79,

form: 76,

fitness: 91,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 38,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 82,

loyalty: 68,

leadership: 66,

temperament: 70,

},

reputation: 82,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 323,

name: "Alexander Isak",

position: "ST",

age: 25,

overall: 88,

potential: 91,

nationality: "Sweden",

salary: 280000,

attributes: { pace: 88, shooting: 87, passing: 76, dribbling: 84, defending: 42, physical: 77 },

market_value: 115000000,

contract_end: "2031-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 12,

stubbornness: 74,

},

squad_role: "star",

morale: 87,

form: 84,

fitness: 95,

sharpness: 90,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 90,

loyalty: 72,

leadership: 76,

temperament: 79,

},

reputation: 87,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 324,

name: "Darwin Núñez",

position: "ST",

age: 26,

overall: 83,

potential: 86,

nationality: "Uruguay",

salary: 140000,

attributes: { pace: 89, shooting: 80, passing: 70, dribbling: 78, defending: 44, physical: 82 },

market_value: 60000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 96,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 86,

loyalty: 72,

leadership: 68,

temperament: 66,

},

reputation: 82,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 325,

name: "Diogo Jota",

position: "LW",

age: 29,

overall: 84,

potential: 84,

nationality: "Portugal",

salary: 140000,

attributes: { pace: 86, shooting: 82, passing: 76, dribbling: 82, defending: 46, physical: 74 },

market_value: 50000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 90,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 40,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 82,

loyalty: 78,

leadership: 72,

temperament: 76,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 326,

name: "Hugo Ekitiké",

position: "ST",

age: 23,

overall: 80,

potential: 86,

nationality: "France",

salary: 110000,

attributes: { pace: 87, shooting: 76, passing: 70, dribbling: 78, defending: 38, physical: 74 },

market_value: 42000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 66,

},

squad_role: "rotation",

morale: 79,

form: 76,

fitness: 96,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 81,

ambition: 87,

loyalty: 68,

leadership: 58,

temperament: 72,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

],
},
{ id: 4, name: "Placeholder Club 1", players: [] },
{ id: 5, name: "Placeholder Club 2", players: [] },
{ id: 6, name: "Placeholder Club 3", players: [] },
{ id: 7, name: "Placeholder Club 4", players: [] },
{ id: 8, name: "Placeholder Club 5", players: [] },
{ id: 9, name: "Placeholder Club 6", players: [] },
{ id: 10, name: "Placeholder Club 7", players: [] },
{ id: 11, name: "Placeholder Club 8", players: [] },
{ id: 12, name: "Placeholder Club 9", players: [] },
{ id: 13, name: "Placeholder Club 10", players: [] },
{ id: 14, name: "Placeholder Club 11", players: [] },
{ id: 15, name: "Placeholder Club 12", players: [] },
{ id: 16, name: "Placeholder Club 13", players: [] },
{ id: 17, name: "Placeholder Club 14", players: [] },
{ id: 18, name: "Placeholder Club 15", players: [] },
{ id: 19, name: "Placeholder Club 16", players: [] },
{ id: 20, name: "Placeholder Club 17", players: [] }
],
},
};
