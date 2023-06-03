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

@app.route("/analyzetweets", methods=["GET"])
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
