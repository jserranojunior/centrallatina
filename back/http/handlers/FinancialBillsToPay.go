package handlers

import (
	"fmt"
	"net/http"

	// "alvitre.com.br/intellect/api/financial/valuesbillstopay"
	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/helpers"
	"github.com/jserranojunior/intellect/backgo/models"
	"gorm.io/gorm"

	"errors"
)

func EditBillsToPayMonth(c *gin.Context) {
	id := c.Param("id")
	dateyearmonth := c.Param("dataanomes")
	dateStartRune := []rune(dateyearmonth)
	dateStart := string(dateStartRune[0:7])
	queryValores := "SUBSTRING(data_pagamento,1,7) = (?)  OR SUBSTRING(data_pagamento,1,7) < ?"
	var contas []models.ContasAPagars
	DB.Where("id", id).Preload("ValoresContasAPagar", queryValores, dateStart, dateStart).Find(&contas)
	c.JSON(http.StatusOK, gin.H{"data": contas})
}

func StoreBillsToPay(c *gin.Context) {
	tokenID := c.GetUint("id")
	var contas models.ContasAPagars
	if err := c.Bind(&contas); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"erro": err,
		})
	}
	contas.UserId = tokenID
	DB.Create(&contas)
	c.JSON(http.StatusCreated, gin.H{"data": contas})
}

//SelectAll return BillsToPay
func SelectAllBillsToPay(c *gin.Context) {
	var contas []models.ContasAPagars
	DB.Find(&contas)
	c.JSON(http.StatusOK, gin.H{"data": contas})
}

// Envio o ID e a DATA DE PAGAMENTO
// ATUALIZO A CONTAS A PAGAR NO ID
// VERIFICO SE EXISTE UMA CONTA USANDO O ID E A DATA DE PAGAMENTO
// SE NÂO TIVER EU INSIRO, SE TIVER EU ATUALIZO

func UpdateBillsToPay(c *gin.Context) {
	var contas models.ContasAPagars
	var valores models.ValoresContasAPagars
	dateyearmonth := c.Params.ByName("dataanomes")
	dateStartRune := []rune(dateyearmonth)
	dateStart := string(dateStartRune[0:7])
	id := helpers.StringToUint(c.Params.ByName("id"))

	DB.Where("id", id).Find(&contas)
	if errContas := c.BindJSON(&contas); errContas != nil {
		fmt.Println(errContas)
		c.JSON(400, gin.H{
			"erro": errContas,
		})
	}
	result := DB.Where("SUBSTRING(data_pagamento,1,7) = (?)", dateStart).Where("contas_a_pagar_id", id).First(&valores).Error
	fmt.Println(errors.Is(result, gorm.ErrRecordNotFound))

	if result != nil {

		fmt.Println("CONTEM ERRO")
		contas.ValoresContasAPagar.DataPagamento = dateyearmonth
		valores.Valor = contas.ValoresContasAPagar.Valor
		valores.DataPagamento = dateyearmonth
		valores.ContasAPagarId = id
		DB.Create(&valores)
	} else {
		fmt.Println("NAO CONTEM ERRO")

		DB.Model(&valores).Where("contas_a_pagar_id", id).Updates(contas.ValoresContasAPagar)
		DB.Save(&valores)
	}
	DB.Omit("ValoresContasAPagar").Save(&contas)
	c.JSON(http.StatusOK, gin.H{"data": contas})
}
