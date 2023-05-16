import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Fetch the service account key JSON file contents
cred = credentials.Certificate('qr-codekundeopdater-firebase-adminsdk-v7bal-f2917c481e.json')
# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://qr-codekundeopdater-default-rtdb.europe-west1.firebasedatabase.app"
})

ref1 = db.reference("Projects/1")
ref2 = db.reference("Projects/2")
ref3 = db.reference("Projects/3")
ref4 = db.reference("Projects/4")

data = {
    "CPOrder": "Start, Sample Received, Sample Prepared, Test Conducted, Report Delivered, End",
    "checkpoints": {
        "Start": {
            "Completed": False,
            "ImagePath": "None",
            "DateCompleted": False,
        },
        "Sample Received": {
            "Completed": False,
            "ImagePath": "None",
            "DateCompleted": False,
        },
        "Sample Prepared": {
            "Completed": False,
            "ImagePath": "None",
            "DateCompleted": False,
        },
        "Test Conducted": {
            "Completed": False,
            "ImagePath": "None",
            "DateCompleted": False,
        },
        "Report Delivered": {
            "Completed": False,
            "ImagePath": "None",
            "DateCompleted": False,
        },
        "End": {
            "Completed": False,
            "ImagePath": "None",
            "DateCompleted": False,
        }
    },
    "clientInfo": {
        "Email": "esni@forcetechnology.com",
        "Address": "Park Alle 345 2605 Brondby"
    }
}

ref1.set(data)
ref2.set(data)
ref3.set(data)
ref4.set(data)