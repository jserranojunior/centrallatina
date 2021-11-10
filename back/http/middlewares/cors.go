package middlewares

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

// CORSMiddleware enable router another domain
var CORSMiddleware gin.HandlerFunc = func(c *gin.Context) {

	fmt.Println("ROLANDO O CORS")

	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Credentials", "true")
	c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Header("Access-Control-Allow-Methods", "POST,HEAD,PATCH, OPTIONS, GET, PUT, DELETE")

	if c.Request.Method == "OPTIONS" {
		c.AbortWithStatus(204)
		return
	}

	c.Next()
}
