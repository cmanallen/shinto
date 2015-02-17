Shinto
==

####About Shinto

Shinto is a kanban style task management framework built with ReactJS, Django, and Django REST Framework.

####React Frontend Usage

1. Clone the repo.
2. Change directory into `front`
3. Run npm start (Python 2 only pass --python 2 if python 3 is your default).
4. Open `index.html` in a web browser with cross origin requests enabled.
  a. On Linux: `chromium --disable-web-security`
  b. On OSX: Install `Allow-Control-Allow-Origin` (Chrome, Chromium)

####Django API Usage

1. Clone the repo
2. Change directory into the repository root.
3. Create a virtual environment.
4. Activate your environment and install the requirements.
5. Change directory into `shinto`.
6. Run `./manage.py runserver --settings=shinto.settings.cmanallen`

####Limitations

2. Drag and drop support is not currently implemented.
3. Board, Card, and Activity name changing is not currently implemented.
4. Adding additional boards, cards, and activities are not currently implemented.
5. Displaying comments is not currently implemented.

####License

MIT
