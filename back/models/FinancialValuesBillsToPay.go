package models

import (
	"gorm.io/gorm"
)

//ContasAPagars struct export
type ValoresContasAPagars struct {
	gorm.Model
	ContasAPagarId uint    `gorm:"" json:"contas_a_pagar_id"`
	DataPagamento  string  `gorm:"size:255" json:"data_pagamento"`
	Valor          float64 `gorm:"" json:"valor"`
}
