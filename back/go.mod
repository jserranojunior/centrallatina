module github.com/jserranojunior/intellect/backgo

replace (
	github.com/jserranojunior/intellect/backgo/config => ./config
	github.com/jserranojunior/intellect/backgo/http => ./http
	github.com/jserranojunior/intellect/backgo/http/handlers => ./http/handlers
	github.com/jserranojunior/intellect/backgo/http/middlewares => ./http/middlewares
	github.com/jserranojunior/intellect/backgo/models => ./models
)

go 1.16

require (
	github.com/gbrlsnchs/jwt/v3 v3.0.1
	github.com/gin-gonic/gin v1.7.3
	github.com/go-playground/validator/v10 v10.8.0 // indirect
	github.com/gocondor/core v1.4.3
	github.com/joho/godotenv v1.3.0
	github.com/json-iterator/go v1.1.11 // indirect
	github.com/kr/pretty v0.1.0 // indirect
	github.com/mattn/go-isatty v0.0.13 // indirect
	github.com/ugorji/go v1.2.6 // indirect
	golang.org/x/crypto v0.0.0-20210711020723-a769d52b0f97
	golang.org/x/sys v0.0.0-20210806184541-e5e7981a1069 // indirect
	google.golang.org/protobuf v1.27.1 // indirect
	gopkg.in/check.v1 v1.0.0-20180628173108-788fd7840127 // indirect
	gorm.io/gorm v1.21.6
)
