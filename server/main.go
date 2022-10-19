package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"

	"github.com/RamazanZholdas/serverForFullstackApp/database"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

var (
	ctx = context.Background()
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

//database.InsertOneToDb(client, os.Getenv("DATABASE_NAME"),
//os.Getenv("COLLECTION_NAME"), map[string]string{"name": "Ramazan"})
func main() {
	client := database.ConnectToMongo(os.Getenv("MONGO_URI"))
	defer client.Disconnect(ctx)

	database.CreateDatabase(client, os.Getenv("DATABASE_NAME"), os.Getenv("COLLECTION_NAME"))
	defer database.DropDatabase(client, os.Getenv("DATABASE_NAME"))

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	go func() {
		<-c
		fmt.Println("Gracefully shutting down...")
		_ = app.Shutdown()
	}()

	// ...

	if err := app.Listen(":8000"); err != nil {
		log.Panic(err)
	}

	fmt.Println("Running cleanup tasks...")
}
