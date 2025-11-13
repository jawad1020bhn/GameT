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

// ... Continue with the remaining 18 clubs following the exact same structure

],

},

};

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


{

id: 4,

name: "Chelsea",

founded: 1905,

stadium: "Stamford Bridge",

capacity: 40341,

budget: 165000000,

wage_budget_weekly: 3950600,

cash_reserves: 520000000,

debt: 85000000,

reputation: 93,

fanbase_size: 92,

attendance_rate: 0.98,

commercial_power: 92,

facilities: {

training: 94,

youth: 91,

medical: 93,

},

scouting: {

network_quality: 90,

range: "global",

},

owner: {

ambition: 94,

patience: 75,

spend_tendency: 88,

interference: 35,

},

board_expectations: {

league_position_target: 2,

cup_target_stage: "final",

continental_target_stage: "semi_final",

},

transfer_policy: {

max_age_in: 25,

min_overall_in: 78,

homegrown_bias: 35,

profit_focus: 40,

to_rivals_multiplier: 2.5,

wage_structure_strictness: 40,

buy_release_clauses: true,

},

negotiation_style: {

hardness: 78,

bid_delay_days: 2,

counter_margin_pct: 25,

},

willingness_to_sell: 45,

style_identity: {

formations: ["4-2-3-1", "3-4-2-1"],

play_style: "possession_attacking",

},

rivalries: [4, 13, 17],

affiliates: { feeder: [], parent: null },

players: [

{

id: 401,

name: "Robert Sánchez",

position: "GK",

age: 28,

overall: 80,

potential: 82,

nationality: "Spain",

salary: 110000,

attributes: { pace: 50, shooting: 42, passing: 70, dribbling: 52, defending: 44, physical: 78 },

market_value: 28000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "important",

morale: 78,

form: 75,

fitness: 93,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 80,

loyalty: 72,

leadership: 74,

temperament: 79,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 402,

name: "Filip Jørgensen",

position: "GK",

age: 23,

overall: 76,

potential: 84,

nationality: "Denmark",

salary: 45000,

attributes: { pace: 48, shooting: 38, passing: 66, dribbling: 50, defending: 40, physical: 72 },

market_value: 18000000,

contract_end: "2031-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 60,

},

squad_role: "rotation",

morale: 76,

form: 73,

fitness: 95,

sharpness: 79,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 14,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 86,

loyalty: 75,

leadership: 58,

temperament: 80,

},

reputation: 72,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 403,

name: "Reece James",

position: "RB",

age: 26,

overall: 85,

potential: 88,

nationality: "England",

salary: 250000,

attributes: { pace: 83, shooting: 76, passing: 82, dribbling: 78, defending: 82, physical: 80 },

market_value: 70000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 72,

},

squad_role: "star",

morale: 82,

form: 79,

fitness: 88,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 45,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 86,

loyalty: 84,

leadership: 86,

temperament: 75,

},

reputation: 86,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 404,

name: "Malo Gusto",

position: "RB",

age: 22,

overall: 79,

potential: 85,

nationality: "France",

salary: 70000,

attributes: { pace: 85, shooting: 60, passing: 73, dribbling: 75, defending: 76, physical: 72 },

market_value: 32000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "rotation",

morale: 79,

form: 76,

fitness: 95,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 88,

loyalty: 72,

leadership: 62,

temperament: 76,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 405,

name: "Wesley Fofana",

position: "CB",

age: 25,

overall: 81,

potential: 86,

nationality: "France",

salary: 180000,

attributes: { pace: 80, shooting: 42, passing: 68, dribbling: 66, defending: 82, physical: 81 },

market_value: 55000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 90,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 42,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 84,

loyalty: 70,

leadership: 76,

temperament: 74,

},

reputation: 82,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 406,

name: "Levi Colwill",

position: "CB",

age: 22,

overall: 80,

potential: 87,

nationality: "England",

salary: 100000,

attributes: { pace: 76, shooting: 40, passing: 72, dribbling: 68, defending: 80, physical: 78 },

market_value: 48000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 94,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 88,

loyalty: 82,

leadership: 72,

temperament: 80,

},

reputation: 79,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 407,

name: "Axel Disasi",

position: "CB",

age: 27,

overall: 80,

potential: 82,

nationality: "France",

salary: 105000,

attributes: { pace: 72, shooting: 44, passing: 66, dribbling: 64, defending: 81, physical: 82 },

market_value: 35000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 92,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 78,

loyalty: 74,

leadership: 74,

temperament: 77,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 408,

name: "Benoît Badiashile",

position: "CB",

age: 24,

overall: 78,

potential: 84,

nationality: "France",

salary: 95000,

attributes: { pace: 75, shooting: 38, passing: 64, dribbling: 62, defending: 78, physical: 80 },

market_value: 32000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 76,

form: 73,

fitness: 93,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 82,

loyalty: 72,

leadership: 66,

temperament: 75,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 409,

name: "Marc Cucurella",

position: "LB",

age: 27,

overall: 81,

potential: 82,

nationality: "Spain",

salary: 175000,

attributes: { pace: 82, shooting: 58, passing: 76, dribbling: 78, defending: 79, physical: 72 },

market_value: 38000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "important",

morale: 79,

form: 76,

fitness: 93,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 80,

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

id: 410,

name: "Ben Chilwell",

position: "LB",

age: 29,

overall: 81,

potential: 81,

nationality: "England",

salary: 190000,

attributes: { pace: 79, shooting: 62, passing: 77, dribbling: 74, defending: 80, physical: 74 },

market_value: 30000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 64,

},

squad_role: "rotation",

morale: 75,

form: 72,

fitness: 89,

sharpness: 79,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 50,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 78,

loyalty: 76,

leadership: 76,

temperament: 74,

},

reputation: 82,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 411,

name: "Moisés Caicedo",

position: "CDM",

age: 24,

overall: 85,

potential: 89,

nationality: "Ecuador",

salary: 175000,

attributes: { pace: 79, shooting: 70, passing: 80, dribbling: 78, defending: 84, physical: 82 },

market_value: 85000000,

contract_end: "2031-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 72,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 95,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 87,

ambition: 89,

loyalty: 72,

leadership: 78,

temperament: 79,

},

reputation: 85,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 412,

name: "Enzo Fernández",

position: "CM",

age: 24,

overall: 84,

potential: 89,

nationality: "Argentina",

salary: 180000,

attributes: { pace: 74, shooting: 76, passing: 84, dribbling: 80, defending: 72, physical: 74 },

market_value: 80000000,

contract_end: "2031-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 74,

},

squad_role: "star",

morale: 83,

form: 80,

fitness: 94,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 88,

loyalty: 70,

leadership: 80,

temperament: 76,

},

reputation: 86,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 413,

name: "Cole Palmer",

position: "CAM",

age: 23,

overall: 87,

potential: 92,

nationality: "England",

salary: 135000,

attributes: { pace: 76, shooting: 84, passing: 86, dribbling: 87, defending: 52, physical: 70 },

market_value: 100000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "star",

morale: 88,

form: 85,

fitness: 95,

sharpness: 90,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 90,

loyalty: 78,

leadership: 76,

temperament: 82,

},

reputation: 88,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 414,

name: "Roméo Lavia",

position: "CDM",

age: 22,

overall: 78,

potential: 86,

nationality: "Belgium",

salary: 110000,

attributes: { pace: 76, shooting: 64, passing: 74, dribbling: 74, defending: 78, physical: 76 },

market_value: 38000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 66,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 91,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 35,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 83,

ambition: 87,

loyalty: 70,

leadership: 64,

temperament: 77,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 415,

name: "Kiernan Dewsbury-Hall",

position: "CM",

age: 27,

overall: 79,

potential: 81,

nationality: "England",

salary: 95000,

attributes: { pace: 72, shooting: 72, passing: 77, dribbling: 76, defending: 68, physical: 72 },

market_value: 30000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 93,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 82,

loyalty: 78,

leadership: 72,

temperament: 79,

},

reputation: 76,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 416,

name: "Carney Chukwuemeka",

position: "CM",

age: 22,

overall: 76,

potential: 84,

nationality: "England",

salary: 100000,

attributes: { pace: 74, shooting: 68, passing: 72, dribbling: 76, defending: 60, physical: 72 },

market_value: 28000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "backup",

morale: 74,

form: 71,

fitness: 94,

sharpness: 78,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 80,

ambition: 86,

loyalty: 70,

leadership: 58,

temperament: 74,

},

reputation: 73,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 417,

name: "Noni Madueke",

position: "RW",

age: 23,

overall: 80,

potential: 86,

nationality: "England",

salary: 78000,

attributes: { pace: 87, shooting: 76, passing: 74, dribbling: 82, defending: 38, physical: 68 },

market_value: 40000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 95,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 88,

loyalty: 72,

leadership: 62,

temperament: 73,

},

reputation: 78,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 418,

name: "Jadon Sancho",

position: "LW",

age: 25,

overall: 83,

potential: 85,

nationality: "England",

salary: 200000,

attributes: { pace: 86, shooting: 78, passing: 82, dribbling: 87, defending: 42, physical: 66 },

market_value: 55000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 72,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 93,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 78,

ambition: 84,

loyalty: 68,

leadership: 64,

temperament: 70,

},

reputation: 84,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 419,

name: "Pedro Neto",

position: "RW",

age: 25,

overall: 82,

potential: 85,

nationality: "Portugal",

salary: 125000,

attributes: { pace: 90, shooting: 76, passing: 78, dribbling: 84, defending: 40, physical: 70 },

market_value: 55000000,

contract_end: "2031-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 92,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 32,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 86,

loyalty: 72,

leadership: 66,

temperament: 75,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 420,

name: "Mykhailo Mudryk",

position: "LW",

age: 24,

overall: 80,

potential: 86,

nationality: "Ukraine",

salary: 97000,

attributes: { pace: 95, shooting: 72, passing: 74, dribbling: 82, defending: 36, physical: 70 },

market_value: 48000000,

contract_end: "2031-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 96,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 87,

loyalty: 70,

leadership: 60,

temperament: 74,

},

reputation: 79,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 421,

name: "Christopher Nkunku",

position: "ST",

age: 28,

overall: 85,

potential: 86,

nationality: "France",

salary: 300000,

attributes: { pace: 82, shooting: 84, passing: 81, dribbling: 85, defending: 48, physical: 74 },

market_value: 65000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 72,

},

squad_role: "star",

morale: 81,

form: 78,

fitness: 90,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 36,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 87,

ambition: 85,

loyalty: 70,

leadership: 76,

temperament: 76,

},

reputation: 86,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 422,

name: "Nicolas Jackson",

position: "ST",

age: 24,

overall: 81,

potential: 86,

nationality: "Senegal",

salary: 80000,

attributes: { pace: 91, shooting: 78, passing: 72, dribbling: 79, defending: 40, physical: 76 },

market_value: 50000000,

contract_end: "2031-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 66,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 96,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 88,

loyalty: 72,

leadership: 64,

temperament: 72,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 423,

name: "Marc Guiu",

position: "ST",

age: 19,

overall: 72,

potential: 84,

nationality: "Spain",

salary: 35000,

attributes: { pace: 82, shooting: 70, passing: 64, dribbling: 72, defending: 32, physical: 68 },

market_value: 18000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 58,

},

squad_role: "prospect",

morale: 78,

form: 75,

fitness: 97,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 12,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 80,

ambition: 90,

loyalty: 75,

leadership: 52,

temperament: 76,

},

reputation: 68,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 424,

name: "João Félix",

position: "CAM",

age: 25,

overall: 84,

potential: 87,

nationality: "Portugal",

salary: 160000,

attributes: { pace: 82, shooting: 81, passing: 83, dribbling: 88, defending: 44, physical: 66 },

market_value: 70000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 74,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 93,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 88,

loyalty: 66,

leadership: 68,

temperament: 71,

},

reputation: 85,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 425,

name: "Tosin Adarabioyo",

position: "CB",

age: 28,

overall: 77,

potential: 78,

nationality: "England",

salary: 75000,

attributes: { pace: 70, shooting: 38, passing: 64, dribbling: 60, defending: 78, physical: 80 },

market_value: 22000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "backup",

morale: 76,

form: 73,

fitness: 92,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 76,

loyalty: 74,

leadership: 72,

temperament: 78,

},

reputation: 74,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

],

},


{

id: 5,

name: "Manchester United",

founded: 1878,

stadium: "Old Trafford",

capacity: 74140,

budget: 160000000,

wage_budget_weekly: 4125800,

cash_reserves: 480000000,

debt: 650000000,

reputation: 94,

fanbase_size: 96,

attendance_rate: 0.99,

commercial_power: 96,

facilities: {

training: 93,

youth: 92,

medical: 92,

},

scouting: {

network_quality: 89,

range: "global",

},

owner: {

ambition: 88,

patience: 70,

spend_tendency: 85,

interference: 45,

},

board_expectations: {

league_position_target: 2,

cup_target_stage: "final",

continental_target_stage: "quarter_final",

},

transfer_policy: {

max_age_in: 28,

min_overall_in: 78,

homegrown_bias: 40,

profit_focus: 50,

to_rivals_multiplier: 3.0,

wage_structure_strictness: 35,

buy_release_clauses: false,

},

negotiation_style: {

hardness: 65,

bid_delay_days: 4,

counter_margin_pct: 35,

},

willingness_to_sell: 50,

style_identity: {

formations: ["4-2-3-1", "4-3-3"],

play_style: "balanced_attacking",

},

rivalries: [1, 2, 3],

affiliates: { feeder: [], parent: null },

players: [

{

id: 501,

name: "André Onana",

position: "GK",

age: 29,

overall: 84,

potential: 85,

nationality: "Cameroon",

salary: 120000,

attributes: { pace: 52, shooting: 44, passing: 78, dribbling: 54, defending: 46, physical: 80 },

market_value: 42000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 68,

},

squad_role: "star",

morale: 82,

form: 79,

fitness: 94,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 84,

loyalty: 76,

leadership: 82,

temperament: 80,

},

reputation: 84,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 502,

name: "Altay Bayındır",

position: "GK",

age: 27,

overall: 77,

potential: 80,

nationality: "Turkey",

salary: 50000,

attributes: { pace: 46, shooting: 40, passing: 68, dribbling: 50, defending: 42, physical: 76 },

market_value: 15000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "backup",

morale: 74,

form: 71,

fitness: 95,

sharpness: 78,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 78,

loyalty: 76,

leadership: 68,

temperament: 82,

},

reputation: 75,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 503,

name: "Lisandro Martínez",

position: "CB",

age: 27,

overall: 85,

potential: 86,

nationality: "Argentina",

salary: 120000,

attributes: { pace: 76, shooting: 50, passing: 74, dribbling: 72, defending: 86, physical: 80 },

market_value: 60000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 92,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 30,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 86,

loyalty: 78,

leadership: 84,

temperament: 75,

},

reputation: 86,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 504,

name: "Matthijs de Ligt",

position: "CB",

age: 25,

overall: 85,

potential: 88,

nationality: "Netherlands",

salary: 195000,

attributes: { pace: 72, shooting: 48, passing: 72, dribbling: 68, defending: 86, physical: 84 },

market_value: 70000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 72,

},

squad_role: "star",

morale: 83,

form: 80,

fitness: 93,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 88,

loyalty: 72,

leadership: 86,

temperament: 78,

},

reputation: 87,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 505,

name: "Harry Maguire",

position: "CB",

age: 32,

overall: 79,

potential: 79,

nationality: "England",

salary: 190000,

attributes: { pace: 56, shooting: 52, passing: 70, dribbling: 62, defending: 82, physical: 82 },

market_value: 18000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "rotation",

morale: 76,

form: 73,

fitness: 90,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 76,

loyalty: 80,

leadership: 86,

temperament: 76,

},

reputation: 80,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 506,

name: "Leny Yoro",

position: "CB",

age: 19,

overall: 78,

potential: 91,

nationality: "France",

salary: 115000,

attributes: { pace: 84, shooting: 36, passing: 66, dribbling: 64, defending: 76, physical: 76 },

market_value: 55000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 72,

},

squad_role: "rotation",

morale: 82,

form: 79,

fitness: 97,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 14,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 92,

loyalty: 74,

leadership: 62,

temperament: 80,

},

reputation: 77,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 507,

name: "Noussair Mazraoui",

position: "RB",

age: 27,

overall: 81,

potential: 82,

nationality: "Morocco",

salary: 85000,

attributes: { pace: 82, shooting: 64, passing: 76, dribbling: 77, defending: 78, physical: 74 },

market_value: 30000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 93,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 82,

loyalty: 74,

leadership: 74,

temperament: 78,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 508,

name: "Diogo Dalot",

position: "RB",

age: 26,

overall: 82,

potential: 84,

nationality: "Portugal",

salary: 85000,

attributes: { pace: 84, shooting: 66, passing: 76, dribbling: 75, defending: 79, physical: 76 },

market_value: 40000000,

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

fitness: 94,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 84,

loyalty: 78,

leadership: 72,

temperament: 79,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 509,

name: "Luke Shaw",

position: "LB",

age: 30,

overall: 81,

potential: 81,

nationality: "England",

salary: 150000,

attributes: { pace: 78, shooting: 58, passing: 76, dribbling: 72, defending: 80, physical: 76 },

market_value: 25000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 64,

},

squad_role: "important",

morale: 78,

form: 75,

fitness: 88,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 55,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 80,

ambition: 78,

loyalty: 82,

leadership: 78,

temperament: 74,

},

reputation: 82,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 510,

name: "Tyrell Malacia",

position: "LB",

age: 25,

overall: 76,

potential: 81,

nationality: "Netherlands",

salary: 75000,

attributes: { pace: 80, shooting: 54, passing: 70, dribbling: 72, defending: 75, physical: 74 },

market_value: 22000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "rotation",

morale: 75,

form: 72,

fitness: 91,

sharpness: 79,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 38,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 82,

loyalty: 76,

leadership: 66,

temperament: 77,

},

reputation: 75,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 511,

name: "Kobbie Mainoo",

position: "CM",

age: 20,

overall: 80,

potential: 89,

nationality: "England",

salary: 60000,

attributes: { pace: 72, shooting: 70, passing: 80, dribbling: 79, defending: 72, physical: 74 },

market_value: 50000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 84,

form: 81,

fitness: 96,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 90,

loyalty: 84,

leadership: 74,

temperament: 82,

},

reputation: 79,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 512,

name: "Manuel Ugarte",

position: "CDM",

age: 24,

overall: 82,

potential: 86,

nationality: "Uruguay",

salary: 110000,

attributes: { pace: 76, shooting: 62, passing: 76, dribbling: 74, defending: 82, physical: 80 },

market_value: 55000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 95,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 86,

loyalty: 72,

leadership: 76,

temperament: 78,

},

reputation: 82,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 513,

name: "Casemiro",

position: "CDM",

age: 33,

overall: 83,

potential: 83,

nationality: "Brazil",

salary: 350000,

attributes: { pace: 60, shooting: 72, passing: 75, dribbling: 72, defending: 85, physical: 83 },

market_value: 20000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 89,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 32,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 92,

ambition: 80,

loyalty: 76,

leadership: 88,

temperament: 72,

},

reputation: 88,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 514,

name: "Bruno Fernandes",

position: "CAM",

age: 31,

overall: 88,

potential: 88,

nationality: "Portugal",

salary: 300000,

attributes: { pace: 76, shooting: 84, passing: 89, dribbling: 82, defending: 68, physical: 76 },

market_value: 70000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 74,

},

squad_role: "star",

morale: 86,

form: 83,

fitness: 92,

sharpness: 89,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 90,

loyalty: 82,

leadership: 90,

temperament: 70,

},

reputation: 90,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 515,

name: "Mason Mount",

position: "CAM",

age: 26,

overall: 81,

potential: 84,

nationality: "England",

salary: 250000,

attributes: { pace: 76, shooting: 78, passing: 79, dribbling: 80, defending: 62, physical: 72 },

market_value: 45000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 90,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 40,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 84,

loyalty: 72,

leadership: 74,

temperament: 78,

},

reputation: 82,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 516,

name: "Christian Eriksen",

position: "CM",

age: 33,

overall: 80,

potential: 80,

nationality: "Denmark",

salary: 150000,

attributes: { pace: 62, shooting: 76, passing: 86, dribbling: 78, defending: 56, physical: 64 },

market_value: 12000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "rotation",

morale: 79,

form: 76,

fitness: 88,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 94,

ambition: 78,

loyalty: 76,

leadership: 84,

temperament: 88,

},

reputation: 84,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 517,

name: "Alejandro Garnacho",

position: "LW",

age: 21,

overall: 81,

potential: 88,

nationality: "Argentina",

salary: 50000,

attributes: { pace: 92, shooting: 76, passing: 74, dribbling: 82, defending: 38, physical: 68 },

market_value: 55000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "important",

morale: 84,

form: 81,

fitness: 96,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 92,

loyalty: 80,

leadership: 66,

temperament: 74,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 518,

name: "Amad Diallo",

position: "RW",

age: 23,

overall: 80,

potential: 86,

nationality: "Ivory Coast",

salary: 40000,

attributes: { pace: 86, shooting: 74, passing: 76, dribbling: 84, defending: 42, physical: 66 },

market_value: 42000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 95,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 88,

loyalty: 78,

leadership: 64,

temperament: 80,

},

reputation: 79,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 519,

name: "Marcus Rashford",

position: "LW",

age: 28,

overall: 83,

potential: 84,

nationality: "England",

salary: 325000,

attributes: { pace: 92, shooting: 82, passing: 77, dribbling: 82, defending: 45, physical: 78 },

market_value: 60000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "star",

morale: 78,

form: 75,

fitness: 93,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 86,

loyalty: 84,

leadership: 78,

temperament: 72,

},

reputation: 86,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 520,

name: "Antony",

position: "RW",

age: 25,

overall: 78,

potential: 82,

nationality: "Brazil",

salary: 200000,

attributes: { pace: 84, shooting: 74, passing: 72, dribbling: 82, defending: 40, physical: 66 },

market_value: 30000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "rotation",

morale: 74,

form: 71,

fitness: 94,

sharpness: 79,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 80,

ambition: 82,

loyalty: 70,

leadership: 62,

temperament: 68,

},

reputation: 79,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 521,

name: "Rasmus Højlund",

position: "ST",

age: 22,

overall: 81,

potential: 89,

nationality: "Denmark",

salary: 85000,

attributes: { pace: 88, shooting: 80, passing: 70, dribbling: 76, defending: 42, physical: 80 },

market_value: 65000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 70,

},

squad_role: "star",

morale: 83,

form: 80,

fitness: 96,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 92,

loyalty: 74,

leadership: 72,

temperament: 78,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 522,

name: "Joshua Zirkzee",

position: "ST",

age: 24,

overall: 79,

potential: 85,

nationality: "Netherlands",

salary: 105000,

attributes: { pace: 76, shooting: 76, passing: 76, dribbling: 80, defending: 44, physical: 78 },

market_value: 45000000,

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

fitness: 94,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 86,

loyalty: 72,

leadership: 68,

temperament: 76,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 523,

name: "Victor Lindelöf",

position: "CB",

age: 31,

overall: 78,

potential: 78,

nationality: "Sweden",

salary: 120000,

attributes: { pace: 68, shooting: 48, passing: 72, dribbling: 66, defending: 80, physical: 78 },

market_value: 16000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "backup",

morale: 75,

form: 72,

fitness: 90,

sharpness: 79,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 32,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 76,

loyalty: 78,

leadership: 76,

temperament: 84,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 524,

name: "Jonny Evans",

position: "CB",

age: 37,

overall: 75,

potential: 75,

nationality: "Northern Ireland",

salary: 65000,

attributes: { pace: 52, shooting: 44, passing: 68, dribbling: 60, defending: 78, physical: 74 },

market_value: 2000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 5,

stubbornness: 50,

},

squad_role: "backup",

morale: 76,

form: 73,

fitness: 86,

sharpness: 78,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 40,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 94,

ambition: 70,

loyalty: 86,

leadership: 86,

temperament: 88,

},

reputation: 78,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

],

},


{

id: 6,

name: "Tottenham Hotspur",

founded: 1882,

stadium: "Tottenham Hotspur Stadium",

capacity: 62850,

budget: 145000000,

wage_budget_weekly: 3425700,

cash_reserves: 390000000,

debt: 95000000,

reputation: 91,

fanbase_size: 90,

attendance_rate: 0.98,

commercial_power: 89,

facilities: {

training: 95,

youth: 90,

medical: 93,

},

scouting: {

network_quality: 87,

range: "global",

},

owner: {

ambition: 86,

patience: 78,

spend_tendency: 75,

interference: 25,

},

board_expectations: {

league_position_target: 4,

cup_target_stage: "semi_final",

continental_target_stage: "quarter_final",

},

transfer_policy: {

max_age_in: 26,

min_overall_in: 76,

homegrown_bias: 42,

profit_focus: 60,

to_rivals_multiplier: 2.5,

wage_structure_strictness: 55,

buy_release_clauses: false,

},

negotiation_style: {

hardness: 88,

bid_delay_days: 5,

counter_margin_pct: 40,

},

willingness_to_sell: 55,

style_identity: {

formations: ["4-3-3", "3-4-3"],

play_style: "possession_attacking",

},

rivalries: [2, 4, 13],

affiliates: { feeder: [], parent: null },

players: [

{

id: 601,

name: "Guglielmo Vicario",

position: "GK",

age: 29,

overall: 82,

potential: 84,

nationality: "Italy",

salary: 60000,

attributes: { pace: 52, shooting: 42, passing: 72, dribbling: 54, defending: 44, physical: 78 },

market_value: 35000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 94,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 84,

loyalty: 76,

leadership: 78,

temperament: 82,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 602,

name: "Fraser Forster",

position: "GK",

age: 37,

overall: 75,

potential: 75,

nationality: "England",

salary: 40000,

attributes: { pace: 38, shooting: 38, passing: 62, dribbling: 46, defending: 40, physical: 74 },

market_value: 2000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 5,

stubbornness: 52,

},

squad_role: "backup",

morale: 74,

form: 71,

fitness: 90,

sharpness: 76,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 35,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 92,

ambition: 70,

loyalty: 84,

leadership: 84,

temperament: 88,

},

reputation: 76,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 603,

name: "Cristian Romero",

position: "CB",

age: 27,

overall: 86,

potential: 88,

nationality: "Argentina",

salary: 165000,

attributes: { pace: 78, shooting: 48, passing: 70, dribbling: 70, defending: 87, physical: 84 },

market_value: 70000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 72,

},

squad_role: "star",

morale: 85,

form: 82,

fitness: 93,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 87,

ambition: 86,

loyalty: 74,

leadership: 84,

temperament: 72,

},

reputation: 87,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 604,

name: "Micky van de Ven",

position: "CB",

age: 24,

overall: 84,

potential: 89,

nationality: "Netherlands",

salary: 50000,

attributes: { pace: 92, shooting: 40, passing: 68, dribbling: 68, defending: 82, physical: 80 },

market_value: 70000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

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

ambition: 90,

loyalty: 78,

leadership: 76,

temperament: 82,

},

reputation: 84,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 605,

name: "Radu Drăgușin",

position: "CB",

age: 23,

overall: 78,

potential: 84,

nationality: "Romania",

salary: 70000,

attributes: { pace: 72, shooting: 38, passing: 64, dribbling: 62, defending: 79, physical: 82 },

market_value: 30000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 94,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 86,

loyalty: 74,

leadership: 70,

temperament: 78,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 606,

name: "Ben Davies",

position: "CB",

age: 32,

overall: 78,

potential: 78,

nationality: "Wales",

salary: 80000,

attributes: { pace: 66, shooting: 50, passing: 72, dribbling: 68, defending: 79, physical: 76 },

market_value: 12000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 58,

},

squad_role: "rotation",

morale: 76,

form: 73,

fitness: 91,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 74,

loyalty: 84,

leadership: 82,

temperament: 86,

},

reputation: 78,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 607,

name: "Pedro Porro",

position: "RB",

age: 26,

overall: 83,

potential: 86,

nationality: "Spain",

salary: 80000,

