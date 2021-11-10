package handlers

import (
	"crypto/tls"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
)

func checkErr(err error) {
	if err != nil {
		fmt.Println("Erro ao enviar o e-mail!")
		log.Panic("ERROR: " + err.Error())
	}
}

// TestEmail return test
func TestEmail(c *gin.Context) {
	email := sendMail("jorgeserranojunior@hotmail.com", "Email de teste", "Funcionando")
	fmt.Println("Email successfully sent!")
	if email {
		c.JSON(http.StatusOK, gin.H{
			"message": "Email enviado com sucesso!",
			"data":    email,
		})
	}
}

func sendMail(ton string, subject string, body string) bool {
	//configuração
	servername := "smtp.gmail.com:465"                  //servidor SMTP e PORTA
	host := "smtp.gmail.com"                            //host
	from := "contatoalbank@gmail.com"                   //user
	pass := os.Getenv("EMAIL_PASS")                     //senha
	auth := smtp.PlainAuth("Valchan", from, pass, host) //autenticação
	tlsConfig := &tls.Config{
		InsecureSkipVerify: true,
		ServerName:         servername,
	}
	to := []string{ton}
	toHeader := strings.Join(to, ",")
	msg := "From: " + from + "\n" + "To: " + toHeader + "\n" + "Subject:" + subject + "\n\n" + body

	//conecta com o servidor SMTP
	conn, err := tls.Dial("tcp", servername, tlsConfig)
	checkErr(err)

	//retorna client SMTP
	c, err := smtp.NewClient(conn, host)
	checkErr(err)

	//autentica
	err = c.Auth(auth)
	checkErr(err)

	//adiciona remetente
	err = c.Mail(from)
	checkErr(err)

	//adiciona destinatários
	for _, addr := range to {
		err = c.Rcpt(addr)
		checkErr(err)
	}

	//prepara corpo do email
	w, err := c.Data()
	checkErr(err)

	//adiciona corpo do e-mail
	_, err = w.Write([]byte(msg))
	checkErr(err)

	//fecha corpo do e-mail
	err = w.Close()
	checkErr(err)

	//encerra conexão

	c.Quit()
	return true
}
