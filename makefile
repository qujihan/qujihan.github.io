.PHONY:wc lc gen

gen:
	hugo server

wc:
	cmd /c del /f /s /q resources public .hugo_build.lock

lc:
	rm -rf resources/ public/ .hugo_build.lock

push:
	git add . && git commit -m "update" && git push origin dev