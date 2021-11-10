package handlers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jserranojunior/intellect/backgo/models"
	"golang.org/x/crypto/bcrypt"
)

func GetUser(c *gin.Context) {
	var user models.User
	tokenID := c.GetUint("id")
	fmt.Println(tokenID)
	res := DB.Where("ID", tokenID).Find(&user)

	if res.Error != nil {
		c.AbortWithStatusJSON(http.StatusUnprocessableEntity, gin.H{
			"message": "Não há usuario cadastrado com esse token",
			"err":     res.Error,
			"id":      user.ID,
		})
		return
	}
	user.Password = ""
	c.JSON(200, gin.H{
		"data": &user,
	})
}

func GetUserCliente(c *gin.Context) {
	var user models.User
	DB.First(&user, c.Param("id"))
	user.Password = ""
	c.JSON(200, gin.H{
		"data": user,
	})
}

//Select return user
func UserUpdate(c *gin.Context) {
	var user models.User
	DB.Where("id", c.Param("id")).Find(&user)
	if err := c.Bind(&user); err != nil {
		c.JSON(400, gin.H{
			"err": err,
		})
	}
	DB.Save(&user)
	c.JSON(200, gin.H{
		"data": user,
	})
}

//  Getting all users registers
func GetAllUsers(c *gin.Context) {
	var user []models.User
	res := DB.Find(&user)

	if res.Error != nil {
		c.AbortWithStatusJSON(http.StatusUnprocessableEntity, gin.H{
			"message": "Não há usuarios cadastrado",
			"err":     res.Error,
		})
		return
	}

	for indexUser := 0; indexUser < len(user); indexUser++ {
		user[indexUser].Password = ""
	}

	c.JSON(200, gin.H{
		"data": &user,
	})
}

// UserCreate a user controllers
func UserCreate(c *gin.Context) {
	var newUser models.User
	if err := c.BindJSON(&newUser); err != nil {
		fmt.Println(err)
		c.JSON(400, gin.H{
			"erro": err,
		})
	}

	// check if there is a record with the given email
	res := DB.Where("email = ?", newUser.Email).First(&models.User{})
	if res.Error == nil {
		c.JSON(400, gin.H{
			"erro": "Já existe usuario com esse e-mail cadastrado",
		})

		return
	}

	//hash the passowrd
	hahsedPWD, err := hashPassword(newUser.Password)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{
			"message": err,
		})
		return
	}

	//use the hashed password
	newUser.Password = hahsedPWD

	DB.Create(&newUser)
	c.JSON(200, gin.H{
		"data": &newUser,
	})
	// user.BirthDate, _ = time.Parse("2006-01-02", user.BirthDate)
}

// hashPassword hashs passwords
func hashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.MinCost)
	if err != nil {
		return "", err
	}

	return string(hashedPassword), nil
}
