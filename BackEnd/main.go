package main

import (
	"github.com/gin-gonic/gin"
	"log"
)

func main() {
	router := gin.Default()

	router.POST("/upload", func(c *gin.Context) {
		file, _ := c.FormFile("file")
		log.Println(file.Filename)

		// Upload the file to specific dst.
		err := c.SaveUploadedFile(file, "./"+file.Filename)

		if err != nil {
			c.String(500, "Failed to upload")
			return
		}
		c.String(200, "Upload successful")
	})
	router.Run(":8080")
}