attributes: { pace: 84, shooting: 70, passing: 80, dribbling: 78, defending: 78, physical: 74 },

market_value: 50000000,

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

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 86,

loyalty: 74,

leadership: 74,

temperament: 78,

},

reputation: 82,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 608,

name: "Djed Spence",

position: "RB",

age: 25,

overall: 75,

potential: 80,

nationality: "England",

salary: 35000,

attributes: { pace: 88, shooting: 58, passing: 68, dribbling: 72, defending: 72, physical: 70 },

market_value: 18000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 60,

},

squad_role: "backup",

morale: 74,

form: 71,

fitness: 95,

sharpness: 78,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 80,

ambition: 82,

loyalty: 70,

leadership: 58,

temperament: 74,

},

reputation: 72,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 609,

name: "Destiny Udogie",

position: "LB",

age: 22,

overall: 80,

potential: 87,

nationality: "Italy",

salary: 35000,

attributes: { pace: 90, shooting: 58, passing: 72, dribbling: 76, defending: 76, physical: 74 },

market_value: 42000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 96,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 88,

loyalty: 76,

leadership: 66,

temperament: 76,

},

reputation: 79,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 610,

name: "Sergio Reguilón",

position: "LB",

age: 28,

overall: 77,

potential: 78,

nationality: "Spain",

salary: 70000,

attributes: { pace: 83, shooting: 60, passing: 72, dribbling: 74, defending: 75, physical: 72 },

market_value: 15000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "backup",

morale: 73,

form: 70,

fitness: 92,

sharpness: 77,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 78,

loyalty: 68,

leadership: 66,

temperament: 74,

},

reputation: 77,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 611,

name: "Yves Bissouma",

position: "CDM",

age: 29,

overall: 82,

potential: 83,

nationality: "Mali",

salary: 85000,

attributes: { pace: 78, shooting: 66, passing: 76, dribbling: 78, defending: 82, physical: 80 },

market_value: 35000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 94,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 80,

loyalty: 74,

leadership: 76,

temperament: 74,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 612,

name: "Pape Matar Sarr",

position: "CM",

age: 22,

overall: 79,

potential: 86,

nationality: "Senegal",

salary: 40000,

attributes: { pace: 80, shooting: 68, passing: 74, dribbling: 76, defending: 74, physical: 78 },

market_value: 38000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "rotation",

morale: 81,

form: 78,

fitness: 96,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 88,

loyalty: 76,

leadership: 68,

temperament: 78,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 613,

name: "Rodrigo Bentancur",

position: "CM",

age: 28,

overall: 81,

potential: 82,

nationality: "Uruguay",

salary: 75000,

attributes: { pace: 72, shooting: 70, passing: 80, dribbling: 78, defending: 76, physical: 76 },

market_value: 32000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 79,

form: 76,

fitness: 93,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 30,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 80,

loyalty: 76,

leadership: 78,

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

id: 614,

name: "James Maddison",

position: "CAM",

age: 28,

overall: 84,

potential: 85,

nationality: "England",

salary: 170000,

attributes: { pace: 72, shooting: 80, passing: 86, dribbling: 84, defending: 54, physical: 68 },

market_value: 60000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 92,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 32,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 86,

loyalty: 74,

leadership: 78,

temperament: 74,

},

reputation: 85,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 615,

name: "Dejan Kulusevski",

position: "RW",

age: 25,

overall: 83,

potential: 86,

nationality: "Sweden",

salary: 85000,

attributes: { pace: 80, shooting: 78, passing: 82, dribbling: 84, defending: 56, physical: 74 },

market_value: 55000000,

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

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 86,

loyalty: 76,

leadership: 74,

temperament: 79,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 616,

name: "Brennan Johnson",

position: "RW",

age: 24,

overall: 80,

potential: 85,

nationality: "Wales",

salary: 45000,

attributes: { pace: 92, shooting: 76, passing: 72, dribbling: 80, defending: 42, physical: 70 },

market_value: 45000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "rotation",

morale: 81,

form: 78,

fitness: 96,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 88,

loyalty: 76,

leadership: 66,

temperament: 78,

},

reputation: 79,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 617,

name: "Wilson Odobert",

position: "LW",

age: 20,

overall: 75,

potential: 85,

nationality: "France",

salary: 30000,

attributes: { pace: 92, shooting: 70, passing: 70, dribbling: 78, defending: 36, physical: 64 },

market_value: 28000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 79,

form: 76,

fitness: 97,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 90,

loyalty: 72,

leadership: 58,

temperament: 76,

},

reputation: 73,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 618,

name: "Timo Werner",

position: "LW",

age: 29,

overall: 81,

potential: 81,

nationality: "Germany",

salary: 165000,

attributes: { pace: 93, shooting: 78, passing: 74, dribbling: 80, defending: 44, physical: 72 },

market_value: 30000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 94,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 82,

loyalty: 70,

leadership: 70,

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

id: 619,

name: "Heung-Min Son",

position: "LW",

age: 33,

overall: 88,

potential: 88,

nationality: "South Korea",

salary: 190000,

attributes: { pace: 86, shooting: 88, passing: 82, dribbling: 86, defending: 48, physical: 74 },

market_value: 50000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "star",

morale: 87,

form: 84,

fitness: 92,

sharpness: 90,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 96,

ambition: 88,

loyalty: 90,

leadership: 88,

temperament: 88,

},

reputation: 90,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 620,

name: "Dominic Solanke",

position: "ST",

age: 28,

overall: 82,

potential: 83,

nationality: "England",

salary: 110000,

attributes: { pace: 78, shooting: 82, passing: 74, dribbling: 78, defending: 48, physical: 80 },

market_value: 45000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

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

ambition: 84,

loyalty: 76,

leadership: 76,

temperament: 80,

},

reputation: 81,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 621,

name: "Richarlison",

position: "ST",

age: 28,

overall: 81,

potential: 82,

nationality: "Brazil",

salary: 90000,

attributes: { pace: 83, shooting: 80, passing: 72, dribbling: 79, defending: 50, physical: 80 },

market_value: 38000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 93,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 30,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 84,

loyalty: 72,

leadership: 74,

temperament: 68,

},

reputation: 82,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 622,

name: "Lucas Bergvall",

position: "CM",

age: 19,

overall: 73,

potential: 85,

nationality: "Sweden",

salary: 20000,

attributes: { pace: 74, shooting: 66, passing: 74, dribbling: 76, defending: 64, physical: 68 },

market_value: 20000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 60,

},

squad_role: "prospect",

morale: 80,

form: 77,

fitness: 97,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 12,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 92,

loyalty: 78,

leadership: 60,

temperament: 80,

},

reputation: 70,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 623,

name: "Archie Gray",

position: "CDM",

age: 19,

overall: 72,

potential: 86,

nationality: "England",

salary: 25000,

attributes: { pace: 76, shooting: 60, passing: 70, dribbling: 72, defending: 72, physical: 72 },

market_value: 22000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 60,

},

squad_role: "prospect",

morale: 81,

form: 78,

fitness: 97,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 14,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 90,

loyalty: 80,

leadership: 64,

temperament: 82,

},

reputation: 71,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

],

},

{

id: 7,

name: "Aston Villa",

founded: 1874,

stadium: "Villa Park",

capacity: 42640,

budget: 120000000,

wage_budget_weekly: 2875500,

cash_reserves: 310000000,

debt: 45000000,

reputation: 87,

fanbase_size: 85,

attendance_rate: 0.96,

commercial_power: 83,

facilities: {

training: 88,

youth: 84,

medical: 87,

},

scouting: {

network_quality: 84,

range: "global",

},

owner: {

ambition: 90,

patience: 80,

spend_tendency: 82,

interference: 30,

},

board_expectations: {

league_position_target: 5,

cup_target_stage: "quarter_final",

continental_target_stage: "quarter_final",

},

transfer_policy: {

max_age_in: 27,

min_overall_in: 75,

homegrown_bias: 38,

profit_focus: 52,

to_rivals_multiplier: 2.2,

wage_structure_strictness: 50,

buy_release_clauses: false,

},

negotiation_style: {

hardness: 75,

bid_delay_days: 3,

counter_margin_pct: 28,

},

willingness_to_sell: 48,

style_identity: {

formations: ["4-3-3", "4-2-3-1"],

play_style: "balanced",

},

rivalries: [9, 11, 15],

affiliates: { feeder: [], parent: null },

players: [

{

id: 701,

name: "Emiliano Martínez",

position: "GK",

age: 32,

overall: 88,

potential: 88,

nationality: "Argentina",

salary: 120000,

attributes: { pace: 48, shooting: 44, passing: 76, dribbling: 52, defending: 46, physical: 82 },

market_value: 42000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 68,

},

squad_role: "star",

morale: 87,

form: 84,

fitness: 93,

sharpness: 89,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 86,

loyalty: 82,

leadership: 88,

temperament: 76,

},

reputation: 89,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 702,

name: "Robin Olsen",

position: "GK",

age: 35,

overall: 76,

potential: 76,

nationality: "Sweden",

salary: 35000,

attributes: { pace: 42, shooting: 40, passing: 66, dribbling: 48, defending: 42, physical: 76 },

market_value: 3000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 6,

stubbornness: 54,

},

squad_role: "backup",

morale: 74,

form: 71,

fitness: 91,

sharpness: 77,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 72,

loyalty: 78,

leadership: 78,

temperament: 84,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 703,

name: "Ezri Konsa",

position: "CB",

age: 28,

overall: 82,

potential: 84,

nationality: "England",

salary: 80000,

attributes: { pace: 76, shooting: 46, passing: 70, dribbling: 68, defending: 82, physical: 80 },

market_value: 40000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

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

professionalism: 86,

ambition: 82,

loyalty: 80,

leadership: 78,

temperament: 82,

},

reputation: 81,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 704,

name: "Pau Torres",

position: "CB",

age: 28,

overall: 83,

potential: 84,

nationality: "Spain",

salary: 105000,

attributes: { pace: 70, shooting: 48, passing: 76, dribbling: 72, defending: 84, physical: 78 },

market_value: 45000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "star",

morale: 83,

form: 80,

fitness: 93,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 84,

loyalty: 76,

leadership: 80,

temperament: 84,

},

reputation: 84,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 705,

name: "Diego Carlos",

position: "CB",

age: 32,

overall: 80,

potential: 80,

nationality: "Brazil",

salary: 85000,

attributes: { pace: 72, shooting: 44, passing: 66, dribbling: 64, defending: 82, physical: 82 },

market_value: 22000000,

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

fitness: 92,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 78,

loyalty: 74,

leadership: 76,

temperament: 76,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 706,

name: "Tyrone Mings",

position: "CB",

age: 32,

overall: 78,

potential: 78,

nationality: "England",

salary: 80000,

attributes: { pace: 68, shooting: 48, passing: 68, dribbling: 64, defending: 79, physical: 80 },

market_value: 15000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "rotation",

morale: 76,

form: 73,

fitness: 90,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 38,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 76,

loyalty: 82,

leadership: 82,

temperament: 78,

},

reputation: 78,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 707,

name: "Lucas Digne",

position: "LB",

age: 32,

overall: 81,

potential: 81,

nationality: "France",

salary: 120000,

attributes: { pace: 76, shooting: 66, passing: 80, dribbling: 76, defending: 78, physical: 74 },

market_value: 20000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 64,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 92,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 80,

loyalty: 76,

leadership: 80,

temperament: 79,

},

reputation: 82,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 708,

name: "Alex Moreno",

position: "LB",

age: 32,

overall: 78,

potential: 78,

nationality: "Spain",

salary: 65000,

attributes: { pace: 78, shooting: 60, passing: 74, dribbling: 74, defending: 76, physical: 72 },

market_value: 12000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "rotation",

morale: 76,

form: 73,

fitness: 91,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 76,

loyalty: 74,

leadership: 72,

temperament: 78,

},

reputation: 77,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 709,

name: "Matty Cash",

position: "RB",

age: 28,

overall: 80,

potential: 81,

nationality: "Poland",

salary: 70000,

attributes: { pace: 82, shooting: 64, passing: 74, dribbling: 74, defending: 78, physical: 76 },

market_value: 28000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 64,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 94,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 82,

loyalty: 78,

leadership: 74,

temperament: 80,

},

reputation: 79,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 710,

name: "Kosta Nedeljkovic",

position: "RB",

age: 19,

overall: 72,

potential: 83,

nationality: "Serbia",

salary: 18000,

attributes: { pace: 80, shooting: 58, passing: 68, dribbling: 72, defending: 70, physical: 68 },

market_value: 12000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 58,

},

squad_role: "prospect",

morale: 78,

form: 75,

fitness: 97,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 14,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 88,

loyalty: 76,

leadership: 58,

temperament: 78,

},

reputation: 70,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 711,

name: "Amadou Onana",

position: "CDM",

age: 23,

overall: 82,

potential: 88,

nationality: "Belgium",

salary: 110000,

attributes: { pace: 76, shooting: 70, passing: 74, dribbling: 74, defending: 82, physical: 84 },

market_value: 60000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 96,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 90,

loyalty: 74,

leadership: 78,

temperament: 76,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 712,

name: "Youri Tielemans",

position: "CM",

age: 28,

overall: 82,

potential: 83,

nationality: "Belgium",

salary: 110000,

attributes: { pace: 68, shooting: 80, passing: 84, dribbling: 80, defending: 68, physical: 72 },

market_value: 40000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 93,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 82,

loyalty: 76,

leadership: 78,

temperament: 80,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 713,

name: "Boubacar Kamara",

position: "CDM",

age: 25,

overall: 81,

potential: 85,

nationality: "France",

salary: 90000,

attributes: { pace: 72, shooting: 64, passing: 76, dribbling: 74, defending: 82, physical: 78 },

market_value: 45000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 94,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 30,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 84,

loyalty: 76,

leadership: 76,

temperament: 80,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 714,

name: "Ross Barkley",

position: "CM",

age: 31,

overall: 78,

potential: 78,

nationality: "England",

salary: 70000,

attributes: { pace: 68, shooting: 76, passing: 78, dribbling: 78, defending: 62, physical: 74 },

market_value: 15000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 91,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 76,

loyalty: 74,

leadership: 74,

temperament: 72,

},

reputation: 79,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 715,

name: "Morgan Rogers",

position: "CAM",

age: 23,

overall: 78,

potential: 84,

nationality: "England",

salary: 55000,

attributes: { pace: 78, shooting: 74, passing: 76, dribbling: 80, defending: 52, physical: 70 },

market_value: 32000000,

contract_end: "2030-06-30",

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

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 86,

loyalty: 76,

leadership: 66,

temperament: 78,

},

reputation: 76,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 716,

name: "Leon Bailey",

position: "RW",

age: 28,

overall: 81,

potential: 82,

nationality: "Jamaica",

salary: 100000,

attributes: { pace: 93, shooting: 78, passing: 74, dribbling: 82, defending: 40, physical: 70 },

market_value: 38000000,

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

fitness: 94,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 32,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 82,

loyalty: 72,

leadership: 68,

temperament: 74,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 717,

name: "John McGinn",

position: "CM",

age: 30,

overall: 81,

potential: 81,

nationality: "Scotland",

salary: 80000,

attributes: { pace: 74, shooting: 76, passing: 78, dribbling: 76, defending: 72, physical: 78 },

market_value: 30000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 64,

},

squad_role: "important",

morale: 83,

form: 80,

fitness: 94,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 84,

loyalty: 86,

leadership: 84,

temperament: 78,

},

reputation: 82,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 718,

name: "Jaden Philogene",

position: "LW",

age: 23,

overall: 76,

potential: 83,

nationality: "England",

salary: 40000,

attributes: { pace: 88, shooting: 72, passing: 72, dribbling: 80, defending: 38, physical: 66 },

market_value: 25000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 79,

form: 76,

fitness: 96,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 88,

loyalty: 74,

leadership: 60,

temperament: 76,

},

reputation: 74,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 719,

name: "Jacob Ramsey",

position: "CM",

age: 24,

overall: 78,

potential: 84,

nationality: "England",

salary: 45000,

attributes: { pace: 76, shooting: 72, passing: 76, dribbling: 78, defending: 66, physical: 72 },

market_value: 32000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 80,

form: 77,

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

ambition: 86,

loyalty: 82,

leadership: 70,

temperament: 79,

},

reputation: 77,

homegrown_status: "club_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 720,

name: "Ollie Watkins",

position: "ST",

age: 29,

overall: 85,

potential: 86,

nationality: "England",

salary: 130000,

attributes: { pace: 89, shooting: 84, passing: 76, dribbling: 82, defending: 48, physical: 76 },

market_value: 70000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 70,

},

squad_role: "star",

morale: 87,

form: 84,

fitness: 96,

sharpness: 90,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 88,

loyalty: 80,

leadership: 80,

temperament: 82,

},

reputation: 86,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 721,

name: "Jhon Durán",

position: "ST",

age: 21,

overall: 78,

potential: 87,

nationality: "Colombia",

salary: 45000,

attributes: { pace: 86, shooting: 78, passing: 68, dribbling: 74, defending: 40, physical: 78 },

market_value: 40000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 66,

},

squad_role: "rotation",

morale: 80,

form: 77,

fitness: 97,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 90,

loyalty: 72,

leadership: 64,

temperament: 74,

},

reputation: 77,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 722,

name: "Moussa Diaby",

position: "RW",

age: 25,

overall: 82,

potential: 85,

nationality: "France",

salary: 130000,

attributes: { pace: 94, shooting: 78, passing: 76, dribbling: 84, defending: 42, physical: 70 },

market_value: 60000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "star",

morale: 83,

form: 80,

fitness: 96,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 88,

loyalty: 72,

leadership: 70,

temperament: 76,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 723,

name: "Emiliano Buendía",

position: "CAM",

age: 28,

overall: 79,

potential: 80,

nationality: "Argentina",

salary: 75000,

attributes: { pace: 72, shooting: 76, passing: 82, dribbling: 82, defending: 54, physical: 66 },

market_value: 28000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 92,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 35,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 82,

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

],

},


{

id: 8,

name: "Newcastle United",

founded: 1892,

stadium: "St James' Park",

capacity: 52305,

budget: 135000000,

wage_budget_weekly: 2975600,

cash_reserves: 360000000,

debt: 75000000,

reputation: 89,

fanbase_size: 88,

attendance_rate: 0.99,

commercial_power: 86,

facilities: {

training: 90,

youth: 85,

medical: 89,

},

scouting: {

network_quality: 86,

range: "global",

},

owner: {

ambition: 95,

patience: 85,

spend_tendency: 90,

interference: 20,

},

board_expectations: {

league_position_target: 4,

cup_target_stage: "semi_final",

continental_target_stage: "quarter_final",

},

transfer_policy: {

max_age_in: 27,

min_overall_in: 77,

homegrown_bias: 36,

profit_focus: 45,

to_rivals_multiplier: 2.3,

wage_structure_strictness: 48,

buy_release_clauses: true,

},

negotiation_style: {

hardness: 80,

bid_delay_days: 2,

counter_margin_pct: 26,

},

willingness_to_sell: 42,

style_identity: {

formations: ["4-3-3", "4-2-3-1"],

play_style: "counter_attacking",

},

rivalries: [7, 12],

affiliates: { feeder: [], parent: null },

players: [

{

id: 801,

name: "Nick Pope",

position: "GK",

age: 33,

overall: 83,

potential: 83,

nationality: "England",

salary: 100000,

attributes: { pace: 46, shooting: 42, passing: 70, dribbling: 50, defending: 44, physical: 80 },

market_value: 28000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 64,

},

squad_role: "star",

morale: 83,

form: 80,

fitness: 92,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 82,

loyalty: 80,

leadership: 82,

temperament: 84,

},

reputation: 83,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 802,

name: "Martin Dúbravka",

position: "GK",

age: 36,

overall: 78,

potential: 78,

nationality: "Slovakia",

salary: 45000,

attributes: { pace: 40, shooting: 40, passing: 66, dribbling: 48, defending: 42, physical: 76 },

market_value: 4000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 6,

stubbornness: 56,

},

squad_role: "backup",

morale: 75,

form: 72,

fitness: 89,

sharpness: 78,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 30,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 72,

loyalty: 78,

leadership: 76,

temperament: 82,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 803,

name: "Sven Botman",

position: "CB",

age: 25,

overall: 84,

potential: 88,

nationality: "Netherlands",

salary: 80000,

attributes: { pace: 74, shooting: 44, passing: 72, dribbling: 68, defending: 85, physical: 82 },

market_value: 65000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 93,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 86,

loyalty: 78,

leadership: 80,

temperament: 82,

},

reputation: 84,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 804,

name: "Fabian Schär",

position: "CB",

age: 33,

overall: 80,

potential: 80,

nationality: "Switzerland",

salary: 75000,

attributes: { pace: 68, shooting: 56, passing: 74, dribbling: 68, defending: 81, physical: 79 },

market_value: 16000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 91,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 78,

loyalty: 80,

leadership: 82,

temperament: 80,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 805,

name: "Dan Burn",

position: "CB",

age: 33,

overall: 78,

potential: 78,

nationality: "England",

salary: 70000,

attributes: { pace: 58, shooting: 48, passing: 68, dribbling: 62, defending: 79, physical: 82 },

market_value: 12000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 58,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 90,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 76,

loyalty: 82,

leadership: 78,

temperament: 80,

},

reputation: 77,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 806,

name: "Lloyd Kelly",

position: "CB",

age: 27,

overall: 77,

potential: 79,

nationality: "England",

salary: 70000,

attributes: { pace: 74, shooting: 42, passing: 68, dribbling: 66, defending: 77, physical: 78 },

market_value: 20000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 93,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 80,

loyalty: 76,

leadership: 72,

temperament: 78,

},

reputation: 76,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 807,

name: "Kieran Trippier",

position: "RB",

age: 35,

overall: 81,

potential: 81,

nationality: "England",

salary: 120000,

attributes: { pace: 68, shooting: 68, passing: 82, dribbling: 74, defending: 78, physical: 72 },

market_value: 8000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 88,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 35,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 92,

ambition: 80,

loyalty: 84,

leadership: 88,

temperament: 82,

},

reputation: 84,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 808,

name: "Tino Livramento",

position: "RB",

age: 22,

overall: 78,

potential: 85,

nationality: "England",

salary: 40000,

attributes: { pace: 88, shooting: 62, passing: 72, dribbling: 76, defending: 75, physical: 72 },

market_value: 35000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "rotation",

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

professionalism: 84,

ambition: 88,

loyalty: 76,

leadership: 66,

temperament: 78,

},

reputation: 77,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 809,

name: "Lewis Hall",

position: "LB",

age: 20,

overall: 76,

potential: 85,

nationality: "England",

salary: 35000,

attributes: { pace: 84, shooting: 58, passing: 72, dribbling: 74, defending: 74, physical: 70 },

market_value: 28000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 81,

form: 78,

fitness: 97,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 90,

loyalty: 78,

leadership: 64,

temperament: 80,

},

reputation: 75,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 810,

name: "Bruno Guimarães",

position: "CM",

age: 27,

overall: 87,

potential: 88,

nationality: "Brazil",

salary: 160000,

attributes: { pace: 76, shooting: 76, passing: 84, dribbling: 82, defending: 80, physical: 78 },

market_value: 90000000,

contract_end: "2028-06-30",

release_clause: 100000000,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 74,

},

squad_role: "star",

morale: 88,

form: 85,

fitness: 95,

sharpness: 91,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 88,

loyalty: 80,

leadership: 88,

temperament: 78,

},

reputation: 88,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 811,

name: "Sandro Tonali",

position: "CM",

age: 25,

overall: 84,

potential: 88,

nationality: "Italy",

salary: 120000,

attributes: { pace: 74, shooting: 72, passing: 82, dribbling: 78, defending: 80, physical: 78 },

market_value: 70000000,

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

fitness: 95,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 86,

loyalty: 78,

leadership: 82,

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

id: 812,

name: "Joelinton",

position: "CM",

age: 29,

overall: 81,

potential: 82,

nationality: "Brazil",

salary: 80000,

attributes: { pace: 76, shooting: 70, passing: 74, dribbling: 76, defending: 78, physical: 82 },

market_value: 35000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 94,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 82,

loyalty: 82,

leadership: 78,

temperament: 76,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 813,

name: "Sean Longstaff",

position: "CM",

age: 28,

overall: 76,

potential: 77,

nationality: "England",

salary: 60000,

attributes: { pace: 70, shooting: 70, passing: 74, dribbling: 72, defending: 72, physical: 72 },

market_value: 18000000,

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

fitness: 93,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 78,

loyalty: 84,

leadership: 72,

temperament: 79,

},

reputation: 75,

homegrown_status: "club_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 814,

name: "Joe Willock",

position: "CM",

age: 25,

overall: 77,

potential: 80,

nationality: "England",

salary: 65000,

attributes: { pace: 76, shooting: 74, passing: 72, dribbling: 76, defending: 66, physical: 76 },

market_value: 25000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 95,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 82,

loyalty: 76,

leadership: 68,

temperament: 76,

},

reputation: 76,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 815,

name: "Anthony Gordon",

position: "LW",

age: 24,

overall: 82,

potential: 87,

nationality: "England",

salary: 75000,

attributes: { pace: 88, shooting: 78, passing: 76, dribbling: 84, defending: 48, physical: 70 },

market_value: 60000000,

contract_end: "2030-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "star",

morale: 85,

form: 82,

fitness: 96,

sharpness: 89,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 90,

loyalty: 78,

leadership: 74,

temperament: 76,

},

reputation: 83,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 816,

name: "Jacob Murphy",

position: "RW",

age: 30,

overall: 77,

potential: 77,

nationality: "England",

salary: 50000,

attributes: { pace: 84, shooting: 72, passing: 70, dribbling: 76, defending: 52, physical: 68 },

market_value: 15000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 94,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 78,

loyalty: 80,

leadership: 70,

temperament: 78,

},

reputation: 76,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 817,

name: "Miguel Almirón",

position: "RW",

age: 31,

overall: 78,

potential: 78,

nationality: "Paraguay",

salary: 70000,

attributes: { pace: 86, shooting: 74, passing: 72, dribbling: 78, defending: 54, physical: 68 },

market_value: 18000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 93,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 80,

loyalty: 82,

leadership: 74,

temperament: 80,

},

reputation: 79,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 818,

name: "Harvey Barnes",

position: "LW",

age: 27,

overall: 80,

potential: 82,

nationality: "England",

salary: 90000,

attributes: { pace: 88, shooting: 78, passing: 74, dribbling: 82, defending: 44, physical: 70 },

market_value: 38000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 94,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 84,

loyalty: 76,

leadership: 70,

temperament: 78,

},

reputation: 80,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 819,

name: "Callum Wilson",

position: "ST",

age: 33,

overall: 80,

potential: 80,

nationality: "England",

salary: 80000,

attributes: { pace: 80, shooting: 82, passing: 70, dribbling: 76, defending: 44, physical: 78 },

market_value: 18000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "important",

morale: 79,

form: 76,

fitness: 90,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 48,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 80,

loyalty: 80,

leadership: 78,

temperament: 80,

},

reputation: 81,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 820,

name: "Alexander Isak",

position: "ST",

age: 25,

overall: 88,

potential: 91,

nationality: "Sweden",

salary: 100000,

attributes: { pace: 88, shooting: 87, passing: 76, dribbling: 84, defending: 42, physical: 77 },

market_value: 115000000,

contract_end: "2028-06-30",

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

loyalty: 76,

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

id: 821,

name: "William Osula",

position: "ST",

age: 22,

overall: 71,

potential: 82,

nationality: "Denmark",

salary: 20000,

attributes: { pace: 82, shooting: 70, passing: 64, dribbling: 70, defending: 38, physical: 76 },

market_value: 12000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 58,

},

squad_role: "prospect",

morale: 77,

form: 74,

fitness: 97,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 80,

ambition: 88,

loyalty: 74,

leadership: 58,

temperament: 76,

},

reputation: 69,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 822,

name: "Elliot Anderson",

position: "CAM",

age: 22,

overall: 75,

potential: 83,

nationality: "Scotland",

salary: 30000,

attributes: { pace: 74, shooting: 70, passing: 74, dribbling: 78, defending: 62, physical: 70 },

