# DAYLIGHT  BACK-END


## REQUIREMENTS
* node >= 20
* [gcloud](https://cloud.google.com/sdk/docs/install?hl=it#deb)

## SETUP
```bash
npm install
gcloud config set project [NOME-PROGETTO]
gcloud services enable cloudfunctions.googleapis.com cloudbuild.googleapis.com run.googleapis.com 
```

## DEV 
```bash
npm run dev
```

## BUILD
```bash
npm run build
```


## DEPLOY
```bash
npm run deploy
```