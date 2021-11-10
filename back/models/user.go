// Copyright 2021 Harran Ali <harran.m@gmail.com>. All rights reserved.
// Use of this source code is governed by MIT-style
// license that can be found in the LICENSE file.

package models

import (
	"gorm.io/gorm"
)

// User represents user model
type User struct {
	gorm.Model
	Name                    string `gorm:"size:255; not null" json:"name"`
	Email                   string `gorm:"size:255; not null; unique;" json:"email"`
	Cpf                     string `gorm:"size:20; not null;" json:"cpf"`
	Password                string `gorm:"size:255; not null;" json:"password"`
	Cellphone               string `gorm:"size:15;" json:"cellphone"`
	BirthDate               string `gorm:"size:15" json:"birth_date"`
	Logradouro              string `gorm:"size:255" json:"logradouro"`
	Rg                      string `gorm:"size:25" json:"rg"`
	Cep                     string `gorm:"size:25" json:"cep"`
	Numero                  string `gorm:"size:25" json:"numero"`
	Bairro                  string `gorm:"size:255" json:"bairro"`
	Estado                  string `gorm:"size:255" json:"estado"`
	Cnpj                    string `gorm:"size:20" json:"cnpj"`
	Profissao               string `gorm:"size:255" json:"profissao"`
	Nreciboirpf             string `gorm:"size:255" json:"nreciboirpf"`
	Ie                      string `gorm:"size:255" json:"ie"`
	Im                      string `gorm:"size:255" json:"im"`
	Senhacertificadodigital string `gorm:"size:255" json:"senhacertificadodigital"`
	Contaoutrobanco         string `gorm:"size:255" json:"contaoutrobanco"`
}