market_value: 22000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 60,

},

squad_role: "rotation",

morale: 79,

form: 76,

fitness: 96,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 86,

loyalty: 78,

leadership: 64,

temperament: 78,

},

reputation: 73,

homegrown_status: "club_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

],

},


{

id: 9,

name: "West Ham United",

founded: 1895,

stadium: "London Stadium",

capacity: 62500,

budget: 115000000,

wage_budget_weekly: 2765400,

cash_reserves: 280000000,

debt: 95000000,

reputation: 85,

fanbase_size: 84,

attendance_rate: 0.95,

commercial_power: 81,

facilities: {

training: 86,

youth: 82,

medical: 85,

},

scouting: {

network_quality: 82,

range: "global",

},

owner: {

ambition: 84,

patience: 76,

spend_tendency: 78,

interference: 32,

},

board_expectations: {

league_position_target: 7,

cup_target_stage: "quarter_final",

continental_target_stage: "group_stage",

},

transfer_policy: {

max_age_in: 28,

min_overall_in: 74,

homegrown_bias: 40,

profit_focus: 55,

to_rivals_multiplier: 2.0,

wage_structure_strictness: 52,

buy_release_clauses: false,

},

negotiation_style: {

hardness: 72,

bid_delay_days: 3,

counter_margin_pct: 30,

},

willingness_to_sell: 52,

style_identity: {

formations: ["4-2-3-1", "3-5-2"],

play_style: "direct",

},

rivalries: [4, 6, 15],

affiliates: { feeder: [], parent: null },

players: [

{

id: 901,

name: "Łukasz Fabiański",

position: "GK",

age: 40,

overall: 77,

potential: 77,

nationality: "Poland",

salary: 50000,

attributes: { pace: 36, shooting: 38, passing: 64, dribbling: 46, defending: 40, physical: 72 },

market_value: 1000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 5,

stubbornness: 50,

},

squad_role: "important",

morale: 78,

form: 75,

fitness: 87,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 35,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 94,

ambition: 72,

loyalty: 84,

leadership: 84,

temperament: 90,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 902,

name: "Alphonse Areola",

position: "GK",

age: 32,

overall: 79,

potential: 79,

nationality: "France",

salary: 80000,

attributes: { pace: 46, shooting: 42, passing: 68, dribbling: 50, defending: 42, physical: 78 },

market_value: 12000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "rotation",

morale: 76,

form: 73,

fitness: 92,

sharpness: 79,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 76,

loyalty: 74,

leadership: 76,

temperament: 82,

},

reputation: 79,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 903,

name: "Jean-Clair Todibo",

position: "CB",

age: 25,

overall: 82,

potential: 87,

nationality: "France",

salary: 95000,

attributes: { pace: 80, shooting: 42, passing: 70, dribbling: 68, defending: 82, physical: 81 },

market_value: 55000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "star",

morale: 83,

form: 80,

fitness: 95,

sharpness: 87,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 88,

loyalty: 72,

leadership: 76,

temperament: 78,

},

reputation: 82,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 904,

name: "Konstantinos Mavropanos",

position: "CB",

age: 28,

overall: 79,

potential: 81,

nationality: "Greece",

salary: 75000,

attributes: { pace: 72, shooting: 44, passing: 66, dribbling: 64, defending: 80, physical: 82 },

market_value: 28000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 93,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 80,

loyalty: 76,

leadership: 76,

temperament: 78,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 905,

name: "Max Kilman",

position: "CB",

age: 28,

overall: 78,

potential: 79,

nationality: "England",

salary: 70000,

attributes: { pace: 70, shooting: 42, passing: 68, dribbling: 66, defending: 79, physical: 78 },

market_value: 24000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 92,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 78,

loyalty: 78,

leadership: 74,

temperament: 80,

},

reputation: 77,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 906,

name: "Aaron Wan-Bissaka",

position: "RB",

age: 28,

overall: 79,

potential: 80,

nationality: "England",

salary: 90000,

attributes: { pace: 82, shooting: 58, passing: 70, dribbling: 72, defending: 82, physical: 78 },

market_value: 25000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 64,

},

squad_role: "important",

morale: 79,

form: 76,

fitness: 94,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 78,

loyalty: 74,

leadership: 70,

temperament: 78,

},

reputation: 79,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 907,

name: "Vladimir Coufal",

position: "RB",

age: 33,

overall: 76,

potential: 76,

nationality: "Czech Republic",

salary: 60000,

attributes: { pace: 74, shooting: 58, passing: 70, dribbling: 70, defending: 77, physical: 76 },

market_value: 8000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 58,

},

squad_role: "rotation",

morale: 75,

form: 72,

fitness: 91,

sharpness: 79,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 26,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 74,

loyalty: 80,

leadership: 78,

temperament: 82,

},

reputation: 77,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 908,

name: "Aaron Cresswell",

position: "LB",

age: 35,

overall: 75,

potential: 75,

nationality: "England",

salary: 70000,

attributes: { pace: 66, shooting: 62, passing: 76, dribbling: 70, defending: 76, physical: 72 },

market_value: 4000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 6,

stubbornness: 54,

},

squad_role: "backup",

morale: 74,

form: 71,

fitness: 88,

sharpness: 77,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 32,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 72,

loyalty: 84,

leadership: 82,

temperament: 84,

},

reputation: 77,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 909,

name: "Emerson",

position: "LB",

age: 30,

overall: 77,

potential: 77,

nationality: "Italy",

salary: 70000,

attributes: { pace: 78, shooting: 60, passing: 72, dribbling: 74, defending: 76, physical: 74 },

market_value: 12000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 60,

},

squad_role: "important",

morale: 77,

form: 74,

fitness: 92,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 76,

loyalty: 74,

leadership: 72,

temperament: 78,

},

reputation: 77,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 910,

name: "Edson Álvarez",

position: "CDM",

age: 27,

overall: 81,

potential: 83,

nationality: "Mexico",

salary: 90000,

attributes: { pace: 72, shooting: 66, passing: 76, dribbling: 74, defending: 82, physical: 80 },

market_value: 40000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 66,

},

squad_role: "star",

morale: 82,

form: 79,

fitness: 94,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 84,

loyalty: 76,

leadership: 80,

temperament: 80,

},

reputation: 82,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 911,

name: "Tomáš Souček",

position: "CM",

age: 30,

overall: 80,

potential: 80,

nationality: "Czech Republic",

salary: 90000,

attributes: { pace: 66, shooting: 76, passing: 74, dribbling: 72, defending: 78, physical: 82 },

market_value: 28000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 64,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 93,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 82,

loyalty: 82,

leadership: 84,

temperament: 82,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 912,

name: "Lucas Paquetá",

position: "CAM",

age: 28,

overall: 84,

potential: 85,

nationality: "Brazil",

salary: 150000,

attributes: { pace: 76, shooting: 80, passing: 84, dribbling: 86, defending: 64, physical: 74 },

market_value: 60000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 11,

stubbornness: 72,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 94,

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

loyalty: 74,

leadership: 78,

temperament: 74,

},

reputation: 85,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 913,

name: "James Ward-Prowse",

position: "CM",

age: 30,

overall: 81,

potential: 81,

nationality: "England",

salary: 115000,

attributes: { pace: 66, shooting: 78, passing: 84, dribbling: 76, defending: 70, physical: 72 },

market_value: 28000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 64,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 92,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 92,

ambition: 82,

loyalty: 82,

leadership: 86,

temperament: 86,

},

reputation: 82,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 914,

name: "Mohammed Kudus",

position: "RW",

age: 25,

overall: 82,

potential: 86,

nationality: "Ghana",

salary: 85000,

attributes: { pace: 88, shooting: 80, passing: 78, dribbling: 86, defending: 48, physical: 72 },

market_value: 60000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "star",

morale: 85,

form: 82,

fitness: 96,

sharpness: 89,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 90,

loyalty: 74,

leadership: 72,

temperament: 76,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 915,

name: "Jarrod Bowen",

position: "RW",

age: 28,

overall: 83,

potential: 84,

nationality: "England",

salary: 120000,

attributes: { pace: 84, shooting: 82, passing: 78, dribbling: 82, defending: 54, physical: 76 },

market_value: 50000000,

contract_end: "2030-06-30",

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

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 86,

loyalty: 82,

leadership: 80,

temperament: 82,

},

reputation: 84,

homegrown_status: "association_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 916,

name: "Crysencio Summerville",

position: "LW",

age: 23,

overall: 79,

potential: 85,

nationality: "Netherlands",

salary: 65000,

attributes: { pace: 90, shooting: 76, passing: 74, dribbling: 82, defending: 42, physical: 68 },

market_value: 38000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 96,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 88,

loyalty: 74,

leadership: 66,

temperament: 76,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 917,

name: "Luis Guilherme",

position: "RW",

age: 19,

overall: 72,

potential: 84,

nationality: "Brazil",

salary: 30000,

attributes: { pace: 88, shooting: 70, passing: 68, dribbling: 78, defending: 36, physical: 64 },

market_value: 18000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 60,

},

squad_role: "prospect",

morale: 79,

form: 76,

fitness: 97,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 14,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 80,

ambition: 90,

loyalty: 72,

leadership: 56,

temperament: 74,

},

reputation: 70,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 918,

name: "Niclas Füllkrug",

position: "ST",

age: 32,

overall: 82,

potential: 82,

nationality: "Germany",

salary: 105000,

attributes: { pace: 70, shooting: 85, passing: 72, dribbling: 74, defending: 48, physical: 84 },

market_value: 25000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "star",

morale: 82,

form: 79,

fitness: 92,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 82,

loyalty: 76,

leadership: 82,

temperament: 82,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 919,

name: "Danny Ings",

position: "ST",

age: 33,

overall: 78,

potential: 78,

nationality: "England",

salary: 120000,

attributes: { pace: 76, shooting: 80, passing: 68, dribbling: 74, defending: 42, physical: 74 },

market_value: 12000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 60,

},

squad_role: "rotation",

morale: 76,

form: 73,

fitness: 89,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 50,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 80,

loyalty: 78,

leadership: 78,

temperament: 82,

},

reputation: 80,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 920,

name: "Maxw ell Cornet",

position: "LW",

age: 28,

overall: 77,

potential: 78,

nationality: "Ivory Coast",

salary: 75000,

attributes: { pace: 86, shooting: 76, passing: 70, dribbling: 78, defending: 52, physical: 74 },

market_value: 20000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "rotation",

morale: 75,

form: 72,

fitness: 93,

sharpness: 80,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 30,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 78,

loyalty: 72,

leadership: 68,

temperament: 74,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 921,

name: "Guido Rodríguez",

position: "CDM",

age: 31,

overall: 79,

potential: 79,

nationality: "Argentina",

salary: 85000,

attributes: { pace: 68, shooting: 66, passing: 76, dribbling: 74, defending: 80, physical: 78 },

market_value: 18000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 8,

stubbornness: 62,

},

squad_role: "rotation",

morale: 77,

form: 74,

fitness: 91,

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 24,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 88,

ambition: 78,

loyalty: 76,

leadership: 78,

temperament: 82,

},

reputation: 79,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

],

},

{

id: 10,

name: "Brighton & Hove Albion",

founded: 1901,

stadium: "American Express Community Stadium",

capacity: 31800,

budget: 110000000,

wage_budget_weekly: 2465200,

cash_reserves: 270000000,

debt: 35000000,

reputation: 83,

fanbase_size: 78,

attendance_rate: 0.97,

commercial_power: 77,

facilities: {

training: 89,

youth: 87,

medical: 88,

},

scouting: {

network_quality: 88,

range: "global",

},

owner: {

ambition: 86,

patience: 88,

spend_tendency: 76,

interference: 18,

},

board_expectations: {

league_position_target: 8,

cup_target_stage: "quarter_final",

continental_target_stage: "group_stage",

},

transfer_policy: {

max_age_in: 25,

min_overall_in: 73,

homegrown_bias: 32,

profit_focus: 65,

to_rivals_multiplier: 1.8,

wage_structure_strictness: 62,

buy_release_clauses: false,

},

negotiation_style: {

hardness: 85,

bid_delay_days: 4,

counter_margin_pct: 38,

},

willingness_to_sell: 60,

style_identity: {

formations: ["4-2-3-1", "3-4-2-1"],

play_style: "possession_attacking",

},

rivalries: [16],

affiliates: { feeder: [], parent: null },

players: [

{

id: 1001,

name: "Bart Verbruggen",

position: "GK",

age: 23,

overall: 80,

potential: 87,

nationality: "Netherlands",

salary: 45000,

attributes: { pace: 50, shooting: 42, passing: 74, dribbling: 54, defending: 44, physical: 76 },

market_value: 32000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 96,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 88,

loyalty: 78,

leadership: 74,

temperament: 82,

},

reputation: 79,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1002,

name: "Jason Steele",

position: "GK",

age: 35,

overall: 74,

potential: 74,

nationality: "England",

salary: 25000,

attributes: { pace: 40, shooting: 38, passing: 64, dribbling: 48, defending: 40, physical: 72 },

market_value: 2000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 6,

stubbornness: 52,

},

squad_role: "backup",

morale: 73,

form: 70,

fitness: 89,

sharpness: 76,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 28,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 70,

loyalty: 82,

leadership: 76,

temperament: 84,

},

reputation: 72,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 1003,

name: "Lewis Dunk",

position: "CB",

age: 34,

overall: 80,

potential: 80,

nationality: "England",

salary: 90000,

attributes: { pace: 62, shooting: 52, passing: 74, dribbling: 68, defending: 82, physical: 80 },

market_value: 12000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 7,

stubbornness: 60,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 90,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 30,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 78,

loyalty: 88,

leadership: 88,

temperament: 82,

},

reputation: 80,

homegrown_status: "club_trained",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1004,

name: "Jan Paul van Hecke",

position: "CB",

age: 25,

overall: 78,

potential: 83,

nationality: "Netherlands",

salary: 40000,

attributes: { pace: 72, shooting: 42, passing: 70, dribbling: 66, defending: 79, physical: 78 },

market_value: 28000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "important",

morale: 80,

form: 77,

fitness: 94,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 84,

loyalty: 76,

leadership: 74,

temperament: 80,

},

reputation: 77,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1005,

name: "Igor Julio",

position: "CB",

age: 27,

overall: 77,

potential: 79,

nationality: "Brazil",

salary: 50000,

attributes: { pace: 68, shooting: 40, passing: 68, dribbling: 64, defending: 78, physical: 80 },

market_value: 22000000,

contract_end: "2028-06-30",

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

sharpness: 81,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 80,

loyalty: 74,

leadership: 72,

temperament: 78,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 1006,

name: "Pervis Estupiñán",

position: "LB",

age: 27,

overall: 81,

potential: 83,

nationality: "Ecuador",

salary: 75000,

attributes: { pace: 88, shooting: 62, passing: 76, dribbling: 78, defending: 79, physical: 74 },

market_value: 38000000,

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

fitness: 95,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 84,

loyalty: 76,

leadership: 74,

temperament: 78,

},

reputation: 81,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 1007,

name: "Ferdi Kadıoğlu",

position: "RB",

age: 25,

overall: 79,

potential: 84,

nationality: "Turkey",

salary: 60000,

attributes: { pace: 86, shooting: 66, passing: 76, dribbling: 78, defending: 76, physical: 72 },

market_value: 35000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "important",

morale: 82,

form: 79,

fitness: 95,

sharpness: 86,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 86,

loyalty: 76,

leadership: 72,

temperament: 78,

},

reputation: 78,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1008,

name: "Tariq Lamptey",

position: "RB",

age: 25,

overall: 76,

potential: 80,

nationality: "Ghana",

salary: 45000,

attributes: { pace: 92, shooting: 58, passing: 70, dribbling: 76, defending: 72, physical: 66 },

market_value: 22000000,

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

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 35,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 84,

loyalty: 76,

leadership: 66,

temperament: 78,

},

reputation: 76,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 1009,

name: "Carlos Baleba",

position: "CDM",

age: 21,

overall: 77,

potential: 86,

nationality: "Cameroon",

salary: 35000,

attributes: { pace: 76, shooting: 66, passing: 72, dribbling: 74, defending: 76, physical: 80 },

market_value: 32000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "rotation",

morale: 80,

form: 77,

fitness: 97,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 90,

loyalty: 76,

leadership: 68,

temperament: 76,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1010,

name: "Billy Gilmour",

position: "CM",

age: 24,

overall: 78,

potential: 83,

nationality: "Scotland",

salary: 50000,

attributes: { pace: 68, shooting: 66, passing: 80, dribbling: 78, defending: 68, physical: 66 },

market_value: 25000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "important",

morale: 81,

form: 78,

fitness: 94,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 86,

loyalty: 76,

leadership: 72,

temperament: 80,

},

reputation: 78,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1011,

name: "James Milner",

position: "CM",

age: 39,

overall: 74,

potential: 74,

nationality: "England",

salary: 60000,

attributes: { pace: 58, shooting: 68, passing: 76, dribbling: 70, defending: 72, physical: 72 },

market_value: 1000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 5,

stubbornness: 50,

},

squad_role: "backup",

morale: 77,

form: 74,

fitness: 86,

sharpness: 79,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 38,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 98,

ambition: 75,

loyalty: 82,

leadership: 92,

temperament: 90,

},

reputation: 82,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 1012,

name: "Matt O'Riley",

position: "CAM",

age: 24,

overall: 80,

potential: 85,

nationality: "Denmark",

salary: 75000,

attributes: { pace: 72, shooting: 78, passing: 82, dribbling: 80, defending: 64, physical: 72 },

market_value: 42000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 66,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 95,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 88,

loyalty: 76,

leadership: 76,

temperament: 80,

},

reputation: 80,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1013,

name: "Joao Pedro",

position: "ST",

age: 24,

overall: 82,

potential: 86,

nationality: "Brazil",

salary: 90000,

attributes: { pace: 80, shooting: 82, passing: 78, dribbling: 84, defending: 48, physical: 74 },

market_value: 55000000,

contract_end: "2028-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 68,

},

squad_role: "star",

morale: 85,

form: 82,

fitness: 95,

sharpness: 89,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 22,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 85,

ambition: 88,

loyalty: 76,

leadership: 74,

temperament: 76,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1014,

name: "Kaoru Mitoma",

position: "LW",

age: 28,

overall: 82,

potential: 84,

nationality: "Japan",

salary: 80000,

attributes: { pace: 88, shooting: 76, passing: 76, dribbling: 86, defending: 46, physical: 70 },

market_value: 50000000,

contract_end: "2027-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 66,

},

squad_role: "star",

morale: 84,

form: 81,

fitness: 95,

sharpness: 88,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 90,

ambition: 86,

loyalty: 82,

leadership: 72,

temperament: 82,

},

reputation: 83,

homegrown_status: "foreign",

fan_favorite: true,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1015,

name: "Simon Adingra",

position: "RW",

age: 23,

overall: 78,

potential: 84,

nationality: "Ivory Coast",

salary: 40000,

attributes: { pace: 90, shooting: 74, passing: 72, dribbling: 80, defending: 44, physical: 72 },

market_value: 32000000,

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

fitness: 96,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 88,

loyalty: 76,

leadership: 66,

temperament: 78,

},

reputation: 77,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1016,

name: "Yankuba Minteh",

position: "RW",

age: 20,

overall: 75,

potential: 85,

nationality: "Gambia",

salary: 30000,

attributes: { pace: 94, shooting: 72, passing: 70, dribbling: 78, defending: 38, physical: 68 },

market_value: 28000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 80,

form: 77,

fitness: 97,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 92,

loyalty: 74,

leadership: 58,

temperament: 76,

},

reputation: 74,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1017,

name: "Danny Welbeck",

position: "ST",

age: 34,

overall: 76,

potential: 76,

nationality: "England",

salary: 75000,

attributes: { pace: 76, shooting: 74, passing: 70, dribbling: 76, defending: 46, physical: 74 },

market_value: 4000000,

contract_end: "2026-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 6,

stubbornness: 56,

},

squad_role: "rotation",

morale: 78,

form: 75,

fitness: 89,

sharpness: 82,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 45,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 92,

ambition: 76,

loyalty: 80,

leadership: 80,

temperament: 84,

},

reputation: 79,

homegrown_status: "association_trained",

fan_favorite: false,

transfer_status: "available",

on_loan: false,

loan: null,

},

{

id: 1018,

name: "Evan Ferguson",

position: "ST",

age: 20,

overall: 77,

potential: 88,

nationality: "Ireland",

salary: 35000,

attributes: { pace: 78, shooting: 78, passing: 70, dribbling: 74, defending: 42, physical: 78 },

market_value: 40000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 10,

stubbornness: 66,

},

squad_role: "rotation",

morale: 81,

form: 78,

fitness: 96,

sharpness: 85,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 20,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 86,

ambition: 92,

loyalty: 80,

leadership: 68,

temperament: 80,

},

reputation: 76,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1019,

name: "Georginio Rutter",

position: "CAM",

age: 23,

overall: 78,

potential: 84,

nationality: "France",

salary: 55000,

attributes: { pace: 78, shooting: 76, passing: 78, dribbling: 82, defending: 50, physical: 70 },

market_value: 35000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 64,

},

squad_role: "rotation",

morale: 80,

form: 77,

fitness: 95,

sharpness: 84,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 18,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 84,

ambition: 86,

loyalty: 74,

leadership: 66,

temperament: 78,

},

reputation: 77,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

