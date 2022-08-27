web: gunicorn -b 0.0.0.0:8000 backend.wsgi --log-file -

worker: python manage.py rqworker default