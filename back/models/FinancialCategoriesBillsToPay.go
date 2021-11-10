package models

import (
	"gorm.io/gorm"
)

//CategoriasContasAPagars struct export
type CategoriasContasAPagars struct {
	gorm.Model
	Nome         string          `gorm:"size:255; not null" json:"nome"`
	Cor          string          `gorm:"size:255; not null; unique;" json:"cor"`
	Tipo         string          `gorm:"size:255; not null;" json:"tipo"`
	ContasAPagar []ContasAPagars `gorm:"foreignKey:categorias_contas_a_pagar_id"`
	Soma         float64
}
