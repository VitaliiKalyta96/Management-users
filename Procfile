web: gunicorn --bind 0.0.0.0:8000 backend.wsgi --log-file -

worker: python manage.py runserver 0.0.0.0:8000