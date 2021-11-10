// Copyright 2021 Harran Ali <harran.m@gmail.com>. All rights reserved.
// Use of this source code is governed by MIT-style
// license that can be found in the LICENSE file.

package http

import (
	"github.com/gocondor/core/routing"
	"github.com/jserranojunior/intellect/backgo/http/handlers"
	"github.com/jserranojunior/intellect/backgo/http/middlewares"
)

// RegisterRoutes to register your routes
func RegisterRoutes() {
	router := routing.Resolve()

	//Define your routes here

	router.Get("/", middlewares.CORSMiddleware, handlers.HomeShow)

	router.Post("/login", middlewares.CORSMiddleware, handlers.AuthLogin)
	router.Post("/admin/login", middlewares.CORSMiddleware, handlers.AuthLoginAdm)
	router.Post("/admin/register", middlewares.CORSMiddleware, handlers.AdminCreate)
	router.Get("/admin", middlewares.CORSMiddleware, middlewares.VerifyJwt, handlers.GetAdmin)

	router.Post("/user", middlewares.CORSMiddleware, handlers.UserCreate)
	router.Get("/user", middlewares.CORSMiddleware, middlewares.VerifyJwt, handlers.GetUser)
	router.Get("/admin/users", middlewares.CORSMiddleware, middlewares.VerifyJwt, handlers.GetAllUsers)
	router.Get("/admin/users/:id", middlewares.CORSMiddleware, middlewares.VerifyJwt, handlers.GetUserCliente)
	router.Put("/admin/users/:id", middlewares.CORSMiddleware, middlewares.VerifyJwt, handlers.UserUpdate)
	// reset email
	router.Get("/sendemailresetpwd/:email", middlewares.CORSMiddleware, handlers.SendMailResetPassword)
	router.Get("/verifytokenemailreset/:token", middlewares.CORSMiddleware, handlers.VerifyTokenEmailReset)
	router.Get("/testemail", middlewares.CORSMiddleware, handlers.TestEmail)
	router.Put("/resetpassword/:token", middlewares.CORSMiddleware, handlers.ResetPassword)

}
