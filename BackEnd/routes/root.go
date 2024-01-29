package routes

import (
	"github.com/3boku/Swap/BackEnd/database"
	"github.com/3boku/Swap/BackEnd/handler"
	"github.com/gin-gonic/gin"
)

func NewRouter(port string) {
	r := gin.Default()
	db := database.MySQLInit()

	r.POST("/signup", func(c *gin.Context) {
		handler.SignUp(db, c)
	})

	r.Run(port)
}
