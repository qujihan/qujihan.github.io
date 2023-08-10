.PHONY:push

push:
	npx tailwindcss -i ./assets/css/main.css -o ./assets/css/style.css  --jit --minify && git add . && git commit -m "update posts" && git push origin dev

