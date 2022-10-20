runServer: 
	cd server/ && go run main.go

runClient:
	cd client/ && npm run start

runFull:
	make runServer & make runClient