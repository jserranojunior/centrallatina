package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/models"
)

//Select return CategoriesBillsToPay
func SelectCategoriesBilsToPay(c *gin.Context) {
	var categories []models.CategoriasContasAPagars
	DB.First(&categories, 1)
	c.JSON(http.StatusOK, gin.H{"data": categories})
}

//SelectAll return CategoriesBillsToPay
func SelectAllCategoriesBillsToPay(c *gin.Context) {
	var categories []models.CategoriasContasAPagars
	DB.Find(&categories)
	c.JSON(http.StatusOK, gin.H{"data": categories})
}
