## Project setup

###Django 

#### configure
* Сreate file backend/config/local_settings.py

```
DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': '',
        'USER' : 'postgres',
        'PASSWORD' : '',
        'HOST' : 'localhost',
        'PORT' : '5432',
    }
}
```
* Сonfigure your database settings: NAME and PASSWORD

#### Run BackEnd serve
```
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```


### VueJS

#### Run FrontEnd serve
```
cd frontendvue
npm i
npm run serve
```
