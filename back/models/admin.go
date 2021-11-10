// Copyright 2021 Harran Ali <harran.m@gmail.com>. All rights reserved.
// Use of this source code is governed by MIT-style
// license that can be found in the LICENSE file.

package models

import (
	"gorm.io/gorm"
)

// Admin represents user model
type Admin struct {
	gorm.Model
	Name     string `gorm:"size:255; not null" json:"name"`
	Email    string `gorm:"size:255; not null; unique;" json:"email"`
	Password string `gorm:"size:255; not null;" json:"password"`
}