{

id: 1020,

name: "Brajan Gruda",

position: "RW",

age: 21,

overall: 74,

potential: 84,

nationality: "Germany",

salary: 35000,

attributes: { pace: 86, shooting: 72, passing: 74, dribbling: 80, defending: 40, physical: 66 },

market_value: 25000000,

contract_end: "2029-06-30",

release_clause: null,

sell_on_clause_pct: 0,

agent: {

fee_pct: 9,

stubbornness: 62,

},

squad_role: "rotation",

morale: 79,

form: 76,

fitness: 97,

sharpness: 83,

injury_status: {

type: "none",

weeks_remaining: 0,

proneness: 16,

},

suspension: { matches_remaining: 0 },

personality: {

professionalism: 82,

ambition: 90,

loyalty: 74,

leadership: 60,

temperament: 76,

},

reputation: 73,

homegrown_status: "foreign",

fan_favorite: false,

transfer_status: "not_for_sale",

on_loan: false,

loan: null,

},

],

},

		{
			id: 11,
			name: "Nottingham Forest",
			founded: 1865,
			stadium: "City Ground",
			capacity: 30445,
			budget: 95000000,
			wage_budget_weekly: 850000,
			cash_reserves: 18000000,
			debt: 62000000,
			reputation: 73,
			fanbase_size: 950000,
			attendance_rate: 0.96,
			commercial_power: 68,
			facilities: {
				training: 75,
				youth: 72,
				medical: 76,
				stadium_condition: 77,
			},
			manager: {
				name: "Nuno Espírito Santo",
				age: 51,
				nationality: "Portugal",
				reputation: 75,
				preferred_formation: "3-4-3",
				tactical_style: "Counter Attack",
				man_management: 78,
				tactical_knowledge: 76,
			},
			preferred_formation: "3-4-3",
			squad: [
				{
					number: 1,
					name: "Matz Sels",
					age: 32,
					nationality: "Belgium",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 78,
					potential: 78,
					attributes: {
						pace: 55,
						shooting: 42,
						passing: 62,
						dribbling: 58,
						defending: 45,
						physical: 72,
						goalkeeping: {
							diving: 79,
							handling: 81,
							kicking: 70,
							reflexes: 82,
							speed: 56,
							positioning: 78,
						},
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 45000,
					contract_end: "2027-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 85,
						ambition: 72,
						loyalty: 78,
						leadership: 74,
						temperament: 80,
					},
					agent: {
						name: "Patrick De Koster",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.1,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 0,
						assists: 1,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2520,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 26,
					name: "Carlos Miguel",
					age: 25,
					nationality: "Brazil",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 72,
					potential: 78,
					attributes: {
						pace: 58,
						shooting: 40,
						passing: 60,
						dribbling: 56,
						defending: 42,
						physical: 70,
						goalkeeping: {
							diving: 74,
							handling: 73,
							kicking: 68,
							reflexes: 75,
							speed: 59,
							positioning: 71,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 22000,
					contract_end: "2028-06-30",
					market_value: 5500000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 82,
						loyalty: 75,
						leadership: 65,
						temperament: 76,
					},
					agent: {
						name: "Giuliano Bertolucci",
						commission_rate: 0.09,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 75,
					form: 6.4,
					fitness: 98,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 6,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 540,
					},
					reputation: 68,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 5,
					name: "Murillo",
					age: 22,
					nationality: "Brazil",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 79,
					potential: 86,
					attributes: {
						pace: 78,
						shooting: 48,
						passing: 68,
						dribbling: 65,
						defending: 82,
						physical: 79,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 55000,
					contract_end: "2029-06-30",
					market_value: 32000000,
					release_clause: 75000000,
					personality: {
						professionalism: 80,
						ambition: 88,
						loyalty: 72,
						leadership: 70,
						temperament: 74,
					},
					agent: {
						name: "Marcelo Henrique",
						commission_rate: 0.10,
						negotiation_difficulty: 7,
					},
					squad_role: "first_team_regular",
					morale: 85,
					form: 7.4,
					fitness: 96,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 2,
						assists: 1,
						yellow_cards: 7,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2670,
					},
					reputation: 78,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 4,
					name: "Nikola Milenković",
					age: 27,
					nationality: "Serbia",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 80,
					potential: 82,
					attributes: {
						pace: 72,
						shooting: 50,
						passing: 70,
						dribbling: 62,
						defending: 84,
						physical: 82,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 60000,
					contract_end: "2028-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 76,
						loyalty: 78,
						leadership: 80,
						temperament: 82,
					},
					agent: {
						name: "Alessandro Lucci",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 83,
					form: 7.2,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 3,
						assists: 0,
						yellow_cards: 6,
						red_cards: 1,
						clean_sheets: 9,
						minutes_played: 2580,
					},
					reputation: 79,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 32,
					name: "Willy Boly",
					age: 33,
					nationality: "Ivory Coast",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 76,
					potential: 76,
					attributes: {
						pace: 65,
						shooting: 46,
						passing: 66,
						dribbling: 58,
						defending: 80,
						physical: 81,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 48000,
					contract_end: "2026-06-30",
					market_value: 6000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 65,
						loyalty: 82,
						leadership: 83,
						temperament: 80,
					},
					agent: {
						name: "Moussa Sissoko",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.7,
					fitness: 92,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 18,
						goals: 1,
						assists: 0,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1440,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 19,
					name: "Moussa Niakhaté",
					age: 28,
					nationality: "France",
					position: "CB",
					preferred_positions: ["CB", "LB"],
					overall: 78,
					potential: 79,
					attributes: {
						pace: 74,
						shooting: 48,
						passing: 69,
						dribbling: 64,
						defending: 81,
						physical: 80,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 52000,
					contract_end: "2028-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 81,
						ambition: 74,
						loyalty: 77,
						leadership: 75,
						temperament: 76,
					},
					agent: {
						name: "Jacques-Etienne Lastere",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 79,
					form: 6.9,
					fitness: 88,
					sharpness: 85,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 1,
						assists: 2,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 1890,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 43,
					name: "Ola Aina",
					age: 28,
					nationality: "Nigeria",
					position: "RWB",
					preferred_positions: ["RWB", "RB"],
					overall: 77,
					potential: 78,
					attributes: {
						pace: 82,
						shooting: 58,
						passing: 72,
						dribbling: 74,
						defending: 75,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2027-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 76,
						loyalty: 75,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "NVA Management",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.0,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 2,
						assists: 5,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2380,
					},
					reputation: 75,
					homegrown_status: "homegrown_club",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 7,
					name: "Neco Williams",
					age: 23,
					nationality: "Wales",
					position: "RWB",
					preferred_positions: ["RWB", "RB"],
					overall: 75,
					potential: 80,
					attributes: {
						pace: 84,
						shooting: 60,
						passing: 70,
						dribbling: 72,
						defending: 72,
						physical: 73,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 42000,
					contract_end: "2028-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 79,
						ambition: 83,
						loyalty: 76,
						leadership: 70,
						temperament: 75,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.8,
					fitness: 96,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 1,
						assists: 4,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1920,
					},
					reputation: 73,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 15,
					name: "Harry Toffolo",
					age: 29,
					nationality: "England",
					position: "LWB",
					preferred_positions: ["LWB", "LB"],
					overall: 74,
					potential: 74,
					attributes: {
						pace: 76,
						shooting: 54,
						passing: 70,
						dribbling: 68,
						defending: 74,
						physical: 72,
					},
					preferred_foot: "left",
					weak_foot: 2,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 38000,
					contract_end: "2027-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 72,
						loyalty: 80,
						leadership: 74,
						temperament: 79,
					},
					agent: {
						name: "Jonathan Barnett",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.6,
					fitness: 93,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 20,
						goals: 0,
						assists: 3,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1560,
					},
					reputation: 71,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 11,
					name: "Álex Moreno",
					age: 31,
					nationality: "Spain",
					position: "LWB",
					preferred_positions: ["LWB", "LB"],
					overall: 76,
					potential: 76,
					attributes: {
						pace: 78,
						shooting: 60,
						passing: 73,
						dribbling: 72,
						defending: 75,
						physical: 74,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 45000,
					contract_end: "2026-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 83,
						ambition: 70,
						loyalty: 75,
						leadership: 76,
						temperament: 80,
					},
					agent: {
						name: "Promoesport",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.0,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 1,
						assists: 4,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2220,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 22,
					name: "Ryan Yates",
					age: 27,
					nationality: "England",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 74,
					potential: 75,
					attributes: {
						pace: 68,
						shooting: 62,
						passing: 70,
						dribbling: 66,
						defending: 76,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 40000,
					contract_end: "2027-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 85,
						ambition: 75,
						loyalty: 88,
						leadership: 80,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 84,
					form: 7.1,
					fitness: 96,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 4,
						assists: 2,
						yellow_cards: 8,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2580,
					},
					reputation: 72,
					homegrown_status: "homegrown_club",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 6,
					name: "Ibrahim Sangaré",
					age: 26,
					nationality: "Ivory Coast",
					position: "CDM",
					preferred_positions: ["CDM"],
					overall: 79,
					potential: 82,
					attributes: {
						pace: 75,
						shooting: 65,
						passing: 73,
						dribbling: 72,
						defending: 81,
						physical: 84,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 68000,
					contract_end: "2028-06-30",
					market_value: 35000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 80,
						loyalty: 74,
						leadership: 76,
						temperament: 75,
					},
					agent: {
						name: "Salek Agency",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.3,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 2,
						assists: 3,
						yellow_cards: 7,
						red_cards: 1,
						clean_sheets: 8,
						minutes_played: 2340,
					},
					reputation: 77,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 24,
					name: "Nicolás Domínguez",
					age: 26,
					nationality: "Argentina",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 77,
					potential: 80,
					attributes: {
						pace: 72,
						shooting: 68,
						passing: 75,
						dribbling: 73,
						defending: 76,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 50000,
					contract_end: "2028-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 81,
						ambition: 78,
						loyalty: 76,
						leadership: 74,
						temperament: 77,
					},
					agent: {
						name: "Fali Ramadani",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 79,
					form: 6.9,
					fitness: 94,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 25,
						goals: 3,
						assists: 4,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2025,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 16,
					name: "Danilo",
					age: 23,
					nationality: "Brazil",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 76,
					potential: 82,
					attributes: {
						pace: 70,
						shooting: 66,
						passing: 74,
						dribbling: 72,
						defending: 75,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 46000,
					contract_end: "2029-06-30",
					market_value: 24000000,
					release_clause: 55000000,
					personality: {
						professionalism: 79,
						ambition: 84,
						loyalty: 73,
						leadership: 68,
						temperament: 74,
					},
					agent: {
						name: "Giuliano Bertolucci",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.7,
					fitness: 96,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 23,
						goals: 2,
						assists: 3,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1800,
					},
					reputation: 73,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 10,
					name: "Morgan Gibbs-White",
					age: 24,
					nationality: "England",
					position: "CAM",
					preferred_positions: ["CAM", "CM", "LW"],
					overall: 80,
					potential: 84,
					attributes: {
						pace: 76,
						shooting: 74,
						passing: 81,
						dribbling: 82,
						defending: 58,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 70000,
					contract_end: "2027-06-30",
					market_value: 42000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 85,
						loyalty: 76,
						leadership: 78,
						temperament: 72,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "key_player",
					morale: 86,
					form: 7.6,
					fitness: 95,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 31,
						goals: 8,
						assists: 11,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2730,
					},
					reputation: 78,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 8,
					name: "Elliot Anderson",
					age: 21,
					nationality: "Scotland",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 74,
					potential: 82,
					attributes: {
						pace: 74,
						shooting: 68,
						passing: 73,
						dribbling: 76,
						defending: 64,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 35000,
					contract_end: "2029-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 86,
						loyalty: 75,
						leadership: 65,
						temperament: 76,
					},
					agent: {
						name: "Elite Project Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 80,
					form: 7.0,
					fitness: 97,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 4,
						assists: 5,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1620,
					},
					reputation: 71,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 21,
					name: "Anthony Elanga",
					age: 23,
					nationality: "Sweden",
					position: "RW",
					preferred_positions: ["RW", "LW", "ST"],
					overall: 76,
					potential: 82,
					attributes: {
						pace: 87,
						shooting: 72,
						passing: 70,
						dribbling: 76,
						defending: 48,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2028-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 83,
						loyalty: 75,
						leadership: 68,
						temperament: 79,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.2,
					fitness: 96,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 7,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2340,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 18,
					name: "Ramón Sosa",
					age: 24,
					nationality: "Paraguay",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 74,
					potential: 80,
					attributes: {
						pace: 84,
						shooting: 70,
						passing: 68,
						dribbling: 78,
						defending: 42,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 38000,
					contract_end: "2029-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 82,
						loyalty: 74,
						leadership: 62,
						temperament: 70,
					},
					agent: {
						name: "Renato Bittar",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.7,
					fitness: 95,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 20,
						goals: 4,
						assists: 4,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1440,
					},
					reputation: 70,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 27,
					name: "Jota Silva",
					age: 24,
					nationality: "Portugal",
					position: "RW",
					preferred_positions: ["RW", "LW"],
					overall: 73,
					potential: 79,
					attributes: {
						pace: 83,
						shooting: 68,
						passing: 67,
						dribbling: 75,
						defending: 44,
						physical: 66,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 32000,
					contract_end: "2029-06-30",
					market_value: 15000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 80,
						loyalty: 76,
						leadership: 64,
						temperament: 75,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.10,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 75,
					form: 6.5,
					fitness: 96,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 18,
						goals: 3,
						assists: 3,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 3,
						minutes_played: 1260,
					},
					reputation: 69,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 9,
					name: "Taiwo Awoniyi",
					age: 27,
					nationality: "Nigeria",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 78,
					potential: 79,
					attributes: {
						pace: 82,
						shooting: 80,
						passing: 66,
						dribbling: 72,
						defending: 42,
						physical: 82,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 60000,
					contract_end: "2028-06-30",
					market_value: 26000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 78,
						loyalty: 76,
						leadership: 72,
						temperament: 75,
					},
					agent: {
						name: "Dex Management",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 92,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 12,
						assists: 3,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 2100,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 14,
					name: "Callum Hudson-Odoi",
					age: 24,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "RW", "CAM"],
					overall: 77,
					potential: 82,
					attributes: {
						pace: 85,
						shooting: 72,
						passing: 74,
						dribbling: 82,
						defending: 46,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 65000,
					contract_end: "2027-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 84,
						loyalty: 70,
						leadership: 65,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.10,
						negotiation_difficulty: 7,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.3,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 9,
						assists: 8,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 2280,
					},
					reputation: 76,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 20,
					name: "Jota Rosa",
					age: 23,
					nationality: "Brazil",
					position: "ST",
					preferred_positions: ["ST", "RW"],
					overall: 72,
					potential: 78,
					attributes: {
						pace: 80,
						shooting: 72,
						passing: 65,
						dribbling: 74,
						defending: 38,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 28000,
					contract_end: "2028-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 75,
						ambition: 82,
						loyalty: 72,
						leadership: 60,
						temperament: 73,
					},
					agent: {
						name: "Promoesport",
						commission_rate: 0.09,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 73,
					form: 6.3,
					fitness: 95,
					sharpness: 85,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 15,
						goals: 3,
						assists: 2,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 780,
					},
					reputation: 67,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 17,
					name: "Chris Wood",
					age: 33,
					nationality: "New Zealand",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 75,
					potential: 75,
					attributes: {
						pace: 68,
						shooting: 79,
						passing: 62,
						dribbling: 64,
						defending: 48,
						physical: 84,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 55000,
					contract_end: "2026-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 70,
						loyalty: 78,
						leadership: 82,
						temperament: 84,
					},
					agent: {
						name: "ICM Stellar Sports",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.8,
					fitness: 91,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 9,
						assists: 1,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1620,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 29,
					name: "Eric da Silva Moreira",
					age: 19,
					nationality: "Brazil",
					position: "RW",
					preferred_positions: ["RW", "LW"],
					overall: 68,
					potential: 80,
					attributes: {
						pace: 86,
						shooting: 64,
						passing: 63,
						dribbling: 72,
						defending: 38,
						physical: 62,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 18000,
					contract_end: "2028-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 72,
						ambition: 88,
						loyalty: 75,
						leadership: 50,
						temperament: 68,
					},
					agent: {
						name: "You First Sports",
						commission_rate: 0.10,
						negotiation_difficulty: 6,
					},
					squad_role: "prospect",
					morale: 78,
					form: 6.4,
					fitness: 98,
					sharpness: 84,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 12,
						goals: 1,
						assists: 2,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 480,
					},
					reputation: 63,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 23,
					name: "Alex Mighten",
					age: 22,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 68,
					potential: 76,
					attributes: {
						pace: 84,
						shooting: 64,
						passing: 62,
						dribbling: 72,
						defending: 40,
						physical: 64,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "medium_medium",
					salary_weekly: 15000,
					contract_end: "2026-06-30",
					market_value: 6000000,
					release_clause: null,
					personality: {
						professionalism: 74,
						ambition: 78,
						loyalty: 80,
						leadership: 55,
						temperament: 72,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 72,
					form: 6.1,
					fitness: 96,
					sharpness: 82,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 8,
						goals: 0,
						assists: 1,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 240,
					},
					reputation: 62,
					homegrown_status: "homegrown_club",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
			],
		},
		{
			id: 12,
			name: "Fulham",
			founded: 1879,
			stadium: "Craven Cottage",
			capacity: 25700,
			budget: 92000000,
			wage_budget_weekly: 820000,
			cash_reserves: 16000000,
			debt: 55000000,
			reputation: 72,
			fanbase_size: 880000,
			attendance_rate: 0.98,
			commercial_power: 66,
			facilities: {
				training: 74,
				youth: 70,
				medical: 75,
				stadium_condition: 82,
			},
			manager: {
				name: "Marco Silva",
				age: 47,
				nationality: "Portugal",
				reputation: 76,
				preferred_formation: "4-2-3-1",
				tactical_style: "Possession",
				man_management: 77,
				tactical_knowledge: 78,
			},
			preferred_formation: "4-2-3-1",
			squad: [
				{
					number: 1,
					name: "Bernd Leno",
					age: 32,
					nationality: "Germany",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 81,
					potential: 81,
					attributes: {
						pace: 54,
						shooting: 40,
						passing: 68,
						dribbling: 60,
						defending: 46,
						physical: 70,
						goalkeeping: {
							diving: 83,
							handling: 82,
							kicking: 75,
							reflexes: 84,
							speed: 55,
							positioning: 81,
						},
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 85000,
					contract_end: "2027-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 74,
						loyalty: 80,
						leadership: 82,
						temperament: 78,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 84,
					form: 7.4,
					fitness: 94,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 0,
						assists: 0,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 11,
						minutes_played: 2700,
					},
					reputation: 80,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 23,
					name: "Steven Benda",
					age: 26,
					nationality: "Germany",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 70,
					potential: 74,
					attributes: {
						pace: 56,
						shooting: 38,
						passing: 58,
						dribbling: 54,
						defending: 40,
						physical: 68,
						goalkeeping: {
							diving: 72,
							handling: 71,
							kicking: 66,
							reflexes: 73,
							speed: 57,
							positioning: 70,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 18000,
					contract_end: "2027-06-30",
					market_value: 4000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 76,
						loyalty: 78,
						leadership: 65,
						temperament: 79,
					},
					agent: {
						name: "SportsTotal",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 74,
					form: 6.3,
					fitness: 97,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 4,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 360,
					},
					reputation: 66,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 31,
					name: "Issa Diop",
					age: 27,
					nationality: "France",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 78,
					potential: 79,
					attributes: {
						pace: 76,
						shooting: 48,
						passing: 66,
						dribbling: 62,
						defending: 81,
						physical: 82,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 58000,
					contract_end: "2027-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 76,
						loyalty: 78,
						leadership: 76,
						temperament: 80,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.1,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 2,
						assists: 1,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2460,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 5,
					name: "Joachim Andersen",
					age: 28,
					nationality: "Denmark",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 80,
					potential: 81,
					attributes: {
						pace: 70,
						shooting: 52,
						passing: 74,
						dribbling: 64,
						defending: 83,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 72000,
					contract_end: "2029-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 78,
						loyalty: 76,
						leadership: 82,
						temperament: 84,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "key_player",
					morale: 85,
					form: 7.5,
					fitness: 94,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 3,
						assists: 2,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 11,
						minutes_played: 2700,
					},
					reputation: 79,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 13,
					name: "Tim Ream",
					age: 37,
					nationality: "USA",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 75,
					potential: 75,
					attributes: {
						pace: 62,
						shooting: 44,
						passing: 70,
						dribbling: 60,
						defending: 79,
						physical: 76,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 45000,
					contract_end: "2026-06-30",
					market_value: 3000000,
					release_clause: null,
					personality: {
						professionalism: 92,
						ambition: 68,
						loyalty: 90,
						leadership: 88,
						temperament: 86,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.06,
						negotiation_difficulty: 4,
					},
					squad_role: "rotation",
					morale: 82,
					form: 6.9,
					fitness: 90,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 20,
						goals: 1,
						assists: 0,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 1620,
					},
					reputation: 73,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 3,
					name: "Calvin Bassey",
					age: 24,
					nationality: "Nigeria",
					position: "CB",
					preferred_positions: ["CB", "LB"],
					overall: 78,
					potential: 83,
					attributes: {
						pace: 82,
						shooting: 46,
						passing: 68,
						dribbling: 70,
						defending: 79,
						physical: 78,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 52000,
					contract_end: "2028-06-30",
					market_value: 26000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 84,
						loyalty: 75,
						leadership: 72,
						temperament: 76,
					},
					agent: {
						name: "Base Soccer Agency",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.2,
					fitness: 96,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 1,
						assists: 2,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2340,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 2,
					name: "Kenny Tete",
					age: 29,
					nationality: "Netherlands",
					position: "RB",
					preferred_positions: ["RB", "RWB"],
					overall: 76,
					potential: 76,
					attributes: {
						pace: 79,
						shooting: 56,
						passing: 71,
						dribbling: 72,
						defending: 75,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2026-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 73,
						loyalty: 79,
						leadership: 75,
						temperament: 81,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.0,
					fitness: 94,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 1,
						assists: 4,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2280,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 33,
					name: "Antonee Robinson",
					age: 27,
					nationality: "USA",
					position: "LB",
					preferred_positions: ["LB", "LWB"],
					overall: 79,
					potential: 81,
					attributes: {
						pace: 91,
						shooting: 54,
						passing: 72,
						dribbling: 75,
						defending: 76,
						physical: 76,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 62000,
					contract_end: "2028-06-30",
					market_value: 30000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 80,
						loyalty: 78,
						leadership: 74,
						temperament: 79,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "key_player",
					morale: 84,
					form: 7.4,
					fitness: 97,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 1,
						assists: 6,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2610,
					},
					reputation: 77,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 21,
					name: "Sasa Lukic",
					age: 27,
					nationality: "Serbia",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 78,
					potential: 79,
					attributes: {
						pace: 72,
						shooting: 70,
						passing: 76,
						dribbling: 74,
						defending: 76,
						physical: 77,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 58000,
					contract_end: "2028-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 77,
						loyalty: 76,
						leadership: 76,
						temperament: 78,
					},
					agent: {
						name: "P&P Sport Management",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.1,
					fitness: 95,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 4,
						assists: 5,
						yellow_cards: 7,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2400,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 26,
					name: "João Palhinha",
					age: 29,
					nationality: "Portugal",
					position: "CDM",
					preferred_positions: ["CDM"],
					overall: 83,
					potential: 83,
					attributes: {
						pace: 70,
						shooting: 68,
						passing: 75,
						dribbling: 72,
						defending: 85,
						physical: 86,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 95000,
					contract_end: "2027-06-30",
					market_value: 52000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 82,
						loyalty: 78,
						leadership: 84,
						temperament: 76,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.10,
						negotiation_difficulty: 8,
					},
					squad_role: "star_player",
					morale: 87,
					form: 7.8,
					fitness: 94,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 31,
						goals: 3,
						assists: 2,
						yellow_cards: 11,
						red_cards: 1,
						clean_sheets: 11,
						minutes_played: 2730,
					},
					reputation: 82,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 28,
					name: "Tom Cairney",
					age: 33,
					nationality: "Scotland",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 74,
					potential: 74,
					attributes: {
						pace: 65,
						shooting: 68,
						passing: 78,
						dribbling: 72,
						defending: 66,
						physical: 70,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 52000,
					contract_end: "2026-06-30",
					market_value: 6000000,
					release_clause: null,
					personality: {
						professionalism: 90,
						ambition: 70,
						loyalty: 92,
						leadership: 86,
						temperament: 84,
					},
					agent: {
						name: "James Featherstone",
						commission_rate: 0.07,
						negotiation_difficulty: 4,
					},
					squad_role: "rotation",
					morale: 83,
					form: 6.8,
					fitness: 90,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 2,
						assists: 4,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1620,
					},
					reputation: 72,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 18,
					name: "Andreas Pereira",
					age: 28,
					nationality: "Brazil",
					position: "CAM",
					preferred_positions: ["CAM", "CM", "LW"],
					overall: 79,
					potential: 80,
					attributes: {
						pace: 74,
						shooting: 76,
						passing: 80,
						dribbling: 81,
						defending: 60,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 72000,
					contract_end: "2026-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 80,
						loyalty: 74,
						leadership: 72,
						temperament: 70,
					},
					agent: {
						name: "Kia Joorabchian",
						commission_rate: 0.10,
						negotiation_difficulty: 7,
					},
					squad_role: "key_player",
					morale: 83,
					form: 7.5,
					fitness: 93,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 9,
						assists: 11,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2520,
					},
					reputation: 78,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 10,
					name: "Emile Smith Rowe",
					age: 24,
					nationality: "England",
					position: "CAM",
					preferred_positions: ["CAM", "LW", "CM"],
					overall: 79,
					potential: 84,
					attributes: {
						pace: 78,
						shooting: 76,
						passing: 79,
						dribbling: 82,
						defending: 54,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 78000,
					contract_end: "2029-06-30",
					market_value: 38000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 84,
						loyalty: 76,
						leadership: 70,
						temperament: 78,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "key_player",
					morale: 85,
					form: 7.6,
					fitness: 91,
					sharpness: 90,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 8,
						assists: 9,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2100,
					},
					reputation: 77,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 8,
					name: "Harry Wilson",
					age: 27,
					nationality: "Wales",
					position: "RW",
					preferred_positions: ["RW", "CAM"],
					overall: 77,
					potential: 78,
					attributes: {
						pace: 78,
						shooting: 78,
						passing: 76,
						dribbling: 78,
						defending: 48,
						physical: 66,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 62000,
					contract_end: "2027-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 79,
						loyalty: 77,
						leadership: 74,
						temperament: 80,
					},
					agent: {
						name: "ICM Stellar Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.3,
					fitness: 94,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 10,
						assists: 7,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2430,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 11,
					name: "Adama Traoré",
					age: 28,
					nationality: "Spain",
					position: "RW",
					preferred_positions: ["RW", "RWB"],
					overall: 77,
					potential: 77,
					attributes: {
						pace: 96,
						shooting: 68,
						passing: 68,
						dribbling: 84,
						defending: 52,
						physical: 88,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 5,
					work_rate: "high_medium",
					salary_weekly: 68000,
					contract_end: "2026-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 76,
						loyalty: 74,
						leadership: 65,
						temperament: 75,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 96,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 4,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1800,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 7,
					name: "Reiss Nelson",
					age: 24,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "RW", "CAM"],
					overall: 75,
					potential: 80,
					attributes: {
						pace: 82,
						shooting: 72,
						passing: 73,
						dribbling: 80,
						defending: 46,
						physical: 64,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 55000,
					contract_end: "2028-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 79,
						ambition: 82,
						loyalty: 74,
						leadership: 66,
						temperament: 76,
					},
					agent: {
						name: "Roc Nation Sports",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 94,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 21,
						goals: 5,
						assists: 4,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1470,
					},
					reputation: 73,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 17,
					name: "Alex Iwobi",
					age: 28,
					nationality: "Nigeria",
					position: "LW",
					preferred_positions: ["LW", "RW", "CM"],
					overall: 78,
					potential: 78,
					attributes: {
						pace: 79,
						shooting: 70,
						passing: 76,
						dribbling: 80,
						defending: 56,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 70000,
					contract_end: "2027-06-30",
					market_value: 26000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 77,
						loyalty: 78,
						leadership: 74,
						temperament: 80,
					},
					agent: {
						name: "Yinka Osiyan",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 95,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 6,
						assists: 8,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2340,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 9,
					name: "Rodrigo Muniz",
					age: 23,
					nationality: "Brazil",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 76,
					potential: 82,
					attributes: {
						pace: 76,
						shooting: 78,
						passing: 66,
						dribbling: 72,
						defending: 42,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2028-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 84,
						loyalty: 75,
						leadership: 68,
						temperament: 76,
					},
					agent: {
						name: "Giuliano Bertolucci",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.3,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 14,
						assists: 3,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2280,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 19,
					name: "Raúl Jiménez",
					age: 34,
					nationality: "Mexico",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 77,
					potential: 77,
					attributes: {
						pace: 72,
						shooting: 80,
						passing: 72,
						dribbling: 74,
						defending: 50,
						physical: 82,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 72000,
					contract_end: "2026-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 90,
						ambition: 74,
						loyalty: 80,
						leadership: 84,
						temperament: 82,
					},
					agent: {
						name: "David Bazan",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 80,
					form: 7.0,
					fitness: 91,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 10,
						assists: 4,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1680,
					},
					reputation: 78,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 14,
					name: "Bobby De Cordova-Reid",
					age: 31,
					nationality: "Jamaica",
					position: "RW",
					preferred_positions: ["RW", "ST", "LW"],
					overall: 74,
					potential: 74,
					attributes: {
						pace: 80,
						shooting: 72,
						passing: 68,
						dribbling: 74,
						defending: 52,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 48000,
					contract_end: "2026-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 74,
						loyalty: 82,
						leadership: 76,
						temperament: 80,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.7,
					fitness: 92,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 20,
						goals: 4,
						assists: 3,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1320,
					},
					reputation: 72,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 22,
					name: "Carlos Vinícius",
					age: 29,
					nationality: "Brazil",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 74,
					potential: 74,
					attributes: {
						pace: 74,
						shooting: 76,
						passing: 64,
						dribbling: 70,
						defending: 40,
						physical: 78,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "medium_medium",
					salary_weekly: 42000,
					contract_end: "2026-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 72,
						loyalty: 76,
						leadership: 70,
						temperament: 74,
					},
					agent: {
						name: "Rogon Sportmanagement",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 74,
					form: 6.4,
					fitness: 93,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 14,
						goals: 3,
						assists: 1,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 720,
					},
					reputation: 71,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 27,
					name: "Jay Stansfield",
					age: 21,
					nationality: "England",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 68,
					potential: 78,
					attributes: {
						pace: 76,
						shooting: 70,
						passing: 62,
						dribbling: 68,
						defending: 38,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_medium",
					salary_weekly: 18000,
					contract_end: "2027-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 85,
						loyalty: 74,
						leadership: 58,
						temperament: 72,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 76,
					form: 6.3,
					fitness: 97,
					sharpness: 84,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 10,
						goals: 2,
						assists: 1,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 360,
					},
					reputation: 64,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 32,
					name: "Luke Harris",
					age: 19,
					nationality: "Wales",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 66,
					potential: 78,
					attributes: {
						pace: 72,
						shooting: 64,
						passing: 68,
						dribbling: 72,
						defending: 58,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 12000,
					contract_end: "2027-06-30",
					market_value: 5000000,
					release_clause: null,
					personality: {
						professionalism: 74,
						ambition: 86,
						loyalty: 76,
						leadership: 52,
						temperament: 70,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 75,
					form: 6.1,
					fitness: 98,
					sharpness: 82,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 6,
						goals: 0,
						assists: 1,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 180,
					},
					reputation: 61,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
			],
		},
		{
			id: 13,
			name: "Everton",
			founded: 1878,
			stadium: "Goodison Park",
			capacity: 39414,
			budget: 88000000,
			wage_budget_weekly: 780000,
			cash_reserves: 12000000,
			debt: 72000000,
			reputation: 74,
			fanbase_size: 1200000,
			attendance_rate: 0.97,
			commercial_power: 70,
			facilities: {
				training: 76,
				youth: 74,
				medical: 77,
				stadium_condition: 70,
			},
			manager: {
				name: "Sean Dyche",
				age: 53,
				nationality: "England",
				reputation: 74,
				preferred_formation: "4-4-2",
				tactical_style: "Direct",
				man_management: 80,
				tactical_knowledge: 75,
			},
			preferred_formation: "4-4-2",
			squad: [
				{
					number: 1,
					name: "Jordan Pickford",
					age: 30,
					nationality: "England",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 83,
					potential: 83,
					attributes: {
						pace: 52,
						shooting: 38,
						passing: 70,
						dribbling: 58,
						defending: 44,
						physical: 68,
						goalkeeping: {
							diving: 85,
							handling: 82,
							kicking: 78,
							reflexes: 86,
							speed: 54,
							positioning: 84,
						},
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 110000,
					contract_end: "2027-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 82,
						loyalty: 84,
						leadership: 86,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "star_player",
					morale: 80,
					form: 7.5,
					fitness: 94,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 31,
						goals: 0,
						assists: 1,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2790,
					},
					reputation: 82,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 31,
					name: "João Virgínia",
					age: 24,
					nationality: "Portugal",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 72,
					potential: 78,
					attributes: {
						pace: 56,
						shooting: 36,
						passing: 62,
						dribbling: 55,
						defending: 40,
						physical: 70,
						goalkeeping: {
							diving: 74,
							handling: 73,
							kicking: 68,
							reflexes: 75,
							speed: 57,
							positioning: 72,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 20000,
					contract_end: "2027-06-30",
					market_value: 5000000,
					release_clause: null,
					personality: {
						professionalism: 79,
						ambition: 82,
						loyalty: 76,
						leadership: 66,
						temperament: 78,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.09,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 73,
					form: 6.3,
					fitness: 97,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 3,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 270,
					},
					reputation: 68,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 6,
					name: "James Tarkowski",
					age: 31,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 80,
					potential: 80,
					attributes: {
						pace: 68,
						shooting: 50,
						passing: 66,
						dribbling: 60,
						defending: 84,
						physical: 84,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 75000,
					contract_end: "2026-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 76,
						loyalty: 84,
						leadership: 86,
						temperament: 82,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "key_player",
					morale: 82,
					form: 7.3,
					fitness: 93,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 3,
						assists: 1,
						yellow_cards: 8,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2700,
					},
					reputation: 78,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 5,
					name: "Michael Keane",
					age: 32,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 76,
					potential: 76,
					attributes: {
						pace: 64,
						shooting: 48,
						passing: 64,
						dribbling: 58,
						defending: 80,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 70000,
					contract_end: "2026-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 72,
						loyalty: 82,
						leadership: 80,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 78,
					form: 6.9,
					fitness: 91,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 2,
						assists: 0,
						yellow_cards: 6,
						red_cards: 1,
						clean_sheets: 7,
						minutes_played: 2280,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 32,
					name: "Jarrad Branthwaite",
					age: 22,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 78,
					potential: 88,
					attributes: {
						pace: 76,
						shooting: 46,
						passing: 68,
						dribbling: 64,
						defending: 81,
						physical: 82,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 45000,
					contract_end: "2027-06-30",
					market_value: 38000000,
					release_clause: 85000000,
					personality: {
						professionalism: 82,
						ambition: 86,
						loyalty: 80,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "key_player",
					morale: 84,
					form: 7.4,
					fitness: 96,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 1,
						assists: 2,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2610,
					},
					reputation: 76,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 15,
					name: "Ashley Young",
					age: 39,
					nationality: "England",
					position: "LB",
					preferred_positions: ["LB", "RB", "LW"],
					overall: 72,
					potential: 72,
					attributes: {
						pace: 66,
						shooting: 64,
						passing: 72,
						dribbling: 70,
						defending: 72,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 55000,
					contract_end: "2026-06-30",
					market_value: 1000000,
					release_clause: null,
					personality: {
						professionalism: 95,
						ambition: 70,
						loyalty: 85,
						leadership: 92,
						temperament: 86,
					},
					agent: {
						name: "Jason O'Toole",
						commission_rate: 0.06,
						negotiation_difficulty: 4,
					},
					squad_role: "rotation",
					morale: 80,
					form: 6.7,
					fitness: 88,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 1,
						assists: 3,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1620,
					},
					reputation: 76,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 19,
					name: "Vitalii Mykolenko",
					age: 25,
					nationality: "Ukraine",
					position: "LB",
					preferred_positions: ["LB", "LWB"],
					overall: 76,
					potential: 80,
					attributes: {
						pace: 78,
						shooting: 54,
						passing: 70,
						dribbling: 70,
						defending: 76,
						physical: 75,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2027-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 81,
						ambition: 79,
						loyalty: 78,
						leadership: 72,
						temperament: 76,
					},
					agent: {
						name: "Zoran Stojadinovic",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 79,
					form: 7.0,
					fitness: 94,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 0,
						assists: 4,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2340,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 23,
					name: "Seamus Coleman",
					age: 36,
					nationality: "Republic of Ireland",
					position: "RB",
					preferred_positions: ["RB"],
					overall: 74,
					potential: 74,
					attributes: {
						pace: 70,
						shooting: 60,
						passing: 72,
						dribbling: 70,
						defending: 76,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 65000,
					contract_end: "2026-06-30",
					market_value: 2000000,
					release_clause: null,
					personality: {
						professionalism: 94,
						ambition: 72,
						loyalty: 95,
						leadership: 90,
						temperament: 88,
					},
					agent: {
						name: "New Era Global Sports",
						commission_rate: 0.06,
						negotiation_difficulty: 4,
					},
					squad_role: "rotation",
					morale: 82,
					form: 6.8,
					fitness: 87,
					sharpness: 85,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 18,
						goals: 1,
						assists: 2,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1260,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 2,
					name: "Nathan Patterson",
					age: 23,
					nationality: "Scotland",
					position: "RB",
					preferred_positions: ["RB", "RWB"],
					overall: 74,
					potential: 82,
					attributes: {
						pace: 82,
						shooting: 58,
						passing: 68,
						dribbling: 70,
						defending: 72,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 38000,
					contract_end: "2028-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 84,
						loyalty: 76,
						leadership: 68,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 77,
					form: 6.9,
					fitness: 90,
					sharpness: 88,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 23,
						goals: 1,
						assists: 3,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1890,
					},
					reputation: 72,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 27,
					name: "Idrissa Gueye",
					age: 35,
					nationality: "Senegal",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 78,
					potential: 78,
					attributes: {
						pace: 72,
						shooting: 62,
						passing: 72,
						dribbling: 74,
						defending: 82,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 72000,
					contract_end: "2026-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 90,
						ambition: 74,
						loyalty: 80,
						leadership: 82,
						temperament: 84,
					},
					agent: {
						name: "Marco Kirdemir",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 91,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 2,
						assists: 1,
						yellow_cards: 9,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2520,
					},
					reputation: 79,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 37,
					name: "James Garner",
					age: 23,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 76,
					potential: 82,
					attributes: {
						pace: 68,
						shooting: 70,
						passing: 78,
						dribbling: 73,
						defending: 74,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 50000,
					contract_end: "2027-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 83,
						loyalty: 78,
						leadership: 74,
						temperament: 80,
					},
					agent: {
						name: "ICM Stellar Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 3,
						assists: 5,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2400,
					},
					reputation: 74,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 16,
					name: "Abdoulaye Doucouré",
					age: 31,
					nationality: "France",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 77,
					potential: 77,
					attributes: {
						pace: 74,
						shooting: 68,
						passing: 72,
						dribbling: 72,
						defending: 76,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 68000,
					contract_end: "2026-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 75,
						loyalty: 79,
						leadership: 78,
						temperament: 76,
					},
					agent: {
						name: "Bertrand Kamseu",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 79,
					form: 7.0,
					fitness: 93,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 5,
						assists: 3,
						yellow_cards: 7,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2280,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 8,
					name: "Amadou Onana",
					age: 23,
					nationality: "Belgium",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 79,
					potential: 86,
					attributes: {
						pace: 76,
						shooting: 68,
						passing: 73,
						dribbling: 72,
						defending: 80,
						physical: 86,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 62000,
					contract_end: "2027-06-30",
					market_value: 42000000,
					release_clause: 90000000,
					personality: {
						professionalism: 80,
						ambition: 88,
						loyalty: 72,
						leadership: 76,
						temperament: 72,
					},
					agent: {
						name: "ICM Stellar Sports",
						commission_rate: 0.10,
						negotiation_difficulty: 7,
					},
					squad_role: "key_player",
					morale: 82,
					form: 7.3,
					fitness: 96,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 4,
						assists: 2,
						yellow_cards: 10,
						red_cards: 1,
						clean_sheets: 9,
						minutes_played: 2610,
					},
					reputation: 77,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 10,
					name: "Jack Harrison",
					age: 27,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 77,
					potential: 78,
					attributes: {
						pace: 81,
						shooting: 74,
						passing: 74,
						dribbling: 79,
						defending: 52,
						physical: 70,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 58000,
					contract_end: "2026-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 78,
						loyalty: 76,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 78,
					form: 7.0,
					fitness: 94,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 6,
						assists: 7,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2340,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: true,
					loan: {
						parent_club: "Leeds United",
						loan_end: "2026-06-30",
						buy_option: 25000000,
						loan_fee: 3000000,
					},
				},
				{
					number: 7,
					name: "Dwight McNeil",
					age: 24,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "RW", "CAM"],
					overall: 76,
					potential: 81,
					attributes: {
						pace: 76,
						shooting: 72,
						passing: 78,
						dribbling: 78,
						defending: 50,
						physical: 68,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 52000,
					contract_end: "2028-06-30",
					market_value: 26000000,
					release_clause: null,
					personality: {
						professionalism: 81,
						ambition: 80,
						loyalty: 78,
						leadership: 70,
						temperament: 79,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 95,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 7,
						assists: 9,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2490,
					},
					reputation: 74,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 11,
					name: "Arnaut Danjuma",
					age: 27,
					nationality: "Netherlands",
					position: "LW",
					preferred_positions: ["LW", "RW", "ST"],
					overall: 77,
					potential: 78,
					attributes: {
						pace: 84,
						shooting: 76,
						passing: 72,
						dribbling: 81,
						defending: 42,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 62000,
					contract_end: "2027-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 80,
						loyalty: 74,
						leadership: 68,
						temperament: 72,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.8,
					fitness: 92,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 5,
						assists: 4,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1560,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 17,
					name: "Iliman Ndiaye",
					age: 24,
					nationality: "Senegal",
					position: "CAM",
					preferred_positions: ["CAM", "LW", "ST"],
					overall: 76,
					potential: 82,
					attributes: {
						pace: 82,
						shooting: 72,
						passing: 74,
						dribbling: 82,
						defending: 46,
						physical: 66,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2029-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 84,
						loyalty: 76,
						leadership: 68,
						temperament: 74,
					},
					agent: {
						name: "Jacques-Etienne Lastere",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 96,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 8,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 2160,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 14,
					name: "Dominic Calvert-Lewin",
					age: 27,
					nationality: "England",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 79,
					potential: 81,
					attributes: {
						pace: 78,
						shooting: 80,
						passing: 68,
						dribbling: 72,
						defending: 52,
						physical: 84,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 90000,
					contract_end: "2027-06-30",
					market_value: 32000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 80,
						loyalty: 80,
						leadership: 78,
						temperament: 76,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "key_player",
					morale: 79,
					form: 7.1,
					fitness: 88,
					sharpness: 87,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 11,
						assists: 3,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1920,
					},
					reputation: 77,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 9,
					name: "Beto",
					age: 26,
					nationality: "Portugal",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 75,
					potential: 79,
					attributes: {
						pace: 76,
						shooting: 76,
						passing: 62,
						dribbling: 68,
						defending: 44,
						physical: 82,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 55000,
					contract_end: "2028-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 79,
						ambition: 81,
						loyalty: 76,
						leadership: 70,
						temperament: 74,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 94,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 8,
						assists: 2,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1680,
					},
					reputation: 73,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 20,
					name: "Youssef Chermiti",
					age: 20,
					nationality: "Portugal",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 70,
					potential: 82,
					attributes: {
						pace: 78,
						shooting: 72,
						passing: 64,
						dribbling: 70,
						defending: 38,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "medium_medium",
					salary_weekly: 28000,
					contract_end: "2028-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 86,
						loyalty: 78,
						leadership: 60,
						temperament: 72,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.10,
						negotiation_difficulty: 6,
					},
					squad_role: "prospect",
					morale: 78,
					form: 6.5,
					fitness: 97,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 16,
						goals: 3,
						assists: 1,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 720,
					},
					reputation: 68,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 18,
					name: "Jesper Lindstrøm",
					age: 24,
					nationality: "Denmark",
					position: "RW",
					preferred_positions: ["RW", "CAM", "LW"],
					overall: 77,
					potential: 82,
					attributes: {
						pace: 82,
						shooting: 74,
						passing: 76,
						dribbling: 81,
						defending: 46,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 58000,
					contract_end: "2026-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 83,
						loyalty: 74,
						leadership: 68,
						temperament: 76,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.9,
					fitness: 93,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 23,
						goals: 5,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1620,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: true,
					loan: {
						parent_club: "Napoli",
						loan_end: "2026-06-30",
						buy_option: 30000000,
						loan_fee: 4000000,
					},
				},
				{
					number: 29,
					name: "Tyler Onyango",
					age: 21,
					nationality: "England",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 68,
					potential: 78,
					attributes: {
						pace: 70,
						shooting: 62,
						passing: 68,
						dribbling: 66,
						defending: 72,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 15000,
					contract_end: "2027-06-30",
					market_value: 6000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 84,
						loyalty: 82,
						leadership: 62,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 76,
					form: 6.3,
					fitness: 98,
					sharpness: 84,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 8,
						goals: 0,
						assists: 1,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 360,
					},
					reputation: 64,
					homegrown_status: "homegrown_club",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 42,
					name: "Roman Dixon",
					age: 20,
					nationality: "England",
					position: "RB",
					preferred_positions: ["RB"],
					overall: 64,
					potential: 76,
					attributes: {
						pace: 78,
						shooting: 52,
						passing: 62,
						dribbling: 64,
						defending: 66,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 8000,
					contract_end: "2027-06-30",
					market_value: 3000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 82,
						loyalty: 85,
						leadership: 55,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 4,
					},
					squad_role: "prospect",
					morale: 74,
					form: 6.0,
					fitness: 98,
					sharpness: 80,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 4,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 0,
						minutes_played: 120,
					},
					reputation: 60,
					homegrown_status: "homegrown_club",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
			],
		},
		{
			id: 14,
			name: "Wolverhampton Wanderers",
			founded: 1877,
			stadium: "Molineux Stadium",
			capacity: 32050,
			budget: 85000000,
			wage_budget_weekly: 750000,
			cash_reserves: 14000000,
			debt: 58000000,
			reputation: 72,
			fanbase_size: 920000,
			attendance_rate: 0.96,
			commercial_power: 67,
			facilities: {
				training: 75,
				youth: 72,
				medical: 76,
				stadium_condition: 78,
			},
			manager: {
				name: "Gary O'Neil",
				age: 41,
				nationality: "England",
				reputation: 70,
				preferred_formation: "3-5-2",
				tactical_style: "Balanced",
				man_management: 74,
				tactical_knowledge: 72,
			},
			preferred_formation: "3-5-2",
			squad: [
				{
					number: 1,
					name: "José Sá",
					age: 31,
					nationality: "Portugal",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 80,
					potential: 80,
					attributes: {
						pace: 53,
						shooting: 40,
						passing: 66,
						dribbling: 58,
						defending: 44,
						physical: 71,
						goalkeeping: {
							diving: 82,
							handling: 80,
							kicking: 72,
							reflexes: 83,
							speed: 54,
							positioning: 80,
						},
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 70000,
					contract_end: "2027-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 85,
						ambition: 76,
						loyalty: 79,
						leadership: 78,
						temperament: 82,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.2,
					fitness: 93,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 0,
						assists: 0,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2610,
					},
					reputation: 78,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 25,
					name: "Daniel Bentley",
					age: 31,
					nationality: "England",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 72,
					potential: 72,
					attributes: {
						pace: 54,
						shooting: 36,
						passing: 62,
						dribbling: 56,
						defending: 42,
						physical: 69,
						goalkeeping: {
							diving: 74,
							handling: 73,
							kicking: 68,
							reflexes: 75,
							speed: 55,
							positioning: 73,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 22000,
					contract_end: "2026-06-30",
					market_value: 3000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 70,
						loyalty: 80,
						leadership: 74,
						temperament: 81,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 4,
					},
					squad_role: "backup",
					morale: 75,
					form: 6.4,
					fitness: 96,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 5,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 450,
					},
					reputation: 70,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 4,
					name: "Santiago Bueno",
					age: 25,
					nationality: "Uruguay",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 76,
					potential: 81,
					attributes: {
						pace: 74,
						shooting: 46,
						passing: 68,
						dribbling: 62,
						defending: 79,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 45000,
					contract_end: "2028-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 82,
						loyalty: 76,
						leadership: 74,
						temperament: 78,
					},
					agent: {
						name: "Renato Bittar",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 79,
					form: 7.0,
					fitness: 95,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 2,
						assists: 1,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2340,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 15,
					name: "Craig Dawson",
					age: 34,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 76,
					potential: 76,
					attributes: {
						pace: 64,
						shooting: 50,
						passing: 64,
						dribbling: 58,
						defending: 81,
						physical: 82,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 52000,
					contract_end: "2026-06-30",
					market_value: 6000000,
					release_clause: null,
					personality: {
						professionalism: 90,
						ambition: 72,
						loyalty: 84,
						leadership: 85,
						temperament: 84,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.1,
					fitness: 91,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 3,
						assists: 0,
						yellow_cards: 7,
						red_cards: 1,
						clean_sheets: 8,
						minutes_played: 2460,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 23,
					name: "Max Kilman",
					age: 27,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 79,
					potential: 82,
					attributes: {
						pace: 72,
						shooting: 48,
						passing: 70,
						dribbling: 64,
						defending: 82,
						physical: 80,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 65000,
					contract_end: "2027-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 80,
						loyalty: 82,
						leadership: 80,
						temperament: 82,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "key_player",
					morale: 83,
					form: 7.3,
					fitness: 94,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 2,
						assists: 2,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2700,
					},
					reputation: 77,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 24,
					name: "Toti Gomes",
					age: 25,
					nationality: "Portugal",
					position: "CB",
					preferred_positions: ["CB", "LB"],
					overall: 75,
					potential: 79,
					attributes: {
						pace: 76,
						shooting: 44,
						passing: 66,
						dribbling: 64,
						defending: 77,
						physical: 76,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 42000,
					contract_end: "2028-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 81,
						ambition: 78,
						loyalty: 80,
						leadership: 70,
						temperament: 79,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 94,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 1,
						assists: 1,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1800,
					},
					reputation: 73,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 2,
					name: "Nélson Semedo",
					age: 31,
					nationality: "Portugal",
					position: "RWB",
					preferred_positions: ["RWB", "RB"],
					overall: 78,
					potential: 78,
					attributes: {
						pace: 86,
						shooting: 58,
						passing: 72,
						dribbling: 76,
						defending: 76,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 72000,
					contract_end: "2027-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 75,
						loyalty: 78,
						leadership: 76,
						temperament: 80,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 93,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 1,
						assists: 5,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2460,
					},
					reputation: 77,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 3,
					name: "Rayan Aït-Nouri",
					age: 23,
					nationality: "France",
					position: "LWB",
					preferred_positions: ["LWB", "LB"],
					overall: 77,
					potential: 84,
					attributes: {
						pace: 86,
						shooting: 62,
						passing: 72,
						dribbling: 78,
						defending: 74,
						physical: 74,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 50000,
					contract_end: "2028-06-30",
					market_value: 32000000,
					release_clause: null,
					personality: {
						professionalism: 79,
						ambition: 84,
						loyalty: 76,
						leadership: 68,
						temperament: 75,
					},
					agent: {
						name: "Jacques-Etienne Lastere",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "key_player",
					morale: 82,
					form: 7.3,
					fitness: 96,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 3,
						assists: 7,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2520,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 5,
					name: "Mario Lemina",
					age: 31,
					nationality: "Gabon",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 78,
					potential: 78,
					attributes: {
						pace: 72,
						shooting: 68,
						passing: 74,
						dribbling: 74,
						defending: 79,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 68000,
					contract_end: "2027-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 76,
						loyalty: 78,
						leadership: 84,
						temperament: 76,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "key_player",
					morale: 82,
					form: 7.2,
					fitness: 92,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 3,
						assists: 2,
						yellow_cards: 9,
						red_cards: 1,
						clean_sheets: 8,
						minutes_played: 2520,
					},
					reputation: 77,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 8,
					name: "João Gomes",
					age: 23,
					nationality: "Brazil",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 78,
					potential: 84,
					attributes: {
						pace: 74,
						shooting: 66,
						passing: 72,
						dribbling: 74,
						defending: 80,
						physical: 82,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 58000,
					contract_end: "2028-06-30",
					market_value: 35000000,
					release_clause: null,
					personality: {
						professionalism: 81,
						ambition: 84,
						loyalty: 76,
						leadership: 74,
						temperament: 74,
					},
					agent: {
						name: "Giuliano Bertolucci",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "key_player",
					morale: 83,
					form: 7.4,
					fitness: 96,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 4,
						assists: 3,
						yellow_cards: 10,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2640,
					},
					reputation: 77,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 20,
					name: "Tommy Doyle",
					age: 23,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 73,
					potential: 80,
					attributes: {
						pace: 68,
						shooting: 68,
						passing: 76,
						dribbling: 72,
						defending: 70,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 35000,
					contract_end: "2028-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 82,
						loyalty: 76,
						leadership: 70,
						temperament: 78,
					},
					agent: {
						name: "ICM Stellar Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 95,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 2,
						assists: 4,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1800,
					},
					reputation: 71,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 27,
					name: "Jean-Ricner Bellegarde",
					age: 26,
					nationality: "France",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 75,
					potential: 78,
					attributes: {
						pace: 74,
						shooting: 70,
						passing: 74,
						dribbling: 76,
						defending: 66,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 42000,
					contract_end: "2028-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 78,
						loyalty: 76,
						leadership: 70,
						temperament: 77,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.7,
					fitness: 94,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 3,
						assists: 3,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1620,
					},
					reputation: 73,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 10,
					name: "Daniel Podence",
					age: 28,
					nationality: "Portugal",
					position: "LW",
					preferred_positions: ["LW", "RW", "CAM"],
					overall: 76,
					potential: 76,
					attributes: {
						pace: 82,
						shooting: 72,
						passing: 74,
						dribbling: 82,
						defending: 48,
						physical: 62,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 62000,
					contract_end: "2026-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 76,
						loyalty: 78,
						leadership: 68,
						temperament: 72,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 78,
					form: 7.0,
					fitness: 92,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 6,
						assists: 5,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 2040,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 11,
					name: "Hwang Hee-chan",
					age: 28,
					nationality: "South Korea",
					position: "ST",
					preferred_positions: ["ST", "LW", "RW"],
					overall: 78,
					potential: 79,
					attributes: {
						pace: 88,
						shooting: 78,
						passing: 70,
						dribbling: 78,
						defending: 46,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 68000,
					contract_end: "2028-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 80,
						loyalty: 82,
						leadership: 74,
						temperament: 84,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "key_player",
					morale: 84,
					form: 7.5,
					fitness: 95,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 15,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2520,
					},
					reputation: 77,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 7,
					name: "Pedro Neto",
					age: 24,
					nationality: "Portugal",
					position: "RW",
					preferred_positions: ["RW", "LW"],
					overall: 79,
					potential: 85,
					attributes: {
						pace: 88,
						shooting: 74,
						passing: 76,
						dribbling: 84,
						defending: 48,
						physical: 70,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 72000,
					contract_end: "2027-06-30",
					market_value: 45000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 86,
						loyalty: 76,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.10,
						negotiation_difficulty: 8,
					},
					squad_role: "star_player",
					morale: 85,
					form: 7.7,
					fitness: 90,
					sharpness: 91,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 10,
						assists: 9,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 2250,
					},
					reputation: 78,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 21,
					name: "Pablo Sarabia",
					age: 32,
					nationality: "Spain",
					position: "RW",
					preferred_positions: ["RW", "CAM", "LW"],
					overall: 77,
					potential: 77,
					attributes: {
						pace: 76,
						shooting: 78,
						passing: 80,
						dribbling: 80,
						defending: 50,
						physical: 66,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 68000,
					contract_end: "2026-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 76,
						loyalty: 78,
						leadership: 80,
						temperament: 82,
					},
					agent: {
						name: "Promoesport",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 79,
					form: 6.9,
					fitness: 91,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 25,
						goals: 7,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1800,
					},
					reputation: 78,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 26,
					name: "Carlos Forbs",
					age: 20,
					nationality: "Netherlands",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 71,
					potential: 82,
					attributes: {
						pace: 86,
						shooting: 68,
						passing: 66,
						dribbling: 78,
						defending: 40,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 28000,
					contract_end: "2029-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 86,
						loyalty: 74,
						leadership: 58,
						temperament: 70,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "prospect",
					morale: 77,
					form: 6.6,
					fitness: 97,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 18,
						goals: 3,
						assists: 2,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 3,
						minutes_played: 900,
					},
					reputation: 68,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 9,
					name: "Matheus Cunha",
					age: 25,
					nationality: "Brazil",
					position: "ST",
					preferred_positions: ["ST", "CAM"],
					overall: 80,
					potential: 84,
					attributes: {
						pace: 80,
						shooting: 80,
						passing: 78,
						dribbling: 82,
						defending: 48,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 82000,
					contract_end: "2027-06-30",
					market_value: 48000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 84,
						loyalty: 76,
						leadership: 76,
						temperament: 74,
					},
					agent: {
						name: "Giuliano Bertolucci",
						commission_rate: 0.10,
						negotiation_difficulty: 8,
					},
					squad_role: "star_player",
					morale: 86,
					form: 7.8,
					fitness: 94,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 31,
						goals: 18,
						assists: 8,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2700,
					},
					reputation: 79,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 12,
					name: "Matheus Fernandes",
					age: 25,
					nationality: "Brazil",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 72,
					potential: 77,
					attributes: {
						pace: 70,
						shooting: 64,
						passing: 72,
						dribbling: 70,
						defending: 72,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 32000,
					contract_end: "2027-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 79,
						ambition: 76,
						loyalty: 78,
						leadership: 66,
						temperament: 76,
					},
					agent: {
						name: "Bertolucci International",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 74,
					form: 6.5,
					fitness: 94,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 16,
						goals: 1,
						assists: 2,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 3,
						minutes_played: 960,
					},
					reputation: 70,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 17,
					name: "Gonçalo Guedes",
					age: 27,
					nationality: "Portugal",
					position: "LW",
					preferred_positions: ["LW", "RW", "ST"],
					overall: 76,
					potential: 77,
					attributes: {
						pace: 84,
						shooting: 76,
						passing: 72,
						dribbling: 80,
						defending: 44,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 65000,
					contract_end: "2026-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 78,
						loyalty: 74,
						leadership: 68,
						temperament: 70,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 75,
					form: 6.6,
					fitness: 93,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 20,
						goals: 4,
						assists: 3,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1260,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 29,
					name: "Fábio Silva",
					age: 22,
					nationality: "Portugal",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 71,
					potential: 80,
					attributes: {
						pace: 78,
						shooting: 72,
						passing: 66,
						dribbling: 72,
						defending: 40,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "medium_medium",
					salary_weekly: 38000,
					contract_end: "2027-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 77,
						ambition: 84,
						loyalty: 76,
						leadership: 62,
						temperament: 74,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.10,
						negotiation_difficulty: 6,
					},
					squad_role: "backup",
					morale: 73,
					form: 6.3,
					fitness: 95,
					sharpness: 84,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 14,
						goals: 2,
						assists: 1,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 540,
					},
					reputation: 70,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 63,
					name: "Enso González",
					age: 19,
					nationality: "Paraguay",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 67,
					potential: 80,
					attributes: {
						pace: 72,
						shooting: 66,
						passing: 70,
						dribbling: 74,
						defending: 60,
						physical: 66,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 15000,
					contract_end: "2028-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 74,
						ambition: 88,
						loyalty: 76,
						leadership: 56,
						temperament: 72,
					},
					agent: {
						name: "Renato Bittar",
						commission_rate: 0.09,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 76,
					form: 6.2,
					fitness: 98,
					sharpness: 82,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 8,
						goals: 0,
						assists: 1,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 270,
					},
					reputation: 63,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 64,
					name: "Ty Barnett",
					age: 18,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 62,
					potential: 77,
					attributes: {
						pace: 72,
						shooting: 40,
						passing: 60,
						dribbling: 58,
						defending: 68,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 6000,
					contract_end: "2027-06-30",
					market_value: 2000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 84,
						loyalty: 82,
						leadership: 52,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 4,
					},
					squad_role: "prospect",
					morale: 74,
					form: 5.9,
					fitness: 98,
					sharpness: 78,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 2,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 0,
						minutes_played: 60,
					},
					reputation: 58,
					homegrown_status: "homegrown_club",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
			],
		},
		{
			id: 15,
			name: "Crystal Palace",
			founded: 1905,
			stadium: "Selhurst Park",
			capacity: 25486,
			budget: 82000000,
			wage_budget_weekly: 720000,
			cash_reserves: 15000000,
			debt: 48000000,
			reputation: 71,
			fanbase_size: 850000,
			attendance_rate: 0.97,
			commercial_power: 65,
			facilities: {
				training: 73,
				youth: 71,
				medical: 74,
				stadium_condition: 72,
			},
			manager: {
				name: "Oliver Glasner",
				age: 50,
				nationality: "Austria",
				reputation: 75,
				preferred_formation: "3-4-2-1",
				tactical_style: "Pressing",
				man_management: 76,
				tactical_knowledge: 78,
			},
			preferred_formation: "3-4-2-1",
			squad: [
				{
					number: 1,
					name: "Dean Henderson",
					age: 27,
					nationality: "England",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 80,
					potential: 82,
					attributes: {
						pace: 56,
						shooting: 42,
						passing: 68,
						dribbling: 60,
						defending: 46,
						physical: 72,
						goalkeeping: {
							diving: 82,
							handling: 81,
							kicking: 74,
							reflexes: 83,
							speed: 57,
							positioning: 80,
						},
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 78000,
					contract_end: "2027-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 84,
						loyalty: 74,
						leadership: 78,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.3,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 0,
						assists: 1,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2700,
					},
					reputation: 79,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 30,
					name: "Matt Turner",
					age: 30,
					nationality: "USA",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 73,
					potential: 74,
					attributes: {
						pace: 54,
						shooting: 38,
						passing: 64,
						dribbling: 56,
						defending: 42,
						physical: 70,
						goalkeeping: {
							diving: 75,
							handling: 74,
							kicking: 70,
							reflexes: 76,
							speed: 55,
							positioning: 74,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 28000,
					contract_end: "2026-06-30",
					market_value: 6000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 76,
						loyalty: 78,
						leadership: 72,
						temperament: 80,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 74,
					form: 6.4,
					fitness: 96,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 4,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 360,
					},
					reputation: 71,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 6,
					name: "Marc Guéhi",
					age: 24,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 81,
					potential: 88,
					attributes: {
						pace: 76,
						shooting: 50,
						passing: 72,
						dribbling: 68,
						defending: 84,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 70000,
					contract_end: "2026-06-30",
					market_value: 48000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 88,
						loyalty: 76,
						leadership: 84,
						temperament: 84,
					},
					agent: {
						name: "ICM Stellar Sports",
						commission_rate: 0.09,
						negotiation_difficulty: 8,
					},
					squad_role: "star_player",
					morale: 85,
					form: 7.7,
					fitness: 95,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 31,
						goals: 2,
						assists: 1,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2790,
					},
					reputation: 80,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 5,
					name: "Maxence Lacroix",
					age: 24,
					nationality: "France",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 78,
					potential: 84,
					attributes: {
						pace: 82,
						shooting: 46,
						passing: 68,
						dribbling: 64,
						defending: 81,
						physical: 79,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 52000,
					contract_end: "2029-06-30",
					market_value: 32000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 84,
						loyalty: 75,
						leadership: 72,
						temperament: 76,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.2,
					fitness: 96,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 1,
						assists: 0,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2520,
					},
					reputation: 77,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 27,
					name: "Chris Richards",
					age: 24,
					nationality: "USA",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 75,
					potential: 80,
					attributes: {
						pace: 78,
						shooting: 44,
						passing: 66,
						dribbling: 62,
						defending: 77,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 45000,
					contract_end: "2028-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 80,
						loyalty: 76,
						leadership: 70,
						temperament: 78,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 94,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 1,
						assists: 0,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1800,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 16,
					name: "Joachim Andersen",
					age: 28,
					nationality: "Denmark",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 78,
					potential: 79,
					attributes: {
						pace: 70,
						shooting: 52,
						passing: 74,
						dribbling: 64,
						defending: 81,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 62000,
					contract_end: "2026-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 85,
						ambition: 76,
						loyalty: 80,
						leadership: 80,
						temperament: 82,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 93,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 2,
						assists: 1,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2280,
					},
					reputation: 77,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 2,
					name: "Daniel Muñoz",
					age: 28,
					nationality: "Colombia",
					position: "RWB",
					preferred_positions: ["RWB", "RB"],
					overall: 76,
					potential: 78,
					attributes: {
						pace: 84,
						shooting: 62,
						passing: 70,
						dribbling: 72,
						defending: 74,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 48000,
					contract_end: "2028-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 78,
						loyalty: 76,
						leadership: 74,
						temperament: 76,
					},
					agent: {
						name: "You First Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 96,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 3,
						assists: 5,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2400,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 3,
					name: "Tyrick Mitchell",
					age: 25,
					nationality: "England",
					position: "LWB",
					preferred_positions: ["LWB", "LB"],
					overall: 76,
					potential: 80,
					attributes: {
						pace: 82,
						shooting: 56,
						passing: 70,
						dribbling: 72,
						defending: 76,
						physical: 74,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 50000,
					contract_end: "2026-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 80,
						loyalty: 82,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 95,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 1,
						assists: 4,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2550,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 8,
					name: "Jefferson Lerma",
					age: 30,
					nationality: "Colombia",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 77,
					potential: 77,
					attributes: {
						pace: 70,
						shooting: 66,
						passing: 72,
						dribbling: 72,
						defending: 79,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 62000,
					contract_end: "2027-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 74,
						loyalty: 78,
						leadership: 80,
						temperament: 72,
					},
					agent: {
						name: "You First Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 79,
					form: 7.0,
					fitness: 93,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 3,
						assists: 2,
						yellow_cards: 8,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2400,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 19,
					name: "Will Hughes",
					age: 29,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 75,
					potential: 75,
					attributes: {
						pace: 70,
						shooting: 68,
						passing: 76,
						dribbling: 74,
						defending: 72,
						physical: 70,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 52000,
					contract_end: "2026-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 74,
						loyalty: 80,
						leadership: 76,
						temperament: 80,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 92,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 2,
						assists: 4,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1800,
					},
					reputation: 74,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 28,
					name: "Cheick Doucouré",
					age: 24,
					nationality: "Mali",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 75,
					potential: 81,
					attributes: {
						pace: 74,
						shooting: 64,
						passing: 70,
						dribbling: 70,
						defending: 78,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 45000,
					contract_end: "2027-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 82,
						loyalty: 76,
						leadership: 72,
						temperament: 76,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 7.0,
					fitness: 95,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 25,
						goals: 1,
						assists: 2,
						yellow_cards: 7,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 1950,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 10,
					name: "Eberechi Eze",
					age: 26,
					nationality: "England",
					position: "CAM",
					preferred_positions: ["CAM", "LW"],
					overall: 82,
					potential: 86,
					attributes: {
						pace: 80,
						shooting: 78,
						passing: 82,
						dribbling: 86,
						defending: 52,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 5,
					work_rate: "medium_medium",
					salary_weekly: 88000,
					contract_end: "2027-06-30",
					market_value: 55000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 86,
						loyalty: 76,
						leadership: 76,
						temperament: 78,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.10,
						negotiation_difficulty: 8,
					},
					squad_role: "star_player",
					morale: 87,
					form: 7.9,
					fitness: 94,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 12,
						assists: 10,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2580,
					},
					reputation: 81,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 18,
					name: "Daichi Kamada",
					age: 28,
					nationality: "Japan",
					position: "CAM",
					preferred_positions: ["CAM", "CM"],
					overall: 77,
					potential: 78,
					attributes: {
						pace: 74,
						shooting: 76,
						passing: 78,
						dribbling: 78,
						defending: 60,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 58000,
					contract_end: "2027-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 78,
						loyalty: 80,
						leadership: 74,
						temperament: 82,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 79,
					form: 7.0,
					fitness: 93,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 6,
						assists: 7,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 2040,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 7,
					name: "Michael Olise",
					age: 22,
					nationality: "France",
					position: "RW",
					preferred_positions: ["RW", "CAM", "LW"],
					overall: 81,
					potential: 88,
					attributes: {
						pace: 82,
						shooting: 78,
						passing: 80,
						dribbling: 86,
						defending: 48,
						physical: 68,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 5,
					work_rate: "medium_medium",
					salary_weekly: 75000,
					contract_end: "2027-06-30",
					market_value: 58000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 88,
						loyalty: 74,
						leadership: 70,
						temperament: 76,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.10,
						negotiation_difficulty: 8,
					},
					squad_role: "star_player",
					morale: 86,
					form: 7.8,
					fitness: 92,
					sharpness: 93,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 11,
						assists: 12,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2340,
					},
					reputation: 80,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 11,
					name: "Ismaïla Sarr",
					age: 26,
					nationality: "Senegal",
					position: "RW",
					preferred_positions: ["RW", "LW", "ST"],
					overall: 77,
					potential: 80,
					attributes: {
						pace: 92,
						shooting: 74,
						passing: 70,
						dribbling: 78,
						defending: 46,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 62000,
					contract_end: "2027-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 82,
						loyalty: 76,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 95,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 8,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 2250,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 14,
					name: "Jean-Philippe Mateta",
					age: 27,
					nationality: "France",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 78,
					potential: 80,
					attributes: {
						pace: 76,
						shooting: 80,
						passing: 68,
						dribbling: 72,
						defending: 48,
						physical: 84,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 68000,
					contract_end: "2027-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 78,
						loyalty: 78,
						leadership: 76,
						temperament: 76,
					},
					agent: {
						name: "L'Unique Management",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "key_player",
					morale: 83,
					form: 7.4,
					fitness: 94,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 16,
						assists: 4,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2520,
					},
					reputation: 77,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 9,
					name: "Jordan Ayew",
					age: 33,
					nationality: "Ghana",
					position: "ST",
					preferred_positions: ["ST", "RW", "LW"],
					overall: 75,
					potential: 75,
					attributes: {
						pace: 76,
						shooting: 74,
						passing: 70,
						dribbling: 76,
						defending: 50,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 65000,
					contract_end: "2026-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 72,
						loyalty: 84,
						leadership: 80,
						temperament: 82,
					},
					agent: {
						name: "International Sports Management",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.8,
					fitness: 90,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 6,
						assists: 3,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1560,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 22,
					name: "Odsonne Édouard",
					age: 26,
					nationality: "France",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 76,
					potential: 78,
					attributes: {
						pace: 78,
						shooting: 78,
						passing: 70,
						dribbling: 76,
						defending: 44,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 70000,
					contract_end: "2027-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 78,
						loyalty: 74,
						leadership: 68,
						temperament: 72,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 75,
					form: 6.7,
					fitness: 93,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 20,
						goals: 5,
						assists: 2,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1200,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 49,
					name: "Jeffrey Schlupp",
					age: 31,
					nationality: "Ghana",
					position: "LW",
					preferred_positions: ["LW", "LB", "CM"],
					overall: 73,
					potential: 73,
					attributes: {
						pace: 78,
						shooting: 66,
						passing: 70,
						dribbling: 74,
						defending: 66,
						physical: 74,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 55000,
					contract_end: "2026-06-30",
					market_value: 6000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 70,
						loyalty: 88,
						leadership: 78,
						temperament: 82,
					},
					agent: {
						name: "ICM Stellar Sports",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.6,
					fitness: 89,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 18,
						goals: 2,
						assists: 2,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 3,
						minutes_played: 900,
					},
					reputation: 73,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 15,
					name: "Jesurun Rak-Sakyi",
					age: 21,
					nationality: "England",
					position: "RW",
					preferred_positions: ["RW", "LW"],
					overall: 70,
					potential: 82,
					attributes: {
						pace: 84,
						shooting: 68,
						passing: 68,
						dribbling: 78,
						defending: 42,
						physical: 64,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 22000,
					contract_end: "2027-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 86,
						loyalty: 78,
						leadership: 60,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "prospect",
					morale: 77,
					form: 6.5,
					fitness: 97,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 15,
						goals: 2,
						assists: 3,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 720,
					},
					reputation: 67,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 20,
					name: "Adam Wharton",
					age: 20,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 72,
					potential: 84,
					attributes: {
						pace: 68,
						shooting: 66,
						passing: 76,
						dribbling: 72,
						defending: 70,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 28000,
					contract_end: "2029-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 88,
						loyalty: 80,
						leadership: 65,
						temperament: 80,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 80,
					form: 7.0,
					fitness: 97,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 23,
						goals: 1,
						assists: 3,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1620,
					},
					reputation: 70,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 29,
					name: "Franco Umeh-Chibueze",
					age: 18,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 64,
					potential: 78,
					attributes: {
						pace: 72,
						shooting: 62,
						passing: 66,
						dribbling: 70,
						defending: 58,
						physical: 62,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 8000,
					contract_end: "2027-06-30",
					market_value: 4000000,
					release_clause: null,
					personality: {
						professionalism: 74,
						ambition: 86,
						loyalty: 82,
						leadership: 50,
						temperament: 72,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 76,
					form: 6.1,
					fitness: 98,
					sharpness: 82,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 6,
						goals: 0,
						assists: 1,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 180,
					},
					reputation: 60,
					homegrown_status: "homegrown_club",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 58,
					name: "Malcolm Ebiowei",
					age: 20,
					nationality: "England",
					position: "RW",
					preferred_positions: ["RW", "LW"],
					overall: 66,
					potential: 77,
					attributes: {
						pace: 82,
						shooting: 64,
						passing: 64,
						dribbling: 74,
						defending: 40,
						physical: 62,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 12000,
					contract_end: "2027-06-30",
					market_value: 5000000,
					release_clause: null,
					personality: {
						professionalism: 74,
						ambition: 82,
						loyalty: 76,
						leadership: 54,
						temperament: 70,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 74,
					form: 6.0,
					fitness: 97,
					sharpness: 80,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 8,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 240,
					},
					reputation: 62,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
			],
		},
		{
			id: 16,
			name: "AFC Bournemouth",
			founded: 1899,
			stadium: "Vitality Stadium",
			capacity: 11364,
			budget: 78000000,
			wage_budget_weekly: 680000,
			cash_reserves: 14000000,
			debt: 42000000,
			reputation: 70,
			fanbase_size: 720000,
			attendance_rate: 0.99,
			commercial_power: 63,
			facilities: {
				training: 72,
				youth: 69,
				medical: 73,
				stadium_condition: 75,
			},
			manager: {
				name: "Andoni Iraola",
				age: 42,
				nationality: "Spain",
				reputation: 74,
				preferred_formation: "4-2-3-1",
				tactical_style: "Pressing",
				man_management: 75,
				tactical_knowledge: 77,
			},
			preferred_formation: "4-2-3-1",
			squad: [
				{
					number: 13,
					name: "Neto",
					age: 35,
					nationality: "Brazil",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 79,
					potential: 79,
					attributes: {
						pace: 52,
						shooting: 38,
						passing: 64,
						dribbling: 56,
						defending: 44,
						physical: 70,
						goalkeeping: {
							diving: 80,
							handling: 79,
							kicking: 68,
							reflexes: 81,
							speed: 53,
							positioning: 79,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 68000,
					contract_end: "2026-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 70,
						loyalty: 82,
						leadership: 84,
						temperament: 86,
					},
					agent: {
						name: "Giuliano Bertolucci",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 92,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 0,
						assists: 0,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2610,
					},
					reputation: 78,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 1,
					name: "Mark Travers",
					age: 25,
					nationality: "Republic of Ireland",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 71,
					potential: 76,
					attributes: {
						pace: 54,
						shooting: 36,
						passing: 60,
						dribbling: 54,
						defending: 40,
						physical: 68,
						goalkeeping: {
							diving: 73,
							handling: 72,
							kicking: 66,
							reflexes: 74,
							speed: 55,
							positioning: 72,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 20000,
					contract_end: "2027-06-30",
					market_value: 5000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 78,
						loyalty: 82,
						leadership: 68,
						temperament: 79,
					},
					agent: {
						name: "New Era Global Sports",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 74,
					form: 6.4,
					fitness: 96,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 5,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 450,
					},
					reputation: 68,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 27,
					name: "Illia Zabarnyi",
					age: 22,
					nationality: "Ukraine",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 77,
					potential: 85,
					attributes: {
						pace: 74,
						shooting: 48,
						passing: 70,
						dribbling: 64,
						defending: 80,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 48000,
					contract_end: "2029-06-30",
					market_value: 32000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 86,
						loyalty: 78,
						leadership: 74,
						temperament: 80,
					},
					agent: {
						name: "Zoran Stojadinovic",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "key_player",
					morale: 83,
					form: 7.3,
					fitness: 96,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 2,
						assists: 1,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2700,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 25,
					name: "Marcos Senesi",
					age: 27,
					nationality: "Argentina",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 77,
					potential: 79,
					attributes: {
						pace: 72,
						shooting: 50,
						passing: 68,
						dribbling: 64,
						defending: 80,
						physical: 79,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 55000,
					contract_end: "2027-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 76,
						loyalty: 78,
						leadership: 78,
						temperament: 80,
					},
					agent: {
						name: "Fali Ramadani",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 1,
						assists: 0,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2430,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 5,
					name: "Lloyd Kelly",
					age: 25,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB", "LB"],
					overall: 75,
					potential: 79,
					attributes: {
						pace: 76,
						shooting: 46,
						passing: 68,
						dribbling: 66,
						defending: 77,
						physical: 76,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 45000,
					contract_end: "2026-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 78,
						loyalty: 80,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.9,
					fitness: 93,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 21,
						goals: 1,
						assists: 1,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1710,
					},
					reputation: 74,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 15,
					name: "Adam Smith",
					age: 33,
					nationality: "England",
					position: "RB",
					preferred_positions: ["RB", "RWB"],
					overall: 73,
					potential: 73,
					attributes: {
						pace: 72,
						shooting: 58,
						passing: 70,
						dribbling: 70,
						defending: 74,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2026-06-30",
					market_value: 4000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 70,
						loyalty: 90,
						leadership: 84,
						temperament: 86,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 4,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.0,
					fitness: 91,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 1,
						assists: 3,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2220,
					},
					reputation: 72,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 37,
					name: "Max Aarons",
					age: 24,
					nationality: "England",
					position: "RB",
					preferred_positions: ["RB", "RWB"],
					overall: 75,
					potential: 80,
					attributes: {
						pace: 84,
						shooting: 58,
						passing: 70,
						dribbling: 74,
						defending: 73,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 42000,
					contract_end: "2028-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 81,
						ambition: 82,
						loyalty: 76,
						leadership: 68,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 7.0,
					fitness: 95,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 0,
						assists: 4,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1920,
					},
					reputation: 73,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 3,
					name: "Milos Kerkez",
					age: 21,
					nationality: "Hungary",
					position: "LB",
					preferred_positions: ["LB", "LWB"],
					overall: 75,
					potential: 84,
					attributes: {
						pace: 84,
						shooting: 56,
						passing: 72,
						dribbling: 74,
						defending: 74,
						physical: 72,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 38000,
					contract_end: "2028-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 86,
						loyalty: 78,
						leadership: 66,
						temperament: 76,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 96,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 1,
						assists: 5,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2460,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 4,
					name: "Lewis Cook",
					age: 27,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 76,
					potential: 77,
					attributes: {
						pace: 70,
						shooting: 68,
						passing: 78,
						dribbling: 74,
						defending: 74,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 58000,
					contract_end: "2027-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 78,
						loyalty: 84,
						leadership: 80,
						temperament: 82,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "key_player",
					morale: 82,
					form: 7.2,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 3,
						assists: 5,
						yellow_cards: 7,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2520,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 10,
					name: "Ryan Christie",
					age: 29,
					nationality: "Scotland",
					position: "CAM",
					preferred_positions: ["CAM", "CM", "RW"],
					overall: 76,
					potential: 76,
					attributes: {
						pace: 76,
						shooting: 74,
						passing: 76,
						dribbling: 76,
						defending: 62,
						physical: 70,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 55000,
					contract_end: "2026-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 76,
						loyalty: 80,
						leadership: 78,
						temperament: 80,
					},
					agent: {
						name: "New Era Global Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 93,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 7,
						assists: 6,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2340,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 29,
					name: "Philip Billing",
					age: 28,
					nationality: "Denmark",
					position: "CM",
					preferred_positions: ["CM", "CDM", "CAM"],
					overall: 75,
					potential: 76,
					attributes: {
						pace: 72,
						shooting: 72,
						passing: 74,
						dribbling: 74,
						defending: 72,
						physical: 82,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 52000,
					contract_end: "2027-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 76,
						loyalty: 80,
						leadership: 76,
						temperament: 78,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 79,
					form: 7.0,
					fitness: 94,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 6,
						assists: 4,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2340,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 14,
					name: "Tyler Adams",
					age: 26,
					nationality: "USA",
					position: "CDM",
					preferred_positions: ["CDM", "CM", "RB"],
					overall: 77,
					potential: 79,
					attributes: {
						pace: 78,
						shooting: 64,
						passing: 72,
						dribbling: 72,
						defending: 78,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 62000,
					contract_end: "2027-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 82,
						loyalty: 78,
						leadership: 80,
						temperament: 82,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 90,
					sharpness: 89,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 25,
						goals: 1,
						assists: 2,
						yellow_cards: 7,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2100,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 16,
					name: "Marcus Tavernier",
					age: 25,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "CAM", "RW"],
					overall: 75,
					potential: 79,
					attributes: {
						pace: 80,
						shooting: 72,
						passing: 74,
						dribbling: 78,
						defending: 54,
						physical: 68,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2027-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 80,
						loyalty: 78,
						leadership: 70,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 95,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 7,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2340,
					},
					reputation: 74,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 19,
					name: "Justin Kluivert",
					age: 25,
					nationality: "Netherlands",
					position: "RW",
					preferred_positions: ["RW", "LW", "ST"],
					overall: 76,
					potential: 79,
					attributes: {
						pace: 84,
						shooting: 74,
						passing: 72,
						dribbling: 80,
						defending: 46,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 52000,
					contract_end: "2028-06-30",
					market_value: 26000000,
					release_clause: null,
					personality: {
						professionalism: 79,
						ambition: 80,
						loyalty: 74,
						leadership: 68,
						temperament: 76,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 9,
						assists: 8,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2430,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 24,
					name: "Antoine Semenyo",
					age: 24,
					nationality: "Ghana",
					position: "RW",
					preferred_positions: ["RW", "ST", "LW"],
					overall: 76,
					potential: 81,
					attributes: {
						pace: 86,
						shooting: 74,
						passing: 68,
						dribbling: 78,
						defending: 48,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 45000,
					contract_end: "2029-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 84,
						loyalty: 76,
						leadership: 68,
						temperament: 75,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.3,
					fitness: 96,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 11,
						assists: 5,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2550,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 9,
					name: "Dominic Solanke",
					age: 27,
					nationality: "England",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 80,
					potential: 82,
					attributes: {
						pace: 80,
						shooting: 82,
						passing: 74,
						dribbling: 78,
						defending: 50,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 85000,
					contract_end: "2027-06-30",
					market_value: 42000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 82,
						loyalty: 80,
						leadership: 80,
						temperament: 82,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "star_player",
					morale: 86,
					form: 7.8,
					fitness: 94,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 31,
						goals: 21,
						assists: 7,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2730,
					},
					reputation: 79,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 21,
					name: "Enes Ünal",
					age: 27,
					nationality: "Turkey",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 76,
					potential: 77,
					attributes: {
						pace: 74,
						shooting: 78,
						passing: 68,
						dribbling: 72,
						defending: 44,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "medium_medium",
					salary_weekly: 52000,
					contract_end: "2028-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 78,
						loyalty: 76,
						leadership: 72,
						temperament: 74,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 93,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 7,
						assists: 2,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1440,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 11,
					name: "Dango Ouattara",
					age: 22,
					nationality: "Burkina Faso",
					position: "RW",
					preferred_positions: ["RW", "LW", "RWB"],
					overall: 73,
					potential: 81,
					attributes: {
						pace: 93,
						shooting: 68,
						passing: 66,
						dribbling: 76,
						defending: 58,
						physical: 76,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 35000,
					contract_end: "2028-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 84,
						loyalty: 76,
						leadership: 62,
						temperament: 74,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 97,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 4,
						assists: 5,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1560,
					},
					reputation: 71,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 17,
					name: "Luis Sinisterra",
					age: 25,
					nationality: "Colombia",
					position: "LW",
					preferred_positions: ["LW", "RW", "ST"],
					overall: 76,
					potential: 80,
					attributes: {
						pace: 88,
						shooting: 74,
						passing: 70,
						dribbling: 80,
						defending: 44,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 48000,
					contract_end: "2027-06-30",
					market_value: 26000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 82,
						loyalty: 74,
						leadership: 66,
						temperament: 72,
					},
					agent: {
						name: "You First Sports",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.8,
					fitness: 91,
					sharpness: 87,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 21,
						goals: 5,
						assists: 4,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1380,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 8,
					name: "Alex Scott",
					age: 21,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 72,
					potential: 83,
					attributes: {
						pace: 74,
						shooting: 68,
						passing: 74,
						dribbling: 76,
						defending: 64,
						physical: 66,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 28000,
					contract_end: "2028-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 86,
						loyalty: 80,
						leadership: 68,
						temperament: 80,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 79,
					form: 6.9,
					fitness: 97,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 23,
						goals: 2,
						assists: 4,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1620,
					},
					reputation: 70,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 32,
					name: "Jaidon Anthony",
					age: 24,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 72,
					potential: 77,
					attributes: {
						pace: 82,
						shooting: 68,
						passing: 70,
						dribbling: 76,
						defending: 48,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 32000,
					contract_end: "2027-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 80,
						loyalty: 80,
						leadership: 62,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 73,
					form: 6.4,
					fitness: 94,
					sharpness: 85,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 14,
						goals: 2,
						assists: 2,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 660,
					},
					reputation: 69,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 42,
					name: "David Brooks",
					age: 27,
					nationality: "Wales",
					position: "CAM",
					preferred_positions: ["CAM", "RW", "LW"],
					overall: 75,
					potential: 76,
					attributes: {
						pace: 76,
						shooting: 72,
						passing: 76,
						dribbling: 80,
						defending: 50,
						physical: 64,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 55000,
					contract_end: "2026-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 76,
						loyalty: 82,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 88,
					sharpness: 87,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 19,
						goals: 3,
						assists: 3,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 3,
						minutes_played: 1080,
					},
					reputation: 74,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 52,
					name: "Daniel Jebbison",
					age: 21,
					nationality: "England",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 68,
					potential: 79,
					attributes: {
						pace: 80,
						shooting: 70,
						passing: 62,
						dribbling: 68,
						defending: 38,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_medium",
					salary_weekly: 18000,
					contract_end: "2028-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 84,
						loyalty: 76,
						leadership: 58,
						temperament: 72,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 75,
					form: 6.3,
					fitness: 96,
					sharpness: 83,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 10,
						goals: 1,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 360,
					},
					reputation: 65,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
			],
		},
		{
			id: 17,
			name: "Brentford",
			founded: 1889,
			stadium: "Gtech Community Stadium",
			capacity: 17250,
			budget: 75000000,
			wage_budget_weekly: 650000,
			cash_reserves: 12000000,
			debt: 38000000,
			reputation: 71,
			fanbase_size: 680000,
			attendance_rate: 0.98,
			commercial_power: 62,
			facilities: {
				training: 74,
				youth: 70,
				medical: 76,
				stadium_condition: 85,
			},
			manager: {
				name: "Thomas Frank",
				age: 51,
				nationality: "Denmark",
				reputation: 76,
				preferred_formation: "3-5-2",
				tactical_style: "Direct",
				man_management: 78,
				tactical_knowledge: 79,
			},
			preferred_formation: "3-5-2",
			squad: [
				{
					number: 1,
					name: "Mark Flekken",
					age: 31,
					nationality: "Netherlands",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 79,
					potential: 79,
					attributes: {
						pace: 54,
						shooting: 40,
						passing: 72,
						dribbling: 60,
						defending: 46,
						physical: 71,
						goalkeeping: {
							diving: 80,
							handling: 79,
							kicking: 77,
							reflexes: 81,
							speed: 55,
							positioning: 79,
						},
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 65000,
					contract_end: "2028-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 76,
						loyalty: 80,
						leadership: 78,
						temperament: 84,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.3,
					fitness: 94,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 0,
						assists: 0,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2700,
					},
					reputation: 78,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 22,
					name: "Matthew Cox",
					age: 21,
					nationality: "England",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 66,
					potential: 75,
					attributes: {
						pace: 52,
						shooting: 34,
						passing: 58,
						dribbling: 52,
						defending: 38,
						physical: 66,
						goalkeeping: {
							diving: 68,
							handling: 67,
							kicking: 64,
							reflexes: 69,
							speed: 53,
							positioning: 67,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 12000,
					contract_end: "2027-06-30",
					market_value: 2000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 82,
						loyalty: 84,
						leadership: 60,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 4,
					},
					squad_role: "backup",
					morale: 74,
					form: 6.1,
					fitness: 97,
					sharpness: 85,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 4,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 360,
					},
					reputation: 62,
					homegrown_status: "homegrown_club",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 5,
					name: "Ethan Pinnock",
					age: 31,
					nationality: "Jamaica",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 76,
					potential: 76,
					attributes: {
						pace: 70,
						shooting: 48,
						passing: 66,
						dribbling: 60,
						defending: 79,
						physical: 80,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 55000,
					contract_end: "2026-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 74,
						loyalty: 84,
						leadership: 82,
						temperament: 82,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.1,
					fitness: 92,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 3,
						assists: 1,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2520,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 20,
					name: "Kristoffer Ajer",
					age: 26,
					nationality: "Norway",
					position: "CB",
					preferred_positions: ["CB", "RB"],
					overall: 77,
					potential: 79,
					attributes: {
						pace: 76,
						shooting: 52,
						passing: 70,
						dribbling: 66,
						defending: 79,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 58000,
					contract_end: "2028-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 78,
						loyalty: 80,
						leadership: 76,
						temperament: 82,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.2,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 2,
						assists: 2,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2610,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 22,
					name: "Nathan Collins",
					age: 23,
					nationality: "Republic of Ireland",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 77,
					potential: 84,
					attributes: {
						pace: 72,
						shooting: 50,
						passing: 68,
						dribbling: 62,
						defending: 80,
						physical: 82,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 52000,
					contract_end: "2029-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 84,
						loyalty: 78,
						leadership: 74,
						temperament: 74,
					},
					agent: {
						name: "New Era Global Sports",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 2,
						assists: 0,
						yellow_cards: 8,
						red_cards: 1,
						clean_sheets: 8,
						minutes_played: 2460,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 13,
					name: "Mads Roerslev",
					age: 25,
					nationality: "Denmark",
					position: "RWB",
					preferred_positions: ["RWB", "RB"],
					overall: 73,
					potential: 77,
					attributes: {
						pace: 80,
						shooting: 56,
						passing: 68,
						dribbling: 70,
						defending: 72,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 38000,
					contract_end: "2027-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 78,
						loyalty: 82,
						leadership: 70,
						temperament: 80,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 95,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 1,
						assists: 3,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1920,
					},
					reputation: 72,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 30,
					name: "Mads Bech Sørensen",
					age: 25,
					nationality: "Denmark",
					position: "LWB",
					preferred_positions: ["LWB", "LB", "CB"],
					overall: 72,
					potential: 76,
					attributes: {
						pace: 76,
						shooting: 52,
						passing: 66,
						dribbling: 66,
						defending: 74,
						physical: 74,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 32000,
					contract_end: "2027-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 76,
						loyalty: 82,
						leadership: 68,
						temperament: 78,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.7,
					fitness: 94,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 18,
						goals: 0,
						assists: 2,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1260,
					},
					reputation: 70,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 12,
					name: "Sepp van den Berg",
					age: 23,
					nationality: "Netherlands",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 75,
					potential: 82,
					attributes: {
						pace: 74,
						shooting: 48,
						passing: 68,
						dribbling: 64,
						defending: 78,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 42000,
					contract_end: "2029-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 84,
						loyalty: 76,
						leadership: 72,
						temperament: 80,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 79,
					form: 7.0,
					fitness: 95,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 1,
						assists: 1,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1800,
					},
					reputation: 73,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 6,
					name: "Christian Nørgaard",
					age: 30,
					nationality: "Denmark",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 76,
					potential: 76,
					attributes: {
						pace: 68,
						shooting: 66,
						passing: 74,
						dribbling: 70,
						defending: 78,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 62000,
					contract_end: "2026-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 74,
						loyalty: 88,
						leadership: 86,
						temperament: 84,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "key_player",
					morale: 84,
					form: 7.3,
					fitness: 93,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 4,
						assists: 2,
						yellow_cards: 8,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2640,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 27,
					name: "Vitaly Janelt",
					age: 26,
					nationality: "Germany",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 76,
					potential: 79,
					attributes: {
						pace: 74,
						shooting: 70,
						passing: 76,
						dribbling: 74,
						defending: 76,
						physical: 76,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 52000,
					contract_end: "2028-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 80,
						loyalty: 80,
						leadership: 74,
						temperament: 80,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 5,
						assists: 4,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2520,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 8,
					name: "Mathias Jensen",
					age: 28,
					nationality: "Denmark",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 76,
					potential: 77,
					attributes: {
						pace: 72,
						shooting: 72,
						passing: 78,
						dribbling: 76,
						defending: 66,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 58000,
					contract_end: "2026-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 76,
						loyalty: 82,
						leadership: 76,
						temperament: 82,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 93,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 6,
						assists: 7,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2400,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 15,
					name: "Frank Onyeka",
					age: 26,
					nationality: "Nigeria",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 74,
					potential: 77,
					attributes: {
						pace: 78,
						shooting: 62,
						passing: 70,
						dribbling: 70,
						defending: 76,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 42000,
					contract_end: "2027-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 78,
						loyalty: 78,
						leadership: 70,
						temperament: 76,
					},
					agent: {
						name: "You First Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 96,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 1,
						assists: 2,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1620,
					},
					reputation: 73,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 23,
					name: "Keane Lewis-Potter",
					age: 23,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "ST", "RW"],
					overall: 75,
					potential: 81,
					attributes: {
						pace: 84,
						shooting: 72,
						passing: 70,
						dribbling: 78,
						defending: 50,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2028-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 84,
						loyalty: 78,
						leadership: 68,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 95,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 8,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2340,
					},
					reputation: 74,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 11,
					name: "Yoane Wissa",
					age: 28,
					nationality: "Congo DR",
					position: "ST",
					preferred_positions: ["ST", "LW"],
					overall: 77,
					potential: 78,
					attributes: {
						pace: 84,
						shooting: 78,
						passing: 70,
						dribbling: 78,
						defending: 46,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 62000,
					contract_end: "2027-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 78,
						loyalty: 78,
						leadership: 72,
						temperament: 80,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "key_player",
					morale: 83,
					form: 7.4,
					fitness: 95,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 15,
						assists: 5,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2550,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 19,
					name: "Bryan Mbeumo",
					age: 25,
					nationality: "Cameroon",
					position: "RW",
					preferred_positions: ["RW", "ST", "LW"],
					overall: 79,
					potential: 83,
					attributes: {
						pace: 84,
						shooting: 80,
						passing: 76,
						dribbling: 82,
						defending: 48,
						physical: 72,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 72000,
					contract_end: "2027-06-30",
					market_value: 42000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 84,
						loyalty: 80,
						leadership: 76,
						temperament: 78,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "star_player",
					morale: 86,
					form: 7.8,
					fitness: 95,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 31,
						goals: 18,
						assists: 9,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2730,
					},
					reputation: 78,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 17,
					name: "Ivan Toney",
					age: 28,
					nationality: "England",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 81,
					potential: 82,
					attributes: {
						pace: 76,
						shooting: 84,
						passing: 76,
						dribbling: 78,
						defending: 52,
						physical: 84,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 95000,
					contract_end: "2028-06-30",
					market_value: 48000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 84,
						loyalty: 78,
						leadership: 82,
						temperament: 72,
					},
					agent: {
						name: "New Era Global Sports",
						commission_rate: 0.10,
						negotiation_difficulty: 8,
					},
					squad_role: "star_player",
					morale: 85,
					form: 7.7,
					fitness: 94,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 20,
						assists: 6,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2520,
					},
					reputation: 80,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 7,
					name: "Kevin Schade",
					age: 23,
					nationality: "Germany",
					position: "LW",
					preferred_positions: ["LW", "ST", "RW"],
					overall: 74,
					potential: 81,
					attributes: {
						pace: 86,
						shooting: 72,
						passing: 68,
						dribbling: 76,
						defending: 44,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 42000,
					contract_end: "2028-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 84,
						loyalty: 76,
						leadership: 66,
						temperament: 76,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 96,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 6,
						assists: 4,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1680,
					},
					reputation: 72,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 9,
					name: "Fábio Carvalho",
					age: 22,
					nationality: "Portugal",
					position: "CAM",
					preferred_positions: ["CAM", "LW", "RW"],
					overall: 74,
					potential: 82,
					attributes: {
						pace: 78,
						shooting: 72,
						passing: 76,
						dribbling: 80,
						defending: 48,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 38000,
					contract_end: "2029-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 86,
						loyalty: 74,
						leadership: 64,
						temperament: 74,
					},
					agent: {
						name: "Gestifute",
						commission_rate: 0.10,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 94,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 5,
						assists: 5,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1440,
					},
					reputation: 72,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 24,
					name: "Mikkel Damsgaard",
					age: 24,
					nationality: "Denmark",
					position: "CAM",
					preferred_positions: ["CAM", "LW", "CM"],
					overall: 75,
					potential: 80,
					attributes: {
						pace: 76,
						shooting: 74,
						passing: 78,
						dribbling: 78,
						defending: 56,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2028-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 80,
						loyalty: 78,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "CAA Stellar",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 93,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 23,
						goals: 4,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1620,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 21,
					name: "Yehor Yarmoliuk",
					age: 20,
					nationality: "Ukraine",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 68,
					potential: 80,
					attributes: {
						pace: 72,
						shooting: 66,
						passing: 70,
						dribbling: 74,
						defending: 60,
						physical: 66,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 18000,
					contract_end: "2028-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 86,
						loyalty: 80,
						leadership: 60,
						temperament: 76,
					},
					agent: {
						name: "Zoran Stojadinovic",
						commission_rate: 0.09,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 77,
					form: 6.5,
					fitness: 97,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 14,
						goals: 1,
						assists: 2,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 630,
					},
					reputation: 66,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 26,
					name: "Shandon Baptiste",
					age: 26,
					nationality: "Grenada",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 70,
					potential: 73,
					attributes: {
						pace: 70,
						shooting: 64,
						passing: 70,
						dribbling: 68,
						defending: 70,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 28000,
					contract_end: "2026-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 74,
						loyalty: 82,
						leadership: 68,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 74,
					form: 6.3,
					fitness: 94,
					sharpness: 85,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 10,
						goals: 0,
						assists: 1,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 450,
					},
					reputation: 68,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 33,
					name: "Josh Dasilva",
					age: 26,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 72,
					potential: 75,
					attributes: {
						pace: 72,
						shooting: 70,
						passing: 74,
						dribbling: 74,
						defending: 64,
						physical: 70,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 38000,
					contract_end: "2026-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 76,
						loyalty: 84,
						leadership: 70,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 75,
					form: 6.4,
					fitness: 90,
					sharpness: 86,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 12,
						goals: 1,
						assists: 2,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 540,
					},
					reputation: 70,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 36,
					name: "Ryan Trevitt",
					age: 20,
					nationality: "Wales",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 64,
					potential: 76,
					attributes: {
						pace: 70,
						shooting: 62,
						passing: 66,
						dribbling: 68,
						defending: 58,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 10000,
					contract_end: "2027-06-30",
					market_value: 3000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 82,
						loyalty: 84,
						leadership: 56,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 4,
					},
					squad_role: "prospect",
					morale: 75,
					form: 6.0,
					fitness: 98,
					sharpness: 82,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 5,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 135,
					},
					reputation: 61,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
			],
		},
		{
			id: 18,
			name: "Leeds United",
			founded: 1919,
			stadium: "Elland Road",
			capacity: 37608,
			budget: 92000000,
			wage_budget_weekly: 820000,
			cash_reserves: 16000000,
			debt: 68000000,
			reputation: 75,
			fanbase_size: 1400000,
			attendance_rate: 0.98,
			commercial_power: 72,
			facilities: {
				training: 77,
				youth: 75,
				medical: 78,
				stadium_condition: 76,
			},
			manager: {
				name: "Daniel Farke",
				age: 48,
				nationality: "Germany",
				reputation: 74,
				preferred_formation: "4-2-3-1",
				tactical_style: "Possession",
				man_management: 76,
				tactical_knowledge: 77,
			},
			preferred_formation: "4-2-3-1",
			squad: [
				{
					number: 1,
					name: "Illan Meslier",
					age: 24,
					nationality: "France",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 79,
					potential: 85,
					attributes: {
						pace: 58,
						shooting: 42,
						passing: 70,
						dribbling: 62,
						defending: 46,
						physical: 74,
						goalkeeping: {
							diving: 81,
							handling: 79,
							kicking: 76,
							reflexes: 82,
							speed: 59,
							positioning: 79,
						},
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 62000,
					contract_end: "2027-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 84,
						loyalty: 80,
						leadership: 76,
						temperament: 76,
					},
					agent: {
						name: "Jacques-Etienne Lastere",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.3,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 0,
						assists: 1,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 12,
						minutes_played: 2700,
					},
					reputation: 78,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 13,
					name: "Karl Darlow",
					age: 34,
					nationality: "England",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 72,
					potential: 72,
					attributes: {
						pace: 52,
						shooting: 36,
						passing: 62,
						dribbling: 56,
						defending: 42,
						physical: 69,
						goalkeeping: {
							diving: 74,
							handling: 73,
							kicking: 68,
							reflexes: 75,
							speed: 53,
							positioning: 74,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 28000,
					contract_end: "2026-06-30",
					market_value: 2000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 70,
						loyalty: 82,
						leadership: 78,
						temperament: 84,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 4,
					},
					squad_role: "backup",
					morale: 75,
					form: 6.4,
					fitness: 94,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 4,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 360,
					},
					reputation: 71,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 5,
					name: "Ethan Ampadu",
					age: 24,
					nationality: "Wales",
					position: "CB",
					preferred_positions: ["CB", "CDM"],
					overall: 77,
					potential: 83,
					attributes: {
						pace: 74,
						shooting: 58,
						passing: 74,
						dribbling: 72,
						defending: 79,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 55000,
					contract_end: "2028-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 84,
						loyalty: 78,
						leadership: 78,
						temperament: 82,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "key_player",
					morale: 83,
					form: 7.4,
					fitness: 95,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 2,
						assists: 1,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 12,
						minutes_played: 2700,
					},
					reputation: 76,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 6,
					name: "Joe Rodon",
					age: 27,
					nationality: "Wales",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 77,
					potential: 79,
					attributes: {
						pace: 72,
						shooting: 46,
						passing: 68,
						dribbling: 62,
						defending: 80,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 52000,
					contract_end: "2029-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 78,
						loyalty: 82,
						leadership: 80,
						temperament: 82,
					},
					agent: {
						name: "ICM Stellar Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.2,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 3,
						assists: 0,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 12,
						minutes_played: 2610,
					},
					reputation: 76,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 14,
					name: "Pascal Struijk",
					age: 25,
					nationality: "Netherlands",
					position: "CB",
					preferred_positions: ["CB", "LB"],
					overall: 76,
					potential: 80,
					attributes: {
						pace: 72,
						shooting: 48,
						passing: 70,
						dribbling: 66,
						defending: 78,
						physical: 78,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 48000,
					contract_end: "2027-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 80,
						loyalty: 84,
						leadership: 74,
						temperament: 80,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 79,
					form: 7.0,
					fitness: 93,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 1,
						assists: 1,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2040,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 25,
					name: "Sam Byram",
					age: 31,
					nationality: "England",
					position: "RB",
					preferred_positions: ["RB", "RWB"],
					overall: 73,
					potential: 73,
					attributes: {
						pace: 74,
						shooting: 58,
						passing: 68,
						dribbling: 68,
						defending: 74,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 42000,
					contract_end: "2026-06-30",
					market_value: 6000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 72,
						loyalty: 88,
						leadership: 80,
						temperament: 84,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.0,
					fitness: 91,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 1,
						assists: 4,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2220,
					},
					reputation: 72,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 2,
					name: "Jayden Bogle",
					age: 24,
					nationality: "England",
					position: "RB",
					preferred_positions: ["RB", "RWB"],
					overall: 74,
					potential: 79,
					attributes: {
						pace: 82,
						shooting: 60,
						passing: 68,
						dribbling: 72,
						defending: 72,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 38000,
					contract_end: "2028-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 82,
						loyalty: 78,
						leadership: 68,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 96,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 1,
						assists: 3,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 1800,
					},
					reputation: 73,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 3,
					name: "Junior Firpo",
					age: 28,
					nationality: "Dominican Republic",
					position: "LB",
					preferred_positions: ["LB", "LWB"],
					overall: 74,
					potential: 75,
					attributes: {
						pace: 80,
						shooting: 60,
						passing: 70,
						dribbling: 72,
						defending: 72,
						physical: 74,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 52000,
					contract_end: "2027-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 76,
						loyalty: 78,
						leadership: 70,
						temperament: 74,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 78,
					form: 7.0,
					fitness: 94,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 2,
						assists: 5,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2340,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 4,
					name: "Glen Kamara",
					age: 29,
					nationality: "Finland",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 76,
					potential: 77,
					attributes: {
						pace: 72,
						shooting: 66,
						passing: 76,
						dribbling: 76,
						defending: 74,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 58000,
					contract_end: "2028-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 76,
						loyalty: 80,
						leadership: 78,
						temperament: 82,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 3,
						assists: 4,
						yellow_cards: 7,
						red_cards: 0,
						clean_sheets: 11,
						minutes_played: 2520,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 8,
					name: "Ilia Gruev",
					age: 24,
					nationality: "Bulgaria",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 74,
					potential: 80,
					attributes: {
						pace: 70,
						shooting: 64,
						passing: 74,
						dribbling: 72,
						defending: 76,
						physical: 74,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 42000,
					contract_end: "2027-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 82,
						loyalty: 80,
						leadership: 74,
						temperament: 80,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 95,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 2,
						assists: 3,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 11,
						minutes_played: 2400,
					},
					reputation: 73,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 22,
					name: "Ao Tanaka",
					age: 26,
					nationality: "Japan",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 75,
					potential: 78,
					attributes: {
						pace: 72,
						shooting: 68,
						passing: 76,
						dribbling: 74,
						defending: 74,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 45000,
					contract_end: "2028-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 80,
						loyalty: 82,
						leadership: 76,
						temperament: 84,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 79,
					form: 7.0,
					fitness: 95,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 25,
						goals: 4,
						assists: 3,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 1950,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 44,
					name: "Archie Gray",
					age: 18,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CDM", "RB"],
					overall: 70,
					potential: 86,
					attributes: {
						pace: 76,
						shooting: 62,
						passing: 70,
						dribbling: 72,
						defending: 72,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 25000,
					contract_end: "2028-06-30",
					market_value: 22000000,
					release_clause: 60000000,
					personality: {
						professionalism: 82,
						ambition: 90,
						loyalty: 85,
						leadership: 70,
						temperament: 80,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "rotation",
					morale: 82,
					form: 7.0,
					fitness: 98,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 1,
						assists: 2,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 1680,
					},
					reputation: 68,
					homegrown_status: "homegrown_club",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 10,
					name: "Georginio Rutter",
					age: 22,
					nationality: "France",
					position: "CAM",
					preferred_positions: ["CAM", "ST", "LW"],
					overall: 76,
					potential: 84,
					attributes: {
						pace: 78,
						shooting: 74,
						passing: 78,
						dribbling: 82,
						defending: 52,
						physical: 68,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 58000,
					contract_end: "2028-06-30",
					market_value: 32000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 86,
						loyalty: 76,
						leadership: 68,
						temperament: 74,
					},
					agent: {
						name: "Jacques-Etienne Lastere",
						commission_rate: 0.10,
						negotiation_difficulty: 7,
					},
					squad_role: "key_player",
					morale: 84,
					form: 7.5,
					fitness: 95,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 11,
						assists: 12,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2580,
					},
					reputation: 75,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 7,
					name: "Daniel James",
					age: 27,
					nationality: "Wales",
					position: "RW",
					preferred_positions: ["RW", "LW"],
					overall: 76,
					potential: 77,
					attributes: {
						pace: 94,
						shooting: 72,
						passing: 70,
						dribbling: 76,
						defending: 50,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 62000,
					contract_end: "2027-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 78,
						loyalty: 82,
						leadership: 72,
						temperament: 80,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 96,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 8,
						assists: 7,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2430,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 11,
					name: "Wilfried Gnonto",
					age: 21,
					nationality: "Italy",
					position: "LW",
					preferred_positions: ["LW", "RW", "ST"],
					overall: 75,
					potential: 84,
					attributes: {
						pace: 88,
						shooting: 72,
						passing: 70,
						dribbling: 80,
						defending: 46,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2027-06-30",
					market_value: 28000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 86,
						loyalty: 78,
						leadership: 66,
						temperament: 76,
					},
					agent: {
						name: "You First Sports",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.3,
					fitness: 97,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 10,
						assists: 8,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2520,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 29,
					name: "Crysencio Summerville",
					age: 23,
					nationality: "Netherlands",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 77,
					potential: 84,
					attributes: {
						pace: 86,
						shooting: 76,
						passing: 74,
						dribbling: 82,
						defending: 46,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 55000,
					contract_end: "2027-06-30",
					market_value: 35000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 86,
						loyalty: 76,
						leadership: 68,
						temperament: 74,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.10,
						negotiation_difficulty: 7,
					},
					squad_role: "star_player",
					morale: 85,
					form: 7.7,
					fitness: 95,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 31,
						goals: 16,
						assists: 10,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2670,
					},
					reputation: 76,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 9,
					name: "Patrick Bamford",
					age: 31,
					nationality: "England",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 77,
					potential: 77,
					attributes: {
						pace: 74,
						shooting: 80,
						passing: 74,
						dribbling: 74,
						defending: 48,
						physical: 78,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 85000,
					contract_end: "2026-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 76,
						loyalty: 88,
						leadership: 84,
						temperament: 82,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 88,
					sharpness: 89,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 12,
						assists: 4,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2040,
					},
					reputation: 78,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 19,
					name: "Mateo Joseph",
					age: 20,
					nationality: "Spain",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 70,
					potential: 82,
					attributes: {
						pace: 80,
						shooting: 72,
						passing: 66,
						dribbling: 72,
						defending: 42,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 28000,
					contract_end: "2027-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 88,
						loyalty: 82,
						leadership: 64,
						temperament: 76,
					},
					agent: {
						name: "Promoesport",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 79,
					form: 6.9,
					fitness: 97,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 6,
						assists: 2,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1260,
					},
					reputation: 68,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 30,
					name: "Joe Gelhardt",
					age: 22,
					nationality: "England",
					position: "ST",
					preferred_positions: ["ST", "CAM"],
					overall: 71,
					potential: 79,
					attributes: {
						pace: 78,
						shooting: 72,
						passing: 70,
						dribbling: 74,
						defending: 46,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 32000,
					contract_end: "2027-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 84,
						loyalty: 82,
						leadership: 64,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "backup",
					morale: 75,
					form: 6.5,
					fitness: 95,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 16,
						goals: 3,
						assists: 2,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 3,
						minutes_played: 720,
					},
					reputation: 69,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 17,
					name: "Brenden Aaronson",
					age: 24,
					nationality: "USA",
					position: "CAM",
					preferred_positions: ["CAM", "RW", "LW"],
					overall: 75,
					potential: 80,
					attributes: {
						pace: 82,
						shooting: 72,
						passing: 74,
						dribbling: 78,
						defending: 52,
						physical: 66,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 52000,
					contract_end: "2027-06-30",
					market_value: 24000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 84,
						loyalty: 78,
						leadership: 70,
						temperament: 78,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 95,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 5,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1680,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 18,
					name: "Manor Solomon",
					age: 25,
					nationality: "Israel",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 75,
					potential: 79,
					attributes: {
						pace: 84,
						shooting: 72,
						passing: 72,
						dribbling: 80,
						defending: 44,
						physical: 66,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 48000,
					contract_end: "2028-06-30",
					market_value: 22000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 80,
						loyalty: 76,
						leadership: 66,
						temperament: 74,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.7,
					fitness: 89,
					sharpness: 87,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 19,
						goals: 4,
						assists: 3,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1140,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 23,
					name: "Connor Roberts",
					age: 29,
					nationality: "Wales",
					position: "RB",
					preferred_positions: ["RB", "RWB"],
					overall: 72,
					potential: 73,
					attributes: {
						pace: 74,
						shooting: 58,
						passing: 68,
						dribbling: 66,
						defending: 72,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 38000,
					contract_end: "2026-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 74,
						loyalty: 82,
						leadership: 76,
						temperament: 80,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 76,
					form: 6.5,
					fitness: 92,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 14,
						goals: 0,
						assists: 1,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 840,
					},
					reputation: 72,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 40,
					name: "Darko Gyabi",
					age: 20,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 68,
					potential: 79,
					attributes: {
						pace: 72,
						shooting: 64,
						passing: 68,
						dribbling: 70,
						defending: 68,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 18000,
					contract_end: "2027-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 84,
						loyalty: 82,
						leadership: 62,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 77,
					form: 6.4,
					fitness: 97,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 10,
						goals: 0,
						assists: 1,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 450,
					},
					reputation: 65,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
			],
		},
		{
			id: 19,
			name: "Burnley",
			founded: 1882,
			stadium: "Turf Moor",
			capacity: 21944,
			budget: 70000000,
			wage_budget_weekly: 620000,
			cash_reserves: 10000000,
			debt: 52000000,
			reputation: 70,
			fanbase_size: 780000,
			attendance_rate: 0.96,
			commercial_power: 64,
			facilities: {
				training: 72,
				youth: 70,
				medical: 73,
				stadium_condition: 72,
			},
			manager: {
				name: "Scott Parker",
				age: 44,
				nationality: "England",
				reputation: 72,
				preferred_formation: "4-2-3-1",
				tactical_style: "Possession",
				man_management: 74,
				tactical_knowledge: 75,
			},
			preferred_formation: "4-2-3-1",
			squad: [
				{
					number: 1,
					name: "James Trafford",
					age: 22,
					nationality: "England",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 76,
					potential: 85,
					attributes: {
						pace: 56,
						shooting: 38,
						passing: 68,
						dribbling: 58,
						defending: 44,
						physical: 72,
						goalkeeping: {
							diving: 78,
							handling: 77,
							kicking: 74,
							reflexes: 79,
							speed: 57,
							positioning: 77,
						},
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 42000,
					contract_end: "2029-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 86,
						loyalty: 80,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 96,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 0,
						assists: 0,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 11,
						minutes_played: 2610,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 32,
					name: "Václav Hladký",
					age: 34,
					nationality: "Czech Republic",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 71,
					potential: 71,
					attributes: {
						pace: 50,
						shooting: 34,
						passing: 62,
						dribbling: 54,
						defending: 40,
						physical: 68,
						goalkeeping: {
							diving: 73,
							handling: 72,
							kicking: 66,
							reflexes: 74,
							speed: 51,
							positioning: 73,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 22000,
					contract_end: "2026-06-30",
					market_value: 2000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 68,
						loyalty: 82,
						leadership: 76,
						temperament: 84,
					},
					agent: {
						name: "Sport Invest",
						commission_rate: 0.07,
						negotiation_difficulty: 4,
					},
					squad_role: "backup",
					morale: 74,
					form: 6.3,
					fitness: 94,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 5,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 450,
					},
					reputation: 69,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 5,
					name: "Dara O'Shea",
					age: 25,
					nationality: "Republic of Ireland",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 75,
					potential: 80,
					attributes: {
						pace: 70,
						shooting: 48,
						passing: 66,
						dribbling: 60,
						defending: 78,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 45000,
					contract_end: "2028-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 80,
						loyalty: 80,
						leadership: 76,
						temperament: 82,
					},
					agent: {
						name: "New Era Global Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 79,
					form: 7.0,
					fitness: 94,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 2,
						assists: 1,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2460,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 28,
					name: "Josh Brownhill",
					age: 28,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 74,
					potential: 75,
					attributes: {
						pace: 68,
						shooting: 68,
						passing: 74,
						dribbling: 72,
						defending: 72,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 52000,
					contract_end: "2027-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 76,
						loyalty: 86,
						leadership: 84,
						temperament: 82,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "key_player",
					morale: 82,
					form: 7.2,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 5,
						assists: 6,
						yellow_cards: 7,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2640,
					},
					reputation: 73,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 14,
					name: "Connor Roberts",
					age: 29,
					nationality: "Wales",
					position: "RB",
					preferred_positions: ["RB", "RWB"],
					overall: 73,
					potential: 73,
					attributes: {
						pace: 76,
						shooting: 58,
						passing: 68,
						dribbling: 68,
						defending: 74,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 42000,
					contract_end: "2027-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 74,
						loyalty: 82,
						leadership: 76,
						temperament: 80,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 78,
					form: 6.9,
					fitness: 93,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 26,
						goals: 1,
						assists: 4,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2220,
					},
					reputation: 72,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 3,
					name: "Charlie Taylor",
					age: 31,
					nationality: "England",
					position: "LB",
					preferred_positions: ["LB"],
					overall: 73,
					potential: 73,
					attributes: {
						pace: 74,
						shooting: 54,
						passing: 68,
						dribbling: 68,
						defending: 75,
						physical: 72,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 48000,
					contract_end: "2026-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 72,
						loyalty: 88,
						leadership: 80,
						temperament: 84,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.0,
					fitness: 91,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 0,
						assists: 3,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2340,
					},
					reputation: 72,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 8,
					name: "Josh Cullen",
					age: 28,
					nationality: "Republic of Ireland",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 75,
					potential: 76,
					attributes: {
						pace: 68,
						shooting: 66,
						passing: 76,
						dribbling: 72,
						defending: 76,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 52000,
					contract_end: "2027-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 76,
						loyalty: 82,
						leadership: 80,
						temperament: 84,
					},
					agent: {
						name: "New Era Global Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "key_player",
					morale: 81,
					form: 7.2,
					fitness: 95,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 3,
						assists: 4,
						yellow_cards: 8,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2640,
					},
					reputation: 74,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 24,
					name: "Luca Koleosho",
					age: 20,
					nationality: "USA",
					position: "RW",
					preferred_positions: ["RW", "LW"],
					overall: 72,
					potential: 83,
					attributes: {
						pace: 86,
						shooting: 68,
						passing: 68,
						dribbling: 78,
						defending: 44,
						physical: 66,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 32000,
					contract_end: "2028-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 88,
						loyalty: 78,
						leadership: 62,
						temperament: 74,
					},
					agent: {
						name: "Wasserman Media Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.1,
					fitness: 97,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 7,
						assists: 6,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2280,
					},
					reputation: 70,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 47,
					name: "Wilson Odobert",
					age: 19,
					nationality: "France",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 72,
					potential: 85,
					attributes: {
						pace: 90,
						shooting: 68,
						passing: 66,
						dribbling: 78,
						defending: 42,
						physical: 64,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 28000,
					contract_end: "2029-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 90,
						loyalty: 74,
						leadership: 58,
						temperament: 72,
					},
					agent: {
						name: "Jacques-Etienne Lastere",
						commission_rate: 0.10,
						negotiation_difficulty: 7,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.2,
					fitness: 98,
					sharpness: 93,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 8,
						assists: 7,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 2160,
					},
					reputation: 71,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 9,
					name: "Jay Rodriguez",
					age: 35,
					nationality: "England",
					position: "ST",
					preferred_positions: ["ST", "CAM"],
					overall: 74,
					potential: 74,
					attributes: {
						pace: 68,
						shooting: 76,
						passing: 72,
						dribbling: 72,
						defending: 50,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 65000,
					contract_end: "2026-06-30",
					market_value: 4000000,
					release_clause: null,
					personality: {
						professionalism: 92,
						ambition: 70,
						loyalty: 92,
						leadership: 88,
						temperament: 86,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.06,
						negotiation_difficulty: 4,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.1,
					fitness: 89,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 14,
						assists: 5,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2430,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 6,
					name: "Josh Brownhill",
					age: 28,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 74,
					potential: 75,
					attributes: {
						pace: 68,
						shooting: 46,
						passing: 66,
						dribbling: 60,
						defending: 77,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 42000,
					contract_end: "2026-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 74,
						loyalty: 84,
						leadership: 78,
						temperament: 82,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 92,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 23,
						goals: 1,
						assists: 0,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 1890,
					},
					reputation: 72,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 23,
					name: "Lucas Pires",
					age: 26,
					nationality: "Brazil",
					position: "LB",
					preferred_positions: ["LB", "LWB"],
					overall: 72,
					potential: 76,
					attributes: {
						pace: 78,
						shooting: 58,
						passing: 70,
						dribbling: 72,
						defending: 70,
						physical: 70,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 35000,
					contract_end: "2027-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 78,
						loyalty: 78,
						leadership: 68,
						temperament: 76,
					},
					agent: {
						name: "Giuliano Bertolucci",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.7,
					fitness: 94,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 20,
						goals: 1,
						assists: 3,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1440,
					},
					reputation: 70,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 16,
					name: "Vitinho",
					age: 26,
					nationality: "Brazil",
					position: "RW",
					preferred_positions: ["RW", "RWB"],
					overall: 73,
					potential: 76,
					attributes: {
						pace: 82,
						shooting: 66,
						passing: 70,
						dribbling: 76,
						defending: 62,
						physical: 68,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 38000,
					contract_end: "2027-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 80,
						loyalty: 76,
						leadership: 66,
						temperament: 74,
					},
					agent: {
						name: "Giuliano Bertolucci",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 95,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 3,
						assists: 5,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1560,
					},
					reputation: 71,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 19,
					name: "Zeki Amdouni",
					age: 24,
					nationality: "Switzerland",
					position: "ST",
					preferred_positions: ["ST", "RW"],
					overall: 74,
					potential: 79,
					attributes: {
						pace: 80,
						shooting: 74,
						passing: 68,
						dribbling: 74,
						defending: 46,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 42000,
					contract_end: "2028-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 82,
						loyalty: 78,
						leadership: 68,
						temperament: 76,
					},
					agent: {
						name: "ROGON Sportmanagement",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 95,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 8,
						assists: 3,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1680,
					},
					reputation: 72,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 25,
					name: "Mike Trésor",
					age: 25,
					nationality: "Belgium",
					position: "LW",
					preferred_positions: ["LW", "CAM"],
					overall: 73,
					potential: 78,
					attributes: {
						pace: 82,
						shooting: 70,
						passing: 72,
						dribbling: 78,
						defending: 48,
						physical: 66,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 38000,
					contract_end: "2028-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 80,
						loyalty: 76,
						leadership: 66,
						temperament: 74,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 94,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 21,
						goals: 4,
						assists: 4,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1380,
					},
					reputation: 71,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 17,
					name: "Lyle Foster",
					age: 24,
					nationality: "South Africa",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 74,
					potential: 80,
					attributes: {
						pace: 80,
						shooting: 76,
						passing: 64,
						dribbling: 70,
						defending: 44,
						physical: 78,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 45000,
					contract_end: "2028-06-30",
					market_value: 20000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 84,
						loyalty: 78,
						leadership: 70,
						temperament: 76,
					},
					agent: {
						name: "Base Soccer Agency",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 79,
					form: 7.0,
					fitness: 91,
					sharpness: 89,
					injury_status: "minor_knock",
					suspension: 0,
					match_stats: {
						appearances: 23,
						goals: 9,
						assists: 2,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1710,
					},
					reputation: 72,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 11,
					name: "Jaidon Anthony",
					age: 24,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 72,
					potential: 77,
					attributes: {
						pace: 82,
						shooting: 68,
						passing: 70,
						dribbling: 76,
						defending: 48,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 32000,
					contract_end: "2027-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 80,
						loyalty: 80,
						leadership: 62,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 74,
					form: 6.5,
					fitness: 94,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 16,
						goals: 2,
						assists: 3,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 3,
						minutes_played: 900,
					},
					reputation: 70,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 7,
					name: "Jóhann Berg Guðmundsson",
					age: 34,
					nationality: "Iceland",
					position: "RW",
					preferred_positions: ["RW", "RM"],
					overall: 71,
					potential: 71,
					attributes: {
						pace: 70,
						shooting: 70,
						passing: 74,
						dribbling: 72,
						defending: 54,
						physical: 68,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 45000,
					contract_end: "2026-06-30",
					market_value: 3000000,
					release_clause: null,
					personality: {
						professionalism: 90,
						ambition: 68,
						loyalty: 90,
						leadership: 82,
						temperament: 86,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.07,
						negotiation_difficulty: 4,
					},
					squad_role: "backup",
					morale: 76,
					form: 6.5,
					fitness: 88,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 15,
						goals: 2,
						assists: 3,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 3,
						minutes_played: 810,
					},
					reputation: 72,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 4,
					name: "Jack Cork",
					age: 35,
					nationality: "England",
					position: "CDM",
					preferred_positions: ["CDM", "CM"],
					overall: 71,
					potential: 71,
					attributes: {
						pace: 64,
						shooting: 62,
						passing: 72,
						dribbling: 68,
						defending: 74,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 52000,
					contract_end: "2026-06-30",
					market_value: 2000000,
					release_clause: null,
					personality: {
						professionalism: 92,
						ambition: 68,
						loyalty: 92,
						leadership: 86,
						temperament: 88,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.06,
						negotiation_difficulty: 4,
					},
					squad_role: "backup",
					morale: 78,
					form: 6.5,
					fitness: 87,
					sharpness: 85,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 12,
						goals: 0,
						assists: 1,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 3,
						minutes_played: 630,
					},
					reputation: 73,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 26,
					name: "Hannes Delcroix",
					age: 25,
					nationality: "Belgium",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 73,
					potential: 77,
					attributes: {
						pace: 72,
						shooting: 44,
						passing: 66,
						dribbling: 62,
						defending: 76,
						physical: 76,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 35000,
					contract_end: "2027-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 78,
						loyalty: 80,
						leadership: 72,
						temperament: 80,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.7,
					fitness: 93,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 18,
						goals: 0,
						assists: 0,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1260,
					},
					reputation: 71,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 29,
					name: "Anass Zaroury",
					age: 23,
					nationality: "Morocco",
					position: "LW",
					preferred_positions: ["LW", "CAM"],
					overall: 71,
					potential: 78,
					attributes: {
						pace: 82,
						shooting: 68,
						passing: 70,
						dribbling: 76,
						defending: 46,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 28000,
					contract_end: "2027-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 82,
						loyalty: 78,
						leadership: 60,
						temperament: 72,
					},
					agent: {
						name: "You First Sports",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "prospect",
					morale: 75,
					form: 6.5,
					fitness: 96,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 14,
						goals: 2,
						assists: 2,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 720,
					},
					reputation: 68,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 42,
					name: "Michael Mellon",
					age: 19,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 64,
					potential: 76,
					attributes: {
						pace: 70,
						shooting: 62,
						passing: 66,
						dribbling: 68,
						defending: 58,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 10000,
					contract_end: "2027-06-30",
					market_value: 4000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 84,
						loyalty: 86,
						leadership: 56,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 4,
					},
					squad_role: "prospect",
					morale: 75,
					form: 6.1,
					fitness: 98,
					sharpness: 82,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 6,
						goals: 0,
						assists: 1,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 210,
					},
					reputation: 60,
					homegrown_status: "homegrown_club",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
			],
		},
		{
			id: 20,
			name: "Sunderland",
			founded: 1879,
			stadium: "Stadium of Light",
			capacity: 49000,
			budget: 68000000,
			wage_budget_weekly: 600000,
			cash_reserves: 9000000,
			debt: 45000000,
			reputation: 69,
			fanbase_size: 1100000,
			attendance_rate: 0.98,
			commercial_power: 66,
			facilities: {
				training: 71,
				youth: 72,
				medical: 72,
				stadium_condition: 78,
			},
			manager: {
				name: "Régis Le Bris",
				age: 48,
				nationality: "France",
				reputation: 68,
				preferred_formation: "4-3-3",
				tactical_style: "Attacking",
				man_management: 72,
				tactical_knowledge: 74,
			},
			preferred_formation: "4-3-3",
			squad: [
				{
					number: 1,
					name: "Anthony Patterson",
					age: 24,
					nationality: "England",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 74,
					potential: 82,
					attributes: {
						pace: 54,
						shooting: 36,
						passing: 66,
						dribbling: 56,
						defending: 42,
						physical: 70,
						goalkeeping: {
							diving: 76,
							handling: 75,
							kicking: 72,
							reflexes: 77,
							speed: 55,
							positioning: 75,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 35000,
					contract_end: "2028-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 84,
						loyalty: 84,
						leadership: 72,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.1,
					fitness: 96,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 0,
						assists: 0,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 12,
						minutes_played: 2700,
					},
					reputation: 72,
					homegrown_status: "homegrown_club",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 21,
					name: "Simon Moore",
					age: 34,
					nationality: "England",
					position: "GK",
					preferred_positions: ["GK"],
					overall: 70,
					potential: 70,
					attributes: {
						pace: 50,
						shooting: 34,
						passing: 60,
						dribbling: 54,
						defending: 40,
						physical: 68,
						goalkeeping: {
							diving: 72,
							handling: 71,
							kicking: 66,
							reflexes: 73,
							speed: 51,
							positioning: 72,
						},
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_medium",
					salary_weekly: 22000,
					contract_end: "2026-06-30",
					market_value: 1000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 68,
						loyalty: 82,
						leadership: 76,
						temperament: 84,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 4,
					},
					squad_role: "backup",
					morale: 74,
					form: 6.3,
					fitness: 94,
					sharpness: 86,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 4,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 360,
					},
					reputation: 69,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 5,
					name: "Danny Batth",
					age: 34,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 72,
					potential: 72,
					attributes: {
						pace: 64,
						shooting: 44,
						passing: 64,
						dribbling: 58,
						defending: 76,
						physical: 80,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 38000,
					contract_end: "2026-06-30",
					market_value: 2000000,
					release_clause: null,
					personality: {
						professionalism: 90,
						ambition: 70,
						loyalty: 88,
						leadership: 88,
						temperament: 86,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 4,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.0,
					fitness: 90,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 2,
						assists: 1,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 11,
						minutes_played: 2460,
					},
					reputation: 71,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 13,
					name: "Luke O'Nien",
					age: 30,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB", "CDM", "RB"],
					overall: 72,
					potential: 72,
					attributes: {
						pace: 72,
						shooting: 56,
						passing: 68,
						dribbling: 66,
						defending: 74,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 42000,
					contract_end: "2027-06-30",
					market_value: 6000000,
					release_clause: null,
					personality: {
						professionalism: 88,
						ambition: 76,
						loyalty: 90,
						leadership: 84,
						temperament: 82,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 83,
					form: 7.1,
					fitness: 95,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 3,
						assists: 2,
						yellow_cards: 7,
						red_cards: 0,
						clean_sheets: 11,
						minutes_played: 2550,
					},
					reputation: 70,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 6,
					name: "Dennis Cirkin",
					age: 22,
					nationality: "England",
					position: "LB",
					preferred_positions: ["LB", "CB"],
					overall: 74,
					potential: 82,
					attributes: {
						pace: 78,
						shooting: 54,
						passing: 68,
						dribbling: 70,
						defending: 76,
						physical: 76,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 38000,
					contract_end: "2028-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 84,
						loyalty: 82,
						leadership: 70,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 96,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 1,
						assists: 4,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 11,
						minutes_played: 2460,
					},
					reputation: 72,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 32,
					name: "Trai Hume",
					age: 22,
					nationality: "Northern Ireland",
					position: "RB",
					preferred_positions: ["RB", "CB"],
					overall: 72,
					potential: 79,
					attributes: {
						pace: 78,
						shooting: 56,
						passing: 66,
						dribbling: 68,
						defending: 74,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 28000,
					contract_end: "2027-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 82,
						loyalty: 84,
						leadership: 68,
						temperament: 78,
					},
					agent: {
						name: "New Era Global Sports",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.0,
					fitness: 96,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 27,
						goals: 1,
						assists: 3,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2340,
					},
					reputation: 70,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 4,
					name: "Dan Neil",
					age: 23,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 73,
					potential: 80,
					attributes: {
						pace: 70,
						shooting: 66,
						passing: 74,
						dribbling: 72,
						defending: 72,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 32000,
					contract_end: "2028-06-30",
					market_value: 14000000,
					release_clause: null,
					personality: {
						professionalism: 84,
						ambition: 82,
						loyalty: 88,
						leadership: 76,
						temperament: 80,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 82,
					form: 7.2,
					fitness: 96,
					sharpness: 92,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 30,
						goals: 4,
						assists: 5,
						yellow_cards: 6,
						red_cards: 0,
						clean_sheets: 11,
						minutes_played: 2640,
					},
					reputation: 71,
					homegrown_status: "homegrown_club",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 24,
					name: "Chris Rigg",
					age: 17,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 68,
					potential: 86,
					attributes: {
						pace: 74,
						shooting: 66,
						passing: 70,
						dribbling: 74,
						defending: 62,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 15000,
					contract_end: "2027-06-30",
					market_value: 14000000,
					release_clause: 40000000,
					personality: {
						professionalism: 80,
						ambition: 92,
						loyalty: 85,
						leadership: 65,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "rotation",
					morale: 83,
					form: 7.0,
					fitness: 98,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 3,
						assists: 4,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 7,
						minutes_played: 1560,
					},
					reputation: 66,
					homegrown_status: "homegrown_club",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 7,
					name: "Jobe Bellingham",
					age: 19,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CAM"],
					overall: 72,
					potential: 87,
					attributes: {
						pace: 76,
						shooting: 70,
						passing: 72,
						dribbling: 76,
						defending: 66,
						physical: 72,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_high",
					salary_weekly: 32000,
					contract_end: "2028-06-30",
					market_value: 22000000,
					release_clause: 60000000,
					personality: {
						professionalism: 84,
						ambition: 92,
						loyalty: 78,
						leadership: 72,
						temperament: 80,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.10,
						negotiation_difficulty: 8,
					},
					squad_role: "key_player",
					morale: 86,
					form: 7.5,
					fitness: 98,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 31,
						goals: 9,
						assists: 7,
						yellow_cards: 4,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2700,
					},
					reputation: 73,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 39,
					name: "Patrick Roberts",
					age: 27,
					nationality: "England",
					position: "RW",
					preferred_positions: ["RW", "CAM"],
					overall: 75,
					potential: 76,
					attributes: {
						pace: 78,
						shooting: 72,
						passing: 76,
						dribbling: 80,
						defending: 48,
						physical: 64,
					},
					preferred_foot: "left",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 48000,
					contract_end: "2027-06-30",
					market_value: 18000000,
					release_clause: null,
					personality: {
						professionalism: 82,
						ambition: 78,
						loyalty: 82,
						leadership: 74,
						temperament: 78,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 81,
					form: 7.2,
					fitness: 94,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 29,
						goals: 8,
						assists: 9,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 9,
						minutes_played: 2430,
					},
					reputation: 74,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 11,
					name: "Jack Clarke",
					age: 24,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 76,
					potential: 82,
					attributes: {
						pace: 88,
						shooting: 74,
						passing: 72,
						dribbling: 82,
						defending: 46,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "high_medium",
					salary_weekly: 52000,
					contract_end: "2028-06-30",
					market_value: 32000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 86,
						loyalty: 80,
						leadership: 70,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.09,
						negotiation_difficulty: 7,
					},
					squad_role: "star_player",
					morale: 85,
					form: 7.7,
					fitness: 96,
					sharpness: 94,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 31,
						goals: 14,
						assists: 10,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 10,
						minutes_played: 2700,
					},
					reputation: 75,
					homegrown_status: "homegrown_nation",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 14,
					name: "Romaine Mundle",
					age: 21,
					nationality: "England",
					position: "LW",
					preferred_positions: ["LW", "RW"],
					overall: 70,
					potential: 80,
					attributes: {
						pace: 86,
						shooting: 66,
						passing: 66,
						dribbling: 76,
						defending: 42,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 22000,
					contract_end: "2028-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 84,
						loyalty: 80,
						leadership: 60,
						temperament: 74,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.8,
					fitness: 97,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 22,
						goals: 4,
						assists: 3,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 5,
						minutes_played: 1380,
					},
					reputation: 68,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 9,
					name: "Eliezer Mayenda",
					age: 19,
					nationality: "Spain",
					position: "ST",
					preferred_positions: ["ST", "RW"],
					overall: 69,
					potential: 82,
					attributes: {
						pace: 82,
						shooting: 70,
						passing: 64,
						dribbling: 72,
						defending: 40,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 18000,
					contract_end: "2028-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 88,
						loyalty: 78,
						leadership: 58,
						temperament: 74,
					},
					agent: {
						name: "Promoesport",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 79,
					form: 6.9,
					fitness: 97,
					sharpness: 90,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 24,
						goals: 7,
						assists: 2,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1560,
					},
					reputation: 66,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 20,
					name: "Wilson Isidor",
					age: 24,
					nationality: "France",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 73,
					potential: 79,
					attributes: {
						pace: 82,
						shooting: 74,
						passing: 66,
						dribbling: 72,
						defending: 44,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 3,
					work_rate: "high_medium",
					salary_weekly: 38000,
					contract_end: "2028-06-30",
					market_value: 16000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 82,
						loyalty: 76,
						leadership: 66,
						temperament: 74,
					},
					agent: {
						name: "Jacques-Etienne Lastere",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "first_team_regular",
					morale: 80,
					form: 7.1,
					fitness: 95,
					sharpness: 91,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 28,
						goals: 13,
						assists: 4,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 8,
						minutes_played: 2280,
					},
					reputation: 71,
					homegrown_status: "foreign",
					fan_favorite: true,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 18,
					name: "Nazarii Rusyn",
					age: 25,
					nationality: "Ukraine",
					position: "ST",
					preferred_positions: ["ST"],
					overall: 71,
					potential: 76,
					attributes: {
						pace: 76,
						shooting: 72,
						passing: 64,
						dribbling: 68,
						defending: 42,
						physical: 76,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 28000,
					contract_end: "2027-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 78,
						loyalty: 80,
						leadership: 68,
						temperament: 76,
					},
					agent: {
						name: "Zoran Stojadinovic",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.7,
					fitness: 94,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 20,
						goals: 5,
						assists: 2,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1200,
					},
					reputation: 69,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 3,
					name: "Aji Alese",
					age: 24,
					nationality: "England",
					position: "CB",
					preferred_positions: ["CB", "LB"],
					overall: 71,
					potential: 77,
					attributes: {
						pace: 76,
						shooting: 48,
						passing: 66,
						dribbling: 64,
						defending: 73,
						physical: 74,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "medium_high",
					salary_weekly: 28000,
					contract_end: "2027-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 80,
						loyalty: 82,
						leadership: 68,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 77,
					form: 6.8,
					fitness: 94,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 18,
						goals: 0,
						assists: 1,
						yellow_cards: 3,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1440,
					},
					reputation: 69,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 2,
					name: "Leo Hjelde",
					age: 21,
					nationality: "Norway",
					position: "LB",
					preferred_positions: ["LB", "CB"],
					overall: 69,
					potential: 77,
					attributes: {
						pace: 74,
						shooting: 50,
						passing: 66,
						dribbling: 66,
						defending: 72,
						physical: 72,
					},
					preferred_foot: "left",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_medium",
					salary_weekly: 20000,
					contract_end: "2027-06-30",
					market_value: 8000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 82,
						loyalty: 80,
						leadership: 64,
						temperament: 76,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "backup",
					morale: 75,
					form: 6.5,
					fitness: 96,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 14,
						goals: 0,
						assists: 1,
						yellow_cards: 2,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 900,
					},
					reputation: 67,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 23,
					name: "Adil Aouchiche",
					age: 22,
					nationality: "France",
					position: "CAM",
					preferred_positions: ["CAM", "CM"],
					overall: 71,
					potential: 79,
					attributes: {
						pace: 74,
						shooting: 68,
						passing: 74,
						dribbling: 78,
						defending: 52,
						physical: 62,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 28000,
					contract_end: "2027-06-30",
					market_value: 12000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 82,
						loyalty: 76,
						leadership: 62,
						temperament: 72,
					},
					agent: {
						name: "Jacques-Etienne Lastere",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "rotation",
					morale: 76,
					form: 6.7,
					fitness: 93,
					sharpness: 88,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 19,
						goals: 3,
						assists: 4,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 4,
						minutes_played: 1140,
					},
					reputation: 69,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 8,
					name: "Alan Browne",
					age: 29,
					nationality: "Republic of Ireland",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 73,
					potential: 74,
					attributes: {
						pace: 70,
						shooting: 68,
						passing: 72,
						dribbling: 70,
						defending: 72,
						physical: 74,
					},
					preferred_foot: "right",
					weak_foot: 4,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 42000,
					contract_end: "2027-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 86,
						ambition: 74,
						loyalty: 82,
						leadership: 82,
						temperament: 82,
					},
					agent: {
						name: "New Era Global Sports",
						commission_rate: 0.07,
						negotiation_difficulty: 5,
					},
					squad_role: "rotation",
					morale: 78,
					form: 6.9,
					fitness: 93,
					sharpness: 89,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 23,
						goals: 3,
						assists: 3,
						yellow_cards: 5,
						red_cards: 0,
						clean_sheets: 6,
						minutes_played: 1680,
					},
					reputation: 72,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "available",
					on_loan: false,
					loan: null,
				},
				{
					number: 10,
					name: "Abdoullah Ba",
					age: 20,
					nationality: "Mauritania",
					position: "RW",
					preferred_positions: ["RW", "LW"],
					overall: 68,
					potential: 80,
					attributes: {
						pace: 86,
						shooting: 66,
						passing: 64,
						dribbling: 74,
						defending: 42,
						physical: 64,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 4,
					work_rate: "medium_medium",
					salary_weekly: 18000,
					contract_end: "2028-06-30",
					market_value: 10000000,
					release_clause: null,
					personality: {
						professionalism: 76,
						ambition: 86,
						loyalty: 78,
						leadership: 56,
						temperament: 72,
					},
					agent: {
						name: "Stellar Group",
						commission_rate: 0.09,
						negotiation_difficulty: 6,
					},
					squad_role: "prospect",
					morale: 77,
					form: 6.6,
					fitness: 97,
					sharpness: 87,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 16,
						goals: 2,
						assists: 2,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 3,
						minutes_played: 840,
					},
					reputation: 65,
					homegrown_status: "foreign",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 22,
					name: "Tom Watson",
					age: 20,
					nationality: "England",
					position: "CM",
					preferred_positions: ["CM", "CDM"],
					overall: 66,
					potential: 77,
					attributes: {
						pace: 68,
						shooting: 62,
						passing: 68,
						dribbling: 68,
						defending: 68,
						physical: 68,
					},
					preferred_foot: "right",
					weak_foot: 3,
					skill_moves: 2,
					work_rate: "high_high",
					salary_weekly: 12000,
					contract_end: "2027-06-30",
					market_value: 5000000,
					release_clause: null,
					personality: {
						professionalism: 80,
						ambition: 82,
						loyalty: 86,
						leadership: 62,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 5,
					},
					squad_role: "prospect",
					morale: 76,
					form: 6.3,
					fitness: 98,
					sharpness: 85,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 10,
						goals: 0,
						assists: 1,
						yellow_cards: 1,
						red_cards: 0,
						clean_sheets: 2,
						minutes_played: 450,
					},
					reputation: 63,
					homegrown_status: "homegrown_club",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
				{
					number: 33,
					name: "Ben Middlemas",
					age: 18,
					nationality: "Scotland",
					position: "CB",
					preferred_positions: ["CB"],
					overall: 62,
					potential: 76,
					attributes: {
						pace: 70,
						shooting: 40,
						passing: 60,
						dribbling: 58,
						defending: 68,
						physical: 70,
					},
					preferred_foot: "right",
					weak_foot: 2,
					skill_moves: 1,
					work_rate: "medium_high",
					salary_weekly: 6000,
					contract_end: "2027-06-30",
					market_value: 2000000,
					release_clause: null,
					personality: {
						professionalism: 78,
						ambition: 84,
						loyalty: 86,
						leadership: 54,
						temperament: 76,
					},
					agent: {
						name: "Unique Sports Group",
						commission_rate: 0.08,
						negotiation_difficulty: 4,
					},
					squad_role: "prospect",
					morale: 75,
					form: 6.0,
					fitness: 98,
					sharpness: 80,
					injury_status: "fit",
					suspension: 0,
					match_stats: {
						appearances: 4,
						goals: 0,
						assists: 0,
						yellow_cards: 0,
						red_cards: 0,
						clean_sheets: 1,
						minutes_played: 180,
					},
					reputation: 58,
					homegrown_status: "homegrown_nation",
					fan_favorite: false,
					transfer_status: "not_for_sale",
					on_loan: false,
					loan: null,
				},
			],
		},
	],
};

export { LEAGUES_DATA };
