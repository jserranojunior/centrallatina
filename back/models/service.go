// Copyright 2021 Harran Ali <harran.m@gmail.com>. All rights reserved.
// Use of this source code is governed by MIT-style
// license that can be found in the LICENSE file.

package models

import (
	"gorm.io/gorm"
)

type Currency int64

// User represents user model
type Service struct {
	gorm.Model
	ClosedAreaServices []AreaService `gorm:"foreignKey:service_id;" json:"closed_area_services"`
	OpenAreaServices   []AreaService `gorm:"foreignKey:service_id;" json:"open_area_services"`

	// ClosedAreaServices []AreaService `gorm:"foreignKey:service_id;" json:"closed_area_services"`

	Cliente       string   `gorm:"size:255;" json:"cliente"`
	Recepcionista string   `gorm:"size:255;" json:"recepcionista"`
	Data          string   `gorm:"size:20; not null;" json:"data"`
	Hora          string   `gorm:"size:20; not null;" json:"hora"`
	Status        int      `gorm:"size:50; not null;" json:"status"`
	Assunto       string   `gorm:"size:255;" json:"assunto"`
	Valor         Currency `gorm:"size:255; not null;" json:"valor"`
	Telefone      string   `gorm:"size:255;" json:"telefone"`
}
