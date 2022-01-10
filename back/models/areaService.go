// Copyright 2021 Harran Ali <harran.m@gmail.com>. All rights reserved.
// Use of this source code is governed by MIT-style
// license that can be found in the LICENSE file.

package models

import (
	"gorm.io/gorm"
)

// User represents user model
type AreaService struct {
	gorm.Model
	ServiceID uint   `gorm:"size:255; not null" json:"service_id"`
	Atendente string `gorm:"size:255;" json:"atendente"`
	Area      string `gorm:"size:50; not null;" json:"area"`
	Historico string `gorm:"size:255;" json:"historico"`
	Servico   string `gorm:"size:255;" json:"servico"`
	Status    int16  `gorm:"size:50;" json:"status"`
}
