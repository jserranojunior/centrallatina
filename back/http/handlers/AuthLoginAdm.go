package handlers

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/http/middlewares"
	"github.com/jserranojunior/intellect/backgo/models"
	"golang.org/x/crypto/bcrypt"
)

// AuthLoginAdm a user controllers
func AuthLoginAdm(c *gin.Context) {
	var admin models.Admin
	c.Bind(&admin)
	email := admin.Email
	password := admin.Password

	if email == "" || password == "" {
		c.JSON(401, gin.H{
			"erro": "Erro ao tentar fazer login email ou senha em branco",
		})
	} else {
		var admin models.Admin
		result := DB.Select("id", "password").Where("email = ?", email).Find(&admin)
		if result.RowsAffected == 0 {
			c.JSON(401, gin.H{
				"erro": "Erro ao tentar fazer login, email ou senha incorretos",
			})
		} else {
			if compareBcryptAdmin(admin.Password, password) {
				admin.Password = ""
				fmt.Println("abaixo está correto")

				token := middlewares.GenerateJwt(admin.ID)
				fmt.Println(token)
				// c.JSON(http.StatusOK, gin.H{"token": &token})
				c.JSON(200, gin.H{
					"token": &token,
				})
			} else {
				c.JSON(401, gin.H{
					"erro": "Erro ao tentar fazer login, email ou senha incorretos",
				})
			}
		}
	}
}

func compareBcryptAdmin(hashedPassword string, password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
	if err == nil {
		return true
	} else {
		return false
	}
}
