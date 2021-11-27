// Copyright 2021 Harran Ali <harran.m@gmail.com>. All rights reserved.
// Use of this source code is governed by MIT-style
// license that can be found in the LICENSE file.

package models

import (
	"gorm.io/gorm"
)

// User represents user model
type Service struct {
	gorm.Model
	UserID         int    `gorm:"size:255; not null" json:"user_id"`
	User           User   `gorm:"foreignKey:UserID;" json:"user"`
	Data           string `gorm:"size:20; not null;" json:"data"`
	Hora           string `gorm:"size:20; not null;" json:"hora"`
	Type           string `gorm:"size:255; not null;" json:"type"`
	Status         int    `gorm:"size:255; not null;" json:"status"`
	Observacao     string `gorm:"size:255;" json:"observacao"`
	Encaminhamento string `gorm:"size:255;" json:"encaminhamento"`
}
