package handlers

import (
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/http/middlewares"
	"github.com/jserranojunior/intellect/backgo/models"
)

func GenerateTokenWithEmail(email string, c *gin.Context) string {
	var user models.User
	result := DB.Select("id").Where("email = ?", email).Find(&user)
	if result.RowsAffected == 0 {
		c.JSON(401, gin.H{
			"erro": "Email não cadastrado",
		})
	} else {
		token := middlewares.GenerateJwtResetPassword(user.ID)
		return token
	}
	return ""

}

func ResetPassword(c *gin.Context) {
	var user models.User
	token := c.Param("token")
	valide := middlewares.ValidateResetToken(token)

	if valide {
		id := middlewares.ReturnIDResetToken(token)
		DB.Where("id", id).Find(&user)
		if err := c.BindJSON(&user); err != nil {
			c.JSON(400, gin.H{
				"err": err,
			})
		} else {
			if user.Password > "" {
				//hash the passowrd
				hahsedPWD, err := hashPassword(user.Password)
				if err != nil {
					c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
						"message": err,
					})
				}
				//use the hashed password
				user.Password = hahsedPWD

				DB.Save(&user)
				c.JSON(200, gin.H{
					"message": "Atualizado com sucesso",
					"data":    user,
				})
			}
		}
	} else {
		c.JSON(401, gin.H{
			"erro": "Token Invalido",
		})
	}

}

// Colocar para puxar via input
func VerifyTokenEmailReset(c *gin.Context) {
	token := c.Param("token")
	if token > "" {
		valide := middlewares.ValidateResetToken(token)
		if valide {
			c.JSON(200, gin.H{
				"data": true,
			})
		} else {
			c.JSON(401, gin.H{
				"erro": "Token Invalido",
			})
		}
	} else {
		c.JSON(401, gin.H{
			"erro": "Token Invalido",
		})
	}

}

func SendMailResetPassword(c *gin.Context) {
	email := c.Param("email")
	if email == "" {
		c.JSON(401, gin.H{
			"erro": "Email vazio",
		})
	} else {
		token := GenerateTokenWithEmail(email, c)
		if token > "" {

			fmt.Println("Enviando email")
			repTokenDot := strings.ReplaceAll(token, ".", "dotresetpassword")
			repTokenBar := strings.ReplaceAll(repTokenDot, "/", "barresetpassword")

			body := "\nOlá,\nFoi solicitada uma redefinição da sua senha na Albank. \nAcesse o link abaixo para redefinir sua senha.\n\n" + os.Getenv("FRONT_URL") + "/resetarsenha/" + repTokenBar + " \n\n\n Caso você não tenha solicitado essa redefinição, ignore esta mensagem.\n\n Por favor não responda este e-mail, qualquer problema ou dúvida entre em contato pelo email contato@oalbank.com.br"

			send := sendMail(email, "Email de reset de senha Albank", body)
			fmt.Println("Email successfully sent!")
			if send {
				c.JSON(http.StatusOK, gin.H{
					"message": "Email enviado com sucesso, confira a caixa de spam!",
				})
			}
		}
	}
}
