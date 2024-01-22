package main

import (
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"log"
)

func main() {
	r := gin.Default()

	r.GET("/form", func(c *gin.Context) {
		form, _ := c.MultipartForm()
		files := form.File["upload[]"]

		for _, file := range files {
			log.Println(file.Filename)

			// Upload the file to specific dst.
			c.SaveUploadedFile(file, "./"+file.Filename)
		}
		c.String(200, "Upload successful")
	})
	r.Run(":8080")
}
