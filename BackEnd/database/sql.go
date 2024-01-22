package database

import (
	"database/sql"
	"github.com/joho/godotenv"
	"log"
	"os"
)

func MySQLInit() *sql.DB {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("failed to load env", err)
	}

	db, err := sql.Open("mysql", os.Getenv("DSN"))
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}
	return db
}
