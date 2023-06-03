from flask_cors import CORS
from flask import Flask, jsonify, request
import json
import numpy as np
import pickle
import pandas as pd
from transformers import AutoTokenizer
from transformers import AutoModelForSequenceClassification
from scipy.special import softmax

app = Flask(__name__)
CORS(app)

MODEL = f"cardiffnlp/twitter-roberta-base-sentiment"

tokenizer = AutoTokenizer.from_pretrained(MODEL)

model = AutoModelForSequenceClassification.from_pretrained(MODEL)

# 3:-rape  2:-murder   0:-burglary  1:-fraud
pklmodel = pickle.load(open("models/model_rank.pkl","rb"))
@app.route("/assignofficer",methods=["POST"])
def assignofficer():
    data = request.get_json()
    crime = data['crime']
    # location = data['location']
    money = data['money']
    if crime == "rape":
        crime_no = 3
    elif crime == "murder":
        crime_no = 2
    elif crime == "burglary":
        crime_no = 0
    elif crime == "fraud":
        crime_no = 1
    designation_no = pklmodel.predict([[crime_no,money]]).reshape(-1,1).astype(int)
    if designation_no == 0:
        designation = ["ASP"]
    elif designation_no == 1:
        designation = ["DSP"]
    elif designation_no == 2:
        designation = ["Inspector"]
    json_data = json.dumps(designation)
    return json_data
    





@app.route("/analyzetweets", methods=["POST"])
def analyzetweets():
    data = request.get_json()
    tweet = data['tweet']

    encoded_text = tokenizer(tweet, return_tensors='pt')
    output = model(**encoded_text)
    ans = output[0][0].detach().numpy()
    ans = softmax(ans)
    ans_list = ans.tolist()
    json_data = json.dumps(ans_list)
    return json_data









if __name__ == "__main__":
    app.run(debug = True)
