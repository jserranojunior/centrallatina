package handlers

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/models"
)

// AreaServiceCreate create
func AreaServiceCreate(c *gin.Context) {
	var newAreaService models.AreaService
	if err := c.BindJSON(&newAreaService); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"erro": err,
		})
	}
	DB.Create(&newAreaService)
	c.JSON(200, gin.H{
		"data": &newAreaService,
	})
}
