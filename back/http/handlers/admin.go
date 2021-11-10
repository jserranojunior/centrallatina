package handlers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/models"
	"golang.org/x/crypto/bcrypt"
)

func GetAdmin(c *gin.Context) {
	var admin models.Admin
	tokenID := c.GetUint("id")
	fmt.Println(tokenID)
	res := DB.Where("ID", tokenID).Find(&admin)

	if res.Error != nil {
		c.AbortWithStatusJSON(http.StatusUnprocessableEntity, gin.H{
			"message": "Não há usuario cadastrado com esse token",
			"err":     res.Error,
			"id":      admin.ID,
		})
		return
	}
	admin.Password = ""
	c.JSON(200, gin.H{
		"data": &admin,
	})
}

// AdminCreate a user controllers
func AdminCreate(c *gin.Context) {
	var newAdmin models.Admin
	if err := c.BindJSON(&newAdmin); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"erro": err,
		})
	}

	// check if there is a record with the given email
	res := DB.Where("email = ?", newAdmin.Email).First(&models.Admin{})
	if res.Error == nil {
		c.JSON(400, gin.H{
			"erro": "Já existe usuario com esse e-mail cadastrado",
		})

		return
	}

	//hash the passowrd
	hahsedPWD, err := hashPasswordAdmin(newAdmin.Password)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"message": err,
		})
		return
	}

	//use the hashed password
	newAdmin.Password = hahsedPWD

	DB.Create(&newAdmin)
	c.JSON(200, gin.H{
		"data": &newAdmin,
	})
	// user.BirthDate, _ = time.Parse("2006-01-02", user.BirthDate)
}

// hashPassword hashs passwords
func hashPasswordAdmin(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.MinCost)
	if err != nil {
		return "", err
	}

	return string(hashedPassword), nil
}
