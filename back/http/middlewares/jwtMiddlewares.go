package middlewares

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/gbrlsnchs/jwt/v3"
	"github.com/gin-gonic/gin"
	// "reflect"
)

// VerifyJwt verify jwt is valid
var VerifyJwt gin.HandlerFunc = func(c *gin.Context) {

	if c.Request.Header["Authorization"] != nil {
		hash := jwt.NewHS256([]byte(os.Getenv("TOKEN_PASS")))
		payload := jwt.Payload{}

		HeaderToken := strings.Split(c.Request.Header["Authorization"][0], " ")[1]
		token := []byte(HeaderToken)
		hd, err := jwt.Verify(token, hash, &payload)

		if err != nil {
			c.JSON(401, gin.H{
				"Data": "Token Invalido",
			})
			c.Abort()
		} else {

			tokenInt, err := strconv.Atoi(hd.KeyID)
			if err != nil {
				fmt.Println(err)
			}
			tokenUint := uint(tokenInt)
			c.Set("id", tokenUint)
			c.Next()
		}
	} else {
		c.JSON(401, gin.H{
			"Data": "Token inexistente",
		})
		c.Abort()
	}
}

//GenerateJwt return JWT
func GenerateJwt(ID uint) string {

	hs := jwt.NewHS256([]byte(os.Getenv("TOKEN_PASS")))
	now := time.Now()
	pl := jwt.Payload{
		Issuer:   "gbrlsnchs",
		Subject:  "login",
		IssuedAt: jwt.NumericDate(now),
	}
	stringID := strconv.Itoa(int(ID))
	token, err := jwt.Sign(pl, hs, jwt.ContentType("JWT"), jwt.KeyID(stringID))
	if err != nil {
		log.Fatal(err)
	}
	return string(token)

	//uint8
}

type CustomPayload struct {
	jwt.Payload
}

//GenerateJwt return JWT
func GenerateJwtResetPassword(ID uint) string {
	hs := jwt.NewHS256([]byte(os.Getenv("TOKEN_PASS")))
	now := time.Now()
	pl := CustomPayload{
		Payload: jwt.Payload{
			Issuer:         "gbrlsnchs",
			Subject:        "someone",
			Audience:       jwt.Audience{"https://golang.org", "https://jwt.io"},
			ExpirationTime: jwt.NumericDate(now.Add(60 * time.Minute)),
			NotBefore:      jwt.NumericDate(now.Add(30 * time.Minute)),
			IssuedAt:       jwt.NumericDate(now),
			JWTID:          "foobar",
		}}
	stringID := strconv.Itoa(int(ID))
	token, err := jwt.Sign(pl, hs, jwt.ContentType("JWT"), jwt.KeyID(stringID))
	if err != nil {
		log.Fatal(err)
	}
	return string(token)

	//uint8
}

func ValidateResetToken(HeaderToken string) bool {

	hash := jwt.NewHS256([]byte(os.Getenv("TOKEN_PASS")))

	repTokenDot := strings.ReplaceAll(HeaderToken, "dotresetpassword", ".")
	repTokenBar := strings.ReplaceAll(repTokenDot, "barresetpassword", "/")
	token := []byte(repTokenBar)

	var (
		now = time.Now()
		aud = jwt.Audience{"https://golang.org"}

		// Validate claims "iat", "exp" and "aud".
		iatValidator = jwt.IssuedAtValidator(now)
		expValidator = jwt.ExpirationTimeValidator(now)
		audValidator = jwt.AudienceValidator(aud)

		// Use jwt.ValidatePayload to build a jwt.VerifyOption.
		// Validators are run in the order informed.
		pl              CustomPayload
		validatePayload = jwt.ValidatePayload(&pl.Payload, iatValidator, expValidator, audValidator)
	)

	hd, err := jwt.Verify(token, hash, &pl, validatePayload)

	if err != nil {
		fmt.Println(err)
		return false
	}

	fmt.Println(hd)
	return true

}

func ReturnIDResetToken(HeaderToken string) uint {

	hash := jwt.NewHS256([]byte(os.Getenv("TOKEN_PASS")))

	repTokenDot := strings.ReplaceAll(HeaderToken, "dotresetpassword", ".")
	repTokenBar := strings.ReplaceAll(repTokenDot, "barresetpassword", "/")
	token := []byte(repTokenBar)

	var (
		now = time.Now()
		aud = jwt.Audience{"https://golang.org"}

		// Validate claims "iat", "exp" and "aud".
		iatValidator = jwt.IssuedAtValidator(now)
		expValidator = jwt.ExpirationTimeValidator(now)
		audValidator = jwt.AudienceValidator(aud)

		// Use jwt.ValidatePayload to build a jwt.VerifyOption.
		// Validators are run in the order informed.
		pl              CustomPayload
		validatePayload = jwt.ValidatePayload(&pl.Payload, iatValidator, expValidator, audValidator)
	)

	hd, err := jwt.Verify(token, hash, &pl, validatePayload)

	if err != nil {
		fmt.Println(err)
	}
	tokenInt, err := strconv.Atoi(hd.KeyID)
	if err != nil {
		fmt.Println(err)
		fmt.Println("acima")
	}
	tokenUint := uint(tokenInt)

	fmt.Println(hd)
	return tokenUint

}
