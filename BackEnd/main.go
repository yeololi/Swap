package main

import (
	"github.com/3boku/Swap/BackEnd/routes"
	"github.com/joho/godotenv"
	"log"
	"os"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("failed to load env", err)
	}

	port := os.Getenv("PORT")
	routes.NewRouter(port)
}
