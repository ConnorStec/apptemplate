BEGIN;

CREATE TABLE listings (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  make TEXT,
  model TEXT,
  mileage INTEGER,
  mpgcity INTEGER,
  mpghighway INTEGER,
  color TEXT,
  engine TEXT,
  transmission TEXT,
  price INTEGER,
  details JSONB,
  created TIMESTAMP NOT NULL DEFAULT NOW(),
  updated TIMESTAMP NOT NULL DEFAULT NOW(),
  deactivated TIMESTAMP
);