package handlers

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/models"
)

// GetService Edit
func GetService(c *gin.Context) {
	var service models.Service
	DB.Preload("User").First(&service, c.Param("id"))
	c.JSON(200, gin.H{
		"data": service,
	})
}

//ServiceUpdate Put
func ServiceUpdate(c *gin.Context) {
	var service models.Service
	DB.Where("id", c.Param("id")).Find(&service)
	if err := c.Bind(&service); err != nil {
		c.JSON(400, gin.H{
			"err": err,
		})
	}
	DB.Save(&service)
	c.JSON(200, gin.H{
		"data": service,
	})
}

//  GetAllServices getAll
func GetAllServices(c *gin.Context) {
	var services []models.Service
	DB.Preload("User").Find(&services)

	c.JSON(200, gin.H{
		"data": &services,
	})
}

//  GetAllServices getAll
func GetAllServicesType(c *gin.Context) {
	var services []models.Service

	DB.Where("type", c.Param("type")).Preload("User").Find(&services)

	c.JSON(200, gin.H{
		"data": &services,
	})
}

// UserCreate create
func ServiceCreate(c *gin.Context) {
	var newService models.Service
	if err := c.BindJSON(&newService); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"erro": err,
		})
	}

	DB.Create(&newService)
	c.JSON(200, gin.H{
		"data": &newService,
	})
}
