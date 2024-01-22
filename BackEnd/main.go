package main

import (
	"github.com/3boku/Swap/BackEnd/database"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	database.MySQLInit()
}
