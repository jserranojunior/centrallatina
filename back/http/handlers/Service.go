package handlers

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/models"
	"gorm.io/gorm"
)

// GetService Edit
func GetService(c *gin.Context) {
	var service models.Service
	DB.Preload(
		"OpenAreaServices", func(db *gorm.DB) *gorm.DB {
			return db.Where("status", 0).Order("area_services.id DESC")
		}).Preload(
		"ClosedAreaServices", func(db *gorm.DB) *gorm.DB {
			return db.Where("status", 1).Order("area_services.id ASC")
		}).Order("id desc").First(&service, c.Param("id"))
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

func AreaServiceUpdate(c *gin.Context) {
	var area_service models.AreaService
	DB.Where("id", c.Param("id")).Find(&area_service)
	if err := c.Bind(&area_service); err != nil {
		c.JSON(400, gin.H{
			"err": err,
		})
	}
	DB.Save(&area_service)
	c.JSON(200, gin.H{
		"data": area_service,
	})
}

//  GetAllServices getAll
func GetAllServices(c *gin.Context) {
	var services []models.Service
	DB.Preload("OpenAreaServices").Where("status", 0).Find(&services)
	c.JSON(200, gin.H{
		"data": &services,
	})
}

//  GetAllServices getAll
func GetAllServicesFinished(c *gin.Context) {
	var services []models.Service
	DB.Preload("ClosedAreaServices").Where("status", 1).Find(&services)
	c.JSON(200, gin.H{
		"data": &services,
	})
}

//  GetServicesWithOpenArea
func GetServicesWithOpenArea(c *gin.Context) {
	var service models.Service
	DB.Preload(
		"OpenAreaServices", func(db *gorm.DB) *gorm.DB {
			return db.Where("status", 0).Order("area_services.id DESC")
		}).Order("id desc").First(&service, c.Param("id"))

	c.JSON(200, gin.H{
		"data": &service,
	})
}

//  GetAllServices getAll
func GetAllServicesPendente(c *gin.Context) {
	var services []models.Service
	DB.Preload(
		"OpenAreaServices", func(db *gorm.DB) *gorm.DB {
			return db.Where("status", 0).Order("area_services.id DESC")
		}).Order("id desc").Where("status", 0).Find(&services)

	c.JSON(200, gin.H{
		"data": &services,
	})
}

//  GetAllServices getAll
func GetAllServicesType(c *gin.Context) {
	var services []models.Service
	DB.Where("type", c.Param("type"), "status", 2).Preload("User").Find(&services)
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
