package handlers

import (
	"github.com/jserranojunior/intellect/backgo/models"

	"github.com/gin-gonic/gin"
)

//GetCategoriesAndBillsMonth return Categories, Bills, Values, Paid
func GetCategoriesAndBillsMonth(c *gin.Context) {

	tokenID := c.GetUint("id")

	somaFormaPagamento := map[string]float64{}

	somaValoresCategories := 0.0
	totalCategories := 0.0
	dateandname := c.Param("dataanomes")
	dateStartRune := []rune(dateandname)
	dateStart := string(dateStartRune[0:7])

	var viewCategories = models.ViewCategoriesAndBillsMonth{}
	var categories = []models.CategoriasContasAPagars{}
	queryValores := "SUBSTRING(data_pagamento,1,7) = (?)  AND data_pagamento > '' OR SUBSTRING(data_pagamento,1,7) < ? AND data_pagamento > '' "
	queryPagas := "SUBSTRING(data_pagamento,1,7) = (?)  AND data_pagamento > '' "
	queryContas := "SUBSTRING(inicio_data_pagamento,1,7) <= (?) AND SUBSTRING(fim_data_pagamento,1,7) >= (?)  AND user_id = ?		OR SUBSTRING(inicio_data_pagamento,1,7) <= (?) AND fim_data_pagamento IS NULL  AND user_id = ?	OR SUBSTRING(inicio_data_pagamento,1,7) <= (?) AND fim_data_pagamento = ''  AND user_id = ?"
	DB.Preload("ContasAPagar", queryContas, dateStart, dateStart, tokenID, dateStart, tokenID, dateStart, tokenID).Preload("ContasAPagar.ValoresContasAPagar", queryValores, dateStart, dateStart).Preload("ContasAPagar.ContasPagas", queryPagas, dateStart, dateStart).Find(&categories)

	for indexCategories := 0; indexCategories < len(categories); indexCategories++ {
		var somaValoresAPagar = 0.0
		for indexContas := 0; indexContas < len(categories[indexCategories].ContasAPagar); indexContas++ {
			somaValoresAPagar += float64(categories[indexCategories].ContasAPagar[indexContas].ValoresContasAPagar.Valor)

			if somaFormaPagamento[categories[indexCategories].ContasAPagar[indexContas].FormaPagamento] != 0 {
				somaFormaPagamento[categories[indexCategories].ContasAPagar[indexContas].FormaPagamento] += float64(categories[indexCategories].ContasAPagar[indexContas].ValoresContasAPagar.Valor)
			} else {
				somaFormaPagamento[categories[indexCategories].ContasAPagar[indexContas].FormaPagamento] = float64(categories[indexCategories].ContasAPagar[indexContas].ValoresContasAPagar.Valor)
			}
		}

		categories[indexCategories].Soma = somaValoresAPagar
		totalCategories += somaValoresAPagar
		somaValoresCategories += somaValoresAPagar
	}
	viewCategories.CategoriasContasAPagars = categories
	viewCategories.TotalCategories = totalCategories
	viewCategories.SomaFormaPagamento = somaFormaPagamento

	c.JSON(200, gin.H{
		"data": &viewCategories,
		// "data": ,
	})
}
