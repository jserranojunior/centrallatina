// Copyright 2021 Harran Ali <harran.m@gmail.com>. All rights reserved.
// Use of this source code is governed by MIT-style
// license that can be found in the LICENSE file.

package main

import (
	"log"
	"os"

	"github.com/gocondor/core"
	"github.com/joho/godotenv"
	"github.com/jserranojunior/intellect/backgo/config"
	"github.com/jserranojunior/intellect/backgo/http"
	"github.com/jserranojunior/intellect/backgo/http/authentication"
	"github.com/jserranojunior/intellect/backgo/http/handlers"
	"github.com/jserranojunior/intellect/backgo/http/middlewares"
	"github.com/jserranojunior/intellect/backgo/models"
)

func main() {
	// New initializes new App variable
	app := core.New()

	// set env
	env, err := godotenv.Read(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	app.SetEnv(env)

	// set the app mode
	app.SetAppMode(os.Getenv("APP_MODE"))

	// What features to turn on or off
	app.SetEnabledFeatures(config.Features)

	// initialize core packages
	app.Bootstrap()

	// Register global middlewares
	middlewares.RegisterMiddlewares()

	//InitiateHandlersDependencies initiate handlers dependancies
	handlers.InitiateHandlersDependencies()

	// InitiateMiddlewaresDependencies initiate handlers dependancies
	middlewares.InitiateMiddlewaresDependencies()

	// Register routes
	http.RegisterRoutes()

	// Register Auth
	if config.Features.Authentication == true {
		// make sure the database flag is on
		if config.Features.Database == false {
			log.Fatal("authentication requires database feature to be on")
		}
		authentication.RegisterAuthRoutes()
	}

	//auto migrate tables
	if config.Features.Database == true {
		models.MigrateDB()
	}

	// Run App
	app.Run(os.Getenv("APP_HTTP_PORT"))
}
