## Project with  Django API and React App 🎉 🎊 🌞

### Brief description

A simple integration between a Django API and a React App.

This project consists of two internal projects:

- backend: the Django project containing the REST API along with all the backend code;
- frontend: the React project with all the Node dependencies, settings and things related to the frontend.

### Run it locally the Django project.

Create a Python virtual environment to isolate the projects:

```bash
python3 -m venv venv
```
If you have bugs, is exactly not success with first attempt, then input in terminal next command:

```bash
pip install --upgrade virtualenv
```

and once again

```bash
python3 -m venv venv
```
Then, activate it:

```bash
source venv/bin/activate
```

`cd` into the _venv_ and clone project in your local machine from GitHub:

```bash
git clone https://github.com/VitaliiKalyta96/tt_test
```
### Running the Django project(backend)

Open terminal and run next command:

```bash
sudo docker-compose up --build
sudo docker-compose up
```

Access the address http://localhost:8000/api/users/ or http://localhost:8000/api/group_users/ and check if the API is up.

### Running the React project(frontend)

First, `cd` the `frontend/` directory and run next command:

```bash
sudo docker-compose up --build
sudo docker-compose up
```
After load projects you have see next picture in your screen the browser.



Good luck! 🏞🌞
