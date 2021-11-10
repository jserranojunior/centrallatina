package handlers

import (
	"net/http"

	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/models"
)

func StorePaidBills(c *gin.Context) {
	var paid models.ContasPagas
	if err := c.Bind(&paid); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"erro": err,
		})
	}
	DB.Create(&paid)
	c.JSON(200, gin.H{
		"data": paid,
	})
}

// DeletePaidBills return Delete paid bills
func DeletePaidBills(c *gin.Context) {
	var paid models.ContasPagas
	id := c.Param("id")
	DB.Unscoped().Delete(&paid, id)
	c.JSON(http.StatusOK, gin.H{"data": "Deleted"})
}

// EditPaidBills return edit paid bills
func EditPaidBills(c *gin.Context) {
	var paid models.ContasPagas
	id := c.Param("id")
	DB.Where("id", id).Find(&paid)
	c.JSON(http.StatusOK, gin.H{"data": paid})
}
